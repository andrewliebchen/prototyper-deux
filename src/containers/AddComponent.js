import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComponent } from '../actions';
import { Button, Select, Input } from 'rebass';
import _ from 'lodash';

import { rebassComponents } from '../data';


class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      props: {},
      children: null,
    };
  }

  extractPropType(propTypes) {
    let propNames = Object.keys(propTypes);

    let extractPropType = (propTypes, propName) => {
        let fakeProps = {};
        fakeProps[propName] = 'dummy';
        let error = propTypes[propName](fakeProps, propName);
        if (error === null) {
            return 'string';
        } else {
            // TODO: Make this work!!
            // const EXPECTED_TYPE_PATTERN = /expected `(\w+)`/i;
            // return error.toString().match(EXPECTED_TYPE_PATTERN)[1];
            return 'number';
        }
    };

    let extractPropIsRequired = (propTypes, propName) => {
        let fakeProps = {};
        fakeProps[propName] = null;
        let error = propTypes[propName](fakeProps, propName);
        return !!error;
    };

    return propNames.map(function (propName) {
        return {
            name: propName,
            type: extractPropType(propTypes, propName),
            isRequired: extractPropIsRequired(propTypes, propName)
        }
    });
  }

  renderPropsFields() {
    const { input } = this.state;
    if (input) {
      const propTypes = _.find(rebassComponents, { children: input }).component.propTypes;
      const propTypesDetails = this.extractPropType(propTypes);
      return (
        <div>
          {propTypesDetails.map((propType, i) =>
            <Input
              key={i}
              label={propType.name}
              name={propType.name}
              required={propType.isRequired}
              type={propType.type === 'string' ? 'text' : 'number'}
              placeholder="Add a prop"
              onChange={(event) => {
                let newProps = {};
                newProps[propType.name] = event.target.value;
                this.setState({props: _.assign({}, this.state.props, newProps)});
              }}/>
          )}
        </div>
      )
    }
  }

  handleSelect(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { input, props, children } = this.state;
    this.props.dispatch(addComponent(input, props, children));
  }

  render() {
    return (
      <form className="NewComponent">
        <Select
          label="Select component"
          name="selectComponent"
          options={rebassComponents}
          onChange={this.handleSelect.bind(this)}/>
        {this.state.input &&
          <Input
            label="children"
            name="children"
            placeholder="Add children"
            onChange={(event) => {
              this.setState({children: event.target.value});
            }}/>
        }
        {this.renderPropsFields()}
        <Button
          disabled={!this.state.input}
          onClick={this.handleSubmit.bind(this)}>
          Add component
        </Button>
      </form>
    );
  }
};


export default connect()(AddComponent);

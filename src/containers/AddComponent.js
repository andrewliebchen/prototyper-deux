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
      name: null,
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
    const { name } = this.state;
    const propTypes = _.find(rebassComponents, { children: name }).component.propTypes;
    const propTypesDetails = this.extractPropType(propTypes);

    return (
      <div>
        <Input
          label="children"
          name="children"
          placeholder="Add children"
          onChange={(event) => {
            this.setState({children: event.target.value});
          }}/>
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
        <Input
          label="Left"
          name="left"
          placeholder="Specify left position"
          type="number"
          onChange={(event) => {
            this.setState({props: _.assign({}, this.state.props, { left: event.target.value })});
          }}/>
          <Input
            label="Top"
            name="top"
            placeholder="Specify top position"
            type="number"
            onChange={(event) => {
              ({props: _.assign({}, this.state.props, { top: event.target.value })});
            }}/>
      </div>
    );
  }

  handleSelect(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    const { name, props, children } = this.state;
    event.preventDefault();
    this.props.dispatch(
      addComponent(name, props, children)
    );
  }

  render() {
    return (
      <form className="NewComponent">
        <Select
          label="Select component"
          name="selectComponent"
          options={rebassComponents}
          onChange={this.handleSelect.bind(this)}/>
        {this.state.name && this.renderPropsFields()}
        <Button
          disabled={!this.state.name}
          onClick={this.handleSubmit.bind(this)}>
          Add component
        </Button>
      </form>
    );
  }
};


export default connect()(AddComponent);

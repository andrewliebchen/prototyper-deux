import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Select, Input, Section, SectionHeader } from 'rebass';
import _ from 'lodash';

import { addComponent } from '../actions';
import { rebassComponents } from '../data';


class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      props: {
        x: 0,
        y: 0,
      },
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
          label="X position"
          name="x"
          defaultValue={this.state.props.x}
          placeholder="Specify X position"
          type="number"
          onChange={(event) => {
            this.setState({props: _.assign({}, this.state.props, { x: event.target.value })});
          }}/>
          <Input
            label="Y position"
            name="y"
            defaultValue={this.state.props.y}
            placeholder="Specify Y position"
            type="number"
            onChange={(event) => {
              this.setState({props: _.assign({}, this.state.props, { y: event.target.value })});
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
      <Section>
        <SectionHeader heading="Components"/>
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
      </Section>
    );
  }
};


export default connect()(AddComponent);

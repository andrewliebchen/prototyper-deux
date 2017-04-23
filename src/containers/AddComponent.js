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
    };
  }

  renderForm() {
    const { input } = this.state;
    if (input) {
      const propTypes = _.find(rebassComponents, { children: input }).component.propTypes;
      return (
        <div>
          {_.map(propTypes, (value, key) =>
            <Input
              key={key}
              label={key}
              name="input_example"
              placeholder="Add a prop"
              onChange={(event) => {
                let newProps = {};
                newProps[key] = event.target.value;
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
    const { input, props } = this.state;
    this.props.dispatch(addComponent(input, props));
  }

  render() {
    return (
      <form className="NewComponent">
        <Select
          label="Select component"
          name="selectComponent"
          options={rebassComponents}
          onChange={this.handleSelect.bind(this)}/>
        {this.renderForm()}
        <Button onClick={this.handleSubmit.bind(this)}>
          Add component
        </Button>
      </form>
    );
  }
};


export default connect()(AddComponent);

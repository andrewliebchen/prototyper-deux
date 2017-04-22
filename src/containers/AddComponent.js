import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComponent } from '../actions';
import { Button, Select } from 'rebass';

import { rebassComponents } from '../data';

class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null
    };
  }

  handleSelect(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit() {
    const input = this.state.input;
    this.props.dispatch(addComponent(input));
  }

  render() {
    return (
      <div className="NewComponent">
        <Select
          label="Select component"
          name="selectComponent"
          options={rebassComponents}
          onChange={this.handleSelect.bind(this)}/>
        <Button onClick={this.handleSubmit.bind(this)}>
          Add component
        </Button>
      </div>
    );
  }
};


export default connect()(AddComponent);

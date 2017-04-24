import React, { Component } from 'react';
import { InlineForm, Section, SectionHeader, Switch } from 'rebass';

import { addPrototypeState, togglePrototypeState } from '../actions';

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
    };
  }

  render() {
    const { dispatch, prototypeState } = this.props;
    return (
      <Section className="State">
        <SectionHeader heading="State"/>
        {prototypeState.map((state) =>
          <div key={state.id}>
            {state.key}
            <Switch
              checked={state.value}
              onClick={(event) => {
                dispatch(togglePrototypeState(state.id))
              }}/>
          </div>
        )}
        <InlineForm
          label="Add state"
          name="addState"
          buttonLabel="Add"
          onChange={(event) => {
            this.setState({input: event.target.value})
          }}
          onClick={(event) => {
            event.preventDefault();
            dispatch(addPrototypeState(this.state.input, true));
          }}/>
      </Section>
    );
  }
};


export default State;

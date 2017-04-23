import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { rebassComponents } from '../data';

class CanvasComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  toggleEditing() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    const { component } = this.props;
    const canvasComponent = _.find(
      rebassComponents,
      { children: component.name }
    );
    const style = {
      position: 'absolute',
      top: `${component.props.top || 0}px`,
      left: `${component.props.left || 0}px`,
      outline: this.state.editing && '1px solid red',
    };

    return (
      <span
        key={component.id}
        style={style}
        onClick={this.toggleEditing.bind(this)}>
        {React.createElement(
          canvasComponent.component,
          component.props,
          component.children,
        )}
      </span>
    );
  }
}

CanvasComponent.propTypes = {
  component: PropTypes.object
}

export default CanvasComponent;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Draggable from 'react-draggable';

import { updateComponentPosition } from '../actions';
import { rebassComponents } from '../data';

class CanvasComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  handleMouseDown() {
    this.setState({editing: true});
  }

  handleDragStop(event, data) {
    this.setState({editing: false});
    this.props.dispatch(updateComponentPosition(
      this.props.component.id,
      data.x,
      data.y,
    ));
  }

  handleDrag() {
    console.log('Is dragging');
  }

  render() {
    const { component } = this.props;
    const canvasComponent = _.find(
      rebassComponents,
      { children: component.name }
    );
    const style = {
      outline: this.state.editing && '1px solid red',
      cursor: this.state.editing && 'move',
      display: 'inline-block',
      position: 'absolute',
    };

    return (
      <Draggable
        key={component.id}
        defaultPosition={{
          x: component.props.x,
          y: component.props.y
        }}
        onDrag={this.handleDrag}
        onStop={this.handleDragStop.bind(this)}
        onMouseDown={this.handleMouseDown.bind(this)}
        disabled={this.state.editing}>
        <span style={style}>
          {React.createElement(
            canvasComponent.component,
            component.props,
            component.children,
          )}
        </span>
      </Draggable>
    );
  }
}

CanvasComponent.propTypes = {
  component: PropTypes.object
}

export default connect()(CanvasComponent);

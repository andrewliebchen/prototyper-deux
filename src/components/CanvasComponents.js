import React, { Component } from 'react';
import _ from 'lodash';

import { rebassComponents } from '../data';

const CanvasComponent = ({ component }) => {
  const canvasComponent = _.find(rebassComponents, { children: component.name });
  return (
    <span style={{position: 'absolute'}}>
      {React.createElement(canvasComponent.component, component.props)}
    </span>
  );
}

class CanvasComponents extends Component {
  render() {
    return (
      <div>
        {this.props.components.length > 0 ?
          <div>
            {this.props.components.map((component) => {
              return (
                <CanvasComponent
                  key={component.id}
                  component={component} />
              );
            })}
          </div>
        : <span>Nope</span>}
      </div>
    );
  }
};

export default CanvasComponents;

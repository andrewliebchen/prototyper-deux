import React, { Component } from 'react';

import CanvasComponent from './CanvasComponent';

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

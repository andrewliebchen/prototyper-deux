import React, { Component } from 'react';
import { List, Text } from 'rebass';

class CanvasComponents extends Component {
  render() {
    return (
      <div>
        {this.props.components.length > 0 ?
          <div>
            {this.props.components.map((component) => {
              return <div key={component.id}>{component.name}</div>
            })}
          </div>
        : <span>Nope</span>}
      </div>
    );
  }
};

export default CanvasComponents;

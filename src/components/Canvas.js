import React, { Component } from 'react';

import CanvasComponent from './CanvasComponent';


import '../styles/Canvas.css';

class Canvas extends Component {
  render() {
    return (
      <div className="Canvas">
        {this.props.components.length > 0 &&
          <div>
            {this.props.components.map((component) =>
              <CanvasComponent component={component}/>
            )}
          </div>}
      </div>
    );
  }
};

export default Canvas;

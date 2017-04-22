import _ from 'lodash';
import React from 'react'

import { rebassComponents } from '../data';

const CanvasComponent = ({ component }) => {
  const canvasComponent = _.find(rebassComponents, { children: component.name });
  return React.createElement(canvasComponent.component);
}

export default CanvasComponent;

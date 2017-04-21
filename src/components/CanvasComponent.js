import _ from 'lodash';

import {rebassComponents} from '../data';

const CanvasComponent = ({component}) => {
  const rebassComponent = _.find(rebassComponents, {children: component.name});
  return rebassComponent.component
}



export default CanvasComponent;

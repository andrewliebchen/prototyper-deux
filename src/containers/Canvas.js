import { connect } from 'react-redux';

import CanvasComponents from '../components/CanvasComponents';

const mapStateToProps = (state) => {
  return {
    components: state.components
  }
}


const Canvas = connect(
  mapStateToProps
)(CanvasComponents);


export default Canvas;

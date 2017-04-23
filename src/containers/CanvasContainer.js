import { connect } from 'react-redux';

import Canvas from '../components/Canvas';

const mapStateToProps = (state) => {
  return {
    components: state.components
  }
}

const CanvasContainer = connect(
  mapStateToProps
)(Canvas);


export default CanvasContainer;

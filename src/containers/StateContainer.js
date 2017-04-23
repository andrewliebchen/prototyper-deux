import { connect } from 'react-redux';

import State from '../components/State';

const mapStateToProps = (state) => {
  return {
    prototypeState: state.prototypeState
  }
}

const StateContainer = connect(
  mapStateToProps
)(State);


export default StateContainer;

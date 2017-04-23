import { combineReducers } from 'redux';

function components(state = [], action) {
  switch (action.type) {
    case 'ADD_COMPONENT':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          props: action.props,
        }
      ]
    default:
      return state
  }
}

const prototyperApp = combineReducers({
  components
});

export default prototyperApp;

import { combineReducers } from 'redux';

import { ADD_COMPONENT } from './actions';

function components(state = [], action) {
  switch (action.type) {
    case 'ADD_COMPONENT':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
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

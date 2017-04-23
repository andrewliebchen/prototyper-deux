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
          children: action.children,
        }
      ];
    default:
      return state;
  }
}

function prototypeState(state = [], action) {
  switch (action.type) {
    case 'ADD_PROTOTYPE_STATE':
      return [
        ...state,
        {
          id: action.id,
          key: action.key,
          value: action.defaultValue,
        }
      ];
    case 'TOGGLE_PROTOTYPE_STATE':
      return state.map(state => {
        console.log(state.id + ' ' + action.id);
        if (state.id !== action.id) {
          return state;
        };

        return Object.assign({}, state, {
          value: !state.value
        });
      });
    default:
      return state;
  }
}

const prototyperApp = combineReducers({
  components,
  prototypeState,
});

export default prototyperApp;

// Add Components
let nextId = 0;
export const addComponent = (name, props, children) => {
  return {
    type: 'ADD_COMPONENT',
    id: nextId++,
    name,
    props,
    children,
  };
}

export const updateComponentPosition = (id, x, y) => {
  return {
    type: 'UPDATE_COMPONENT_POSITION',
    id,
    x,
    y,
  };
}

export const addPrototypeState = (key, defaultValue) => {
  return {
    type: 'ADD_PROTOTYPE_STATE',
    id: nextId++,
    key,
    defaultValue,
  };
}

export const togglePrototypeState = (id) => {
  return {
    type: 'TOGGLE_PROTOTYPE_STATE',
    id,
  };
}

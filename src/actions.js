// Action creators
let nextId = 0;
export const addComponent = (name, props) => {
  return {
    type: 'ADD_COMPONENT',
    id: nextId++,
    name,
    props,
  };
}

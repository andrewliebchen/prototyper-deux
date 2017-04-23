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

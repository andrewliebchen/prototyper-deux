import React from 'react';

import Canvas from '../containers/Canvas';
import AddComponent from '../containers/AddComponent';

const App = () =>
  <div className="App">
    <div className="Canvas"/>
    <div className="Sidebar">
      <Canvas/>
      <AddComponent/>
    </div>
  </div>


export default App;

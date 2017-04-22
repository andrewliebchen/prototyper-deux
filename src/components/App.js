import React from 'react';
import { Flex, Box } from 'reflexbox';

import Canvas from '../containers/Canvas';
import AddComponent from '../containers/AddComponent';

const App = () =>
  <Flex className="App">
    <Box col={8}>
      <Canvas/>
    </Box>
    <Box col={4} className="Sidebar">
      <AddComponent/>
    </Box>
  </Flex>


export default App;

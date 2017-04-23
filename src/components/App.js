import React from 'react';
import { Flex, Box } from 'reflexbox';

import CanvasContainer from '../containers/CanvasContainer';
import AddComponent from '../containers/AddComponent';

const App = () =>
  <Flex className="App">
    <Box col={8}>
      <CanvasContainer/>
    </Box>
    <Box col={4} className="Sidebar">
      <AddComponent/>
    </Box>
  </Flex>


export default App;

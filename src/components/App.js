import React from 'react';
import { Section, SectionHeader } from 'rebass';
import { Flex, Box } from 'reflexbox';

import CanvasContainer from '../containers/CanvasContainer';
import AddComponent from '../containers/AddComponent';
import StateContainer from '../containers/StateContainer';

const App = () =>
  <Flex className="App">
    <Box col={8}>
      <Section>
        <SectionHeader heading="Preview"/>
        <CanvasContainer/>
      </Section>
    </Box>
    <Box col={4} className="Sidebar">
      <StateContainer/>
      <AddComponent/>
    </Box>
  </Flex>


export default App;

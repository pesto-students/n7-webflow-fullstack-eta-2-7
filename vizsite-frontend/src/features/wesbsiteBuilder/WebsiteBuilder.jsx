import React, { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { CgListTree } from 'react-icons/cg';
import { AiTwotoneBuild } from 'react-icons/ai';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import HtmlContainer from './components/HtmlContainer';
import CssConatainer from './components/CssConatainer';
import Editor from './components/Editor';
import ViewerContainer from './components/ViewerContainer';
import Hirearchy from './components/HirearchyViewer';

const views = [{ icon: <AiTwotoneBuild />, label: 'build' }, { icon: <CgListTree />, label: 'hirearchy' }];

export default function WebsiteBuilder() {
  const [view, setView] = React.useState(views[0].label);
  const [node, setNode] = useState({ value: '1', type: 'body', label: 'root' });
  return (
    <DndProvider backend={HTML5Backend}>
      <Flex height="90vh" background="gray.50">
        <Box p={2} bg="white" boxShadow="lg" margin="2">
          <ViewerContainer views={views} setView={setView} />
        </Box>
        <Box flex={1} boxShadow="lg" bg="white" mt="2" flexShrink="1" p="2">
          {view === 'build' ? <HtmlContainer node={node} setNode={setNode} /> : <Hirearchy />}
        </Box>
        <Box flex={3} flexShrink="2" p="2">
          <Editor node={node} setNode={setNode} />
        </Box>
        <Box flex={1} boxShadow="lg" bg="white" mt="2" flexShrink="1" p="2" overflowY="scroll">
          <CssConatainer />
        </Box>
      </Flex>
    </DndProvider>
  );
}

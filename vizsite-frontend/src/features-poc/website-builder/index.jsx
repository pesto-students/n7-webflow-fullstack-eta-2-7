import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Editor from './editor';
import HtmlContainer from './html-container';
import StylesContainer from './styles-container';

export default function WebsiteBuilder() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Flex>

        <Box flex="1"><HtmlContainer /></Box>
        <Box flex="3"><Editor /></Box>
        <Box flex="1"><StylesContainer /></Box>

      </Flex>
    </DndProvider>
  );
}

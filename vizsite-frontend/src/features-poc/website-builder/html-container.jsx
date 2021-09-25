import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Box from './Box';

export default function HtmlContainer() {
  return (
    <SimpleGrid columns={2}>
      <Box name="button" />
      <Box name="h1" />
      <Box name="h2" />
    </SimpleGrid>
  );
}

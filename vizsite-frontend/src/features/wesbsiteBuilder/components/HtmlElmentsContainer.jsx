import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import HtmlElements from './HtmlElements';

export default function HtmlElementsContainer({ elements }) {
  return (
    <SimpleGrid columns={{ md: '1', lg: '2' }} gap="6">
      <HtmlElements elements={elements} />
    </SimpleGrid>
  );
}

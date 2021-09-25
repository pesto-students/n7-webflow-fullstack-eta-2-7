import React from 'react';
import {
  Stack, Text, Button, Box,
} from '@chakra-ui/react';
import MultiAccordion from 'components/Accordion/multi-accordion';
import Layout from './layout';
import Spacing from './spacing';
import Size from './size';
import Typography from './typography';
import Backgrounds from './backgrounds';
import Border from './border';
import Effect from './effect';

export default function Demo({ applyStyles }) {
  const tools = [
    'Layout',
    'Spacing',
    'Size',
    'Typography',
    'Backgrounds',
    'Border',
    'Effect',
  ];
  const cssInputComponentButton = tools.map((tool) => (
    <Text key={tool}>{tool}</Text>
  ));
  const cssInputComponents = [
    <Layout key="layout" />,
    <Spacing key="spacing" />,
    <Size key="size" />,
    <Typography key="typography" />,
    <Backgrounds key="backgrounds" />,
    <Border key="border" />,
    <Effect key="effect" />,
  ];

  const accordionItems = cssInputComponentButton.map((item, index) => (
    {
      AccordionButtonComponent: cssInputComponentButton[index],
      AccordionPanelComponent: cssInputComponents[index],
    }));
  return (
    <Stack width="full">
      <MultiAccordion accordionItems={accordionItems} />

      <Box>
        <Button type="submit" onClick={applyStyles}>
          Apply
        </Button>
      </Box>
    </Stack>
  );
}

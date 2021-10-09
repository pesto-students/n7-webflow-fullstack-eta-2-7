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
import Attributes from './attributes';

export default function Demo({
  applyStyles, selectedNodeStylesObj,
  handleStlyeObjChange, selectedNodeAttributes, handleAttributeChange,
}) {
  const tools = [
    'Layout',
    'Spacing',
    'Size',
    'Typography',
    'Backgrounds',
    'Border',
    'Effect',
    'Attributes',
  ];
  const cssInputComponentButton = tools.map((tool) => (
    <Text key={tool}>{tool}</Text>
  ));
  const cssInputComponents = [
    <Layout key="layout" currentStylesObj={selectedNodeStylesObj} handleStlyeObjChange={handleStlyeObjChange} />,
    <Spacing key="spacing" currentStylesObj={selectedNodeStylesObj} handleStlyeObjChange={handleStlyeObjChange} />,
    <Size key="size" currentStylesObj={selectedNodeStylesObj} handleStlyeObjChange={handleStlyeObjChange} />,
    <Typography key="typography" currentStylesObj={selectedNodeStylesObj} handleStlyeObjChange={handleStlyeObjChange} />,
    <Backgrounds key="backgrounds" currentStylesObj={selectedNodeStylesObj} handleStlyeObjChange={handleStlyeObjChange} />,
    <Border key="border" currentStylesObj={selectedNodeStylesObj} handleStlyeObjChange={handleStlyeObjChange} />,
    <Effect key="effect" currentStylesObj={selectedNodeStylesObj} handleStlyeObjChange={handleStlyeObjChange} />,
    <Attributes key="attributes" currentAttributes={selectedNodeAttributes} handleAttributeChange={handleAttributeChange} />,
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

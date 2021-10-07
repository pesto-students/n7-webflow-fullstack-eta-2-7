import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export default function Typography({ currentStylesObj, handleStlyeObjChange }) {
  const {
    fontSize = '', color = '', lineHeight = '', letterSpacing = '', fontWeight = '',
  } = currentStylesObj || {};

  return (
    <>
      <FormControl>
        <FormLabel>Font size</FormLabel>
        <Input
          value={fontSize}
          onChange={(e) => {
            handleStlyeObjChange({ key: 'fontSize', e });
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Font Weight</FormLabel>
        <Input
          value={fontWeight}
          onChange={(e) => {
            handleStlyeObjChange({ key: 'fontWeight', e });
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Color</FormLabel>
        <Input
          value={color}
          onChange={(e) => {
            handleStlyeObjChange({ key: 'color', e });
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Line height</FormLabel>
        <Input
          value={lineHeight}
          onChange={(e) => {
            handleStlyeObjChange({ key: 'lineHeight', e });
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Letter spacing</FormLabel>
        <Input
          value={letterSpacing}
          onChange={(e) => {
            handleStlyeObjChange({ key: 'letterSpacing', e });
          }}
        />
      </FormControl>
    </>
  );
}

import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export default function Typography() {
  return (
    <>
      <FormControl>
        <FormLabel>Font size</FormLabel>
        <Input />
      </FormControl>
      <FormControl>
        <FormLabel>Color</FormLabel>
        <Input />
      </FormControl>
      <FormControl>
        <FormLabel>Line height</FormLabel>
        <Input />
      </FormControl>
      <FormControl>
        <FormLabel>Letter spacing</FormLabel>
        <Input />
      </FormControl>
    </>
  );
}

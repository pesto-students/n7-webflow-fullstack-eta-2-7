import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export default function Backgrounds({ currentStylesObj, handleStlyeObjChange }) {
  const { background = '' } = currentStylesObj;

  return (
    <FormControl>
      <FormLabel>Color</FormLabel>
      <Input
        onChange={(e) => {
          handleStlyeObjChange({ key: 'background', e });
        }}
        value={background}
      />
    </FormControl>
  );
}

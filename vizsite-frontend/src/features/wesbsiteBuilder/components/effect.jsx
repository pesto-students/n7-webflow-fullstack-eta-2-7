import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export default function Effect({ currentStylesObj, handleStlyeObjChange }) {
  const { boxShadow = '' } = currentStylesObj;

  return (
    <FormControl>
      <FormLabel>Box shadow</FormLabel>
      <Input
        value={boxShadow}
        onChange={(e) => {
          handleStlyeObjChange({ key: 'boxShadow', e });
        }}
      />
    </FormControl>
  );
}

import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export default function Border({ currentStylesObj, handleStlyeObjChange }) {
  return (
    <>
      <FormControl>
        <FormLabel>Border</FormLabel>
        <Input
          value={currentStylesObj.border || ''}
          onChange={(e) => {
            handleStlyeObjChange({ key: 'border', e });
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Border radius</FormLabel>
        <Input
          value={currentStylesObj.borderRadius || ''}
          onChange={(e) => {
            handleStlyeObjChange({ key: 'borderRadius', e });
          }}
        />
      </FormControl>
    </>
  );
}

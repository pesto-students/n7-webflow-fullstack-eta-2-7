import React from 'react';
import {
  FormLabel, FormControl, Input, Stack,
} from '@chakra-ui/react';

export default function Size({ currentStylesObj, handleStlyeObjChange }) {
  const {
    width, height, minWidth, minHeight, maxWidth, maxHeight,
  } = currentStylesObj;
  return (
    <>
      <Stack spacing="4">
        <Stack>
          <FormControl id="width">
            <Stack direction="row" alignItems="center">
              <FormLabel>Width</FormLabel>
              <Input
                name="width"
                value={width || ''}
                onChange={(e) => {
                  handleStlyeObjChange({ key: 'width', e });
                }}
              />
            </Stack>
          </FormControl>
          <FormControl id="height">
            <Stack direction="row" alignItems="center">
              <FormLabel>Height</FormLabel>
              <Input
                name="height"
                value={height || ''}
                onChange={(e) => {
                  handleStlyeObjChange({ key: 'height', e });
                }}
              />
            </Stack>
          </FormControl>
        </Stack>
        <Stack>
          <FormControl id="min-width">
            <Stack direction="row" alignItems="center">
              <FormLabel>MinW</FormLabel>
              <Input
                name="min-width"
                value={minWidth || ''}
                onChange={(e) => {
                  handleStlyeObjChange({ key: 'minWidth', e });
                }}
              />
            </Stack>
          </FormControl>
          <FormControl id="min-height">
            <Stack direction="row" alignItems="center">
              <FormLabel>MinH</FormLabel>
              <Input
                name="min-height"
                value={minHeight || ''}
                onChange={(e) => {
                  handleStlyeObjChange({ key: 'minHeight', e });
                }}
              />
            </Stack>
          </FormControl>
        </Stack>
        <Stack>
          <FormControl id="max-width">
            <Stack direction="row" alignItems="center">
              <FormLabel>MaxW</FormLabel>
              <Input
                name="max-width"
                value={maxWidth || ''}
                onChange={(e) => {
                  handleStlyeObjChange({ key: 'maxWidth', e });
                }}
              />
            </Stack>
          </FormControl>
          <FormControl id="max-height">
            <Stack direction="row" alignItems="center">
              <FormLabel>MaxH</FormLabel>
              <Input
                name="max-height"
                value={maxHeight || ''}
                onChange={(e) => {
                  handleStlyeObjChange({ key: 'maxHeight', e });
                }}
              />
            </Stack>
          </FormControl>
        </Stack>
      </Stack>
    </>
  );
}

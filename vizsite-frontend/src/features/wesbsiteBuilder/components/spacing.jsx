import React from 'react';
import {
  FormControl, FormLabel, Stack, Input,
} from '@chakra-ui/react';

export default function Spacing({ currentStylesObj, handleStlyeObjChange }) {
  const {
    margin = '', marginLeft = '', marginRight = '', marginBottom = '', marginTop = '',
    padding = '', paddingLeft = '', paddingRight = '', paddingBottom = '', paddingTop = '',
  } = currentStylesObj || {};

  return (
    <Stack>
      <FormControl>
        <FormLabel>Margin</FormLabel>
        <Stack>
          <Input
            placeholder="All"
            value={margin}
            onChange={(e) => {
              handleStlyeObjChange({ key: 'margin', e });
            }}
          />
          <Stack direction="row">
            <Input
              placeholder="Left"
              value={marginLeft}
              onChange={(e) => {
                handleStlyeObjChange({ key: 'marginLeft', e });
              }}
            />
            <Input
              placeholder="Right"
              value={marginRight}
              onChange={(e) => {
                handleStlyeObjChange({ key: 'marginRight', e });
              }}
            />
          </Stack>
          <Stack direction="row">
            <Input
              placeholder="Top"
              value={marginTop}
              onChange={(e) => {
                handleStlyeObjChange({ key: 'marginTop', e });
              }}
            />
            <Input
              placeholder="Bottom"
              value={marginBottom}
              onChange={(e) => {
                handleStlyeObjChange({ key: 'marginBottom', e });
              }}
            />
          </Stack>
        </Stack>
      </FormControl>
      <FormControl>
        <FormLabel>Padding</FormLabel>
        <Stack>
          <Input
            placeholder="All"
            value={padding}
            onChange={(e) => {
              handleStlyeObjChange({ key: 'padding', e });
            }}
          />
          <Stack direction="row">
            <Input
              placeholder="Left"
              value={paddingLeft}
              onChange={(e) => {
                handleStlyeObjChange({ key: 'paddingLeft', e });
              }}
            />
            <Input
              placeholder="Right"
              value={paddingRight}
              onChange={(e) => {
                handleStlyeObjChange({ key: 'paddingRight', e });
              }}
            />
          </Stack>
          <Stack direction="row">
            <Input
              placeholder="Top"
              value={paddingTop}
              onChange={(e) => {
                handleStlyeObjChange({ key: 'paddingTop', e });
              }}
            />
            <Input
              placeholder="Bottom"
              value={paddingBottom}
              onChange={(e) => {
                handleStlyeObjChange({ key: 'paddingBottom', e });
              }}
            />
          </Stack>
        </Stack>
      </FormControl>
    </Stack>
  );
}

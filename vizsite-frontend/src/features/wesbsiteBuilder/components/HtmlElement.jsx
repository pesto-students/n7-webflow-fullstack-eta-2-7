import React from 'react';
import { Stack, Text } from '@chakra-ui/react';

export default function HtmlElement({ title, icon }) {
  return (
    <Stack
      bgGradient="linear(to-r,  #8e2de2, #4a00e0)"
      borderRadius="sm"
      p="4"
      boxShadow="md"
      alignItems="center"
      minHeight="20"
      justifyContent="space-around"
    >
      {icon || ''}
      <Text fontSize="sm" fontWeight="bold">
        {title}
      </Text>

    </Stack>
  );
}

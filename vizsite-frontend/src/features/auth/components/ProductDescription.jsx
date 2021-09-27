import {
  Stack, useColorModeValue, Heading, Text, Button, Box, Image,
} from '@chakra-ui/react';
import React from 'react';

export default function ProductDescription({ children }) {
  return (
    <Stack
      direction="row"
      width="full"
      justifyContent="center"
      bg={useColorModeValue('gray.50', 'inherit')}
      minH="100vh"
    >
      <Stack width="50%" alignItems="center" bg="brand.500" justifyContent="center">
        <Stack maxWidth="lg" spacing="4">
          <Heading size="lg" color="white">
            Build your static websites very fast with VIZSITE
          </Heading>
          <Text color="white">
            Using vizsite you can able to create your websites in hours with little efforts.
          </Text>
          <Box>
            <Button color="white" variant="outline">
              Get Started
            </Button>
          </Box>
          <Image src={`${window.location.origin}/assets/images/project-screenshot.png`} />
        </Stack>
      </Stack>
      <Stack width="50%" alignItems="center" justifyContent="center">{children}</Stack>
    </Stack>
  );
}

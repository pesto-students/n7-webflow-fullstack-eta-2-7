import { IconButton, Stack } from '@chakra-ui/react';
import React from 'react';

export default function ViewerContainer({ views, setView }) {
  return (
    <Stack>
      {views.map(({ icon, label }) => (
        <IconButton boxShadow="lg" onClick={() => setView(label)}>
          {icon}
        </IconButton>
      ))}
    </Stack>
  );
}

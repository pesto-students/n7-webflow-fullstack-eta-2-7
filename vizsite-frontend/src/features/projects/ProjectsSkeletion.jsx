import React from 'react';
import {
  Box,
  useColorModeValue,
  Stack,
  Skeleton,
} from '@chakra-ui/react';

export default function ProjectsSkeletion() {
  const data = [{}, {}, {}, {}];
  return (
    <>
      {
      data.map((item, index) => <ProjectSkeletonCard key={index} />)
    }
    </>
  );
}

function ProjectSkeletonCard() {
  return (
    <Stack
      role="group"
      p={6}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="2xl"
      rounded="lg"
      zIndex={1}
    >
      <Stack justifyContent="flex-end" direction="row">
        <Skeleton height="36px" width="36px" />
        <Skeleton height="36px" width="36px" />
        <Skeleton height="36px" width="36px" />
      </Stack>
      <Box>
        <Skeleton
          boxShadow="lg"
          height={200}
          width={290}
        />
      </Box>
      <Stack pt={10} align="left" fontSize="sm">
        <Skeleton height="30px" width="80px" />
        <Stack direction="row" justifyContent="space-between">
          <Skeleton height="24px" width="120px" />
          <Skeleton height="24px" width="80px" />
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Skeleton height="24px" width="132px" />
          <Skeleton height="24px" width="72px" />
        </Stack>
      </Stack>
    </Stack>
  );
}

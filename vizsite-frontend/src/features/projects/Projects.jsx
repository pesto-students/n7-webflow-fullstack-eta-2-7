import {
  Stack, Flex, Button, SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import { useRequest } from 'redux-query-react';
import { useSelector } from 'react-redux';
import { getAllProjectsQuery } from './Store/queries';
import ProjectCards from './Components/ProjectCards';
import { getAllProjects } from './Store/selectors';
import ProjectsSkeletion from './ProjectsSkeletion';

export default function Projects() {
  const projects = useSelector(getAllProjects) || [];
  const [
    {
      isPending,
    },
  ] = useRequest(getAllProjectsQuery);

  return (
    <Stack my="8" px="36">
      <Stack>
        <Flex justifyContent="flex-end">
          <Button as="a" href="/app/projects/new">
            Add Project
          </Button>
        </Flex>
        <SimpleGrid columns="3" gap="12">
          {isPending ? <ProjectsSkeletion /> : <ProjectCards projects={projects} />}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}

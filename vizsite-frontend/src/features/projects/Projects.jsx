import {
  Stack, Flex, Button, SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import { useRequest } from 'redux-query-react';
import { useSelector } from 'react-redux';
import { getAllProjectsQuery } from './Store/queries';
import ProjectCards from './Components/ProjectCards';
import { getAllProjects } from './Store/selectors';

export default function Projects() {
  const projects = useSelector(getAllProjects) || [];
  const [
    {
      isPending,
      isFinished,
    },
  ] = useRequest(getAllProjectsQuery);
  console.log(projects);
  console.log(isPending, isFinished, process.env, projects);

  return (
    <Stack alignItems="center" mt="8">
      <Stack maxW="8xl">
        <Flex justifyContent="flex-end">
          <Button as="a" href="/app/projects/new">
            Add Project
          </Button>
        </Flex>
        <SimpleGrid columns="3" gap="8">
          <ProjectCards projects={projects} />
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}

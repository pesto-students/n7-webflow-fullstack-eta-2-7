import {
  Center, Stack, Heading, Text, FormControl, FormLabel,
  Input, Button, FormHelperText, Box, FormErrorMessage,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useMutation } from 'redux-query-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { makeProjetMutation } from './Store/queries';
import { createProjectSchema } from './validation';

export default function CreateProject() {
  const [{ isPending, isFinished }, addProject] = useMutation((data) => makeProjetMutation(data));
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(createProjectSchema),
  });

  const onSubmit = (data) => {
    addProject(data);
  };

  useEffect(() => {
    if (isFinished) {
      history.push('/app/projects');
    }
  }, [isFinished]);

  return (
    <Center h="90vh" bg="gray.50">
      <Stack as="form" w="md" minH="xs" boxShadow="xl" bg="white" rounded="lg" p="6" spacing="4" onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Heading size="md" fontWeight="semibold">
            Create a new project
          </Heading>
          <Text fontSize="sm">
            You can create a new project here.
          </Text>
        </Stack>
        <FormControl id="project-name" isInvalid={errors.name?.message}>
          <FormLabel>Project name</FormLabel>
          <Input {...register('name')} />
          <FormHelperText>
            Relevant project name with help you in
            finding projects easily
          </FormHelperText>
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <Box>
          <Button isLoading={isPending} type="submit" loadingText="Creating...">Create project</Button>
        </Box>
      </Stack>
    </Center>
  );
}

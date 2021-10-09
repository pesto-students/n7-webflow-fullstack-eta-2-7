import {
  Button, FormControl, FormLabel, Input, Stack,
} from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PasswordField from './PasswordField';
import { signInSchema } from './validation';

const LoginForm = ({ signinWithEmail }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data) => {
    signinWithEmail(data);
  };
  console.log(errors);
  return (
    <Stack spacing="6" as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" autoComplete="email" required {...register('email')} />
      </FormControl>
      <PasswordField {...register('password')} />
      <Button type="submit" size="lg" fontSize="md">
        Sign in
      </Button>
    </Stack>
  );
};

export default LoginForm;

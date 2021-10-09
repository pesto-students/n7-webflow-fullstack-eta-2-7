import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VisuallyHidden,
  Badge,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useAuth } from 'lib/auth';
import { useHistory } from 'react-router-dom';
import Card from './Card';
import DividerWithText from './DividerWithText';
import LoginForm from './LoginForm';
import ProductDescription from '../components/ProductDescription';

const Login = () => {
  const history = useHistory();
  const auth = useAuth();
  const { user, signinWithGoogle, signinWithEmail } = auth;
  if (user?.uid) {
    history.push('/app/projects');
  }
  return (
    <ProductDescription>
      <>
        <Box maxW="md" mx="auto">
          <Heading textAlign="center" size="xl" fontWeight="extrabold">
            Sign in to your account
          </Heading>
          <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
            <Text as="span">Don&apos;t have an account?</Text>
          </Text>
          <Card>
            <LoginForm signinWithEmail={signinWithEmail} />
            <DividerWithText mt="6">or continue with</DividerWithText>
            <SimpleGrid mt="6" columns={3} spacing="3">
              <Button color="currentColor" variant="outline">
                <VisuallyHidden>Login with Facebook</VisuallyHidden>
                <FaFacebook />
              </Button>
              <Button color="red" variant="outline" onClick={signinWithGoogle}>
                <VisuallyHidden>Login with Google</VisuallyHidden>
                <FaGoogle />
              </Button>
              <Button color="currentColor" variant="outline">
                <VisuallyHidden>Login with Github</VisuallyHidden>
                <FaGithub />
              </Button>
            </SimpleGrid>
            <Badge colorScheme="purple" mt="8">
              Only google and guest login is available for now.
            </Badge>
          </Card>
        </Box>
      </>
    </ProductDescription>
  );
};
export default Login;

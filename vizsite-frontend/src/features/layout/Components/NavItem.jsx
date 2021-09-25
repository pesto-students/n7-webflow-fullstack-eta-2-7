import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

export default function NavItem({ title, path }) {
  return (
    <Box
      fontSize="sm"
      fontWeight={500}
      color="gray.600"
      _hover={{
        color: 'black',
      }}
    >
      <Link to={path}>
        {title}
      </Link>
    </Box>
  );
}

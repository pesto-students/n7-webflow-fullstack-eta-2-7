import React from 'react';
import {
  Avatar, Stack, Text, IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
} from '@chakra-ui/react';
import { AuthContext } from 'lib/auth';
import { BsChevronDown } from 'react-icons/bs';

function ProfileMenu({ signOut }) {
  return (
    <>
      <Menu>
        <MenuButton as={IconButton} icon={<BsChevronDown />} variant="ghost" />
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={signOut}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default function Profile() {
  const { user, signOut } = React.useContext(AuthContext);
  const { photoUrl, name, email } = user || {};
  return (
    <>
      <Stack direction="row" alignItems="center" maxW="sm" isTruncated>
        <Avatar size="sm" src={photoUrl} />
        <Stack spacing="0" fontSize="sm" color="brand.500">
          <Text fontWeight="semibold" maxW="48" isTruncated>
            {name}
          </Text>
          <Text isTruncated maxW="48">
            {email}
          </Text>
        </Stack>
        <Box>
          <ProfileMenu signOut={signOut} />
        </Box>
      </Stack>
    </>
  );
}

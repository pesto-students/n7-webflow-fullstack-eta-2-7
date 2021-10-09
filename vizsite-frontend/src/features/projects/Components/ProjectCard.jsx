/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  IconButton,
} from '@chakra-ui/react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { IoIosDownload } from 'react-icons/io';
import { MdOpenInNew } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { formatRelative } from 'date-fns';

const IMAGE = 'https://cdn.dribbble.com/users/1790221/screenshots/16495125/media/df81965b4e534ab9b00522f8aafae4d2.png';

export default function ProjectCard({
  name, siteId, fileLink, createdAt, updatedAt,
}) {
  const history = useHistory();
  const siteLink = `/app/editor/${siteId}`;

  const handleOpenProject = () => {
    history.push(siteLink);
  };

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
        <IconButton variant="ghost">
          <a href={fileLink}><IoIosDownload fontSize="24px" /></a>
        </IconButton>
        <IconButton variant="ghost" onClick={handleOpenProject}>
          <MdOpenInNew fontSize="20px" />
        </IconButton>
        <IconButton variant="ghost">
          <AiOutlineShareAlt fontSize="20px" />
        </IconButton>
      </Stack>
      <Box
        rounded="lg"
        mt={-12}
        pos="relative"
        height="230px"
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          backgroundImage: 'url(https://cdn.dribbble.com/users/1790221/screenshots/16495125/media/df81965b4e534ab9b00522f8aafae4d2.png)',
          filter: 'blur(15px)',
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(20px)',
          },
        }}
      >
        <Image
          rounded="lg"
          height={230}
          width={282}
          objectFit="cover"
          src={IMAGE}
        />
      </Box>
      <Stack pt={10} align="left" fontSize="sm">
        <Heading fontSize="lg" fontFamily="body" fontWeight="semibold" onClick={handleOpenProject} as="a" href={siteLink}>
          {name}
        </Heading>
        <Stack direction="row" justifyContent="space-between">
          <Text color="gray.600">
            Created at
          </Text>
          <Text color="gray.600">
            {createdAt ? formatRelative(new Date(), new Date(createdAt)) : ''}
          </Text>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Text color="gray.600">
            Last modfiied
          </Text>
          <Text color="gray.600">
            {createdAt ? formatRelative(new Date(), new Date(updatedAt)) : ''}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

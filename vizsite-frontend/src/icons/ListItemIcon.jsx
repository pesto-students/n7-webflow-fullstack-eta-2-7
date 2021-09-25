import React from 'react';
import { Icon } from '@chakra-ui/react';

const ListItemIcon = (props) => (
  <Icon viewBox="0 0 65 10" {...props} width="65px" height="10px">
    <circle cx="5" cy="5" r="5" fill="currentColor" />
    <rect x="15" width="50" height="10" rx="1" fill="currentColor" />
  </Icon>
);

export default ListItemIcon;

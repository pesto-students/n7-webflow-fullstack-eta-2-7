import React from 'react';
import { Icon } from '@chakra-ui/react';

const GridIcon = (props) => (
  <Icon width="43px" height="42px" viewBox="0 0 43 42" {...props}>
    <rect x="0.5" y="0.5" width="19" height="19" stroke="currentColor" strokeDasharray="2 2" fill="none" />
    <rect x="23.5" y="22.5" width="19" height="19" stroke="currentColor" strokeDasharray="2 2" fill="none" />
    <rect x="23.5" y="0.5" width="19" height="19" stroke="currentColor" strokeDasharray="2 2" fill="none" />
    <rect x="0.5" y="22.5" width="19" height="19" stroke="currentColor" strokeDasharray="2 2" fill="none" />
  </Icon>
);

export default GridIcon;

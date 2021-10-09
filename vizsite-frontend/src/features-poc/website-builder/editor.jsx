import React, { memo } from 'react';
import Dustbin from './Dustbin';

const Container = memo(() => (
  <div>
    <div style={{ overflow: 'hidden', clear: 'both' }}>
      <Dustbin />
    </div>
  </div>
));

export default Container;

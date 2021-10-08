import React from 'react';

import ImageUpload from './ImageUpload';

export default function Attributes({ handleAttributeChange, currentAttributes }) {
  return (
    <>
      <ImageUpload url={currentAttributes.imagUrl} setUrl={handleAttributeChange} />
    </>
  );
}

import React, { useState, useCallback } from 'react';
import { Input, Button, Image } from '@chakra-ui/react';
import firebase from 'firebase';

export default function ImageUpload({ url, setUrl }) {
  const [file, setFile] = useState('');

  const handleUpload = useCallback(
    async () => {
      const storageRef = firebase.storage().ref();
      const uploadTask = await storageRef.child(file.name).put(file);
      const uploadedImageUrl = await uploadTask.ref.getDownloadURL();
      setUrl({ value: uploadedImageUrl, key: 'src' });
    },
    [file],
  );
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div>
      <Input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>
        Upload
      </Button>
      {url ? <Image src={url} width="32px" height="32px" /> : ''}
    </div>
  );
}

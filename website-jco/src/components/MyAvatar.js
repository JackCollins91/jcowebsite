import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import img from './imgs/profilepics.jpg'

export default function MyAvatar() {
  return (
    <Avatar
      variant="rounded"
      alt="Picture of John Collins"
      elevation={4}
      src={img}
      sx={{ width: 112, height: 112, m: 2 }}
      style={{
        border: '2px solid lightgray'
      }}
    />
  );
}
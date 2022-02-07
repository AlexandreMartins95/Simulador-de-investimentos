import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        
    </Box>
  );
}
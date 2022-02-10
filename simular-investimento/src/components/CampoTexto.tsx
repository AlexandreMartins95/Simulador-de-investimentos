import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function TextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 3, width: '22ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          required={props.required}
          
          label={props.label}
          defaultValue={props.defaultValue}
          type={props.type}
          variant={props.variant}
          InputProps={props.InputProps}
        />
        
    </Box>
  );
}
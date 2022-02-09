import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Button, ThemeProvider, createTheme } from '@material-ui/core';
import { styled } from '@mui/material/styles';

export default function BasicButtons(props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ff5e00',
      },
    },
  });

  const EditarBotao = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    width: 80,
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.9,
    backgroundColor: '#d8dce3',
    borderColor: 'black',
    color: 'black',

    
    '&:hover': {
      backgroundColor: '#ff5e00',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ff5e00',
      borderColor: '#ff5e00',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },

  });

  
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2} direction="row">
        <Button 
        disableElevation
        color="primary" 
        variant={props.variant}
        size='large'
        >
          Limpar Campos
        </Button>
      </Stack>
    </ThemeProvider>
  );
}
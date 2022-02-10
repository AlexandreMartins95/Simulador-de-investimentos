import { styled } from '@mui/material/styles';
import {ButtonGroup, Button, ThemeProvider, createTheme } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



export const MyStyledButton = styled(Button)({
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
    marginTop:22,
    marginBottom: 20,

    
    '&:hover': {
      backgroundColor: '#ff5e00',
      borderColor: 'black',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ff5e00',
    },
    '&:focus': {
      boxShadow: 'none',
    },

  });

  export const MySingleButton = styled(Button)({
    borderColor: 'black',
    width: 200,
    marginLeft:40,
    marginTop:20,
    fontWeight:'bold',

    '&:hover': {
        backgroundColor: '#ff5e00',
        borderColor: 'black',
      },
  
  });

  export const MyOtherButton = styled(Button)({
    border:'none',
    backgroundColor: '#ff5e00',
    width: 200,
    marginTop:20,
    fontWeight:'bold',

    '&:hover': {
        backgroundColor: '#ff5e00',
        borderColor: 'black',
      },
  
  });

  export const MyStyledGrid = styled(Grid)({
    borderColor: 'black',
    border:2,
    height: 100,
    marginTop:20,
    textAlign:'center',
    fontWeight:'bold',

  });


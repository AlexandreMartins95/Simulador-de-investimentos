import * as React from 'react';
import {ButtonGroup, Button, ThemeProvider, createTheme } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import {MyStyledButton} from './StyleButton';


export default function TwoButtons() {

 
  return (
      <ButtonGroup>
        <MyStyledButton>Bruto</MyStyledButton>
        <MyStyledButton>Liquido</MyStyledButton>
      </ButtonGroup>
    
  );
}

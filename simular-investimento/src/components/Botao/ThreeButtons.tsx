import * as React from 'react';
import {ButtonGroup, Button, ThemeProvider, createTheme } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import {MyStyledButton} from './StyleButton';


export default function ThreeButtons() {
  
  return (
      <ButtonGroup>
      <MyStyledButton>PRÉ</MyStyledButton>
      <MyStyledButton>POS</MyStyledButton>
      <MyStyledButton>FIXADO</MyStyledButton>
      </ButtonGroup>
  );
}

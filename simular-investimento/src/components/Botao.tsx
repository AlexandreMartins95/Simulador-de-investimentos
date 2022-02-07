import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { createTheme } from '@material-ui/core/styles';

export default function GrupoBotao() {
  return (
    <ButtonGroup disableElevation variant="contained" color='primary'>
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
  );
}


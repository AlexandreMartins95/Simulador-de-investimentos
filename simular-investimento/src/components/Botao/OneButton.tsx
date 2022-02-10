import * as React from 'react';
import { MySingleButton } from './StyleButton';


export default function OneButton() {
  
  return (
        <MySingleButton 
        disableElevation
        variant="outlined"
        size='large'>
        Limpar Campos
        </MySingleButton>
  );
}


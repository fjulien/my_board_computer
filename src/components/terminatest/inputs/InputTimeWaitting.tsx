import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export const InputTimeWaitting = () => {
  return (
    <FormGroup>
      <Label htmlFor="waitting">Time waitting
        <Input 
        type="number" 
        name="waitting" 
        id="waitting" 
        />
      </Label>
    </FormGroup>
  );
}
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export const InputTimeWaitting = () => {
  return (
    <FormGroup>
      <Label htmlFor="exampleText">Text Area
        <Input type="number" name="text" id="exampleText" />
      </Label>
    </FormGroup>
  );
}
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export const InputSelector = () => {
  return (
    <FormGroup>
      <Label htmlFor="exampleText">Text Area
        <Input type="textarea" name="text" id="exampleText" />
      </Label>
    </FormGroup>
  );
}

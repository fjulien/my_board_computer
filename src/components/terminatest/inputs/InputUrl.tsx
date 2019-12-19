import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export const InputUrl = () => {
  return (
    <FormGroup>
      <Label htmlFor="Url">Url
        <Input type="url" name="Url" id="Url" />
      </Label>
   </FormGroup>
  );
}

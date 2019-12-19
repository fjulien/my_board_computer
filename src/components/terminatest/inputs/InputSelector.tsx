import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export const InputSelector = () => {
  return (
    <FormGroup>
      <Label htmlFor="Selector">Selector
        <Input type="textarea" name="Selector" id="Selector" />
      </Label>
    </FormGroup>
  );
}

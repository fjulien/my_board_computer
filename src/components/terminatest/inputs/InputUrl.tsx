import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export const InputUrl = () => {
  return (
    <FormGroup>
      <Label htmlFor="exampleEmail">Email
        <Input type="url" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </Label>
   </FormGroup>
  );
}

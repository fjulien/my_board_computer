import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export const InputContent = () => {
  return (
      <FormGroup>
        <Label htmlFor="content">content
          <Input type="textarea" name="content" id="content" />
        </Label>
      </FormGroup>
  );
}

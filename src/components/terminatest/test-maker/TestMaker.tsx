import React from 'react';
import './TestMaker.scss';
import { Container, Form, Label, Input, FormGroup } from 'reactstrap';

export const TestMaker = () => {
  return (
    <Container className="TestMaker">
      <h4>TestMaker</h4>
      <Form>
        <FormGroup>
          <Label htmlFor="functionSelector">Select function
          <Input
              type="select"
              name="functionSelector"
              id="functionSelector"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Input>
          </Label>
        </FormGroup>
      </Form>
    </Container>
  );
};

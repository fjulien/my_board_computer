import React from 'react';
import { Container, Form } from 'reactstrap';
import { InputSelectorFunctions } from '../inputs/';

import './TestMaker.scss';

export const TestMaker = () => {
  return (
    <Container className="TestMaker">
      <h4>TestMaker</h4>
      <Form>
        <InputSelectorFunctions />
      </Form>
    </Container>
  );
};

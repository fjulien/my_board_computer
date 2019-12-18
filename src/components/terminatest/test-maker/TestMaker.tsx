import React from 'react';
import { Form } from 'reactstrap';
import { InputSelectorFunctions } from '../inputs/';

import './TestMaker.scss';

export const TestMaker = () => {
  return (
    <article className="TestMaker">
      <h4>TestMaker</h4>
      <Form>
        <InputSelectorFunctions />
      </Form>
    </article>
  );
};

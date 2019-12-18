import React from 'react';
import { Row, Col } from 'reactstrap';
import './Terminatest.scss';
import { TestMaker } from './test-maker/TestMaker';
import { TestThread } from './test-threads/TestThread';
import { ViewTests } from './view-test/ViewTests';

export const Terminatest = () => {
  return (
    <article className="Terminatest">
      <Row>
        <Col xs='4'>
          <TestMaker />
        </Col>
        <Col xs='4'>
          <TestThread />
        </Col>
        <Col xs='4'>
          <ViewTests />
        </Col>
      </Row>
    </article>
  );
};

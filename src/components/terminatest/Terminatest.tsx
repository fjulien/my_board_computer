import React from 'react';
import { Row, Col } from 'reactstrap';
import './Terminatest.scss';
import { TestMaker } from './test-maker/TestMaker';
import { TestThread } from './test-thread/TestThread';
import { ViewTest } from './view-test/ViewTest';

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
          <ViewTest />
        </Col>
      </Row>
    </article>
  );
};

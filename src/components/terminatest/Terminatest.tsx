import React from 'react';
import './Terminatest.scss';
import TestMaker from './test-maker/TestMaker';
import { TestThread } from './test-threads/TestThread';
import { ViewTests } from './view-test/ViewTests';
import { Action } from '../../store/terminatest/';

export const Terminatest = () => {
  return (
    <section className="Terminatest">
      <TestMaker />
      <TestThread />
      <ViewTests />
    </section>
  );
};

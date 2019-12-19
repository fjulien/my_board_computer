import React, { useState } from 'react';
import { Form } from 'reactstrap';
import InputSelectorFunctions from '../inputs/InputSelectorFunctions';
import { connect } from "react-redux";
import { AppState } from "../../../store/allReducers";
import { Action } from '../../../store/terminatest/';


import './TestMaker.scss';

interface Props{
  action:Action;
}

const TestMaker = (props:Props) => {

  const [formMakerTest] = useState<Array<string>>(props.action.inputsAttachment);

  return (
    <article className="TestMaker">
      <h4>TestMaker</h4>
      <Form>
        <InputSelectorFunctions />
        {formMakerTest.length === 0
        ? ""
        : props.action.title
        }
      </Form>
    </article>
  );
};

const mapStateToProps = (state: AppState) => ({
  action: state.actionReduce,
});

export default connect(
  mapStateToProps,
  {}
)(TestMaker);

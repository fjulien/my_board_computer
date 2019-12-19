import React from 'react';
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

  return (
    <article className="TestMaker">
      <h4>TestMaker</h4>
      <Form>
        <InputSelectorFunctions />
        {props.action.inputsAttachment.map((input:Function, index:number):JSX.Element=><div key={index}>{input()}</div>)}
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

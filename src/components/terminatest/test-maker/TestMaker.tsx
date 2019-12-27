import React, { SyntheticEvent } from 'react';
import { Form } from 'reactstrap';
import InputSelectorFunctions from '../inputs/InputSelectorFunctions';
import { connect } from "react-redux";
import { AppState } from "../../../store/allReducers";
import { Action, addActionInToTest } from '../../../store/terminatest/';


import './TestMaker.scss';

interface Props {
  action: Action;
  addActionInToTestRedux: Function;
}

const TestMaker = (props: Props) => {

  const addActionInTest = (event: SyntheticEvent): void => {
    const { addActionInToTestRedux, action } = props;
    event.preventDefault();
    
    addActionInToTestRedux(action.inputsAttachment);
  }

  return (
    <article className="TestMaker">
      <h4>TestMaker</h4>
      <Form onSubmit={(event: SyntheticEvent): void => addActionInTest(event)}>
        <InputSelectorFunctions />
        <ul>
          {props.action.inputsAttachment.map((input: Function, index: number): JSX.Element => <li key={index}>{input()}</li>)}
        </ul>
        <input
          type='submit'
          value='Add action'
          className='submit'
        />
      </Form>
    </article>
  );
};

const mapStateToProps = (state: AppState) => ({
  action: state.actionReduce,
});

export default connect(
  mapStateToProps,
  { addActionInToTestRedux: addActionInToTest }
)(TestMaker);

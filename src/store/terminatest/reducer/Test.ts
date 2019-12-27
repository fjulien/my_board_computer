import { addActionInTest, ADD_ACTION_IN_TEST, ActionInterface, TestInterface } from '../';

export class Test implements TestInterface {
  action:Array<ActionInterface>=[];
}

const initState = new Test(); 

export const testReduce = (state = initState, action:addActionInTest):Test => {
  switch (action.type) {
    case ADD_ACTION_IN_TEST:
      console.log(action.actionAdded)
      return state;

    default:
      return state;
  }
}
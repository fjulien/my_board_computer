import { Action, CHOOSE_ACTION, selectAction, addActionInTest, ADD_ACTION_IN_TEST } from '..';

export const chooseFunctions = (actionSelected:Action):selectAction => {
  return {
    type: CHOOSE_ACTION,
    actionSelected,
  }
}

export const addActionInToTest = (actionSelected:Action):addActionInTest => {
  return {
    type: ADD_ACTION_IN_TEST,
    actionAdded: actionSelected,
  }
}
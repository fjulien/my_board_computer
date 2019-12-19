import { Action, CHOOSE_ACTION, selectAction } from '..';

export const chooseFunctions = (actionSelected:Action):selectAction => {
  return {
    type: CHOOSE_ACTION,
    actionSelected,
  }
}
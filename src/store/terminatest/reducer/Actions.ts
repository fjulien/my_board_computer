import { Empty } from './../../../components/terminatest/Empty';
import { InputUrl, InputTimeWaitting, InputSelector, InputContent } from './../../../components/terminatest/inputs/';
import { ActionInterface, CHOOSE_ACTION, selectAction } from '..';

export class Action implements ActionInterface{
  title="";
  inputsAttachment=[Empty];
}

export const listActions:Array<Action> = [{
      title: 'Go to web page',
      inputsAttachment: [InputUrl, InputTimeWaitting],
    },{
      title: 'Complete input',
      inputsAttachment: [InputSelector, InputContent],
    },{
      title: 'Click on element',
      inputsAttachment: [InputSelector],
    },{
      title: 'Waitting',
      inputsAttachment: [InputTimeWaitting],
    },{
      title:  'Screen shot',
      inputsAttachment: [],
    }
  ];

const initState:Action = new Action();

export const actionReduce = (state = initState, action:selectAction):Action => {
  switch (action.type) {
    case CHOOSE_ACTION:
      return action.actionSelected;

    default:
      return state;
  }
}
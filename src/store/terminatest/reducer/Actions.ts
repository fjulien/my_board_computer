import { ActionInterface, CHOOSE_ACTION, selectAction } from '..';

export class Action implements ActionInterface{
  title="";
  inputsAttachment=[''];
}

export const listActions:Array<Action> = [{
      title: 'Go to web page',
      inputsAttachment: ['test'],
    },{
      title: 'Complete input',
      inputsAttachment: [],
    },{
      title: 'Click on element',
      inputsAttachment: [],
    },{
      title: 'Waitting',
      inputsAttachment: [],
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
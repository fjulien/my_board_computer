export interface Action {
  title:string;
  inputsAttachment:Array<Function>;
}

export const listActions:Array<Action> = [{
      title: 'Go to web page',
      inputsAttachment: [],
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
import { Action } from '../';

export interface ActionInterface {
  title:string;
  inputsAttachment:Array<()=>JSX.Element>;
}

export const CHOOSE_ACTION = "CHOOSE_ACTION";

export interface selectAction {
  type: typeof CHOOSE_ACTION;
  actionSelected: Action;
}
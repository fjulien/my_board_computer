import {ActionInterface} from '..';
import { Action } from '../';


export interface TestInterface{
  action:Array<ActionInterface>
}

export const ADD_ACTION_IN_TEST = 'ADD_ACTION_IN_TEST';

export interface addActionInTest {
  type: typeof ADD_ACTION_IN_TEST;
  actionAdded: Action;
}
import React, { useState } from 'react';
import { ToDo } from './ToDo';

import './tomorrow-must-to-do.scss';
import { toDoChange } from '../../store/tomorrow-must-to-do/action/tomorrow-must-to-do';

interface State {
  listToDos: Array<String>
}

export class TomorrowMustToDo extends React.Component<Object, State> {
  constructor({ }) {
    super({});
    this.state = {
      listToDos: ['']
    };
    this.setText = this.setText.bind(this);
    this.cleanList = this.cleanList.bind(this);
  }

  setText(text: string, index: number): void {
    const { listToDos } = this.state;
    this.setState({
      listToDos: toDoChange(listToDos, text, index),
    })
  }

  cleanList() {
    this.setState({
      listToDos: [''],
    })
  }

  render() {
    const { listToDos } = this.state;
    return (
      <section className="tomorrow-must-to-do">
        <h2 className='neon'>Tomorrow must to do</h2>
        {listToDos.map((todo: any, index: number): any =>
          <ToDo
            key={index}
            index={index}
            valueText={todo}
            valueChange={this.setText}
          />
        )}
        <button
          onDoubleClick={() => this.cleanList()}
          className='button-clean-all'
        >
          Clean all
        </button>
      </section>
    )
  };
}
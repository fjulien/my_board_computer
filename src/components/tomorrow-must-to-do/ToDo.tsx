import React from 'react';

import './tomorrow-must-to-do.scss';

interface Props {
  valueText: string;
  valueChange: Function;
  index: number
}

export const ToDo = (props: Props) => {
  return (
    <div className="to-do">
      <input
        type='text'
        value={props.valueText}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.valueChange(event.target.value, props.index)}
      />
      <button
        onClick={() => props.valueChange('', props.index)}>
        Clean
      </button>
    </div>
  );
};

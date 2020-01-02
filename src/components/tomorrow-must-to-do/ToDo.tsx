import React from 'react';

import './tomorrow-must-to-do.scss';

interface Props {
  value:string | undefined;
  valueChange:Function;
}

export const ToDo = (props:Props) => {
  return (
    <input
      className="to-do"
      type='text'
      value={props.value}
      onChange={(event:React.ChangeEvent<HTMLInputElement>) => props.valueChange(event.target.value)}
    />
  );
};

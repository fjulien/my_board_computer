import React, { useState } from 'react';
import { FormGroup, Label } from 'reactstrap';
import { chooseFunctions } from '../../../action/terminatest/';

export const InputSelectorFunctions = () => {
  const [functionSelected, setfunctionSelected] = useState("");

  chooseFunctions('');

  const handleAddrTypeChange = (e:any) => console.log(e.target.value)

  return (
    <FormGroup>
    <Label htmlFor="functionSelector">Select function
      < select
      onChange={e => handleAddrTypeChange(e)}
      >
        <option value="test">1</option>
        <option value="test1">2</option>
        <option>3</option>
    </select >
    </Label>
  </FormGroup>
  );
}

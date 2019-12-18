import React, { useState } from 'react';
import { FormGroup, Label } from 'reactstrap';
import { chooseFunctions } from '../../../action/terminatest/';
import { listActions } from '../../../store/terminatest'



export const InputSelectorFunctions = () => {

  const handleAddrTypeChange = (e:any) => chooseFunctions(e.target.value);

  return (
    <FormGroup>
    <Label htmlFor="functionSelector">Select function
      < select
      onChange={e => handleAddrTypeChange(e)}
      >
        {listActions.map((action:any) => 
          <option value={action.title}>{action.title}</option>
        )}
    </select >
    </Label>
  </FormGroup>
  );
}

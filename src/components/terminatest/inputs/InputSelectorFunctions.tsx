import React, { useState } from 'react';
import { FormGroup, Label } from 'reactstrap';
import { chooseFunctions } from '../../../action/terminatest/';
import { listActions, Action } from '../../../store/terminatest';



export const InputSelectorFunctions = () => {

  const [desableFirstOption, setDesableFirstOption] = useState(false);

  const handleAddrTypeChange = (e:any) => {
    setDesableFirstOption(true)
    if(!(e.target.value === "undefined")){
      const actionFound:Action|undefined = listActions.find((action:Action):Boolean=> action.title === e.target.value )
      chooseFunctions(actionFound);
    }     
  }

  return (
    <FormGroup>
    <Label htmlFor="functionSelector">
      < select
      onChange={e => handleAddrTypeChange(e)}
      >
        {desableFirstOption
        ?<option disabled>Select action</option> 
        :<option value="undefined" >Select action</option>}
        {listActions.map((action:Action, index:number) => 
          <option key={index} value={action.title}>{action.title}</option>
        )}
    </select >
    </Label>
  </FormGroup>
  );
}

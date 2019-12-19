import React, { useState } from 'react';
import { FormGroup, Label } from 'reactstrap';
import { chooseFunctions, listActions, Action } from '../../../store/terminatest/';
import { connect } from "react-redux";
import { AppState } from "../../../store/allReducers";

interface Props{
  chooseFunctionsRedux:Function;
}

const InputSelectorFunctions = (props:Props) => {

  const [desableFirstOption, setDesableFirstOption] = useState<boolean>(false);

  const handleAddrTypeChange = (e:any) => {
    setDesableFirstOption(true)
    if(!(e.target.value === "undefined")){
      const actionFound:Action = listActions.find((action:Action):Boolean=> action.title === e.target.value) || {title:"",inputsAttachment:[]};
      props.chooseFunctionsRedux(actionFound);
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

const mapStateToProps = (state: AppState) => ({
  action: state.actionReduce,
});

export default connect(
  mapStateToProps,
  { chooseFunctionsRedux: chooseFunctions }
)(InputSelectorFunctions);
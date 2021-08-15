import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import InputMask from "react-input-mask";
import Caregiver from "./Caregiver";

function ChildOne() {
  // InputMask date
  const [childOneDob, setChildOneDob] = React.useState("");
  return (
    <div>
      <h4>Child 1</h4>
      <hr className="mb-4" />
      <FormGroup>
        <Label htmlFor="childOneFname">First Name:</Label>
        <Input type="text" name="childOneFname" id="childOneFname" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="childOneLname">Last Name:</Label>
        <Input type="text" name="childOneLname" id="childOneLname" required />
      </FormGroup>
      <div className="form-row">
        <FormGroup className="col-sm-12 col-md-6 ">
          <Label htmlFor="childOneDob">Date of Birth:</Label>
          <InputMask
            className="form-control"
            value={childOneDob}
            onChange={(e) => setChildOneDob(e.target.value)}
            mask="99/99/9999"
          />
        </FormGroup>

        <FormGroup className="col-sm-12 col-md-6">
          <Label htmlFor="childOneGender">Gender:</Label>
          <Input type="select" name="childOneGender" id="childOneGender">
            <option value="" selected disabled>
              Choose...
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Input>
        </FormGroup>
      </div>
      <Caregiver />
    </div>
  );
}

export default ChildOne;

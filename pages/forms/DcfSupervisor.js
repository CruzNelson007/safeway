import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import InputMask from "react-input-mask";

function DcfSupervisor() {
  const [dcfSupervisorPrimary, setDcfSupervisorPrimary] = React.useState("");
  const [dcfSupervisorSecondary, setDcfSupervisorSecondary] =
    React.useState("");
  return (
    <div>
      <h4>DCF Supervisor</h4>
      <hr className="mb-4" />
      <FormGroup>
        <Label htmlFor="dcfSupervisorFname">First Name:</Label>
        <Input
          type="text"
          name="dcfSupervisorFname"
          id="dcfSupervisorFname"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="dcfSupervisorLname">Last Name:</Label>
        <Input
          type="text"
          name="dcfSupervisorLname"
          id="dcfSupervisorLname"
          required
        />
      </FormGroup>
      <div className="form-row">
        <FormGroup className="col-sm-12 col-md-6">
          <Label htmlFor="dcfSupervisorPrimary">Primary Phone Number:</Label>
          <InputMask
            name="dcfSupervisorPrimary"
            className="form-control"
            value={dcfSupervisorPrimary}
            onChange={(e) => setDcfSupervisorPrimary(e.target.value)}
            mask="+1\(999) 999-9999"
          />
        </FormGroup>
        <FormGroup className="col-sm-12 col-md-6">
          <Label htmlFor="dcfSupervisorSecondary">
            Secondary Phone Number:
          </Label>
          <InputMask
            name="dcfSupervisorSecondary"
            className="form-control"
            value={dcfSupervisorSecondary}
            onChange={(e) => setDcfSupervisorSecondary(e.target.value)}
            mask="+1\(999) 999-9999"
          />
        </FormGroup>
      </div>
      <FormGroup>
        <Label htmlFor="dcfSupervisorEmail">Email:</Label>
        <Input type="email" name="dcfSupervisorEmail" id="dcfSupervisorEmail" />
      </FormGroup>
    </div>
  );
}

export default DcfSupervisor;

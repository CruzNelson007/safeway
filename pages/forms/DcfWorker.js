import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import InputMask from "react-input-mask";

function DcfWorker() {
  const [childOneDcfPrimary, setChildOneDcfPrimary] = React.useState("");
  const [childOneDcfSecondary, setChildOneDcfSecondary] = React.useState("");
  return (
    <div>
      <h4>Assigned DCF Worker</h4>
      <hr className="mb-4" />
      <FormGroup>
        <Label htmlFor="childOneDcfWorkerFname">First Name:</Label>
        <Input
          type="text"
          name="childOneDcfWorkerFname"
          id="childOneDcfWorkerFname"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="childOneDcfWorkerLname">Last Name:</Label>
        <Input
          type="text"
          name="childOneDcfWorkerLname"
          id="childOneDcfWorkerLname"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="childOneDcfLink">DCF Link#</Label>
        <Input
          type="text"
          name="childOneDcfLink"
          id="childOneDcfLink"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="childOneDcfChildLink">DCF Child#</Label>
        <Input
          type="text"
          name="childOneDcfChildLink"
          id="childOneDcfChildLink"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="childOneDcfWorkerOffice">DCF Office:</Label>
        <Input
          type="text"
          name="childOneDcfWorkerOffice"
          id="childOneDcfWorkerOffice"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="childOneDcfWorkerRegion">Region:</Label>
        <Input
          type="text"
          name="childOneDcfWorkerRegion"
          id="childOneDcfWorkerRegion"
          required
        />
      </FormGroup>
      <div className="form-row">
        <FormGroup className="col-sm-12 col-md-6">
          <Label htmlFor="childOneDcfPrimary">Primary Phone Number:</Label>
          <InputMask
            name="childOneDcfPrimary"
            className="form-control"
            value={childOneDcfPrimary}
            onChange={(e) => setChildOneDcfPrimary(e.target.value)}
            mask="+1\(999) 999-9999"
          />
        </FormGroup>
        <FormGroup className="col-sm-12 col-md-6">
          <Label htmlFor="childOneDcfSecondary">Secondary Phone Number:</Label>
          <InputMask
            name="childOneDcfSecondary"
            className="form-control"
            value={childOneDcfSecondary}
            onChange={(e) => setChildOneDcfSecondary(e.target.value)}
            mask="+1\(999) 999-9999"
          />
        </FormGroup>
      </div>
      <FormGroup>
        <Label htmlFor="childOneDcfWorkerEmail">Email:</Label>
        <Input
          type="email"
          name="childOneDcfWorkerEmail"
          id="childOneDcfWorkerEmail"
        />
      </FormGroup>
    </div>
  );
}

export default DcfWorker;

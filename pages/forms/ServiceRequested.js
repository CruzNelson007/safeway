import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

function ServiceRequested() {
  return (
    <div>
      <h5>Credentialed Service Requested</h5>
      <hr className="mb-0 " />
      <p className="mb-4 text-muted">
        <small>* credentialed service</small>
      </p>
      <div className="form-row">
        <FormGroup className="col-sm-12">
          <Label htmlFor="serviceRequested">
            What service can we help you with?
          </Label>
          <Input type="select" id="serviceRequested">
            <option value="" selected disabled>
              Choose...
            </option>
            <option value="Parenting Support Services">
              *Parenting Support
            </option>
            <option value="Life Skills">Life Skills</option>
            <option value="Therapeutic Support Services/Support Services (Mentoring)">
              *Mentoring
            </option>
            <option value="Supervised Visits">*Supervised Visits</option>
            <option value="Individualized Home Supports/Companion Supports">
              *Home Support
            </option>
          </Input>
        </FormGroup>
        <FormGroup className="col-sm-12">
          <Label htmlFor="hoursOfService">Hours of service per week:</Label>
          <Input
            type="text"
            name="hoursOfService"
            id="hoursOfService"
            required
          />
        </FormGroup>
      </div>
    </div>
  );
}

export default ServiceRequested;

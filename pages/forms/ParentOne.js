import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import InputMask from "react-input-mask";

function ParentOne() {
  // InputMask phone
  const [parentOnePrimary, setParentOnePrimary] = React.useState("");
  const [parentOneSecondary, setParentOneSecondary] = React.useState("");
  const [parentOneZipCode, setParentOneZipCode] = React.useState("");
  return (
    <div>
      <h5>First Parent</h5>
      <hr className="mb-4" />
      <FormGroup>
        <Label htmlFor="parentOneFname">First Name:</Label>
        <Input type="text" name="parentOneFname" id="parentOneFname" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="parentOneLname">Last Name:</Label>
        <Input type="text" name="parentOneLname" id="parentOneLname" required />
      </FormGroup>

      <div className="form-row">
        <FormGroup className="col-sm-12 col-md-6">
          <Label htmlFor="parentOnePrimary">Primary Phone Number:</Label>
          <InputMask
            name="parentOnePrimary"
            className="form-control"
            value={parentOnePrimary}
            onChange={(e) => setParentOnePrimary(e.target.value)}
            mask="+1\(999) 999-9999"
          />
        </FormGroup>
        <FormGroup className="col-sm-12 col-md-6">
          <Label htmlFor="parentOneSecondary">Secondary Phone Number:</Label>
          <InputMask
            name="parentOneSecondary"
            className="form-control"
            value={parentOneSecondary}
            onChange={(e) => setParentOneSecondary(e.target.value)}
            mask="+1\(999) 999-9999"
          />
        </FormGroup>
      </div>
      <FormGroup>
        <Label htmlFor="parentOneAddress">Address:</Label>
        <Input
          type="text"
          name="parentOneAddress"
          id="parentOneAddress"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="parentOneCity">City:</Label>
        <Input type="text" name="parentOneCity" id="parentOneCity" required />
      </FormGroup>
      {/* STATE */}
      <div className="form-row">
        <FormGroup className="col-md-8">
          <Label htmlFor="parentOneState">State:</Label>
          <Input type="select" name="parentOneState" id="parentOneState">
            <option value="" selected disabled>
              Choose...
            </option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </Input>
        </FormGroup>

        <FormGroup className="col-md-4">
          <Label htmlFor="parentOneZipCode">Zip Code:</Label>
          <InputMask
            name="parentOneZipCode"
            className="form-control"
            value={parentOneZipCode}
            onChange={(e) => setParentOneZipCode(e.target.value)}
            mask="99999"
          />
        </FormGroup>
      </div>

      <FormGroup className="form-row">
        <Label htmlFor="parentOneRadio">Service Participant?</Label>
        <FormGroup check className="ml-4">
          <Label check>
            <Input type="radio" name="parentOneRadio" value="Yes" /> Yes
          </Label>
        </FormGroup>
        <FormGroup check className="ml-4">
          <Label check>
            <Input type="radio" name="parentOneRadio" value="No" /> No
          </Label>
        </FormGroup>
      </FormGroup>
    </div>
  );
}

export default ParentOne;

import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import InputMask from "react-input-mask";

function ParentTwo() {
  // InputMask phone
  const [parentTwoPrimary, setParentTwoPrimary] = React.useState("");
  const [parentTwoSecondary, setParentTwoSecondary] = React.useState("");
  const [parentTwoZipCode, setParentTwoZipCode] = React.useState("");
  return (
    <div>
      <h5>Second Parent</h5>
      <hr className="mb-4" />
      <FormGroup>
        <Label htmlFor="parentTwoFname">First Name:</Label>
        <Input type="text" name="parentTwoFname" id="parentTwoFname" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="parentTwoLname">Last Name:</Label>
        <Input type="text" name="parentTwoLname" id="parentTwoLname" required />
      </FormGroup>

      <div className="form-row">
        <FormGroup className="col-sm-12 col-md-6">
          <Label htmlFor="parentTwoPrimary">Primary Phone Number:</Label>
          <InputMask
            name="parentTwoPrimary"
            className="form-control"
            value={parentTwoPrimary}
            onChange={(e) => setParentTwoPrimary(e.target.value)}
            mask="+1\(999) 999-9999"
          />
        </FormGroup>
        <FormGroup className="col-sm-12 col-md-6">
          <Label htmlFor="parentTwoSecondary">Secondary Phone Number:</Label>
          <InputMask
            name="parentTwoSecondary"
            className="form-control"
            value={parentTwoSecondary}
            onChange={(e) => setParentTwoSecondary(e.target.value)}
            mask="+1\(999) 999-9999"
          />
        </FormGroup>
      </div>
      <FormGroup>
        <Label htmlFor="parentTwoAddress">Address:</Label>
        <Input
          type="text"
          name="parentTwoAddress"
          id="parentTwoAddress"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="parentTwoCity">City:</Label>
        <Input type="text" name="parentTwoCity" id="parentTwoCity" required />
      </FormGroup>
      {/* STATE */}
      <div className="form-row">
        <FormGroup className="col-md-8">
          <Label htmlFor="parentTwoState">State:</Label>
          <Input type="select" name="parentTwoState" id="parentTwoState">
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
          <Label htmlFor="parentTwoZipCode">Zip Code:</Label>
          <InputMask
            name="parentTwoZipCode"
            className="form-control"
            value={parentTwoZipCode}
            onChange={(e) => setParentTwoZipCode(e.target.value)}
            mask="99999"
          />
        </FormGroup>
      </div>

      <FormGroup className="form-row">
        <Label htmlFor="parentTwoRadio">Service Participant?</Label>
        <FormGroup check className="ml-4">
          <Label check>
            <Input type="radio" name="parentTwoRadio" value="Yes" /> Yes
          </Label>
        </FormGroup>
        <FormGroup check className="ml-4">
          <Label check>
            <Input type="radio" name="parentTwoRadio" value="No" /> No
          </Label>
        </FormGroup>
      </FormGroup>
    </div>
  );
}

export default ParentTwo;

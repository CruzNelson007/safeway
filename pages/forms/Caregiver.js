import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import InputMask from "react-input-mask";

function Caregiver() {
  const [childOneCaregiverZipCode, setChildOneCaregiverZipCode] =
    React.useState("");
  const [childOneCaregiverPrimary, setChildOneCaregiverPrimary] =
    React.useState("");
  const [childOneCaregiverSecondary, setChildOneCaregiverSecondary] =
    React.useState("");
  return (
    <div>
      <FormGroup>
        <Label htmlFor="childOneDcfCaseStatus">DCF Case Status:</Label>
        <Input
          type="text"
          name="childOneDcfCaseStatus"
          id="childOneDcfCaseStatus"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="childOneCaregiver">Current Caregiver:</Label>
        <Input
          type="text"
          name="childOneCaregiver"
          id="childOneCaregiver"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="childOneCaregiverRelationship">Relationship:</Label>
        <Input
          type="text"
          name="childOneCaregiverRelationship"
          id="childOneCaregiverRelationship"
          required
        />
      </FormGroup>
      <div className="form-row">
        <FormGroup className="col-md-6">
          <Label htmlFor="childOneCaregiverPrimary">
            Primary Phone Number:
          </Label>
          <InputMask
            name="childOneCaregiverPrimary"
            className="form-control"
            value={childOneCaregiverPrimary}
            onChange={(e) => setChildOneCaregiverPrimary(e.target.value)}
            mask="+1\(999) 999-9999"
          />
        </FormGroup>
        <FormGroup className="col-md-6">
          <Label htmlFor="childOneCaregiverSecondary">
            Secondary Phone Number:
          </Label>
          <InputMask
            name="childOneCaregiverSecondary"
            className="form-control"
            value={childOneCaregiverSecondary}
            onChange={(e) => setChildOneCaregiverSecondary(e.target.value)}
            mask="+1\(999) 999-9999"
          />
        </FormGroup>
      </div>
      <FormGroup>
        <Label htmlFor="childOneCaregiverAddress">Address:</Label>
        <Input
          type="text"
          name="childOneCaregiverAddress"
          id="childOneCaregiverAddress"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="childOneCaregiverCity">City:</Label>
        <Input
          type="text"
          name="childOneCaregiverCity"
          id="childOneCaregiverCity"
          required
        />
      </FormGroup>
      <div className="form-row">
        <FormGroup className="col-md-8">
          <Label htmlFor="childOneCaregiverState">State:</Label>
          <Input
            type="select"
            name="childOneCaregiverState"
            id="childOneCaregiverState"
          >
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
          <Label htmlFor="childOneCaregiverZipCode">Zip Code:</Label>
          <InputMask
            name="childOneCaregiverZipCode"
            className="form-control"
            value={childOneCaregiverZipCode}
            onChange={(e) => setChildOneCaregiverZipCode(e.target.value)}
            mask="99999"
          />
        </FormGroup>
      </div>
      <FormGroup className="form-row">
        <Label htmlFor="childOneCaregiverRadio">Service Participant?</Label>
        <FormGroup check className="ml-4">
          <Label check>
            <Input type="radio" name="childOneCaregiverRadio" value="Yes" /> Yes
          </Label>
        </FormGroup>
        <FormGroup check className="ml-4">
          <Label check>
            <Input type="radio" name="childOneCaregiverRadio" value="No" /> No
          </Label>
        </FormGroup>
      </FormGroup>
    </div>
  );
}

export default Caregiver;

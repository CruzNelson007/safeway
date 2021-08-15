import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

function FamilyNeeds() {
  return (
    <div className="mb-5">
      <h4>Family Needs</h4>
      <hr className="mb-4" />
      <p className="lead">Transportation Needed?</p>

      <FormGroup>
        <Label htmlFor="transportationChildName">
          Child&#40;ren&#41; Name:
        </Label>
        <Input
          type="text"
          name="transportationChildName"
          id="transportationChildName"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="transportationParentName">
          Parent&#40;s&#41; Name:
        </Label>
        <Input
          type="text"
          name="transportationParentName"
          id="transportationParentName"
          required
        />
      </FormGroup>
      <p className="lead">Pick Up/Drop Off Location?</p>
      <FormGroup>
        <Label htmlFor="pickUpLocationChildName">
          Child&#40;ren&#41; Pickup/Drop Off Address:
        </Label>
        <Input
          type="text"
          name="pickUpLocationChildName"
          id="pickUpLocationChildName"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="pickUpLocationParentName">
          Parent&#40;s&#41; Pickup/Drop Off Address:
        </Label>
        <Input
          type="text"
          name="pickUpLocationParentName"
          id="pickUpLocationParentName"
          required
        />
      </FormGroup>
      <p className="lead">Medical Needs?</p>
      <FormGroup>
        <Label htmlFor="medications">
          Medications/Medical Concerns/Allergies for Child:
        </Label>
        <Input type="text" name="medications" id="medications" required />
      </FormGroup>
      <p className="lead">DCF Case Plan Goal?</p>
      <FormGroup>
        <Label htmlFor="dcfCasePlanGoal">
          What is the DCF Case Plan Goal for this family:
        </Label>
        <Input
          type="text"
          name="dcfCasePlanGoal"
          id="dcfCasePlanGoal"
          required
        />
      </FormGroup>
      <p className="lead">Critical Needs?</p>
      <FormGroup>
        <Label htmlFor="criticalFamilyNeeds">
          What are the critical family needs:
        </Label>
        <Input
          type="text"
          name="criticalFamilyNeeds"
          id="criticalFamilyNeeds"
          required
        />
      </FormGroup>
      <p className="lead">Family Strengths?</p>
      <FormGroup>
        <Label htmlFor="familyStrengths">What are the strengths:</Label>
        <Input
          type="text"
          name="familyStrengths"
          id="familyStrengths"
          required
        />
      </FormGroup>
      <p className="lead">Safety Concerns?</p>
      <FormGroup>
        <Label htmlFor="safetyConcerns">
          What are the safety concerns &#40;ie: risk to run, inappropriate
          people during visits&#41;:
        </Label>
        <Input type="text" name="safetyConcerns" id="safetyConcerns" required />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="expectedOutcome">Expected Outcome of Service:</Label>
        <Input
          type="text"
          name="expectedOutcome"
          id="expectedOutcome"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="otherServices">
          Other Services in place or completed:
        </Label>
        <Input type="text" name="otherServices" id="otherServices" required />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="specialConsiderations">
          Any other special considerations &#40;language, disabilities,
          cultural&#41;:
        </Label>
        <Input
          type="text"
          name="specialConsiderations"
          id="specialConsiderations"
          required
        />
      </FormGroup>
    </div>
  );
}

export default FamilyNeeds;

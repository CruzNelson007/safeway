import React, { useState } from "react";
import {
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import ServiceRequested from "./ServiceRequested";
import ParentOne from "./ParentOne";
import ParentTwo from "./ParentTwo";
import ChildOne from "./ChildOne";
import DcfWorker from "./DcfWorker";
import DcfSupervisor from "./DcfSupervisor";
import FamilyNeeds from "./FamilyNeeds";

function ReferralForm() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // Handle On Submit Button
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    // Object with properties associated with the names of each field and their value
    Array.from(e.currentTarget.elements).map((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    //fetch form data
    fetch("/api/referral", {
      method: "post",
      body: JSON.stringify(formData),
    });

    console.log(formData);
  }
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Get Referral
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Referral Form</ModalHeader>
        <ModalBody>
          <Form id="mainForm" method="post" onSubmit={handleOnSubmit}>
            <ServiceRequested />
            <ParentOne />
            <ParentTwo />
            <ChildOne />
            <DcfWorker />
            <DcfSupervisor />
            <FamilyNeeds />
            <Button type="submit" color="success" className="btn-block mb-3">
              Submit
            </Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button block type="reset" color="danger mt-3" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
        <p className="text-muted text-center my-4">
          <strong>Safeway Family Services LLC</strong> <br />
          3101 Main St. 1st Floor <br />
          Bridgeport, CT 06606 <br />
          203 - 727 - 4629 <br />
        </p>
      </Modal>
    </div>
  );
}

export default ReferralForm;

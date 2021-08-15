import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function MainForm(props) {
  const { buttonLabel, modalTitle, textColor, referralForm } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={textColor}>
        <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
        <ModalBody>{referralForm}</ModalBody>
        <ModalFooter>
          <Button block color="danger mt-3" onClick={toggle}>
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

export default MainForm;

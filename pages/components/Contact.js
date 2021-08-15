import React from "react";
import {
  List,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { FaUserAlt, FaEnvelope, FaPen } from "react-icons/fa";

function Contact() {
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
    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(formData),
    });

    console.log(formData);
  }
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="mb-3">Contact</h1>
            <Form method="post" onSubmit={handleOnSubmit}>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FaUserAlt />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type="text" name="name" placeholder="Name" required />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FaEnvelope />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FaPen />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="textarea"
                    name="message"
                    placeholder="Message"
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary btn-block"
                />
              </FormGroup>
            </Form>
          </div>
          <div className="col-md-4 text-center d-flex flex-column align-items-center justify-content-center mt-5">
            <List type="unstyled">
              <li>
                <h4>Safeway Family Services</h4>
              </li>
              <li>3101 Main St 1st Floor</li>
              <li>Bridgeport, CT 06606</li>
              <li>203-727-4629</li>
            </List>
            <List type="unstyled">
              <li>
                <h5>Business Hours</h5>
              </li>
              <li>Monday - Friday : 8AM - 5PM</li>
              <li>Saturday : 8AM - 1PM</li>
              <li>Sunday : Closed</li>
            </List>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

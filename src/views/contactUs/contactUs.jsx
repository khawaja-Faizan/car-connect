import React from "react";
import { Col, Row } from "react-bootstrap";

import InputContainer from "../../shared/components/inputs/inputContainer";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="customer-services__header">
        <h1>Contact Us</h1>
        <div className="underline"></div>
      </div>

      <p>You have any questions or need additional information?</p>
      <h3>
        <span> Address: </span>Car|Rental / 3861 Sepulveda Blvd. / Culver City,
        CA 90230
      </h3>
      <Row>
        <Col md={6} sm={12}>
          <InputContainer
            groupText="First Name"
            placeholder="First Name"
            type="text"
            register={false}
            required={false}
          />
        </Col>
        <Col md={6} sm={12}>
          <InputContainer
            groupText="Last Name"
            placeholder="Last Name"
            type="text"
            register={false}
            required={false}
          />
        </Col>
        <Col md={6} sm={12}>
          <InputContainer
            groupText="Number"
            placeholder="Phone Number"
            type="number"
            register={false}
            required={false}
          />
        </Col>
        <Col md={6} sm={12}>
          <InputContainer
            groupText="Address"
            placeholder="Address"
            type="text"
            register={false}
            required={false}
          />
        </Col>
        <Col md={12} sm={12}>
          <textarea></textarea>
        </Col>
      </Row>
    </section>
  );
};

export default ContactUs;

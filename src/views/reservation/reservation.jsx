import React from "react";
import { Form, useForm } from "react-hook-form";
import { Button, Col, Row } from "reactstrap";
import {
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import InputContainer from "../../shared/components/inputs/inputContainer";

const Reservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="reservation">
      <div className="form-container">
        <Form validated onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={3} sm={12}>
              <InputContainer
                icon={faLocationDot}
                iconSize="sm"
                groupText="Pick-up"
                type="text"
                placeholder="Enter a city or airport"
                register="city"
                required
              />
            </Col>
            <Col md={3} sm={12}>
              <InputContainer
                icon={faCalendarDays}
                iconSize="sm"
                groupText="Pick-up"
                type="date"
                register="pickUp"
                required
              />
            </Col>
            <Col md={3} sm={12}>
              <InputContainer
                icon={faCalendarDays}
                iconSize="sm"
                groupText="Drop-off"
                type="date"
                register="dropOff"
                required
              />
            </Col>
            <Col md={3} sm={12}>
              <div className="reservation-continue">
                <Button className="reservation-continue__btn">
                  Continue Reservation
                </Button>
              </div>
            </Col>
          </Row>

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
        </Form>
      </div>
    </section>
  );
};

export default Reservation;

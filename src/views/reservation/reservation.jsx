import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Row } from "reactstrap";
import {
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import InputContainer from "../../shared/components/inputs/inputContainer";
import Model from "../../shared/components/modal/modal";

const Reservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [modal, setModal] = useState(false);

  // Toggle between the open state of modal
  const toggleModal = () => {
    setModal(!modal);
  };
  const onSubmit = (data) => {
    toggleModal();
  };

  return (
    <section className="reservation">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={3} sm={12}>
              <InputContainer
                icon={faLocationDot}
                iconSize="sm"
                groupText="Pick-up"
                name="city"
                type="text"
                placeholder="Enter a city or airport"
                register={register}
                errors={errors}
                required={true}
              />
            </Col>
            <Col md={3} sm={12}>
              <InputContainer
                icon={faCalendarDays}
                iconSize="sm"
                groupText="Pick-up"
                name="pickUp"
                type="date"
                register={register}
                errors={errors}
                required={true}
              />
            </Col>
            <Col md={3} sm={12}>
              <InputContainer
                icon={faCalendarDays}
                iconSize="sm"
                groupText="Drop-off"
                name="dropOff"
                type="date"
                register={register}
                errors={errors}
                required={true}
              />
            </Col>
            <Col md={3} sm={12}>
              <div className="reservation-continue">
                <Button type="submit" className="reservation-continue__btn">
                  Continue Reservation
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Model modal={modal} toggle={toggleModal}></Model>
          </Row>
        </form>
      </div>
    </section>
  );
};

export default Reservation;

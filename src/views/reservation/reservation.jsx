import {
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";

const Reservation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="reservation">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={4} sm={12}>
              <InputGroup>
                <InputGroupText>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    beat
                    size="2xs"
                    className="location-icon"
                  />
                  <span>City</span>
                </InputGroupText>
                <Input placeholder="username" />
              </InputGroup>
            </Col>
            <Col md={4} sm={12}>
              <InputGroup>
                <InputGroupText>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    size="2xs"
                    className="calendar-icon"
                  />
                  <span>Pick-up</span>
                </InputGroupText>
                <Input placeholder="username" />
              </InputGroup>
            </Col>
            <Col md={4} sm={12}>
              <InputGroup>
                <InputGroupText>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    size="2xs"
                    className="calendar-icon"
                  />
                  <span>Drop-off</span>
                </InputGroupText>
                <Input placeholder="username" />
              </InputGroup>
            </Col>
            <Col md={4} sm={12}>
              <input type="submit" />
            </Col>
          </Row>

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
        </form>
      </div>
    </section>
  );
};

export default Reservation;

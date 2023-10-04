import React from "react";
import { Card, CardBody, CardTitle, CardText, Row, Col } from "reactstrap";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import services from "../../system/data/services.json";

const CustomerServices = () => {
  return (
    <>
      <section className="customer-services">
        <div className="customer-services__header">
          <h1>Customer Services</h1>
          <div className="underline"></div>
        </div>
        <Row>
          {services.map((service) => (
            <Col md={6} sm={12}>
              <Card>
                <CardBody>
                  <CardTitle tag="h5">
                    <FontAwesomeIcon
                      className="card-title__icon"
                      icon={faSquarePlus}
                      size="2xl"
                    />
                    <span className="card-title__text">{service.title}</span>
                  </CardTitle>

                  <CardText>{service.details}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default CustomerServices;

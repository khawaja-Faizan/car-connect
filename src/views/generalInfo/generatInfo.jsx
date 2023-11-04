import React from "react";
import { Col, Row } from "react-bootstrap";
import carInterior from "../../assets/images/carInterior.jpeg";

const GeneralInfo = () => {
  return (
    <section className="info">
      <Row>
        <Col lg={6} md={6} sm={12}>
          <img className="car-interior" src={carInterior} alt="car-interior" />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <h2>Quality Guaranteed</h2>
          <h6>
            Here is an example with one single photo displayed with the text.
          </h6>
          <p>
            Here is some dummy text.<span>Hover over me!</span> Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Unde, vero voluptas
            delectus explicabo maxime ad qui incidunt! Saepe.
          </p>
          <button className="info_more-btn">More information</button>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/itleNBrMkw8"
          ></iframe>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <h2>Watch our info tour</h2>
          <h6>You can also show youtube videos in this section!</h6>
          <p>
            Here is some dummy text. Lorem ipsum dolor sit amet,
            <span> This is an labeled text snippet!,</span> sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
            diam voluptua.{" "}
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vero
            voluptas delectus explicabo maxime ad qui incidunt! no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
          </p>
        </Col>
      </Row>
      <div>About</div>
    </section>
  );
};

export default GeneralInfo;

import {
  faFacebookF,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Input } from "reactstrap";

const Subscription = () => {
  return (
    <section className="subscription">
      <div className="subscription_wrapper">
        <Row>
          <Col md={4} sm={12} className="col-section">
            <h3>SIGN UP FOR AMAZING OFFERS</h3>
            <h6>EXCLUSIVE ACCESS FOR OFFERS AND PROMOTIONS</h6>
          </Col>
          <Col md={4} sm={12} className="col-section">
            <div className="subscription_form">
              <Input type="email" placeholder="Enter Your Email Address" />
              <Button>SEND</Button>
            </div>
          </Col>
          <Col md={4} sm={12} className="col-section">
            <div className="media-icons">
              <div className="media-icons_facebook">
                <FontAwesomeIcon icon={faFacebookF} size="2xl" />
              </div>
              <div className="media-icons_google">
                <FontAwesomeIcon icon={faGoogle} size="2xl" />
              </div>
              <div className="media-icons_twitter">
                <FontAwesomeIcon icon={faXTwitter} size="2xl" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Subscription;

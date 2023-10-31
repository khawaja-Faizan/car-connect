import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Row, Table } from "reactstrap";

export const ModelsView = (props) => {
  return (
    <div className="model-view">
      <Row>
        <Col md={8} sm={12}>
          <img src={props.img} />
        </Col>
        <Col md={4} sm={12}>
          <div>
            <div className="model-rate">
              <h4>
                <span>$37.40</span> rent per day
              </h4>
            </div>
            <Table hover>
              <tbody>
                <tr>
                  <th scope="row">Model</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">Doors</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">Seats</th>
                  <td>Larry</td>
                </tr>
                <tr>
                  <th scope="row">Transmission</th>
                  <td>Larry</td>
                </tr>
                <tr>
                  <th scope="row">Air Conditioning</th>
                  <td>Larry</td>
                </tr>
                <tr>
                  <th scope="row">Minimum age</th>
                  <td>Larry</td>
                </tr>
              </tbody>
            </Table>
            <div className="reserve-now">
              <Button className="reserve-now__btn">
                {" "}
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  size="xl"
                  className="reserve-now__icon"
                />
                <span>Reserve Now</span>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

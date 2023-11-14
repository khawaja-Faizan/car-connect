import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Row, Table } from "reactstrap";

export const ModelsView = (props) => {
  const { data } = props;
  return (
    <div className="model-view">
      <Row>
        <Col md={8} sm={12}>
          <img src={data.img} />
        </Col>
        <Col md={4} sm={12}>
          <div>
            <div className="model-rate">
              <h4>
                <span>${data.rent}</span> rent per day
              </h4>
            </div>
            <Table hover>
              <tbody>
                <tr>
                  <th scope="row">Model</th>
                  <td>{data.model}</td>
                </tr>
                <tr>
                  <th scope="row">Doors</th>
                  <td>{data.doors}</td>
                </tr>
                <tr>
                  <th scope="row">Seats</th>
                  <td>{data.seats}</td>
                </tr>
                <tr>
                  <th scope="row">Transmission</th>
                  <td>{data.transmission}</td>
                </tr>
                <tr>
                  <th scope="row">Air Conditioning</th>
                  <td>{data.airConditioning ? "Yes" : "No"}</td>
                </tr>
                <tr>
                  <th scope="row">Minimum age</th>
                  <td>{data.maxAge}</td>
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

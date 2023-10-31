import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import carThree from "../../assets/images/car03.png";
import carTwo from "../../assets/images/car02.png";
import { ModelsView } from "../../shared/components/vehicleModelsView/modelsView";
import { Col, Row } from "reactstrap";

const VehicleModels = () => {
  const { Select } = Form;
  const [model, setModel] = useState("1");

  const modelChanged = (e) => {
    setModel(e.target.value);
    console.log(e.target.value);
  };

  // const data = [
  //   {
  //     name: "Gray X5 Bmw",
  //     rent: 35.53,
  //     seats: 5,
  //     doors: 4,
  //     airConditioning: true,
  //     maximumAge: 20,
  //     img: carThree,
  //   },
  //   {
  //     name: "SL63 AMG",
  //     rent: 47.4,
  //     seats: 2,
  //     doors: 2,
  //     airConditioning: true,
  //     maximumAge: 23,
  //     img: carThree,
  //   },
  //   {
  //     name: "SL63 AMG",
  //     rent: 47.4,
  //     seats: 2,
  //     doors: 2,
  //     airConditioning: true,
  //     maximumAge: 23,
  //     img: carFour,
  //   },
  // ];

  const showModel = () => {
    switch (model) {
      case "1":
        return <ModelsView img={carThree} data />;
      case "2":
        return <ModelsView img={carTwo} />;
      default:
        return "foo";
    }
  };
  return (
    <section className="vehicle-models">
      <div className="vehicle-models__header">
        <h1>
          <span>Vehicle Models</span> - Our rental fleet at a glance
        </h1>
      </div>
      <div>
        <Row>
          <Col md={3} sm={12}>
            <Select onChange={(e) => modelChanged(e)}>
              <option value={1}>One</option>
              <option value={2}>Two</option>
            </Select>
          </Col>
          <Col md={9} sm={12}>
            {showModel()}
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default VehicleModels;

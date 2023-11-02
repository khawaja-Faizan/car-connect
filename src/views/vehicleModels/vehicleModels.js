import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import carOne from "../../assets/images/displayModels/Gray-X5-Bmw.png";
import carTwo from "../../assets/images/displayModels/SL63-AMG.png";
import carThree from "../../assets/images/displayModels/Toyota-Yaris.png";
import carFour from "../../assets/images/displayModels/Toyota-Sequoia.png";
import carFive from "../../assets/images/displayModels/Acura.png";
import { ModelsView } from "../../shared/components/vehicleModelsView/modelsView";
import { Col, Row } from "reactstrap";
import { Button } from "react-bootstrap";

const VehicleModels = () => {
  const { Select } = Form;
  const [model, setModel] = useState(0);

  const modelChanged = (e) => {
    setModel(parseInt(e.target.value));
    console.log(e.target.value);
  };

  const data = [
    {
      id: 0,
      name: "Gray X5 Bmw",
      transmission: "Automatic",
      model: "X5 M50i",
      rent: 35.53,
      seats: 5,
      doors: 4,
      airConditioning: true,
      maxAge: 24,
      img: carOne,
    },
    {
      id: 1,
      name: "SL63 AMG",
      transmission: "Automatic",
      model: "X5 M50i",
      rent: 47.4,
      seats: 2,
      doors: 2,
      airConditioning: true,
      maxAge: 24,
      img: carTwo,
    },
    {
      id: 2,
      name: "Toyota Yaris",
      transmission: "Automatic",
      model: "CE 3-door",
      rent: 35,
      seats: 3,
      doors: 5,
      airConditioning: true,
      maxAge: 20,
      img: carThree,
    },
    {
      id: 3,
      name: "Toyota Sequoia",
      transmission: "Automatic / Manual Mode",
      model: "4WD SR5 5.7L",
      rent: 68.55,
      seats: 8,
      doors: 5,
      airConditioning: true,
      maxAge: 26,
      img: carFour,
    },
    {
      id: 4,
      name: "Acura RLX",
      transmission: "Automatic / Sequential Sportshift",
      model: "TECH",
      rent: 68.55,
      seats: 8,
      doors: 5,
      airConditioning: true,
      maxAge: 26,
      img: carFive,
    },
  ];

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
            <div className="sm-selection">
              <Select onChange={(e) => modelChanged(e)}>
                {data.map((model) => (
                  <option value={model.id}>{model.name}</option>
                ))}
              </Select>
            </div>
            <div className="md-selection">
              {data.map((model) => (
                <div className="md-selection_btn">
                  <Button value={model.id}>{model.name}</Button>
                </div>
              ))}
            </div>
          </Col>
          <Col md={9} sm={12}>
            <ModelsView data={data[model]} />;
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default VehicleModels;

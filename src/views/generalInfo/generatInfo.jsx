import React from "react";

import carInterior from "../../assets/images/carInterior.jpeg";
import ToolTip from "../../shared/components/tooltip/tooltip";

const GeneralInfo = () => {
  return (
    <section className="info">
      <div className="quality-info">
        <div className="img-container">
          <img className="car-interior" src={carInterior} alt="car-interior" />
        </div>
        <div className="text-container">
          <h2>Quality Guaranteed</h2>
          <h6>
            Here is an example with one single photo displayed with the text.
          </h6>
          <p>
            Here is some dummy text.{" "}
            <ToolTip id="t-1" title="This is a tooltip">
              Hover over me!
            </ToolTip>{" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vero
            voluptas delectus explicabo maxime ad qui incidunt! Saepe.
          </p>
          <button className="text-container_more-btn">More information</button>
        </div>
      </div>
      <div className="tour-info">
        <div className="video-container">
          <iframe
            title="tour-video"
            className="tour-video"
            src="https://www.youtube.com/embed/itleNBrMkw8"
          />
        </div>
        <div className="text-container">
          <h2>Watch our info tour</h2>
          <h6>You can also show youtube videos in this section!</h6>
          <p>
            Here is some dummy text. Lorem ipsum dolor sit amet,
            <span className="labeled-text">
              {" "}
              This is an labeled text snippet!,
            </span>{" "}
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua.{" "}
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vero
            voluptas delectus explicabo maxime ad qui incidunt! no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfo;

import React from "react";
import images from "../../constants/images";
const SubHeading = () => {
  return (
    <section className="padding-block-900">
      <div className="container">
        <div className="even-columns">
          <div>
            <h1 className="fs-primary-heading fw-bold">
              Bring everyone together to build better products.
            </h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="button"> Get Started</button>
          </div>
          <div>
            <img
              src={images.Illustration}
              alt="illustration graph"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHeading;

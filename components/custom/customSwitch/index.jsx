import React from "react";

const CustomSwitch = ({ title, id }) => {
  return (
    <div className="filter-box pb">
      <div className="custom-switch d-flex align-items-center ev-yekase-filter">
        <input
          type="checkbox"
          id={`switch__${id}`}
          className="custom-switch__input"
        />{" "}
        <label for={`switch__${id}`} className="custom-switch__label">
          <span className="circle"></span>
        </label>
      </div>{" "}
      <label for={`switch__${id}`} className="filter-box-title">
        <span className="d-block font-size-9 m-0">{title}</span>
      </label>
    </div>
  );
};

export default CustomSwitch;

import React, { useContext, useState } from "react";
import ContextListProductPage from "../../../containers/listProduct/Context/context";

const CustomSwitch = ({ id, title, onChange }) => {
  const { listProducts, setlistProducts, mainList, setItemInFilterList } =
    useContext(ContextListProductPage);
  const _ = require("lodash");

  const copyList = _.filter(listProducts, { discount: 0 });

  return (
    <div className="filter-box pb">
      <div className="custom-switch d-flex align-items-center ev-yekase-filter">
        <input
          type="checkbox"
          id={`switch__${id}`}
          className="custom-switch__input"
          onChange={onChange}
        />{" "}
        <label htmlFor={`switch__${id}`} className="custom-switch__label">
          <span className="circle"></span>
        </label>
      </div>{" "}
      <label htmlFor={`switch__${id}`} className="filter-box-title">
        <span className="d-block font-size-9 m-0">{title}</span>
      </label>
    </div>
  );
};

export default CustomSwitch;

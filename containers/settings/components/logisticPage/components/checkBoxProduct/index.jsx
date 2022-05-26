import React from "react";
import st from "./checkBoxProduct.module.scss";

function CheckBoxProduct({ title, wordSearch }) {
  const getHighlightText = (title, wordSearch) => {
    const startIndex = title.indexOf(wordSearch);
    return startIndex !== -1 ? (
      <span>
        {title.substring(0, startIndex)}
        <span style={{ color: "#02b7ff" }}>
          {title.substring(startIndex, startIndex + wordSearch.length)}
        </span>
        {title.substring(startIndex + wordSearch.length)}
      </span>
    ) : (
      <span>{title}</span>
    );
  };

  return (
    <>
      <div style={{ marginBottom: "16px" }} className="form-check">
        <input
          style={{ float: "right", cursor: "pointer" }}
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          // checked={}
        />
        <label
          style={{ marginRight: "25px", color: "#000000A1", cursor: "pointer" }}
          className={st.label}
          htmlFor="flexCheckDefault"
        >
          {getHighlightText(title, wordSearch)}
        </label>
      </div>
    </>
  );
}

export default CheckBoxProduct;

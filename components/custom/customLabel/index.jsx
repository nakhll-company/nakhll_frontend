import React from "react";
import styles from "../../../styles/components/custom/label.module.scss";

const CustomLabel = ({
  type,
  value,
  label,
  customLabelDiv,
  customLabel,
  customValue,
  valuePrice,
  valueOldPrice,
}) => {
  return (
    <>
      {type === "normal" && (
        <div
          className={`${styles.label} ${
            customLabelDiv !== undefined && styles.wrapper_custom_label
          }`}
        >
          <span
            className={`${styles.span_label} ${
              customLabel !== undefined && styles.customLabel
            }`}
          >
            {label !== "" && `${label}:`}
          </span>
          <span
            className={`${styles.span_value} ${
              customValue !== undefined && styles.customValue
            }`}
          >
            {value}
          </span>
        </div>
      )}
      {type === "price" && (
        <div
          className={`${styles.label} ${
            customLabelDiv !== undefined && styles.wrapper_custom_label
          }`}
        >
          <span
            className={`${styles.span_label} ${
              customLabel !== undefined && styles.customLabel
            }`}
          >
            {label}:
          </span>
          <del dir="rtl">{valuePrice}</del>&nbsp;
          <b dir="rtl">{valueOldPrice}</b>
        </div>
      )}
    </>
  );
};
// export
export default CustomLabel;

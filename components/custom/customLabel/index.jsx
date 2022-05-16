import React from "react";
import styles from "../../../styles/components/custom/label.module.scss";
/**
 * component of custom badge
 * @param {string} value => value of label
 * @param {string} label => label of label
 * @param {string} customLabelDiv => class name of div wrapper of labels
 * @param {string} customLabel => class name of span label
 * @param {string} customValue => class name of span value
 * @param {string} valuePrice => class name of span value
 * @param {string} valueOldPrice => class name of span value
 */
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

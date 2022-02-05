import React from "react";
import styles from "./customSwitch.module.scss";

const CustomSwitch = ({
  id,
  title,
  onChange,
  checked,
  defaultChecked,
  onClick,
}) => {
  return (
    <div className={styles.filter_box}>
      <div className={`${styles.custom_switch} d-flex align-items-center `}>
        <input
          type="checkbox"
          id={`switch__${id}`}
          className={styles.custom_switch__input}
          onChange={onChange}
          onClick={onClick}
          defaultChecked={defaultChecked}
          checked={checked}
        />{" "}
        <label
          htmlFor={`switch__${id}`}
          className={styles.custom_switch__label}
        >
          <span className={styles.circle}></span>
        </label>
      </div>{" "}
      {title && (
        <label htmlFor={`switch__${id}`} className={styles.filter_box_title}>
          <span className="d-block font-size-9 m-0">{title}</span>
        </label>
      )}
    </div>
  );
};

export default CustomSwitch;

import React from "react";
import styles from "./input.module.scss";

function InputSetting({ name, value, title, text }) {
  return (
    <div className={styles.input_setting}>
      <span
        style={{
          marginBottom: "10px",
          color: "#364254",
          fontSize: "16px",
          display: "block",
        }}
      >
        {title}
      </span>
      <div className={styles.inputWid_withWord}>
        {text && (
          <div>
            <span style={{ fontSize: "16px" }}>{text}</span>
          </div>
        )}
        <input type="text" name={name} defaultValue={value} />
      </div>
    </div>
  );
}

export default InputSetting;

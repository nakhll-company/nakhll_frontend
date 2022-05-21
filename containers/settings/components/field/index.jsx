import React from "react";
// node libries
import { useField } from "formik";
// style
import styles from "./field.module.scss";

function FieldCus({
  title,
  description,
  text,
  extraTitle,
  withPrefix,
  style = {},
  styleInput = {},
  ...props
}) {
  const [field, meta] = useField(props);

  return (
    <>
      <div style={style} className={styles.wrapper}>
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
            {""}
            <span
              style={{
                display: "inline-block",
                fontSize: "12px",
                marginRight: "10px",
                fontWeight: "bold",
                color: "rgb(255, 5, 5)",
              }}
            >
              {extraTitle}
            </span>
          </span>
          {!text && (
            <div className={styles.inputWidRtl}>
              <input style={styleInput} {...field} {...props} />
              {meta.touched && meta.error ? (
                <small className={styles.error}>{meta.error}</small>
              ) : null}
            </div>
          )}

          {text && (
            <>
              <div className={styles.inputWid_withWord}>
                <div>
                  <span style={{ fontSize: "16px" }}>{text}</span>
                </div>
                <input style={styleInput} {...field} {...props} />
              </div>
              {meta.touched && meta.error ? (
                <small className={styles.error}>{meta.error}</small>
              ) : null}
            </>
          )}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default FieldCus;

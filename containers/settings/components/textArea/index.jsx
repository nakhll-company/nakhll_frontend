import styles from "./field.module.scss";
import { useField, Form, FormikProps, Formik } from "formik";

function TextArea({ title, description, text, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <div className={styles.wrapper}>
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
          {!text && (
            <div className={styles.inputWidRtl}>
              <textarea {...field} {...props} rows="5" />
              {meta.touched && meta.error ? (
                <small className={styles.error}>{meta.error}</small>
              ) : null}
            </div>
          )}
        </div>
        <div className={styles.explain_section}>
          <h4
            className={styles.explain}
            style={{
              marginTop: "33px",
              fontSize: "14px",
              color: "#a4aebb",
            }}
          >
            {description?.title}
          </h4>
          <h4
            className={styles.explain}
            style={{ fontSize: "14px", color: "#a4aebb" }}
          >
            {description?.cont}
          </h4>
        </div>
      </div>
    </>
  );
}

export default TextArea;

import styles from "./textAreaUseForm.module.scss";

function TextAreaUseForm({ title, text, children, error }) {
  return (
    <>
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
            {children}

            {error && <small className={styles.error}>{error.message}</small>}
          </div>
        )}
      </div>
    </>
  );
}

export default TextAreaUseForm;

import styles from "./inputUseForm.module.scss";

function InputUseForm({ title, extraTitle, text, error, children }) {
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
            {children}

            {error && <small className={styles.error}>{error.message}</small>}
          </div>
        )}

        {text && (
          <>
            <div className={styles.inputWid_withWord}>
              <div
                style={{
                  height: "100%",
                  padding: "0 5px",
                  background: "rgb(234,238,243)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {text}
                </span>
              </div>
              {children}
            </div>
            {error && <small className={styles.error}>{error.message}</small>}
          </>
        )}
      </div>
    </>
  );
}

export default InputUseForm;

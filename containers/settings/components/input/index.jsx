import styles from "./input.module.scss";

function InputSetting({ name, value, title, text }) {
  return (
    <div className={styles.input_setting}>
      <h2
        style={{
          marginBottom: "10px",
          color: "#364254",
          fontSize: "16px",
        }}
      >
        {title}
      </h2>
      <div className={styles.inputWid_withWord}>
        {text && (
          <div>
            <h2 style={{ fontSize: "16px" }}>{text}</h2>
          </div>
        )}
        <input type="text" name={name} defaultValue={value} />
      </div>
    </div>
  );
}

export default InputSetting;

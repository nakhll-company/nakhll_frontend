import styles from "./customInput.module.scss";

const CustomInput2 = ({ label, explain, unit }) => {
  return (
    <div className={styles.twoCol}>
      <div>
        <h2 style={{ marginBottom: "10px", color: "#364254" }}>{label}</h2>
        <div className={styles.inputWidRtl}>
          <input type="text" />
          <h2>{unit}</h2>
        </div>
      </div>
      <div>
        <h4 className={styles.explain}>{explain}</h4>
      </div>
    </div>
  );
};
// export
export default CustomInput2;

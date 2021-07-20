import styles from "./customInput.module.scss";
import { Formik, Form, Field } from "formik";
import { Children } from "react";

const CustomInput1 = ({ label, explain, name, ...otherProps }) => {
  return (
    <div className={styles.twoCol}>
      <div>
        <h2 style={{ marginBottom: "10px", color: "#364254" }}>{label}</h2>
        <div className={styles.inputWidRtl}>
          <input type="text" />
        </div>
      </div>
      <div>
        <h4 className={styles.explain}>{explain}</h4>
      </div>
    </div>
  );
};
// export
export default CustomInput1;

import styles from "./customInput.module.scss";
import {Field} from "formik"

const CustomInput1 = ({ label, explain,name,...otherProps }) => {
  return (
    <div className={styles.twoCol}>
      <div>
        <h2 style={{ marginBottom: "10px", color: "#364254" }}>{label}</h2>
        <div className={styles.inputWidRtl}>
          <Field type="input" />
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

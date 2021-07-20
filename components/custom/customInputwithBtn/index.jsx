import { useState } from "react";
import styles from "./customInput.module.scss";

const CustomInputWithBtn = ({ label, explain }) => {
  const [Add, setAdd] = useState(20);
  const mini = () => {
    setAdd(Add - 1);
  };
  const add = () => {
    setAdd(Add + 1);
  };
  return (
    <div className={styles.twoCol}>
      <div>
        <h2 style={{ marginBottom: "10px", color: "#364254" }}>{label}</h2>
        <div className={styles.inputWidRtl}>
          <button onClick={add}>
            <span className="fas fa-plus"></span>
          </button>
          <div className={styles.center}>
            <input
              type="number"
              type="number"
              min="0"
              max="500"
              value={Add}
              onChange={(e) => {
                setAdd(e.target.value);
              }}
            />
            <h4>عدد</h4>
          </div>

          <button onClick={mini}>
            <span className="fas fa-minus"></span>
          </button>
        </div>
      </div>
      <div>
        <h4 className={styles.explain}>{explain}</h4>
      </div>
    </div>
  
  );
};
// export
export default CustomInputWithBtn;

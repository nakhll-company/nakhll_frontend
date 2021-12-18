import styles from "./switchButton.module.scss";

function SwitchButtonSetting({ id, isActive }) {
  return (
    <>
      <div className={`${styles.custom_switch} d-flex align-items-center `}>
        <input
          type="checkbox"
          id={`switch__${id}`}
          className={styles.custom_switch__input}
          // onChange={onChange}
          defaultChecked={isActive}
        />{" "}
        <label
          htmlFor={`switch__${id}`}
          className={styles.custom_switch__label}
        >
          <span className={styles.circle}></span>
        </label>
      </div>{" "}
    </>
  );
}

export default SwitchButtonSetting;

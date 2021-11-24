import styles from "./subButton.module.scss";

function SubButton({ title }) {
  return (
    <>
      <div className={styles.status_button_one}>
        <button type="submit" className={`${styles.btn} ${styles.btnSubmit}`}>
          <h3 style={{ margin: "0px", fontSize: "15px" }}>{title} </h3>
        </button>
      </div>
    </>
  );
}

export default SubButton;

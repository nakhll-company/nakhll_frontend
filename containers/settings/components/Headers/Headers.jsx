import styles from "./Headers.module.scss";

export default Headers = ({ onMenu, setOnMenu }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header_title}>
        <h1>
          تنظیمات{" "}
          <i
            className="fas fa-chevron-left"
            style={{
              marginRight: "2px",
              marginLeft: "4px",
              display: "inline-block",
            }}
          ></i>
          {onMenu == "1" && <span>حجره</span>}
          {onMenu == "2" && <span> حساب بانکی</span>}
          {onMenu == "3" && <span> ارسال</span>}
          {onMenu == "4" && <span> لینک ها</span>}
        </h1>
      </div>

      {/* Header MenuBar */}
      <div className={styles.header_menu}>
        <button
          onClick={() => {
            setOnMenu("1");
          }}
          className={styles.header_menu_btn}
        >
          <h1 className={onMenu == "1" && styles.onBtn}>حجره</h1>
        </button>

        <button
          onClick={() => {
            setOnMenu("2");
          }}
          className={styles.header_menu_btn}
        >
          <h1 className={onMenu == "2" && styles.onBtn}>حساب بانکی</h1>
        </button>
        <button
          onClick={() => {
            setOnMenu("3");
          }}
          className={styles.header_menu_btn}
        >
          <h1 className={onMenu == "3" && styles.onBtn}>ارسال</h1>
        </button>
        <button
          onClick={() => {
            setOnMenu("4");
          }}
          className={styles.header_menu_btn}
        >
          <h1 className={onMenu == "4" && styles.onBtn}>لینک ها</h1>
        </button>
      </div>
    </div>
  );
};

import styles from "./styles.module.scss";

function HeaderTitle({ title, onClick, enabel = true }) {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.title}>{title}</div>
        {enabel && (
          <div className={styles.icon} onClick={onClick}>
            <i className="fas fa-angle-left"></i>
          </div>
        )}
      </div>
    </>
  );
}

export default HeaderTitle;

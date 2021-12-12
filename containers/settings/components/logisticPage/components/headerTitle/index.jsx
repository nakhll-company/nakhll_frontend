import styles from "./styles.module.scss";

function HeaderTitle({ title }) {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.title}>{title}</div>
        <div className={styles.icon}>
          <i className="fas fa-angle-left"></i>
        </div>
      </div>
    </>
  );
}

export default HeaderTitle;

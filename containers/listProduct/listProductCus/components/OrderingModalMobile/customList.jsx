import styles from "./orderingModalMobile.module.scss";
const CustomList = ({ title, onClick, className }) => {
  return (
    <>
      <div
        style={{
          fontWeight: className && "bolder",
        }}
        className={styles.wrap}
        onClick={onClick}
      >
        <div className={className && styles.dot_active}></div>
        <span>{title}</span>
      </div>
    </>
  );
};

export default CustomList;

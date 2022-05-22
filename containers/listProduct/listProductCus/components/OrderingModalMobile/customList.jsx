import styles from "./orderingModalMobile.module.scss";
const CustomList = ({ title, onClick, className }) => {
  return (
    <>
      <div
        style={{
          padding: "5px",
          paddingBottom: "10px",
          paddingTop: "20px",
          display: "flex",
          fontWeight: className && "bolder",
        }}
        onClick={onClick}
      >
        <div className={className && styles.dot_active}></div>
        <span>{title}</span>
      </div>
    </>
  );
};

export default CustomList;

import styles from "./titleLiner.module.scss";
function TitleLiner({ title }) {
  return (
    <>
      <div className={styles.HeadName}>
        <h1 style={{ margin: "0px" }}>{title}</h1>
      </div>
    </>
  );
}

export default TitleLiner;

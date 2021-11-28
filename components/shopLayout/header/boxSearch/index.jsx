import styles from "./boxSearch.module.scss";

function BoxSearch({ list, word }) {
  return (
    <>
      <div className={styles.box}>
        <div
          className={styles.headProduct}
          onClick={() => location.replace(`/search?q=${word}`)}
        >
          <span style={{ fontSize: "14px" }}> جستجوی محصول </span>
          <span style={{ fontSize: "16px", fontWeight: "bold" }}>{word}</span>
        </div>
        <div className={styles.headHojreh}>حجره های نخل</div>
        {list.map((el, index) => (
          <div
            key={index}
            className={styles.itemHojreh}
            onClick={() => {
              location.replace(`/shop/${el.slug}`);
            }}
          >
            <span>حجره </span>
            <span className={styles.nameHojreh}>{el.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default BoxSearch;

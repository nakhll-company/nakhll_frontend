import React from "react";
import styles from "./Search.module.scss";
function Search({ onChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <div className={styles.wrap}>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.searchTerm}
            placeholder="نام حجره"
            onChange={onChange}
          />
          <button type="submit" className={styles.searchButton}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;

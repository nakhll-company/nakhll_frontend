import React from "react";
import router from "next/router";
import styles from "./searchProduct.module.scss";
import { useForm } from "react-hook-form";

function SearchProduct({ NameHojreh, hojreh, searchWord }) {
  const { register, handleSubmit } = useForm();

  const _handelSearch = (data) => {
    location.replace(`/search?q=${data.searchWord}&shop=${hojreh}`);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        _handelSearch(data);
      })}
    >
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
              defaultValue={searchWord}
              type="text"
              className={styles.searchTerm}
              placeholder={`جستجو  در حجره ${NameHojreh}`}
              {...register("searchWord")}
            />
            <button type="submit" className={styles.searchButton}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchProduct;

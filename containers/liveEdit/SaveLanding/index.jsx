// node libraries
import React, { useState } from "react";
import { useSelector } from "react-redux";
// methods
import { ApiReference } from "../../../api/Api";
import { authhttp } from "../../../services/callApi/api";
// styles
import styles from "./SaveLanding.module.scss";

function SaveLanding({ setOpenSaveLanding, idLanding }) {
  const [inputName, setInputName] = useState("");
  const landing = useSelector((state) => state.allDataLanding);
  const apiUpdateLanding = `${ApiReference.landing.update.url}${idLanding[0]}/${idLanding[1]}/`;

  const ansapi = {
    name: inputName !== "" ? inputName : "بدون عنوان",
    shop: idLanding[0],
    page_data: JSON.stringify(landing),
  };

  const handelUpdateLanding = async () => {
    await authhttp.put(apiUpdateLanding, ansapi);
    setInputName("");
    setOpenSaveLanding(false);
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.content_wrapper}>
          <span className={styles.close}>
            <i
              className="far fa-times-circle"
              onClick={() => {
                setOpenSaveLanding(false);
              }}
            ></i>
          </span>

          <div className={styles.table}>
            <div className={styles.header}>ذخیره صفحه</div>
          </div>
          <div className={styles.content_save}>
            <div className={styles.name}>
              <span>نام صفحه</span>
              <input
                value={inputName}
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className={styles.wrap_btn}>
              <button onClick={handelUpdateLanding}>ذخیره صفحه</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SaveLanding;

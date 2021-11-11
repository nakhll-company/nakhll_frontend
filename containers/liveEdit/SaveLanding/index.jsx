import React, { useEffect, useState } from "react";
import styles from "./SaveLanding.module.scss";
import Assistent from "zaravand-assistent-number";
import { useDispatch, useSelector } from "react-redux";
import { _showSelect_url } from "../../../redux/actions/liveEdit/_showSelect_url";
import { _updateUrl } from "../../../redux/actions/liveEdit/_updateUrl";
import { ApiReference } from "../../../Api";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

const _asist = new Assistent();
function SaveLanding({ setOpenSaveLanding, idLanding }) {
  const [inputName, setInputName] = useState("");
  let apiCreateLanding = `${ApiReference.landing.creat.url}${idLanding[0]}/`;

  let apiUpdateLanding = `${ApiReference.landing.update.url}${idLanding[0]}/${idLanding[1]}/`;

  const dispatch = useDispatch();
  const landing = useSelector((state) => state.allDataLanding);

  let ansapi = {
    name: "milad",
    shop: "mamaneila",
    page_data: JSON.stringify(landing),
  };
  const _handel_creat_landing = async () => {
    let params = {
      name: inputName == "" ? "بدون عنوان" : inputName,
      page_data: "",
      shop: "mamaneila",
    };
    let response = await ApiRegister().apiRequest(
      params,
      "post",
      apiCreateLanding,
      true,
      ""
    );
  };

  const _handel_update_landing = async () => {
    let response = await ApiRegister().apiRequest(
      ansapi,
      "PUT",
      apiUpdateLanding,
      true,
      ""
    );

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
            <button onClick={_handel_creat_landing}>ایجاد</button>
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
              <button onClick={_handel_update_landing}>ذخیره صفحه</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SaveLanding;

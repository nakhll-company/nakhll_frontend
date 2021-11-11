import React, { useEffect, useState } from "react";
import styles from "./SelectUrl.module.scss";
import Assistent from "zaravand-assistent-number";
import { useDispatch } from "react-redux";
import { _showSelect_url } from "../../../redux/actions/liveEdit/_showSelect_url";
import { _updateUrl } from "../../../redux/actions/liveEdit/_updateUrl";
import { ApiReference } from "../../../Api";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

const _asist = new Assistent();
function SelectUrl(props) {
  let apiListPinned = ApiReference.PinnedURL.PinnedList.url;
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  useEffect(async () => {
    let response = await ApiRegister().apiRequest(
      null,
      "get",
      apiListPinned,
      true,
      ""
    );

    if (response.status == 200) {
      setList(response.data);
      console.log(`response.data`, response.data);
    }
  }, []);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.content_wrapper}>
          <span className={styles.close}>
            <i
              className="far fa-times-circle"
              onClick={() => {
                dispatch(_showSelect_url());
              }}
            ></i>
          </span>
          <span style={{ color: "#000" }}>
            کاربر با کلیک بر روی بنر شما به چه صفحه ای از سایت برود؟
          </span>
          <br />
          <span style={{ color: "#000" }}>
            شما میتوانید کاربر را به صفحه محصول یا صفحه محصولات با فیلتر های
            .مشخص شده هدایت کنید
          </span>
          <div className={styles.table}>
            <div className={styles.header}>لیست صفحات شما</div>
            {true && (
              <div className={styles.list}>
                {list.map((el, index) => (
                  <div
                    key={index}
                    className={styles.wrapItem}
                    onClick={() => {
                      dispatch(_updateUrl(el.link, el.name));
                      dispatch(_showSelect_url());
                    }}
                  >
                    <span className={styles.numbers}>
                      {_asist.number(index + 1)}
                    </span>
                    <div className={styles.item}> {el.name}</div>
                    <div className={styles.icon}>
                      <i className="fas fa-check-circle"></i>
                    </div>
                  </div>
                ))}

                <div className={styles.buttonPages}>
                  <div
                    className={styles.btnProductPage}
                    onClick={() => {
                      window.open(`/`, "_blank");
                    }}
                  >
                    <i className="fas fa-road"></i>
                    <span>رفتن به صفحه محصولات</span>
                  </div>
                  <div
                    className={styles.btnListProductPage}
                    onClick={() => {
                      window.open(`/`, "_blank");
                    }}
                  >
                    <i className="fas fa-road"></i>
                    <span>رفتن به صفحه محصولات</span>
                  </div>
                </div>
              </div>
            )}

            {false && (
              <div className={styles.emptyList}>
                <div className={styles.headerEmpty}>
                  لیست صفحات شما خالی است ابتدا با رفتن به سایت در صفحات لیست
                  محصولات و یا صفحه محصول لیست مورد علاقه خود را ایجاد کنید.
                </div>
                <div className={styles.buttonPages}>
                  <div className={styles.btnProductPage}>
                    <i className="fas fa-road"></i>
                    <span>رفتن به صفحه محصولات</span>
                  </div>
                  <div className={styles.btnListProductPage}>
                    <i className="fas fa-road"></i>
                    <span>رفتن به صفحه محصولات</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectUrl;

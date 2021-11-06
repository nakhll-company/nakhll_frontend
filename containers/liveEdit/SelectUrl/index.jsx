import React from "react";
import styles from "./SelectUrl.module.scss";
import Assistent from "zaravand-assistent-number";
import { useDispatch } from "react-redux";
import { _showSelect_url } from "../../../redux/actions/liveEdit/_showSelect_url";
const _asist = new Assistent();
function SelectUrl(props) {
  const dispatch = useDispatch();
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
          کاربر با کلیک بر روی بنر شما به چه صفحه ای از سایت برود؟
          <br />
          شما میتوانید کاربر را به صفحه محصول یا صفحه محصولات با فیلتر های مشخص
          شده هدایت کنید
          <div className={styles.table}>
            <div className={styles.header}>لیست صفحات شما</div>
            {true && (
              <div className={styles.list}>
                <div className={styles.wrapItem}>
                  <span className={styles.numbers}>{_asist.number(1)}</span>
                  <div className={styles.item}> صفحه محصولات پر تخفیف</div>
                  <div className={styles.icon}>
                    <i className="fas fa-check-circle"></i>
                  </div>
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

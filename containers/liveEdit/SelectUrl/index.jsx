import React from "react";
import styles from "./SelectUrl.module.scss";
import Assistent from "zaravand-assistent-number";
import { useDispatch } from "react-redux";
import { _showSelect_url } from "../../../redux/actions/liveEdit/_showSelect_url";
import { _updateUrl } from "../../../redux/actions/liveEdit/_updateUrl";
const _asist = new Assistent();
function SelectUrl(props) {
  const dispatch = useDispatch();
  const list = [
    {
      url: "/product/?search=%D8%B9%D8%B3%D9%84&ordering=&ready=false&available=false&discounted=false&city=&page_size=50&min_price=0&max_price=10000&shop=&category=",
      title: "عسل ها",
      ID: "fc628161-2a0f-46db-9c86-3ac7132db4ea",
    },
    {
      url: "/product/?search=%D8%B9%D8%B3%D9%84&ordering=&ready=false&available=true&discounted=false&city=&page_size=50&min_price=0&max_price=10000&shop=&category=",
      title: "عسل های موجود",
      ID: "b61a6721-94bd-4890-84c5-8eca0d94b1a9",
    },
    {
      url: "/product/?search=%D8%B9%D8%B3%D9%84&ordering=&ready=true&available=true&discounted=false&city=&page_size=50&min_price=0&max_price=10000&shop=&category=",
      title: "عسل های آماده ارسال",
      ID: "0a91a361-f4d6-49f3-b531-20f6cdf3421b",
    },
    {
      url: "/product/?search=%D8%B9%D8%B3%D9%84&ordering=&ready=true&available=true&discounted=true&city=&page_size=50&min_price=0&max_price=10000&shop=&category=",
      title: "عسل های آماده ارسال با تخفیف زیاد",
      ID: "2ca388ce-18be-4636-aa8f-320d13ad536c",
    },
  ];
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
                {list.map((el, index) => (
                  <div
                    key={index}
                    className={styles.wrapItem}
                    onClick={() => {
                      dispatch(_updateUrl(el.url, el.title));
                      dispatch(_showSelect_url());
                    }}
                  >
                    <span className={styles.numbers}>
                      {_asist.number(index + 1)}
                    </span>
                    <div className={styles.item}> {el.title}</div>
                    <div className={styles.icon}>
                      <i className="fas fa-check-circle"></i>
                    </div>
                  </div>
                ))}

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

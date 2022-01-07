import React, { useEffect, useState } from "react";
import styles from "./SelectUrl.module.scss";
import Assistent from "zaravand-assistent-number";
import { useDispatch } from "react-redux";
import { _showSelect_url } from "../../../redux/actions/liveEdit/_showSelect_url";
import { _updateUrl } from "../../../redux/actions/liveEdit/_updateUrl";
import { ApiReference } from "../../../Api";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

const _asist = new Assistent();
function SelectUrl({ idLanding }) {
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

            <div className={styles.video_input}>
              <div className={styles.headerEmpty}>
                اسکریپت فیلم خود را از سایت آپارات اضافه کنید :
                <textarea
                  className={styles.textarea}
                  type="text"
                  rows="3"
                  placeholder="<div id='68272816092'><script type='text/JavaScript' src='https://www.aparat.com/embed/V57nG?data[rnddiv]=68272816092&data[responsive]=yes'></script></div>"
                  // onChange={(e) => setName(e.target.value)}
                />
              <button onClick={()=>{
                dispatch(_updateUrl("www", "فیلم ثبت شده توسط شما"));
                dispatch(_showSelect_url());
              }}>ثبت</button>
              </div>
            </div>

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
                    window.open(`/search/?q=&shop=${idLanding[0]}`, "_blank");
                  }}
                >
                  <i className="fas fa-road"></i>
                  <span>رفتن به صفحه محصولات</span>
                </div>
                <div
                  className={styles.btnListProductPage}
                  // https://nakhll.com/product/?q=&shop=mamaneila
                  onClick={() => {
                    window.open(`/search/?q=&shop=${idLanding[0]}`, "_blank");
                  }}
                >
                  <i className="fas fa-road"></i>
                  <span>رفتن به صفحه محصولات</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectUrl;

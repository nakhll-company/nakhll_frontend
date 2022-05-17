// node libraries
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Assistent from "zaravand-assistent-number";
import React, { useEffect, useState } from "react";
// methods
import { ApiReference } from "../../../api/Api";
import { errorMessage } from "../../../utils/toastifyMessage";
import { _updateUrl } from "../../../redux/actions/liveEdit/_updateUrl";
import { _updateVideo } from "../../../redux/actions/liveEdit/_updateVideo";
import { showSelectUrl } from "../../../redux/actions/liveEdit/showSelectUrl";
// components
import SubButton from "../../settings/components/subButton";
import TextAreaUseForm from "../../creat/component/textAreaUseForm";
// styles
import styles from "./SelectUrl.module.scss";
import { authhttp } from "../../../services/callApi/api";

const _asist = new Assistent();

function SelectUrl({ idLanding }) {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const apiListPinned = ApiReference.PinnedURL.PinnedList.url;
  const { register, handleSubmit } = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  useEffect(() => {
    async function fetchData() {
      const response = await authhttp.get(apiListPinned);
      if (response.status == 200) {
        setList(response.data);
      }
    }
    fetchData();
  }, [apiListPinned]);

  const onSubmit = async (data) => {
    const str = data.video;

    if (str.includes("https://www.aparat.com/embed/")) {
      const indexStartId = str.indexOf("id=");

      const indexStartScript = str.indexOf('src="');

      if (indexStartId == "-1" || indexStartScript == "-1") {
        errorMessage("لطفا یک ویدیو آپارات را وارد کنید");
      } else {
        const id = str.substring(str.indexOf("id=") + 4, str.indexOf(">") - 1);

        const src = str.substring(
          str.indexOf('src="') + 5,
          str.indexOf("</script>") - 2
        );
        src.replace(">", "");
        src.replace("<", '"');

        dispatch(
          _updateVideo({ id: id, src: src }, " اسکریپت فیلم موجود است.")
        );
        dispatch(showSelectUrl());
      }
    } else {
      errorMessage("لطفا یک ویدیو آپارات را وارد کنید");
    }
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.content_wrapper}>
          <span className={styles.close}>
            <i
              className="far fa-times-circle"
              onClick={() => {
                dispatch(showSelectUrl());
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
            <div className={styles.wrap_btn}>
              <button onClick={() => setShowInput((st) => !st)}>
                <i className="fas fa-video"></i>
              </button>
            </div>

            {showInput && (
              <div className={styles.video_input}>
                <div className={styles.headerEmpty}>
                  اسکریپت فیلم خود را از سایت آپارات اضافه کنید :
                  <div className={styles.wrapInput}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <TextAreaUseForm title="">
                        <textarea
                          rows="3"
                          type="text"
                          placeholder="<div id='68272816092'><script type='text/JavaScript' src='https://www.aparat.com/embed/V57nG?data[rnddiv]=68272816092&data[responsive]=yes'></script></div>"
                          {...register("video")}
                        />
                      </TextAreaUseForm>
                      <SubButton title="ثبت ویدیو" />
                      <div className={styles.wrapBtn}></div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.list}>
              {list.map((el, index) => (
                <div
                  key={index}
                  className={styles.wrapItem}
                  onClick={() => {
                    dispatch(_updateUrl(el.link, el.name));
                    dispatch(showSelectUrl());
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

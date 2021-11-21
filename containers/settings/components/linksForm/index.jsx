import { linkSetting } from "../../../../api/settings";
import { successMessage } from "../../../utils/message";
import InputSetting from "../input";
import styles from "./styles.module.scss";

function FormInputs({ apiSetting, setClicked, activeHojreh }) {
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const data = new FormData(e.target);
          let body = Object.fromEntries(data.entries());
          let response = await linkSetting(body, activeHojreh);

          successMessage("اطلاعات با موفقیت به روز رسانی شد");

          setClicked((pre) => !pre);
        }}
      >
        <div className={styles.LinksGridD}>
          <InputSetting
            name="telegram"
            value={apiSetting.social_media && apiSetting.social_media.telegram}
            title="آدرس تلگرام"
            text="t.me/"
          />
          <div className="">
            <h4 className={styles.explain}></h4>
          </div>
          <InputSetting
            name="instagram"
            value={apiSetting.social_media && apiSetting.social_media.instagram}
            title="آدرس اینستاگرام"
            text="instagram.com/"
          />
        </div>
        {/* ‌Buttons */}

        <div className={styles.status_button_one}>
          <button type="submit" className={`${styles.btn} ${styles.btnSubmit}`}>
            <h3 style={{ margin: "0px", fontSize: "15px" }}>ذخیره اطلاعات </h3>
          </button>
        </div>
      </form>
    </>
  );
}

export default FormInputs;

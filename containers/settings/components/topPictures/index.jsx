import { useState } from "react";
import styles from "./topPictures.module.scss";
import Image from "next/image";

function TopPictures({ apiSetting }) {
  const [result, setResult] = useState(null);
  const [imgProfile, setImgProfile] = useState(
    apiSetting.image_thumbnail_url ? apiSetting.image_thumbnail_url : null
  );
  const [imageSrc, setImageSrc] = useState(null);
  const [isShowCropper, setIsShowCropper] = useState(false);

  return (
    <>
      {isShowCropper && (
        <CustomCropperAll imageSrc={imageSrc} close={setIsShowCropper} />
      )}
      <div className={styles.Hojreh_headD}>
        <img src={imageSrc} alt="" />
        <div>
          <div className={styles.Hojreh_headD_pic}>
            {apiSetting.image_thumbnail_url && !result && (
              <Image
                src={apiSetting.image_thumbnail_url}
                width={100}
                height={100}
              ></Image>
            )}
            {result && <Image src={result} width={100} height={100}></Image>}
            <div className={styles.Hojreh_headD_edit_icon_pic}>
              <label htmlFor="file_pic_avatar">
                <span
                  style={{ fontSize: "20px", cursor: "pointer" }}
                  className="fas fa-edit"
                ></span>
              </label>
              <input id="file_pic_avatar" type="file" accept="image/*" />
            </div>
          </div>
          <div className={styles.Hojreh_headD_edit_icon}>
            <span className="fas fa-edit"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopPictures;

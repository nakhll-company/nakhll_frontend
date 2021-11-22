import { useState } from "react";
import styles from "./topPictures.module.scss";
import Image from "next/image";
import InputPictureSetting from "../InputPictureSetting";

function TopPictures({ apiSetting }) {
  const [imgProfile, setImgProfile] = useState(
    apiSetting.image_thumbnail_url ? apiSetting.image_thumbnail_url : null
  );

  const [isShowCropper, setIsShowCropper] = useState(false);

  return (
    <>
      {isShowCropper && (
        <CustomCropperAll imageSrc={imgProfile} close={setIsShowCropper} />
      )}
      <div className={styles.Hojreh_headD}>
        <div>
          <div className={styles.Hojreh_headD_pic}>
            <Image src={imgProfile} width={100} height={100}></Image>

            <InputPictureSetting setImgProfile={setImgProfile} />
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

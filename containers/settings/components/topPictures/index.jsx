import { useState } from "react";
import styles from "./topPictures.module.scss";
import Image from "next/image";
import InputPictureSetting from "../InputPicture";

function TopPictures({ apiSetting }) {
  const [imgProfile, setImgProfile] = useState(
    apiSetting.image_thumbnail_url ? apiSetting.image_thumbnail_url : null
  );
  const [imgBanner, setImgBanner] = useState(null);

  return (
    <>
      <div className={styles.Hojreh_headD}>
        {imgBanner && <Image src={imgBanner} width={800} height={50}></Image>}

        <div className={styles.Hojreh_headD_pic}>
          {imgProfile && (
            <Image src={imgProfile} width={100} height={100}></Image>
          )}
        </div>
        <div className={styles.btnProfile}>
          <InputPictureSetting setImageSrc={setImgProfile} />
        </div>
        <div className={styles.btnBanner}>
          <InputPictureSetting setImageSrc={setImgBanner} />
        </div>
      </div>
    </>
  );
}

export default TopPictures;

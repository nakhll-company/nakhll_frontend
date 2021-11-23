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
        <Image
          src={imgBanner ? imgBanner : "/image/back.jpg"}
          layout="responsive"
          width={300}
          height={100}
        ></Image>

        <div className={styles.Hojreh_headD_pic}>
          {imgProfile && (
            <Image src={imgProfile} width={120} height={120}></Image>
          )}
        </div>
        <div className={styles.btnProfile}>
          <InputPictureSetting setImageSrc={setImgProfile} image={imgProfile} />
        </div>
        <div className={styles.btnBanner}>
          <InputPictureSetting
            setImageSrc={setImgBanner}
            image={imgBanner}
            ratio={3}
          />
        </div>
      </div>
    </>
  );
}

export default TopPictures;

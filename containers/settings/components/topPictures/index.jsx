import { useEffect, useState } from "react";
import styles from "./topPictures.module.scss";
import Image from "next/image";
import InputPictureSetting from "../InputPicture";
import { callApiUpDataPicture } from "../../../../api/settings";

function TopPictures({ apiSetting, activeHojreh }) {
  const [imgProfile, setImgProfile] = useState(
    apiSetting.image_thumbnail_url ? apiSetting.image_thumbnail_url : null
  );
  const [imgBanner, setImgBanner] = useState(null);
  useEffect(() => {
    let dataForSend = {
      image: imgProfile,
    };

    {
      imgProfile.startsWith("data") &&
        callApiUpDataPicture(dataForSend, activeHojreh);
    }
  }, [imgProfile]);
  return (
    <>
      <div className={styles.Hojreh_headD}>
        <Image
          src={imgBanner ? imgBanner : "/image/back.jpg"}
          layout="responsive"
          width={300}
          height={100}
          alt="بنر"
        ></Image>

        <div className={styles.Hojreh_headD_pic}>
          {imgProfile && (
            <Image
              src={imgProfile ? imgProfile : "/icons/iconpro.png"}
              width={120}
              height={120}
              alt=""
            ></Image>
          )}
        </div>
        <div className={styles.btnProfile}>
          <InputPictureSetting
            setImageSrc={setImgProfile}
            image={imgProfile}
            ratio={1}
          />
        </div>
        <div className={styles.btnBanner}>
          {/* <InputPictureSetting
            setImageSrc={setImgBanner}
            image={imgBanner}
            ratio={3}
          /> */}
        </div>
      </div>
    </>
  );
}

export default TopPictures;

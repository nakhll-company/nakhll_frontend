// node libraries
import React from "react";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";
import { useEffect, useState } from "react";
// components
import InputPictureSetting from "../InputPicture";
// methods
import { callApiDelete } from "./callApiDelete";
import { callApiUpDataPicture } from "../../../../api/settings";
// style
import styles from "./topPictures.module.scss";

function TopPictures({ apiSetting, activeHojreh, setOnMenu }) {
  const [imgProfile, setImgProfile] = useState(
    apiSetting.image_thumbnail_url ? apiSetting.image_thumbnail_url : null
  );
  const imgBanner = null;

  useEffect(() => {
    const dataForSend = {
      image: imgProfile,
    };
    imgProfile &&
      imgProfile.startsWith("data") &&
      callApiUpDataPicture(dataForSend, activeHojreh);
  }, [imgProfile, activeHojreh]);

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
          <div className={styles.deleteBtn}>
            <div
              className={styles.wrapBtn}
              onClick={async () => {
                const callApi = await callApiDelete({ activeHojreh });
                if (callApi) {
                  setOnMenu(5);
                }
              }}
            >
              <BsTrash size={25} color="red" />
            </div>
          </div>
        </div>
        <div className={styles.btnProfile}>
          <InputPictureSetting
            setImageSrc={setImgProfile}
            image={imgProfile}
            ratio={1}
          />
        </div>
        <div className={styles.btnBanner}></div>
      </div>
    </>
  );
}

export default TopPictures;

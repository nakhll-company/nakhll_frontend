// node libraries
import Image from "next/image";
import { useEffect, useState } from "react";
// components
import InputPictureSetting from "../InputPicture";
import { BsTrash } from "react-icons/bs";
import { base64Profile } from "../../../../public/icons/icon";
// methods
import { callApiUpDataPicture } from "../../../../api/settings";
// style
import styles from "./topPictures.module.scss";
import { authhttp } from "../../../../services/callApi/api";
import { successMessage } from "../../../../utils/toastifyMessage";
import { callApiDelete } from "./callApiDelete";

function TopPictures({ apiSetting, activeHojreh, setOnMenu }) {
  const [imgProfile, setImgProfile] = useState(
    apiSetting.image_thumbnail_url ? apiSetting.image_thumbnail_url : null
  );
  const imgBanner = null;

  useEffect(() => {
    let dataForSend = {
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
                let callApi = await callApiDelete({ activeHojreh });
                if (callApi) {
                  setOnMenu(5);
                }
                // setImgProfile(base64Profile);
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

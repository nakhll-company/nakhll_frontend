// node libraries
import { useEffect, useState } from "react";
import Image from "next/image";

import { connect } from "react-redux";

// scss
import styles from "../../../styles/pages/setting/setting.module.scss";

// methods
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { mapState } from "../methods/mapState";
import { getUserInfo } from "../../../redux/actions/user/getUserInfo";

// components
import { Loading } from "../../../components/custom/Loading/Loading";
import Headers from "../components/Headers/Headers";

import { GetBigCities, GetCities, GetStates } from "../../../utils/states";
import FormInputs from "../components/linksForm";
import HojrehForm from "../components/hojrehForm";
import BankAccountForm from "../components/bankAccountForm";
import { callApiAllData } from "../../../api/settings";

const DesktopSetting = ({ activeHojreh, userInfo }) => {
  const [apiSetting, setApiSetting] = useState({});

  const [MainLoading, setMainLoading] = useState(true);
  const [onMenu, setOnMenu] = useState("1");

  // for btn  when click call api again
  const [clicked, setClicked] = useState(false);

  // state For save picture
  const [selectImageAvatar, setSelectImageAvatar] = useState(null);

  const [result, setResult] = useState(null);

  useEffect(() => {
    const _handleRequestApi = async () => {
      const response = callApiAllData(activeHojreh);

      if (response.status === 200) {
        setApiSetting(await response.data);
        setMainLoading(false);
      }
    };

    activeHojreh.length > 0 && _handleRequestApi();
  }, [activeHojreh, clicked]);

  // For pic Avatar
  const handelPicAvatar = (e) => {
    setSelectImageAvatar(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div dir="rtl" className={styles.setting}>
      <Headers onMenu={onMenu} setOnMenu={setOnMenu}></Headers>
      {/* Setting Conttent */}
      <div className={styles.wrapper}>
        {MainLoading ? (
          <Loading />
        ) : (
          <>
            {/* Hojreh */}
            {onMenu == "1" && (
              <>
                <div className={styles.Hojreh_headD}>
                  <div>
                    <div className={styles.Hojreh_headD_pic}>
                      {apiSetting.image_thumbnail_url && !result && (
                        <Image
                          src={apiSetting.image_thumbnail_url}
                          width={100}
                          height={100}
                        ></Image>
                      )}
                      {result && (
                        <Image src={result} width={100} height={100}></Image>
                      )}
                      <div className={styles.Hojreh_headD_edit_icon_pic}>
                        <label htmlhtmlFor="file_pic_avatar">
                          <span
                            style={{ fontSize: "20px", cursor: "pointer" }}
                            className="fas fa-edit"
                          ></span>
                        </label>
                        <input
                          id="file_pic_avatar"
                          type="file"
                          accept="image/*"
                          onChange={handelPicAvatar}
                        />
                      </div>
                    </div>
                    <div className={styles.Hojreh_headD_edit_icon}>
                      <span className="fas fa-edit"></span>
                    </div>
                  </div>
                </div>
                <HojrehForm
                  apiSetting={apiSetting}
                  activeHojreh={activeHojreh}
                  setClicked={setClicked}
                />
              </>
            )}

            {onMenu == "2" && (
              <BankAccountForm
                activeHojreh={activeHojreh}
                apiSetting={apiSetting}
              />
            )}

            {onMenu == "4" && (
              <FormInputs
                apiSetting={apiSetting}
                setClicked={setClicked}
                activeHojreh={activeHojreh}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

// export
const connector = connect(mapState, { getUserInfo });
export default connector(DesktopSetting);

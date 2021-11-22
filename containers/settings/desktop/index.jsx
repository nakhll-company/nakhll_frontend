// node libraries
import { useEffect, useState } from "react";
import { connect } from "react-redux";

// scss
import styles from "../../../styles/pages/setting/setting.module.scss";

// methods
import { mapState } from "../methods/mapState";
import { getUserInfo } from "../../../redux/actions/user/getUserInfo";

// components
import { Loading } from "../../../components/custom/Loading/Loading";
import Headers from "../components/Headers/Headers";
import FormInputs from "../components/linksForm";
import HojrehForm from "../components/hojrehForm";
import BankAccountForm from "../components/bankAccountForm";
import { callApiAllData } from "../../../api/settings";
import TopPictures from "../components/topPictures";

const DesktopSetting = ({ activeHojreh, userInfo }) => {
  const [apiSetting, setApiSetting] = useState({});
  const [MainLoading, setMainLoading] = useState(true);
  const [onMenu, setOnMenu] = useState("1");
  const [imageSrc, setImageSrc] = useState(null);

  // for btn  when click call api again
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const _handleRequestApi = async () => {
      const response = await callApiAllData(activeHojreh);
      if (response.status === 200) {
        setApiSetting(await response.data);
        setMainLoading(false);
      }
    };
    activeHojreh.length > 0 && _handleRequestApi();
  }, [activeHojreh, clicked]);

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
                <TopPictures apiSetting={apiSetting} />

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

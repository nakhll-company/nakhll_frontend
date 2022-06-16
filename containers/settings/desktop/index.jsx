// node libraries
import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// components
import FormInputs from "../components/linksForm";
import HojrehForm from "../components/hojrehForm";
import SuccessfulMessage from "./SuccessfulMessage";
import Headers from "../components/Headers/Headers";
import TopPictures from "../components/topPictures";
import LogisticPage from "../components/logisticPage";
import BankAccountForm from "../components/bankAccountForm";
import Loading from "../../../components/custom/Loading/Loading";
// methods
import { callApiAllData } from "../../../api/settings";
// scss
import styles from "./setting.module.scss";

const DesktopSetting = () => {
  const activeHojreh = useSelector((state) => state.User.activeHojreh);
  const [apiSetting, setApiSetting] = useState({});
  const [MainLoading, setMainLoading] = useState(true);
  const [onMenu, setOnMenu] = useState("1");
  // for btn  when click call api again
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const _handleRequestApi = async () => {
      const response = await callApiAllData(activeHojreh);
      if (response.status === 200) {
        const data = await response.data;
        setApiSetting(data);
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
                <TopPictures
                  apiSetting={apiSetting}
                  activeHojreh={activeHojreh}
                  setOnMenu={setOnMenu}
                />

                <HojrehForm
                  apiSetting={apiSetting}
                  activeHojreh={activeHojreh}
                  setClicked={setClicked}
                  setOnMenu={setOnMenu}
                />
              </>
            )}

            {onMenu == "2" && (
              <BankAccountForm
                activeHojreh={activeHojreh}
                apiSetting={apiSetting}
                setClicked={setClicked}
              />
            )}

            {onMenu == "3" && <LogisticPage />}

            {onMenu == "4" && (
              <FormInputs
                apiSetting={apiSetting}
                setClicked={setClicked}
                activeHojreh={activeHojreh}
              />
            )}
            {onMenu == "5" && (
              <>
                <SuccessfulMessage setOnMenu={setOnMenu} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DesktopSetting;

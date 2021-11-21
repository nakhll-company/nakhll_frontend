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
// form
import { Formik, Form, Field, FormikProps } from "formik";

// components
import { Loading } from "../../../components/custom/Loading/Loading";
import Headers from "../components/Headers/Headers";

// validation
import { VALIDATION_SCHEMA, VALIDATION_HESAB } from "../methods/Validation";

import FieldCus from "../components/field";
import { dataExp } from "../data";
import TitleLiner from "../components/titleLiner";
import { GetBigCities, GetCities, GetStates } from "../../../utils/states";
import FormInputs from "../components/linksForm";
import HojrehForm from "../components/hojrehForm";

const DesktopSetting = ({ activeHojreh, userInfo }) => {
  const [apiSetting, setApiSetting] = useState({});
  const [ChoiceBigCity, setChoiceBigCity] = useState("");
  const [ChoiceCity, setChoiceCity] = useState("");
  const [ChoiceState, setChoiceState] = useState("");
  const [allData, setallData] = useState({});
  const [IsLoading, setIsLoading] = useState(false);
  const [IsLoadingHesab, setIsLoadingHesab] = useState(false);
  const [MainLoading, setMainLoading] = useState(true);
  const [onMenu, setOnMenu] = useState("1");
  const [selectBigCities, setSelectBigCities] = useState([]);
  const [selectCities, setSelectCities] = useState([]);
  const [selectState, setSelectState] = useState([]);
  const [showMessage, setshowMessage] = useState(0);
  const [showMessageHesab, setShowMessageHesab] = useState(0);

  // for btn  when click call api again
  const [clicked, setClicked] = useState(false);

  // state For save picture
  const [selectImageAvatar, setSelectImageAvatar] = useState(null);

  const [result, setResult] = useState(null);

  useEffect(() => {
    const _handleRequestApi = async () => {
      let params = {};
      let loadData = null;
      let dataUrl = `/api/v1/shop/${activeHojreh}/settings/`;
      let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        true,
        params
      );
      console.log(`response.data`, response.data);
      setChoiceState(response.data.FK_ShopManager.User_Profile.State);
      setChoiceBigCity(response.data.FK_ShopManager.User_Profile.BigCity);
      setChoiceCity(response.data.FK_ShopManager.User_Profile.City);

      if (response.status === 200) {
        setApiSetting(await response.data);
        setMainLoading(false);
      }

      setSelectState(await GetStates());
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
                  selectState={selectState}
                  selectBigCities={selectBigCities}
                  selectCities={selectCities}
                  showMessage={showMessage}
                  activeHojreh={activeHojreh}
                  setshowMessage={setshowMessage}
                  IsLoading={IsLoading}
                  setChoiceState={setChoiceState}
                  setSelectBigCities={setSelectBigCities}
                  setClicked={setClicked}
                  setSelectCities={setSelectCities}
                />

                <div style={{ marginTop: "80px" }}></div>
              </>
            )}

            {/* HesabBanki */}
            {onMenu == "2" && (
              <>
                <Formik
                  enableReinitialize={true}
                  initialValues={{
                    iban:
                      apiSetting.bank_account && apiSetting.bank_account.iban,
                    owner:
                      apiSetting.bank_account && apiSetting.bank_account.owner,
                  }}
                  validationSchema={VALIDATION_HESAB}
                  onSubmit={async (data) => {
                    setIsLoadingHesab(true);
                    setShowMessageHesab(0);

                    const dataHesabBankiForSend = {
                      bank_account: {
                        iban: data.iban,
                        owner: data.owner,
                      },
                    };

                    let params = {};
                    let loadData = dataHesabBankiForSend;
                    let dataUrl = `/api/v1/shop/${activeHojreh}/settings/bank_account/`;

                    let response = await ApiRegister().apiRequest(
                      loadData,
                      "put",
                      dataUrl,
                      true,
                      params
                    );
                    if (response.status == 200) {
                      setIsLoadingHesab(false);
                      setShowMessageHesab(1);

                      setClicked((pre) => !pre);
                    } else {
                      setIsLoadingHesab(false);
                      setShowMessageHesab(2);
                    }
                  }}
                >
                  {(props) => (
                    <Form>
                      <FieldCus
                        name="iban"
                        type="text"
                        text="IR-"
                        title="شماره شبا"
                      />
                      <FieldCus name="owner" type="text" title="صاحب حساب" />
                      {/* ‌Buttons */}
                      {IsLoadingHesab && (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div className={styles.loader}>
                            <Image
                              src="/image/LOGO_500.png"
                              alt="Picture of the author"
                              width={50}
                              height={50}
                            />
                          </div>
                          <h3
                            className={styles.nameLoding}
                            style={{
                              fontSize: "15px",
                              color: "hsl(211deg 100% 50%)",
                            }}
                          >
                            {" "}
                            در حال بروزرسانی ...
                          </h3>
                        </div>
                      )}
                      {showMessageHesab == 1 && (
                        <div>
                          <h3 style={{ color: "green", marginTop: "15px" }}>
                            به روز رسانی با موفقیت انجام شد.
                          </h3>
                        </div>
                      )}
                      {showMessageHesab == 2 && (
                        <div>
                          <h3 style={{ color: "red", marginTop: "15px" }}>
                            عملیات به روز رسانی موفقیت آمیز نبود.لطفا باری دیگر
                            اقدام کنید.
                          </h3>
                        </div>
                      )}
                      <div className={styles.status_button_one}>
                        <button
                          type="submit"
                          className={`${styles.btn} ${styles.btnSubmit}`}
                        >
                          <h3 style={{ margin: "0px", fontSize: "15px" }}>
                            به روز رسانی
                          </h3>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </>
            )}

            {/* Links */}

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

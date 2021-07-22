// node libraries
import { useEffect, useState } from "react";
// scss
import styles from "../../../styles/pages/setting/setting.module.scss";

import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import Image from "next/image";
// form
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const getStates = async () => {
  let params = {};
  let loadData = null;
  let dataUrl = "/app/api/v1/get-all-state/";
  let response = await ApiRegister().apiRequest(
    loadData,
    "get",
    dataUrl,
    true,
    params
  );
  if (response.status === 200) {
    return response.data;
  }
};
const getBigCities = async (id) => {
  let params = {};
  let loadData = null;
  let dataUrl = `/app/api/v1/get-big-cities/?state_id=${id}`;
  let response = await ApiRegister().apiRequest(
    loadData,
    "get",
    dataUrl,
    true,
    params
  );
  if (response.status === 200) {
    return response.data;
  }
};
const getCities = async (id) => {
  let params = {};
  let loadData = null;
  let dataUrl = `/app/api/v1/get-cities/?bigcity_id=${id}`;
  let response = await ApiRegister().apiRequest(
    loadData,
    "get",
    dataUrl,
    true,
    params
  );
  if (response.status === 200) {
    return response.data;
  }
};
// const FORM_VALIDAITIOM = Yup.object().shape({
//   firstName: Yup.string().required("الزامی"),
//   lastName: Yup.string().required("الزامی"),
//   email: Yup.string().email("وجود ندارد").required("الزامی"),
//   phone: Yup.number()
//     .integer()
//     .typeError("مقدار  نامجرا است")
//     .required("الزامی"),
//   addressLine1: Yup.string().required("الزامی"),
//   addressLine2: Yup.string(),
//   citey: Yup.string().required("الزامی"),
//   state: Yup.string().required("الزامی"),
//   countery: Yup.string().required("الزامی"),
//   arrivelDate: Yup.date().required("الزامی"),
//   deputureDate: Yup.date().required("الزامی"),
//   message: Yup.string(),
//   termsOfService: Yup.boolean()
//     .oneOf([true], "Ghabool Kardi???")
//     .required("hatman bayad bezani"),
//   code:Yup.number().integer().typeError("مقدار نامجزا است").required("الزامی"),
//   sex:Yup.string().required("الزامی"),
//   codePosti:Yup.number().integer().typeError("مقدار نامجزا است").required("الزامی"),
//   telephone:Yup.number()
//   .integer()
//   .typeError("type errorr dadai")
//   .required("الزامی"),
//   Me:Yup.string(),
// });

const DesktopSetting = ({ activeHojreh }) => {
  const VALIDATION_SCHEMA = yup.object().shape({
    Title: yup.string().required("الزامی"),
    slug: yup.string().required("الزامی"),
    Description: yup.string().required("الزامی"),
    NationalCode: yup.number().required("الزامی"),
    MobileNumber: yup.number().required("الزامی"),
    PhoneNumber: yup.number().required("الزامی"),
    Address: yup.string().required("الزامی"),
    ZipCode: yup.number().required("الزامی"),
  });
  let [selectState, setSelectState] = useState([]);
  let [selectBigCities, setSelectBigCities] = useState([]);
  let [selectCities, setSelectCities] = useState([]);
  // console.log("active :>> ", activeHojreh);

  const [onMenu, setOnMenu] = useState("1");
  const [apiSetting, setApiSetting] = useState({});

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

      if (response.status === 200) {
        setApiSetting(await response.data);
      }

      setSelectState(await getStates());
    };

    activeHojreh.length > 0 && _handleRequestApi();
  }, [activeHojreh]);
  // console.log("apiSetting", apiSetting);

  const setting = async (body) => {
    // console.log("body>> ", body);
    const dataForSend = {
      Title: body.Title,
      Slug: body.slug,
      Description: body.Description,
      FK_ShopManager: {
        User_Profile: {
          NationalCode: body.NationalCode,
          MobileNumber: body.MobileNumber,
          PhoneNumber: body.PhoneNumber,
          BigCity: "",
          State: "",
          Address: body.Address,
          ZipCode: body.ZipCode,
        },
      },
    };

    let params = {};
    let loadData = dataForSend;
    let dataUrl = `/api/v1/shop/${activeHojreh}/settings/`;
    let response = await ApiRegister().apiRequest(
      loadData,
      "put",
      dataUrl,
      true,
      params
    );
    console.log("response :>> ", response);
  };

  const linkSetting = (body) => {
    // console.log("linkSetting...>>> ", body);
    const dataForSendLink = {
      social_media: {
        telegram: body.telegram,
        instagram: body.instagram,
      },
    };

    let params = {};
    let loadData = dataForSendLink;
    let dataUrl = `/api/v1/shop/${activeHojreh}/settings/social_media/`;

    let response = ApiRegister().apiRequest(
      loadData,
      "put",
      dataUrl,
      true,
      params
    );
  };

  const HesabBankiForm = (body) => {
    const dataHesabBankiForSend = {
      bank_account: {
        iban: body.iban,
        owner: body.owner,
      },
    };

    let params = {};
    let loadData = dataHesabBankiForSend;
    let dataUrl = `/api/v1/shop/${activeHojreh}/settings/bank_account/`;

    let response = ApiRegister().apiRequest(
      loadData,
      "put",
      dataUrl,
      true,
      params
    );
  };
  return (
    <div dir="rtl" className={styles.setting}>
      {/* Header Site */}
      <div className={styles.header}>
        <div className={styles.header_title}>
          <h1>
            تنظیمات{" "}
            <i
              className="fas fa-chevron-left"
              style={{
                marginRight: "2px",
                marginLeft: "4px",
                display: "inline-block",
              }}
            ></i>
            {onMenu == "1" && <span>حجره</span>}
            {onMenu == "2" && <span> حساب بانکی</span>}
            {onMenu == "3" && <span> ارسال</span>}
            {onMenu == "4" && <span> لینک ها</span>}
          </h1>
        </div>

        {/* Header MenuBar */}
        <div className={styles.header_menu}>
          <button
            onClick={() => {
              setOnMenu("1");
            }}
            className={styles.header_menu_btn}
          >
            <h1 className={onMenu == "1" && styles.onBtn}>حجره</h1>
          </button>

          <button
            onClick={() => {
              setOnMenu("2");
            }}
            className={styles.header_menu_btn}
          >
            <h1 className={onMenu == "2" && styles.onBtn}>حساب بانکی</h1>
          </button>
          <button
            onClick={() => {
              setOnMenu("3");
            }}
            className={styles.header_menu_btn}
          >
            <h1 className={onMenu == "3" && styles.onBtn}>ارسال</h1>
          </button>
          <button
            onClick={() => {
              setOnMenu("4");
            }}
            className={styles.header_menu_btn}
          >
            <h1 className={onMenu == "4" && styles.onBtn}>لینک ها</h1>
          </button>
        </div>
      </div>

      {/* Setting Conttent */}
      <div className={styles.wrapper}>
        {/* Hojreh */}
        {/* TODO  into Formik */}
        {onMenu == "1" && (
          <>
            {/* <div className={styles.Hojreh_headD}>
              <div>
                <div className={styles.Hojreh_headD_pic}>
                  <div className={styles.Hojreh_headD_edit_icon_pic}>
                    <span className="fas fa-edit"></span>
                  </div>
                </div>
                <div className={styles.Hojreh_headD_edit_icon}>
                  <span className="fas fa-edit"></span>
                </div>
              </div>
            </div> */}
            {/* <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("iiiiii :>> ", e.target);
              }}
            > */}
            {/* <form
              onSubmit={async (e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                let body = Object.fromEntries(data.entries());
                let response = await setting(body);
                // if (response.status === 201) {
                //   setShowSuccessPage((showSuccessPage) => !showSuccessPage);
                // }
              }}
            > */}

            <Formik
              enableReinitialize={true}
              initialValues={{
                Title: apiSetting.Title,
                slug: apiSetting.Slug,
                Description: apiSetting.Description,
                NationalCode:
                  apiSetting.FK_ShopManager &&
                  apiSetting.FK_ShopManager.User_Profile.NationalCode,
                MobileNumber:
                  apiSetting.FK_ShopManager &&
                  apiSetting.FK_ShopManager.User_Profile.MobileNumber,
                PhoneNumber:
                  apiSetting.FK_ShopManager &&
                  apiSetting.FK_ShopManager.User_Profile.PhoneNumber,
                Address:
                  apiSetting.FK_ShopManager &&
                  apiSetting.FK_ShopManager.User_Profile.Address,
                ZipCode:
                  apiSetting.FK_ShopManager &&
                  apiSetting.FK_ShopManager.User_Profile.ZipCode,
              }}
              validationSchema={VALIDATION_SCHEMA}
              onSubmit={(data) => {
                const dataForSend = {
                  Title: data.Title,
                  Slug: data.slug,
                  Description: data.Description,
                  FK_ShopManager: {
                    User_Profile: {
                      NationalCode: data.NationalCode,
                      MobileNumber: data.MobileNumber,
                      PhoneNumber: data.PhoneNumber,
                      BigCity: "",
                      State: "",
                      Address: data.Address,
                      ZipCode: data.ZipCode,
                    },
                  },
                };
                console.log("dataForSend :>> ", dataForSend);
              }}
            >
              {({ values, errors }) => (
                <Form>
                  <div className={styles.Hojreh_profile}>
                    <div className={styles.HeadName}>
                      <h1>حجره</h1>
                    </div>
                    <div className={styles.hojrehD}>
                      <div className={styles.input_setting}>
                        <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                          نام حجره
                        </h2>
                        <div className={styles.inputWidRtl}>
                          <Field
                            name="Title"
                            type="text"
                            // defaultValue={apiSetting.Title}
                          />
                          <small className={styles.error}>{errors.Title}</small>
                        </div>
                      </div>
                      <div className="">
                        <h4 className={styles.explain} style={{marginTop:"33px"}}>نام حجره:</h4>
                        <h4 className={styles.explain}>
                          نام حجره خود را به زبان فارسی انتخاب کنید. نام حجره
                          باید مختص شما و جز مالکیت شخص دیگری نشود. سعی شود تا
                          نام نامناسب و بیگانه استفاده نباشد. این نام هویت و
                          شخصیت شماست و برای کاربران نمایش داده می شود.
                        </h4>
                      </div>
                      <div className={styles.input_setting}>
                        <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                          آدرس اینترنتی حجره
                        </h2>
                        <div className={styles.inputWid}>
                          <Field
                            name="slug"
                            type="text"
                            // defaultValue={apiSetting.Slug}
                          />
                        </div>
                      </div>
                      <div className="">
                        <h4 className={styles.explain} style={{marginTop:"33px"}}>آدرس اینترنتی:</h4>
                        <h4 className={styles.explain}>آدرس اینترنتی، نشانی حجره شما در نخل است. نام حجره خود را ﺑﺎ ﺣﺮوف و اﻋﺪاد اﻧﮕﻠﯿﺴﯽ ﺑﻨﻮﯾﺴﯿﺪ. برای فاصه از (_) استفاده کنید.</h4>
                      </div>
                      <div className={styles.input_setting}>
                        <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                          درباره حجره
                        </h2>
                        <div className={styles.inputWidRtlH}>
                          <textarea
                            name="Description"
                            rows="4"
                            cols="50"
                            defaultValue={apiSetting.Description}
                          />
                        </div>
                      </div>

                      <div className="">
                        <h4
                          className={styles.explain}
                          style={{ marginTop: "33px" }}
                        >
                          درباره حجره:
                        </h4>
                        <h4 className={styles.explain}>
                          به عنوان مثال: کتاب غذای روح است.هر کس با کتاب آرامش
                          یابد هیچ آرامشی را از دست ندهد. اینجا نمایشگاه کتاب
                          ... است.گامی در جهت تحول فرهنگ مطالعه مردم کشورمان!
                          محلی برای آشنایی با یک حس شیرین و دلنشین.
                        </h4>
                      </div>
                      {/* <div className={styles.input_setting}>
                  <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                    نوع کسب وکار
                  </h2>
                  <div className={styles.inputWidRtl}>
                    <input type="text" />
                  </div>
                </div>
                <div className="">
                  <h4 className={styles.explain}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، طراحی اساسا مورد
                    استفاده قرار گیرد.
                  </h4>
                </div> */}
                    </div>
                  </div>

                  <div className={styles.Hojreh_space}>
                    <div className={styles.HeadName}>
                      <h1>مشخصات</h1>
                    </div>

                    <div className={styles.spaceGridD}>
                      <div className={styles.input_setting}>
                        <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                          کد ملی
                        </h2>
                        <div className={styles.inputWid}>
                          <Field
                            name="NationalCode"
                            type="text"
                            defaultValue={
                              apiSetting.FK_ShopManager &&
                              apiSetting.FK_ShopManager.User_Profile
                                .NationalCode
                            }
                          />
                        </div>
                      </div>
                      <div className="">
                        <h4 className={styles.explain}></h4>
                      </div>
                      <div className={styles.input_setting}>
                        <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                          شماره تماس اصلی
                        </h2>
                        <div className={styles.inputWid}>
                          <Field
                            name="MobileNumber"
                            type="text"
                            defaultValue={
                              apiSetting.FK_ShopManager &&
                              apiSetting.FK_ShopManager.User_Profile
                                .MobileNumber
                            }
                          />
                        </div>
                      </div>

                      <div className="">
                        <h4 className={styles.explain}>شماره تماس:</h4>
                        <h4 className={styles.explain}>
                          پیامک های مهم به این شماره ارسال می‌شوند. جهت تغییر با
                          پشتیبانی تماس بگیرید.
                        </h4>
                      </div>
                      <div className={styles.input_setting}>
                        <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                          شماره تلفن ثابت
                        </h2>
                        <div className={styles.inputWid}>
                          <Field
                            name="PhoneNumber"
                            type="text"
                            // defaultValue={
                            //   apiSetting.FK_ShopManager &&
                            //   apiSetting.FK_ShopManager.User_Profile.PhoneNumber
                            // }
                          />
                        </div>
                      </div>
                      <div className="">
                        <h4 className={styles.explain}></h4>
                      </div>
                    </div>
                  </div>

                  <div className={styles.Hojreh_Address}>
                    <div className={styles.HeadName}>
                      <h1>آدرس</h1>
                    </div>

                    <div className={styles.AddressGridD}>
                      <div className={styles.forAddress}>
                        <label className={styles.form_label}>استان</label>
                        <select
                          className={styles.form_select}
                          name="State"
                          defaultValue="0"
                        >
                          <option value="0" disabled>
                            برای باز شدن لیست کلیک کنید
                          </option>
                          {selectState.map((value, index) => {
                            return (
                              <option
                                key={index}
                                value={value.id}
                                onClick={async (e) => {
                                  debugger;
                                  setSelectBigCities(
                                    await getBigCities(e.target.value)
                                  );
                                }}
                              >
                                {value.name}
                              </option>
                            );
                          })}
                        </select>
                        <label className={styles.form_label}>شهرستان</label>
                        <select
                          className={styles.form_select}
                          name="BigCity"
                          defaultValue="0"
                        >
                          <option value="0" disabled>
                            برای باز شدن لیست کلیک کنید
                          </option>
                          {selectBigCities.map((value, index) => {
                            return (
                              <option
                                key={index}
                                value={value.id}
                                onClick={async (e) => {
                                  setSelectCities(
                                    await getCities(e.target.value)
                                  );
                                }}
                              >
                                {value.name}
                              </option>
                            );
                          })}
                        </select>
                        <label className={styles.form_label}>شهر</label>
                        <select
                          className={styles.form_select}
                          name="City"
                          defaultValue="0"
                        >
                          <option value="0" disabled>
                            برای باز شدن لیست کلیک کنید
                          </option>
                          {selectCities.map((value, index) => {
                            return (
                              <option key={index} value={value.id}>
                                {value.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="">
                        <h4 className={styles.explain}></h4>
                      </div>
                      <div className={styles.input_setting}>
                        <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                          آدرس
                        </h2>
                        <div className={styles.inputWidRtlH}>
                          <textarea
                            name="Address"
                            rows="4"
                            cols="50"
                            // defaultValue={
                            //   apiSetting.FK_ShopManager &&
                            //   apiSetting.FK_ShopManager.User_Profile.Address
                            // }
                          />
                        </div>
                      </div>
                      <div className="">
                        <h4 className={styles.explain}></h4>
                      </div>

                      <div className={styles.input_setting}>
                        <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                          کد پستی
                        </h2>
                        <div className={styles.inputWid}>
                          <Field
                            type="input"
                            name="ZipCode"
                            defaultValue={
                              apiSetting.FK_ShopManager &&
                              apiSetting.FK_ShopManager.User_Profile.ZipCode
                            }
                          />
                        </div>
                      </div>
                      <div className="">
                        <h4 className={styles.explain}></h4>
                      </div>
                    </div>
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
                  </div>

                  <div className={styles.status_button_one}>
                    <button
                      // onClick={() => {
                      //   setbtnOk(!btnOk);
                      // }}
                      className={`${styles.btn} ${styles.btnSubmit}`}
                    >
                      <h3>ذخیره اطلاعات</h3>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            {/* </form> */}
            {/* TODO finish */}
            <div style={{ marginTop: "80px" }}></div>
          </>
        )}

        {/* HesabBanki */}
        {onMenu == "2" && (
          <>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                let body = Object.fromEntries(data.entries());
                let response = await HesabBankiForm(body);
                // if (response.status === 201) {
                //   setShowSuccessPage((showSuccessPage) => !showSuccessPage);
                // }
              }}
            >
              {/* <div className={styles.note}>
                <span className="fas fa-info-circle"></span>

                <h1 className={styles.note_text}>
                  برای ویرایش شماره شبا بعد از تغییر بر روی گزینع بر روز رسانی
                  کلیک کنید.
                </h1>
              </div> */}

              <div className={styles.HesabBankiGridD}>
                <div className={styles.input_setting}>
                  <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                    شماره شبا
                  </h2>
                  <div className={styles.inputWid_withWord}>
                    <div>
                      <h2>IR-</h2>
                    </div>
                    <input
                      name="iban"
                      type="text"
                      defaultValue={
                        apiSetting.bank_account && apiSetting.bank_account.iban
                      }
                    />
                  </div>
                </div>
                <div className={styles.fatherExp}>
                  <h4 className={styles.explain}>
                    شماره شبا جهت تسویه حساب مالی با شما لازم است. با مراجعه به
                    سایت بانک خودتان می‌توانید شماره شبا خود را دریافت کنید.
                  </h4>
                  <h4 className={styles.explain} style={{ marginTop: "10px" }}>
                    شماره شبا یک عدد ۲۴ رقمی است که با IR شروع می‌شود.
                  </h4>
                  <h4 className={styles.explain} style={{ marginTop: "10px" }}>
                    شماره 24 رقمی شبا خود را جهت تسویه حساب مالی وارد کنید.
                  </h4>
                  <h4 className={styles.explain} style={{ marginTop: "10px" }}>
                    مثلا : IR 1233 4455 6677 8811 4466 22
                  </h4>
                </div>
                <div className={styles.input_setting}>
                  <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                    صاحب حساب
                  </h2>
                  <div className={styles.inputWid}>
                    <input
                      name="owner"
                      type="text"
                      defaultValue={
                        apiSetting.bank_account && apiSetting.bank_account.owner
                      }
                    />
                  </div>
                </div>
              </div>

              {/* ‌Buttons */}

              <div className={styles.status_button_one}>
                <button
                  // onClick={() => {
                  //   setbtnOk(!btnOk);
                  // }}
                  className={`${styles.btn} ${styles.btnSubmit}`}
                >
                  <h3>به روز رسانی</h3>
                </button>
              </div>
            </form>
          </>
        )}

        {/* Links */}
        {onMenu == "4" && (
          <>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                let body = Object.fromEntries(data.entries());
                let response = await linkSetting(body);
                // if (response.status === 201) {
                //   setShowSuccessPage((showSuccessPage) => !showSuccessPage);
                // }
              }}
            >
              <div className={styles.LinksGridD}>
                <div className={styles.input_setting}>
                  <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                    آدرس تلگرام
                  </h2>
                  <div className={styles.inputWid_withWord}>
                    <div>
                      <h2>t.me/</h2>
                    </div>
                    <input
                      type="text"
                      name="telegram"
                      defaultValue={
                        apiSetting.social_media &&
                        apiSetting.social_media.telegram
                      }
                    />
                  </div>
                </div>
                <div className="">
                  <h4 className={styles.explain}></h4>
                </div>
                <div className={styles.input_setting}>
                  <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                    آدرس اینستاگرام
                  </h2>
                  <div className={styles.inputWid_withWord}>
                    <div>
                      <h2>instagram.com/</h2>
                    </div>
                    <input
                      type="text"
                      name="instagram"
                      defaultValue={
                        apiSetting.social_media &&
                        apiSetting.social_media.instagram
                      }
                    />
                  </div>
                </div>
              </div>
              {/* ‌Buttons */}

              <div className={styles.status_button_one}>
                <button
                  type="submit"
                  className={`${styles.btn} ${styles.btnSubmit}`}
                >
                  <h3>ذخیره اطلاعات </h3>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
// export
export default DesktopSetting;

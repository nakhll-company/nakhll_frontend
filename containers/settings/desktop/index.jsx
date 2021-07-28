// node libraries
import { useEffect, useState } from "react";
import Image from "next/image";
import ReactCrop from "react-image-crop";
import { connect } from "react-redux";

// scss
import styles from "../../../styles/pages/setting/setting.module.scss";

// methods
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { mapState } from "../methods/mapState";
import { getUserInfo } from "../../../redux/actions/user/getUserInfo";
// form
import { Formik, Form, Field, FieldArray } from "formik";
import * as yup from "yup";

// components
import { Loading } from "../../../components/custom/Loading/Loading";
import Headers from "../components/Headers/Headers";

// validation
import { VALIDATION_SCHEMA, VALIDATION_HESAB } from "../methods/Validation";

// Toast
import { toast } from "react-toastify";

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

const DesktopSetting = ({ activeHojreh, userInfo }) => {
  const [apiSetting, setApiSetting] = useState({});
  const [ChoiceBigCity, setChoiceBigCity] = useState("");
  const [ChoiceCity, setChoiceCity] = useState("");
  const [ChoiceState, setChoiceState] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [IsLoadingHesab, setIsLoadingHesab] = useState(false);
  const [MainLoading, setMainLoading] = useState(true);
  const [onMenu, setOnMenu] = useState("1");
  const [selectBigCities, setSelectBigCities] = useState([]);
  const [selectCities, setSelectCities] = useState([]);
  const [selectState, setSelectState] = useState([]);
  const [showMessage, setshowMessage] = useState(0);
  const [showMessageHesab, setShowMessageHesab] = useState(0);

  // state For save picture
  const [selectImageAvatar, setSelectImageAvatar] = useState(null);
  const [ImageA, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
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
      setChoiceState(response.data.FK_ShopManager.User_Profile.State);
      setChoiceBigCity(response.data.FK_ShopManager.User_Profile.BigCity);
      setChoiceCity(response.data.FK_ShopManager.User_Profile.City);

      if (response.status === 200) {
        setApiSetting(await response.data);
        setMainLoading(false);
      }

      setSelectState(await getStates());
    };

    activeHojreh.length > 0 && _handleRequestApi();
  }, [activeHojreh]);

  const linkSetting = (body) => {
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

  // For pic Avatar
  const handelPicAvatar = (e) => {
    console.log("e.target.files[0] :>> ", e.target.files[0]);
    console.log(
      "e.target.files[0] :>> ",
      URL.createObjectURL(e.target.files[0])
    );
    setSelectImageAvatar(URL.createObjectURL(e.target.files[0]));
  };

  function getCroppedImg() {
    const canvas = document.createElement("canvas");
    const scaleX = ImageA.naturalWidth / ImageA.width;
    const scaleY = ImageA.naturalHeight / ImageA.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      ImageA,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    const base64Image = canvas.toDataURL("image/jpeg");
    console.log("base64Image :>> ", base64Image);
    setResult(base64Image);

    // Send Avatar Pic to Server
    const _sendPicAvatar = async () => {
      let params = {};
      let loadData = { image: ` ${base64Image}` };

      let dataUrl = `/api/v1/shop/${activeHojreh}/settings/avatar/`;
      try {
        let response = await ApiRegister().apiRequest(
          loadData,
          "PUT",
          dataUrl,
          true,
          params
        );
        if (response.status === 200) {
          toast.success("عکس پروفایل به روز رسانی شد", {
            position: "top-right",
            closeOnClick: true,
          });
        }
      } catch (e) {
        toast.error("خطایی در ارسال داده ها پیش آمده است", {
          position: "top-right",
          closeOnClick: true,
        });
      }
    };
    _sendPicAvatar();

    setSelectImageAvatar(null);
  }

  return (
    <div dir="rtl" className={styles.setting}>
      {/* Header Site */}
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
                        <label htmlFor="file_pic_avatar">
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
                      {/* <span className="fas fa-edit"></span> */}
                    </div>
                  </div>
                </div>
                {selectImageAvatar && (
                  <div
                    style={{
                      height: "400px",

                      marginBottom: "15px",
                    }}
                  >
                    <div className={styles.btn_For_save}>
                      <button onClick={getCroppedImg}>ویرایش تصویر </button>
                    </div>
                    <ReactCrop
                      src={selectImageAvatar}
                      onImageLoaded={setImage}
                      crop={crop}
                      onChange={setCrop}
                    />
                  </div>
                )}

                {/* <form
              onSubmit={(e) => {
                e.preventDefault();
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
                  onSubmit={async (data) => {
                    setshowMessage(0);
                    setIsLoading(true);

                    const dataForSend = {
                      Title: data.Title,
                      Slug: data.slug,
                      Description: data.Description,
                      FK_ShopManager: {
                        User_Profile: {
                          NationalCode: data.NationalCode,
                          MobileNumber: data.MobileNumber,
                          PhoneNumber: data.PhoneNumber,
                          BigCity: ChoiceBigCity,
                          State: ChoiceState,
                          City: ChoiceCity,
                          Address: data.Address,
                          ZipCode: data.ZipCode,
                        },
                      },
                    };
                    let params = {};
                    let loadData = dataForSend;
                    let dataUrl = `/api/v1/shop/${activeHojreh}/settings/`;
                    try {
                      const response = await ApiRegister().apiRequest(
                        loadData,
                        "put",
                        dataUrl,
                        true,
                        params
                      );
                      if (response.status === 200) {
                        setIsLoading(false);
                        setshowMessage(1);
                      }
                    } catch (error) {
                      setIsLoading(false);
                      // Not Good
                      setshowMessage(2);
                    }
                  }}
                >
                  {({ values, errors, touched }) => (
                    <Form>
                      <div className={styles.Hojreh_profile}>
                        <div className={styles.HeadName}>
                          <h1>حجره</h1>
                        </div>
                        <div className={styles.hojrehD}>
                          <div className={styles.input_setting}>
                            <h2
                              style={{
                                marginBottom: "10px",
                                color: "#364254",
                              }}
                            >
                              نام حجره
                            </h2>
                            <div className={styles.inputWidRtl}>
                              <Field
                                name="Title"
                                type="text"
                                // defaultValue={apiSetting.Title}
                              />
                              {touched.Title && errors.Title ? (
                                <small className={styles.error}>
                                  {errors.Title}
                                </small>
                              ) : null}
                            </div>
                          </div>
                          <div className="">
                            <h4
                              className={styles.explain}
                              style={{ marginTop: "33px" }}
                            >
                              نام حجره:
                            </h4>
                            <h4 className={styles.explain}>
                              نام حجره خود را به زبان فارسی انتخاب کنید. نام
                              حجره باید مختص شما و جز مالکیت شخص دیگری نشود. سعی
                              شود تا نام نامناسب و بیگانه استفاده نباشد. این نام
                              هویت و شخصیت شماست و برای کاربران نمایش داده می
                              شود.
                            </h4>
                          </div>

                          <div className={styles.input_setting}>
                            <h2
                              style={{
                                marginBottom: "10px",
                                color: "#364254",
                              }}
                            >
                              آدرس اینترنتی حجره
                            </h2>
                            <div className={styles.inputWid}>
                              <Field
                                name="slug"
                                type="text"
                                // defaultValue={apiSetting.Slug}
                              />
                              {touched.slug && errors.slug ? (
                                <small className={styles.error}>
                                  {errors.slug}
                                </small>
                              ) : null}
                            </div>
                          </div>
                          <div className="">
                            <h4
                              className={styles.explain}
                              style={{ marginTop: "33px" }}
                            >
                              آدرس اینترنتی:
                            </h4>
                            <h4 className={styles.explain}>
                              آدرس اینترنتی، نشانی حجره شما در نخل است. نام حجره
                              خود را ﺑﺎ ﺣﺮوف و اﻋﺪاد اﻧﮕﻠﯿﺴﯽ ﺑﻨﻮﯾﺴﯿﺪ. برای فاصه
                              از (_) استفاده کنید.
                            </h4>
                          </div>

                          <div className={styles.input_setting}>
                            <h2
                              style={{
                                marginBottom: "10px",
                                color: "#364254",
                              }}
                            >
                              درباره حجره
                            </h2>
                            <div className={styles.inputWidRtlH}>
                              <Field type="input" name="Description" />
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
                              به عنوان مثال: کتاب غذای روح است.هر کس با کتاب
                              آرامش یابد هیچ آرامشی را از دست ندهد. اینجا
                              نمایشگاه کتاب ... است.گامی در جهت تحول فرهنگ
                              مطالعه مردم کشورمان! محلی برای آشنایی با یک حس
                              شیرین و دلنشین.
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
                            <h2
                              style={{
                                marginBottom: "10px",
                                color: "#364254",
                              }}
                            >
                              کد ملی
                            </h2>
                            <div className={styles.inputWid}>
                              <Field name="NationalCode" type="text" />
                              {touched.NationalCode && errors.NationalCode ? (
                                <small className={styles.error}>
                                  {errors.NationalCode}
                                </small>
                              ) : null}
                            </div>
                          </div>
                          <div className="">
                            <h4 className={styles.explain}></h4>
                          </div>
                          <div className={styles.input_setting}>
                            <h2
                              style={{
                                marginBottom: "10px",
                                color: "#364254",
                              }}
                            >
                              شماره تماس اصلی
                            </h2>
                            <div className={styles.inputWid}>
                              <Field name="MobileNumber" type="text" />
                              {touched.MobileNumber && errors.MobileNumber ? (
                                <small className={styles.error}>
                                  {errors.MobileNumber}
                                </small>
                              ) : null}
                            </div>
                          </div>

                          <div className="">
                            <h4
                              style={{ marginTop: "33px" }}
                              className={styles.explain}
                            >
                              شماره تماس:
                            </h4>
                            <h4 className={styles.explain}>
                              پیامک های مهم به این شماره ارسال می‌شوند. جهت
                              تغییر با پشتیبانی تماس بگیرید.
                            </h4>
                          </div>
                          <div className={styles.input_setting}>
                            <h2
                              style={{
                                marginBottom: "10px",
                                color: "#364254",
                              }}
                            >
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
                            {/* استان */}
                            <label className={styles.form_label}>استان</label>
                            <select
                              className={styles.form_select}
                              name="State"
                              defaultValue=""
                              onChange={async (event) => {
                                setSelectBigCities(
                                  await getBigCities(event.target.value)
                                );

                                setChoiceState(
                                  event.target[event.target.selectedIndex].text
                                );
                              }}
                            >
                              <option value="" disabled>
                                {apiSetting.FK_ShopManager.User_Profile.State}
                              </option>
                              {selectState.map((value, index) => {
                                return (
                                  <option key={index} value={value.id}>
                                    {value.name}
                                  </option>
                                );
                              })}
                            </select>
                            <label className={styles.form_label}>شهرستان</label>
                            <select
                              className={styles.form_select}
                              name="BigCity"
                              defaultValue=""
                              onChange={async (event) => {
                                setSelectCities(
                                  await getCities(event.target.value)
                                );

                                setChoiceBigCity(
                                  event.target[event.target.selectedIndex].text
                                );
                              }}
                            >
                              <option value="" disabled>
                                {apiSetting.FK_ShopManager.User_Profile.BigCity}
                              </option>
                              {selectBigCities.map((value, index) => {
                                return (
                                  <option key={index} value={value.id}>
                                    {value.name}
                                  </option>
                                );
                              })}
                            </select>
                            <label className={styles.form_label}>شهر</label>
                            <select
                              className={styles.form_select}
                              name="City"
                              defaultValue=""
                              onChange={(event) => {
                                setChoiceCity(event.target.value);
                              }}
                            >
                              <option value="" disabled>
                                {apiSetting.FK_ShopManager.User_Profile.City}{" "}
                              </option>
                              {selectCities.map((value, index) => {
                                return (
                                  <option key={index} value={value.name}>
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
                            <h2
                              style={{
                                marginBottom: "10px",
                                color: "#364254",
                              }}
                            >
                              آدرس
                            </h2>

                            <div className={styles.inputWidRtlH}>
                              <Field
                                name="Address"
                                rows="4"
                                cols="50"
                                // defaultValue={
                                //   apiSetting.FK_ShopManager &&
                                //   apiSetting.FK_ShopManager.User_Profile.Address
                                // }
                              />
                              {touched.Address && errors.Address ? (
                                <small className={styles.error}>
                                  {errors.Address}
                                </small>
                              ) : null}
                            </div>
                          </div>

                          <div className="">
                            <h4 className={styles.explain}></h4>
                          </div>

                          <div className={styles.input_setting}>
                            <h2
                              style={{
                                marginBottom: "10px",
                                color: "#364254",
                              }}
                            >
                              کد پستی
                            </h2>
                            <div className={styles.inputWid}>
                              <Field type="input" name="ZipCode" />
                              {touched.ZipCode && errors.ZipCode ? (
                                <small className={styles.error}>
                                  {errors.ZipCode}
                                </small>
                              ) : null}
                            </div>
                          </div>
                          <div className="">
                            <h4 className={styles.explain}></h4>
                          </div>
                        </div>
                        {IsLoading && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
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
                        {showMessage == 1 && (
                          <div>
                            <h3 style={{ color: "green" }}>
                              به روز رسانی با موفقیت انجام شد.
                            </h3>
                          </div>
                        )}
                        {showMessage == 2 && (
                          <div>
                            <h3 style={{ color: "red" }}>
                              عملیات به روز رسانی موفقیت آمیز نبود.لطفا باری
                              دیگر اقدام کنید.
                            </h3>
                          </div>
                        )}
                      </div>

                      <div className={styles.status_button_one}>
                        <button
                          // onClick={() => {
                          //   setbtnOk(!btnOk);
                          // }}

                          type="submit"
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
                    } else {
                      setIsLoadingHesab(false);
                      setShowMessageHesab(2);
                    }
                  }}
                >
                  {({ values, errors, touched }) => (
                    <Form>
                      {/* <div className={styles.note}>
                <span className="fas fa-info-circle"></span>

                <h1 className={styles.note_text}>
                  برای ویرایش شماره شبا بعد از تغییر بر روی گزینع بر روز رسانی
                  کلیک کنید.
                </h1>
              </div> */}

                      <div className={styles.HesabBankiGridD}>
                        <div className={styles.input_setting}>
                          <h2
                            style={{
                              marginBottom: "10px",
                              color: "#364254",
                            }}
                          >
                            شماره شبا
                          </h2>
                          <div className={styles.inputWid_withWord}>
                            <div>
                              <h2>IR-</h2>
                            </div>
                            <Field name="iban" type="text" />
                          </div>
                          {touched.iban && errors.iban ? (
                            <small className={styles.error}>
                              {errors.iban}
                            </small>
                          ) : null}
                        </div>
                        <div className={styles.fatherExp}>
                          <h4 className={styles.explain}>
                            شماره شبا جهت تسویه حساب مالی با شما لازم است. با
                            مراجعه به سایت بانک خودتان می‌توانید شماره شبا خود
                            را دریافت کنید.
                          </h4>
                          <h4
                            className={styles.explain}
                            style={{ marginTop: "10px" }}
                          >
                            شماره شبا یک عدد ۲۴ رقمی است که با IR شروع می‌شود.
                          </h4>
                          <h4
                            className={styles.explain}
                            style={{ marginTop: "10px" }}
                          >
                            شماره 24 رقمی شبا خود را جهت تسویه حساب مالی وارد
                            کنید.
                          </h4>
                          <h4
                            className={styles.explain}
                            style={{ marginTop: "10px" }}
                          >
                            مثلا : IR 1233 4455 6677 8811 4466 22
                          </h4>
                        </div>
                        <div className={styles.input_setting}>
                          <h2
                            style={{
                              marginBottom: "10px",
                              color: "#364254",
                            }}
                          >
                            صاحب حساب
                          </h2>
                          <div className={styles.inputWid}>
                            <Field
                              name="owner"
                              type="text"
                              defaultValue={
                                apiSetting.bank_account &&
                                apiSetting.bank_account.owner
                              }
                            />
                          </div>
                          {touched.owner && errors.owner ? (
                            <small className={styles.error}>
                              {errors.owner}
                            </small>
                          ) : null}
                        </div>
                      </div>

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
                          // onClick={() => {
                          //   setbtnOk(!btnOk);
                          // }}
                          type="submit"
                          className={`${styles.btn} ${styles.btnSubmit}`}
                        >
                          <h3>به روز رسانی</h3>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
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
          </>
        )}
      </div>
    </div>
  );
};

// export
const connector = connect(mapState, { getUserInfo });
export default connector(DesktopSetting);

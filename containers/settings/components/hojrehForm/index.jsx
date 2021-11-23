import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { callApiUpDataShop } from "../../../../api/settings";
import { GetBigCities, GetCities, GetStates } from "../../../../utils/states";
import { dataExp } from "../../data";
import { VALIDATION_SCHEMA } from "../../methods/Validation";
import FieldCus from "../field";
import SubButton from "../subButton";
import TextArea from "../textArea";
import TitleLiner from "../titleLiner";
import styles from "./hojrehForm.module.scss";

function HojrehForm({ apiSetting, activeHojreh, setClicked }) {
  const [ChoiceBigCity, setChoiceBigCity] = useState(
    apiSetting.FK_ShopManager.User_Profile.BigCity
  );
  const [ChoiceCity, setChoiceCity] = useState(
    apiSetting.FK_ShopManager.User_Profile.City
  );
  const [ChoiceState, setChoiceState] = useState(
    apiSetting.FK_ShopManager.User_Profile.State
  );
  const [IsLoading, setIsLoading] = useState(false);
  const [showMessage, setshowMessage] = useState(0);
  const [selectBigCities, setSelectBigCities] = useState([]);
  const [selectState, setSelectState] = useState([]);
  const [selectCities, setSelectCities] = useState([]);

  useEffect(async () => {
    setSelectState(await GetStates());
  }, []);
  return (
    <>
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
          // setIsLoading(true);
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
          const response = await callApiUpDataShop(dataForSend, activeHojreh);
          if (response.status === 200) {
            setIsLoading(false);
            setshowMessage(1);

            setClicked((pre) => !pre);
          } else {
            setIsLoading(false);
            // Not Good
            setshowMessage(2);
          }
        }}
      >
        {(props) => (
          <Form>
            <TitleLiner title="حجره" />
            <FieldCus
              name="Title"
              type="text"
              title="نام حجره"
              extraTitle="غیر قابل تغییر"
              description={dataExp.Title}
              disabled={true}
            />
            <FieldCus
              name="slug"
              type="text"
              extraTitle="غیر قابل تغییر"
              title="آدرس اینترنتی حجره"
              description={dataExp.slug}
            />
            <TextArea
              name="Description"
              type="text"
              title="درباره حجره"
              description={dataExp.Description}
            />

            <TitleLiner title="مشخصات" />
            <FieldCus name="NationalCode" type="text" title="کد ملی" />
            <FieldCus
              name="MobileNumber"
              type="text"
              title="شماره تماس اصلی"
              description={dataExp.MobileNumber}
            />
            <FieldCus name="PhoneNumber" type="text" title="شماره تماس:" />
            <TitleLiner title="آدرس" />
            <div className={styles.forAddress}>
              {/* استان */}
              <label className={styles.form_label}>استان</label>
              <select
                className={styles.form_select}
                name="State"
                defaultValue=""
                onChange={async (event) => {
                  setSelectBigCities(await GetBigCities(event.target.value));

                  setChoiceState(event.target[event.target.selectedIndex].text);
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
                  setSelectCities(await GetCities(event.target.value));
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

            <TextArea name="Address" type="text" title="آدرس" />
            <FieldCus name="ZipCode" type="text" title="کد پستی" />
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
                  عملیات به روز رسانی موفقیت آمیز نبود.لطفا باری دیگر اقدام
                  کنید.
                </h3>
              </div>
            )}
            <SubButton title="ذخیره اطلاعات" />
            <div style={{ marginTop: "80px" }}></div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default HojrehForm;

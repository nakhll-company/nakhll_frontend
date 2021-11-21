import { Form, Formik } from "formik";
import { useState } from "react";
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
import { GetBigCities, GetCities } from "../../../../utils/states";
import { dataExp } from "../../data";
import { VALIDATION_SCHEMA } from "../../methods/Validation";
import FieldCus from "../field";
import TitleLiner from "../titleLiner";
import styles from "./hojrehForm.module.scss";

function HojrehForm({
  apiSetting,
  selectState,
  selectBigCities,
  selectCities,
  setSelectCities,
  showMessage,
  activeHojreh,
  setshowMessage,
  setClicked,
  setSelectBigCities,
}) {
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
          //   setIsLoading(true);

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
              // location.replace("https://nakhll.com/fp/setting");
              setClicked((pre) => !pre);
            }
          } catch (error) {
            alert(error);
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
              description={dataExp.Title}
            />
            <FieldCus
              name="slug"
              type="text"
              title="آدرس اینترنتی حجره"
              description={dataExp.slug}
            />
            <FieldCus
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
            <div className={styles.status_button_one}>
              <button
                type="submit"
                className={`${styles.btn} ${styles.btnSubmit}`}
              >
                <h3 style={{ margin: "0px", fontSize: "15px" }}>
                  ذخیره اطلاعات
                </h3>
              </button>
            </div>{" "}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default HojrehForm;

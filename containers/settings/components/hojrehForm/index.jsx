// node libraries
import Image from "next/image";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
// components
import FieldCus from "../field";
import TextArea from "../textArea";

import TitleLiner from "../titleLiner";
import AppButton from "../../../../components/AppButton";
// mehods
import { dataExp } from "../../data";
import { callApiUpDataShop } from "../../../../api/settings";
import { VALIDATION_SCHEMA } from "../../methods/Validation";
import { getCities } from "../../../../api/general/getCities";
import { getStates } from "../../../../api/general/getStates";
import { getBigCities } from "../../../../api/general/getBigCities";
// style
import styles from "./hojrehForm.module.scss";

function HojrehForm({ apiSetting, activeHojreh, setClicked }) {
  const [IsLoading, setIsLoading] = useState(false);
  const [showMessage, setshowMessage] = useState(0);
  const [selectState, setSelectState] = useState([]);
  const [selectCities, setSelectCities] = useState([]);
  const [selectBigCities, setSelectBigCities] = useState([]);
  const [ChoiceCity, setChoiceCity] = useState(apiSetting.City);
  const [ChoiceState, setChoiceState] = useState(apiSetting.State);
  const [ChoiceBigCity, setChoiceBigCity] = useState(apiSetting.BigCity);
  const [loaderButton, setLoaderButton] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getStates();
      setSelectState(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{
          Title: apiSetting?.Title,
          slug: apiSetting?.Slug,
          Description: apiSetting?.Description,
          NationalCode:
            apiSetting?.FK_ShopManager &&
            apiSetting?.FK_ShopManager?.User_Profile?.NationalCode,
          PhoneNumber:
            apiSetting?.FK_ShopManager &&
            apiSetting?.FK_ShopManager?.User_Profile?.PhoneNumber,
          CityPerCode:
            apiSetting?.FK_ShopManager &&
            apiSetting?.FK_ShopManager?.User_Profile?.CityPerCode,
          Address: apiSetting?.Location,
          ZipCode:
            apiSetting?.FK_ShopManager &&
            apiSetting?.FK_ShopManager?.User_Profile?.ZipCode,
        }}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={async (data) => {
          setshowMessage(0);
          setLoaderButton(true);
          const dataForSend = {
            Title: data.Title,
            Slug: data.slug,
            Description: data.Description,

            State: ChoiceState.id.toString(),
            BigCity: ChoiceBigCity.id.toString(),
            City: ++ChoiceCity.id,
            Location: data.Address,
            ZipCode: data.ZipCode,
            FK_ShopManager: {
              User_Profile: {
                NationalCode: data.NationalCode,
                PhoneNumber: data.PhoneNumber,
                CityPerCode: data.CityPerCode,
              },
            },
          };

          const response = await callApiUpDataShop(dataForSend, activeHojreh);
          if (response.status === 200) {
            setIsLoading(false);
            setshowMessage(1);
            setClicked((pre) => !pre);
            setLoaderButton(false);
          } else {
            setIsLoading(false);
            // Not Good
            setshowMessage(2);
            setLoaderButton(false);
          }
        }}
      >
        {() => (
          <Form>
            <TitleLiner title="????????" />
            <FieldCus
              name="Title"
              type="text"
              title="?????? ????????"
              extraTitle="?????? ???????? ??????????"
              description={dataExp.Title}
              disabled={true}
            />
            <FieldCus
              name="slug"
              type="text"
              extraTitle="?????? ???????? ??????????"
              title="???????? ???????????????? ????????"
              description={dataExp.slug}
              disabled={true}
            />
            <TextArea
              name="Description"
              type="text"
              title="???????????? ????????"
              description={dataExp.Description}
            />
            <TitleLiner title="????????????" />
            <FieldCus name="NationalCode" type="text" title="???? ??????" />
            <div style={{ display: "flex" }}>
              <FieldCus
                name="PhoneNumber"
                type="text"
                title="?????????? ???????? ????????:"
                styleInput={{ width: "180px" }}
                style={{
                  display: "flex",
                }}
              />
              <FieldCus
                style={{
                  display: "flex",

                  marginRight: "5px",
                }}
                styleInput={{ width: "100px" }}
                name="CityPerCode"
                type="text"
                title="?????? ?????????? :"
              />
            </div>
            <TitleLiner title="????????" />
            <div className={styles.forAddress}>
              {/* ?????????? */}
              {!!selectBigCities && (
                <>
                  <label className={styles.form_label}>??????????</label>
                  <select
                    className={styles.form_select}
                    name="State"
                    defaultValue=""
                    onChange={async (event) => {
                      setSelectBigCities(
                        await getBigCities(event.target.value)
                      );

                      setChoiceState({
                        id: event.target.value,
                        name: event.target[event.target.selectedIndex].text,
                      });
                    }}
                  >
                    <option value="" disabled>
                      {apiSetting?.State?.name}
                    </option>
                    {selectState.map((value, index) => {
                      return (
                        <option key={index} value={value.id}>
                          {value.name}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}

              <>
                <label className={styles.form_label}>??????????????</label>
                <select
                  className={styles.form_select}
                  name="BigCity"
                  defaultValue=""
                  onChange={async (event) => {
                    setSelectCities(await getCities(event.target.value));
                    setChoiceBigCity({
                      id: event.target.value,

                      name: event.target[event.target.selectedIndex].text,
                    });
                  }}
                >
                  <option value="" disabled>
                    {ChoiceBigCity?.name}
                  </option>
                  {selectBigCities.map((value, index) => {
                    return (
                      <option key={index} value={value.id}>
                        {value.name}
                      </option>
                    );
                  })}
                </select>
              </>

              <label className={styles.form_label}>??????</label>
              <select
                className={styles.form_select}
                name="City"
                defaultValue=""
                onChange={(event) => {
                  setChoiceCity({
                    id: event.target.value,
                    name: event.target[event.target.selectedIndex].text,
                  });
                }}
              >
                <option value="" disabled>
                  {ChoiceCity?.name}{" "}
                </option>
                {selectCities.map((value, index) => {
                  return (
                    <option key={index} value={value}>
                      {value.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <TextArea name="Address" type="text" title="????????" />
            <FieldCus name="ZipCode" type="text" title="???? ????????" />
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
                  ???? ?????? ?????????????????? ...
                </h3>
              </div>
            )}
            {showMessage == 1 && (
              <div>
                <h3 style={{ color: "green" }}>
                  ???? ?????? ?????????? ???? ???????????? ?????????? ????.
                </h3>
              </div>
            )}
            {showMessage == 2 && (
              <div>
                <h3 style={{ color: "red" }}>
                  ???????????? ???? ?????? ?????????? ???????????? ???????? ????????.???????? ???????? ???????? ??????????
                  ????????.
                </h3>
              </div>
            )}
            <div className="mt-3 mb-5">
              <AppButton title="?????????? ??????????????" loader={loaderButton} submit />
            </div>
            {/* <SubButton title="?????????? ??????????????" /> */}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default HojrehForm;

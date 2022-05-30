import React from "react";
// node libraies
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
// components
import useViewport from "../../../../components/viewPort";
import MobileHeader from "../../../../components/mobileHeader";
import SuccessPage from "../../../../containers/store/successPage";
import { mapState } from "../../../../containers/store/methods/mapState";
import { mapDispatch } from "../../../../containers/store/methods/mapDispatch";
// methods
import { getCities } from "../../../../api/general/getCities";
import { getStates } from "../../../../api/general/getStates";
import { getBigCities } from "../../../../api/general/getBigCities";
import { createStore } from "../../../../containers/store/methods/createStore";
// styles
import styles from "./createStore.module.scss";
import AppButton from "../../../../components/AppButton";

function NewStore({ getUserInfo, userInfo }) {
  const breakpoint = 620;
  const { width } = useViewport();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectState, setSelectState] = useState([]);
  const [selectBigCities, setSelectBigCities] = useState([]);
  const [selectCities, setSelectCities] = useState([]);
  const [showSuccessPage, setShowSuccessPage] = useState({
    loading: "false",
    success: "false",
  });
  const [loaderBtn, setLoaderBtn] = useState(false);

  const onSubmit = async (data) => {
    setLoaderBtn(true);
    setShowSuccessPage((prev) => {
      return {
        ...prev,
        loading: "true",
      };
    });
    
    data.State = Number(data.State);
    data.BigCity = Number(data.BigCity);
    data.City = Number(data.City);

    const response = await createStore(data);
    if (response.status === 201) {
      getUserInfo();
      setLoaderBtn(false);
      setShowSuccessPage({
        loading: "false",
        success: "true",
      });
    } else {
      setLoaderBtn(false);
      setShowSuccessPage({
        loading: "false",
        success: "false",
      });
    }
  };

  useEffect(() => {
    async function fetchData() {
      setSelectState(await getStates());
      Object.keys(userInfo).length === 0 && (await getUserInfo());
    }
    fetchData();
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <Head>
        <title>ثبت حجره</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {width < breakpoint && <MobileHeader title="ثبت حجره" type="back" />}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form_right}>
          {Object.keys(userInfo).length > 0 &&
            Object.keys(userInfo.user).length > 0 &&
            userInfo.user.first_name.length === 0 &&
            userInfo.user.last_name.length === 0 && (
              <>
                {/* name */}
                <label className={styles.form_label}>نام</label>
                <input
                  className={styles.form_input}
                  {...register("first_name", { required: true })}
                />
                {errors.first_name && (
                  <span className={styles.form_errors}>
                    لطفا این گزینه را پر کنید
                  </span>
                )}
                {/* family */}
                <label className={styles.form_label}>نام خانوادگی</label>
                <input
                  className={styles.form_input}
                  {...register("last_name", { required: true })}
                />
                {errors.last_name && (
                  <span className={styles.form_errors}>
                    لطفا این گزینه را پر کنید
                  </span>
                )}
              </>
            )}
          {/* title */}
          <label className={styles.form_label}>نام حجره</label>
          <input
            placeholder="پسته کرمان"
            className={styles.form_input}
            {...register("Title", { required: true })}
          />
          {errors.Title && (
            <span className={styles.form_errors}>
              لطفا این گزینه را پر کنید
            </span>
          )}
          {/* state */}
          <label className={styles.form_label}>استان</label>
          <select
            className={styles.form_select}
            {...register("State", { required: true })}
            onChange={async (event) => {
              const states = await getBigCities(event.target.value);
              setSelectBigCities(states);
            }}
          >
            <option></option>
            {selectState?.map((value, index) => {
              return (
                <option key={index} value={Number(value.id)}>
                  {value.name}
                </option>
              );
            })}
          </select>
          {errors.State && (
            <span className={styles.form_errors}>
              لطفا این گزینه را پر کنید
            </span>
          )}
          {/* big city */}
          <label className={styles.form_label}>شهرستان</label>
          <select
            className={styles.form_select}
            {...register("BigCity", { required: true })}
            onChange={async (event) => {
              setSelectCities(await getCities(event.target.value));
            }}
          >
            <option></option>
            {selectBigCities?.map((value, index) => {
              return (
                <option key={index} value={Number(value.id)}>
                  {value.name}
                </option>
              );
            })}
          </select>
          {errors.BigCity && (
            <span className={styles.form_errors}>
              لطفا این گزینه را پر کنید
            </span>
          )}
          {/* city */}
          <label className={styles.form_label}>شهر</label>
          <select
            className={styles.form_select}
            {...register("City", { required: true })}
          >
            <option></option>
            {selectCities.map((value, index) => {
              return (
                <option key={index} value={Number(value.id)}>
                  {value.name}
                </option>
              );
            })}
          </select>
          {errors.City && (
            <span className={styles.form_errors}>
              لطفا این گزینه را پر کنید
            </span>
          )}
          {/* roles */}
          <label className={styles.form_label}>
            <input
              className={styles.form_checkbox}
              type="checkbox"
              {...register("roles", { required: true })}
            />
            <Link href="https://nakhll.com/blog/%d8%b4%d8%b1%d8%a7%db%8c%d8%b7-%d9%88-%d8%b6%d9%88%d8%a7%d8%a8%d8%b7/">
              <a style={{ color: "blue" }}>قوانین</a>
            </Link>{" "}
            را به طور کامل مطالعه کردم و آنها را می پذیرم
          </label>
          {errors.roles && (
            <span className={styles.form_errors}>
              لطفا این گزینه را پر کنید
            </span>
          )}
          {/* show contact info */}
          <label className={styles.form_label}>
            <input
              className={styles.form_checkbox}
              type="checkbox"
              {...register("show_contact_info")}
            />
            مایل به نمایش شماره تماس جهت ارتباط کاربران با خود هستم
          </label>
          {/* button submit */}
          <div className={styles.wrapper_submit}>
            <AppButton loader={loaderBtn} title="ثبت حجره" submit />
          </div>
        </div>
        {/* left side */}
        <div className={styles.form_left}>
          <p>
            نام حجره باید به زبان فارسی، مختص شما و جز مالکیت شخص دیگری نباشد.
            سعی شود تا نام نامناسب و بیگانه استفاده نشود. این نام هویت و شخصیت
            شماست و برای کاربران نمایش داده می شود.
          </p>
        </div>
      </form>
      {/* loading */}
      {showSuccessPage.loading === "true" && (
        <div className={styles.loading}>
          <h1>لطفا منتظر بمانید</h1>
          <Image src="/loading.svg" width="45" height="45" alt="" />
        </div>
      )}
      {/* success page */}
      {showSuccessPage.success === "true" && <SuccessPage />}
    </div>
  );
}
// export
const connector = connect(mapState, mapDispatch);
export default connector(NewStore);

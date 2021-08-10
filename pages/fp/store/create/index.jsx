// node libraies
import Head from "next/head";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { toast } from "react-toastify";
// components
import MobileHeader from '../../../../components/mobileHeader';
import useViewport from '../../../../components/viewPort';
import SuccessPage from '../../../../containers/store/successPage';
import { mapDispatch } from '../../../../containers/store/methods/mapDispatch';
import { mapState } from '../../../../containers/store/methods/mapState';
// methods
import { getStates } from '../../../../containers/store/methods/getStates';
import { getBigCities } from '../../../../containers/store/methods/getBigCities';
import { getCities } from '../../../../containers/store/methods/getCities';
import { createStore } from '../../../../containers/store/methods/createStore';
// styles
import styles from '../../../../styles/pages/store/createStore.module.scss';

function NewStore({ getUserInfo, userInfo }) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setShowSuccessPage(prev => {
            return {
                ...prev,
                loading: "true"
            }
        });
        let response = await createStore(data);
        if (response.status === 201) {
            getUserInfo();
            setShowSuccessPage({
                loading: "false",
                success: "true"
            });
        } else {
            toast.error("خطایی در ایجاد حجره پیش آمده است", {
                position: "top-right",
                closeOnClick: true,
            });
        }
    };

    let [selectState, setSelectState] = useState([]);
    let [selectBigCities, setSelectBigCities] = useState([]);
    let [selectCities, setSelectCities] = useState([]);
    let [showSuccessPage, setShowSuccessPage] = useState({
        loading: "false",
        success: "false"
    });



    const { width } = useViewport();
    const breakpoint = 620;

    useEffect(async () => {
        // state
        setSelectState(await getStates());
        Object.keys(userInfo).length === 0 && await getUserInfo();
    }, []);

    return (
        <div className={styles.mainWrapper}>
            <Head>
                <title>ثبت حجره</title>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            {width < breakpoint && <MobileHeader title="ثبت حجره" type="close" />}
            {/* form */}
            {(userInfo && userInfo.user && userInfo.user.first_name && userInfo.user.last_name) ?
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.form_right}>
                        {/* title */}
                        <label className={styles.form_label}>نام حجره</label>
                        <input placeholder="پسته کرمان" className={styles.form_input} {...register("Title", { required: true })} />
                        {errors.Title && <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>}
                        {/* slug */}
                        {/* <label className={styles.form_label}>آدرس اینترنتی حجره</label>
                        <input style={{ textAlign: "left" }} className={styles.form_input}
                            placeholder="/nakhll.com" {...register("Slug", { required: true })} />
                        {errors.Slug && <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>} */}
                        {/* state */}
                        <label className={styles.form_label}>استان</label>
                        <select className={styles.form_select}  {...register("State", { required: true })} onChange={async (event) => {
                            setSelectBigCities(await getBigCities(event.target.value));
                        }}>
                            <option></option>
                            {selectState.map((value, index) => {
                                return (
                                    <option key={index} value={value.id}>{value.name}</option>
                                );
                            })}
                        </select>
                        {errors.State && <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>}
                        {/* big city */}
                        <label className={styles.form_label}>شهرستان</label>
                        <select className={styles.form_select} {...register("BigCity", { required: true })} onChange={async (event) => {
                            setSelectCities(await getCities(event.target.value));
                        }}>
                            <option></option>
                            {selectBigCities.map((value, index) => {
                                return (
                                    <option key={index} value={value.id}>{value.name}</option>
                                );
                            })}
                        </select>
                        {errors.BigCity && <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>}
                        {/* city */}
                        <label className={styles.form_label}>شهر</label>
                        <select className={styles.form_select} {...register("City", { required: true })}>
                            <option></option>
                            {selectCities.map((value, index) => {
                                return (
                                    <option key={index} value={value.id}>{value.name}</option>
                                );
                            })}
                        </select>
                        {errors.City && <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>}
                        {/* roles */}
                        <label className={styles.form_label}>
                            <input className={styles.form_checkbox} type="checkbox" {...register("roles", { required: true })} />
                            <a>قوانین</a> را به طور کامل مطالعه کردم و آنها را می پذیرم
                        </label>
                        {errors.roles && <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>}
                        {/* show contact info */}
                        <label className={styles.form_label}>
                            <input className={styles.form_checkbox} type="checkbox"  {...register("show_contact_info")} />
                            مایل به نمایش شماره تماس جهت ارتباط کاربران با خود هستم
                        </label>
                        {/* button submit */}
                        <div className={styles.wrapper_submit}>
                            <button className={styles.button_submit} type="submit">ثبت حجره</button>
                        </div>
                    </div>
                    {/* left side */}
                    <div className={styles.form_left}>
                        <p>
                            نام حجره خود را به زبان فارسی انتخاب کنید. نام حجره باید مختص شما و جز مالکیت شخص دیگری نباشد. سعی شود تا نام نامناسب و بیگانه استفاده نباشد. این نام هویت و شخصیت شماست و برای کاربران نمایش داده می شود.
                        </p>
                        {/* <p style={{ margin: "0px" }}>
                            آدرس اینترنتی، نشانی حجره شما در نخل است. نام حجره خود را ﺑﺎ ﺣﺮوف و اﻋﺪاد اﻧﮕﻠﯿﺴﯽ ﺑﻨﻮﯾﺴﯿﺪ. برای فاصه از (_) استفاده کنید.
                        </p> */}
                    </div>
                </form> :
                <h1 className={styles.info_completed}>لطفا ابتدا نام و نام خانوادگی خود را در صفحه پروفایل وارد نمایید</h1>
            }
            {showSuccessPage.loading === "true" && <div className={styles.loading}>
                <h1>لطفا منتظر بمانید</h1>
                <Image src="/loading.svg" width="45" height="45" />
            </div>}
            {showSuccessPage.success === "true" && <SuccessPage />}
        </div>
    );
}
const connector = connect(mapState, mapDispatch);
export default connector(NewStore);
// node libraries
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
// componentes
import Loading from "../../../../components/loading";
// methods
import { getCities } from "../../../../api/general/getCities";
import { getStates } from "../../../../api/general/getStates";
import { getBigCities } from "../../../../api/general/getBigCities";
import { updateAddress } from "../../../../api/cartAddress/updateAddress";
import { getEditAddress } from "../../../../api/cartAddress/getEditAddress";
// styles
import styles from "../../../../styles/pages/cart/newAddress.module.scss";
/**
 * component new address 
 * @param {}  => 
 */
const UpdateAddress = () => {

    const router = useRouter();
    const { invoice_id, prev, id } = router.query;
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    let [editAddressData, setEditAddressData] = useState({});
    let [selectState, setSelectState] = useState([]);
    let [selectBigCities, setSelectBigCities] = useState([]);
    let [selectCities, setSelectCities] = useState([]);
    let [loading, setLoading] = useState(true);
    let [emptySelectBox, setEmptySelectBox] = useState(false);

    const onSubmit = async (data) => {
        await setLoading(true);
        await updateAddress(id, data);
        if (prev) {
            router.push(`/cart/payment?invoice_id=${invoice_id}`);
        } else {
            router.push(`/cart/address?invoice_id=${invoice_id}`);
        }
    };


    useEffect(() => {
        async function fetchData() {
            await getEditAddress(id, setValue, setEditAddressData);
            setSelectState(await getStates());
            await setLoading(false);
        }
        fetchData();
    }, [id, setValue]);

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
                    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
                    crossOrigin="anonymous"
                />
            </Head>
            <ToastContainer />
            {loading ?
                <div className={`col-12 col-lg-5 py-5 ${styles.wrapper}`} style={{ padding: "50px 0px !important" }}>
                    <Loading />
                </div>
                :
                <div className={`col-12 col-lg-5 ${styles.wrapper}`}>
                    <header className={styles.header}>
                        <Link href={prev ? `/cart/payment?invoice_id=${invoice_id}` : `/cart/address?invoice_id=${invoice_id}`}>
                            <a className={styles.header_back_link}>
                                <i className="fas fa-arrow-right px-2"></i>
                                بازگشت
                            </a>
                        </Link>
                        <h2 className={styles.header_title}>افزودن نشانی</h2>
                    </header>
                    <section className={styles.body_address}>
                        <form className={styles.address_items_form} onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.form_group}>
                                <label>نام و نام‌خانوادگی گیرندۀ سفارش:</label>
                                <input type="text" className="form-control" {...register("receiver_full_name", { required: true })} />
                                <small className="form-text text-muted">همخوان با کارت ملی</small>
                                {errors.receiver_full_name && <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>}
                            </div>
                            <div className={styles.form_group}>
                                <label>انتخاب استان:</label>
                                <select className="form-control" {...register("state", { required: true })} onChange={async (event) => {
                                    let optionsArray = Object.values(event.target.options);
                                    setSelectBigCities(await getBigCities(optionsArray[event.target.options.selectedIndex].id));
                                    setEmptySelectBox(true);
                                }}>
                                    <option value={!emptySelectBox && editAddressData.state}>{!emptySelectBox && editAddressData.state}</option>
                                    {selectState.map((value, index) => {
                                        return (
                                            <option key={index} value={value.name} id={value.id}>{value.name}</option>
                                        );
                                    })}
                                </select>
                                {errors.state && <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>}
                            </div>
                            <div className={styles.form_row}>
                                <div className={`${styles.form_group} col-md-6 col-sm-12`}>
                                    <label>انتخاب شهرستان:</label>
                                    <select className="form-control col-sm-12" {...register("big_city", { required: true })} onChange={async (event) => {
                                        let optionsArray = Object.values(event.target.options);
                                        setSelectCities(await getCities(optionsArray[event.target.options.selectedIndex].id));
                                        setEmptySelectBox(true);
                                    }}>
                                        <option value={emptySelectBox ? " " : editAddressData.big_city}>{emptySelectBox ? " " : editAddressData.big_city}</option>
                                        {selectBigCities.map((value, index) => {
                                            return (
                                                <option key={index} value={value.name} id={value.id}>{value.name}</option>
                                            );
                                        })}
                                    </select>
                                    {errors.big_city && <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>}
                                </div>
                                <div className={`${styles.form_group} col-md-6 col-sm-12`}>
                                    <label>انتخاب شهر:</label>
                                    <select className="form-control col-sm-12" {...register("city", { required: true })} onChange={() => {
                                        setEmptySelectBox(false);
                                    }}>
                                        <option value={emptySelectBox ? " " : editAddressData.city}>{emptySelectBox ? " " : editAddressData.city}</option>
                                        {selectCities.map((value, index) => {
                                            return (
                                                <option key={index} value={value.name}>{value.name}</option>
                                            );
                                        })}
                                    </select>
                                    {errors.city && <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>}
                                </div>
                            </div>
                            <div className={styles.form_group}>
                                <label>نشانی دقیق پستی:</label>
                                <textarea rows="4" cols="30" className="form-control" {...register("address", { required: true })}></textarea>
                                {errors.address && <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>}
                            </div>
                            <div className={styles.form_row}>
                                <div className={`${styles.form_group} col-md-6 col-sm-12`}>
                                    <label>کد پستی:</label>
                                    <input type="text" className="form-control" {...register("zip_code", {
                                        required: 'لطفا این گزینه را پر کنید',
                                        minLength: {
                                            value: 10,
                                            message: 'کدپستی باید ده رقمی باشد'
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: 'کدپستی باید ده رقمی باشد' // JS only: <p>error message</p> TS only support string
                                        }
                                    })} />
                                    {errors.zip_code && <span className={styles.form_errors}>{errors.zip_code.message}</span>}
                                </div>
                                <div className={`${styles.form_group} col-md-6 col-sm-12`}>
                                    <label>موبایل گیرندۀ سفارش:</label>
                                    <input type="text" placeholder="*******0913" className="form-control" {...register("receiver_mobile_number", {
                                        required: 'لطفا این گزینه را پر کنید',
                                        minLength: {
                                            value: 11,
                                            message: 'شماره موبایل باید یازده رقمی باشد'
                                        },
                                        maxLength: {
                                            value: 11,
                                            message: 'شماره موبایل باید یازده رقمی باشد' // JS only: <p>error message</p> TS only support string
                                        },
                                        pattern: {
                                            value: /^09(0[2-5]|1[0-9]|3[0-9]|2[1-9]|9[0-9])-?[0-9]{3}-?[0-9]{4}$/ || /^۰۹(۰[۲-۵]|۱[۰-۹]|۳[۰-۹]|۲[۱-۹]|۹[۰-۹])-?[۰-۹]{3}-?[۰-۹]{4}$/,
                                            message: 'لطفا شماره موبایل خود را صحیح وارد نمایید' // JS only: <p>error message</p> TS only support string
                                        }
                                    })} />
                                    {errors.receiver_mobile_number && <span className={styles.form_errors}>{errors.receiver_mobile_number.message}</span>}
                                </div>
                            </div>
                            <div className={`${styles.form_row} pt-3`}>
                                <div className={`col-md-6 ${styles.buttons_form}`}>
                                    <button type="submit" className="btn btn-primary w-100 d-flex justify-content-center align-items-center">تایید</button>
                                </div>
                                &nbsp;
                                <div className={`col-md-6 ${styles.buttons_form}`}>
                                    <Link href={prev ? `/cart/payment?invoice_id=${invoice_id}` : `/cart/address?invoice_id=${invoice_id}`}>
                                        <a className="btn btn-secondary w-100"> بازگشت </a>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            }
        </>
    );
}
// export
export default UpdateAddress;
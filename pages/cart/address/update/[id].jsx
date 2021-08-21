// node libraries
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// componentes
import Steps from "../../../../components/CheckOutSteps/CheckOutSteps";
// methods
import { getStates } from "../../../../containers/store/methods/getStates";
import { getBigCities } from "../../../../containers/store/methods/getBigCities";
import { getCities } from "../../../../containers/store/methods/getCities";
import { updateAddress } from "../../../../containers/cartAddress/methods/updateAddress";
import { getEditAddress } from "../../../../containers/cartAddress/methods/getEditAddress";
// styles
import styles from "../../../../styles/pages/cart/newAddress.module.scss";
/**
 * component new address 
 * @param {}  => 
 */
const UpdateAddress = () => {

    const router = useRouter();
    const { id } = router.query;

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        updateAddress(id, data);
    };

    let [editAddressData, setEditAddressData] = useState({});
    let [selectState, setSelectState] = useState([]);
    let [selectBigCities, setSelectBigCities] = useState([]);
    let [selectCities, setSelectCities] = useState([]);

    useEffect(async () => {
        await getEditAddress(id, setValue, setEditAddressData);
        // state
        setSelectState(await getStates());
    }, []);

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
                    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
                    crossOrigin="anonymous"
                ></link>
            </Head>
            <Steps step="2" />
            <div className={`col-12 col-lg-5 ${styles.wrapper}`}>
                <header className={styles.header}>
                    <Link href="/cart/address">
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
                            }}>
                                <option value={editAddressData.state}>{editAddressData.state}</option>
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
                                }}>
                                    <option value={editAddressData.big_city}>{editAddressData.big_city}</option>
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
                                <select className="form-control col-sm-12" {...register("city", { required: true })}>
                                    <option value={editAddressData.city}>{editAddressData.city}</option>
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
                                <input type="text" className="form-control" {...register("zip_code", { required: true })} />
                                {errors.zip_code && <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>}
                            </div>
                            <div className={`${styles.form_group} col-md-6 col-sm-12`}>
                                <label>موبایل گیرندۀ سفارش:</label>
                                <input type="text" className="form-control" {...register("receiver_mobile_number", { required: true })} />
                                {errors.receiver_mobile_number && <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>}
                            </div>
                        </div>
                        <div className={`${styles.form_row} pt-3`}>
                            <div className={`col-md-6 ${styles.buttons_form}`}>
                                <button type="submit" className="btn btn-primary w-100 d-flex justify-content-center align-items-center">تایید</button>
                            </div>
                            &nbsp;
                            <div className={`col-md-6 ${styles.buttons_form}`}>
                                <Link href="/cart/address">
                                    <a className="btn btn-secondary w-100"> بازگشت </a>
                                </Link>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}
// export
export default UpdateAddress;
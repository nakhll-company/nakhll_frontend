// node libraies
import Head from "next/head";
import { useEffect, useState } from 'react';
// components
import MobileHeader from '../../../../components/mobileHeader';
import useViewport from '../../../../components/viewPort';
import SuccessPage from '../../../../containers/store/successPage';
// methods
import { getStates } from '../../../../containers/store/methods/getStates';
import { getBigCities } from '../../../../containers/store/methods/getBigCities';
import { getCities } from '../../../../containers/store/methods/getCities';
import { createStore } from '../../../../containers/store/methods/createStore';
// styles
import styles from '../../../../styles/pages/store/createStore.module.scss';

export default function NewStore() {

    const validateForm = (formData) => {
        let valid = true;
        let errors = formData.errors;
        Object.values(formData).forEach((value, index) => {
            if (value.length === 0) {
                (valid = false)
                switch (index) {
                    case 0:
                        errors.Title = 'لطفا این گزینه را پر نمایید.';
                        break;
                    case 1:
                        errors.Slug = 'لطفا این گزینه را پر نمایید.';
                        break;
                    case 2:
                        errors.State = 'لطفا این گزینه را پر نمایید.';
                        break;
                    case 3:
                        errors.BigCity = 'لطفا این گزینه را پر نمایید.';
                        break;
                    case 4:
                        errors.City = 'لطفا این گزینه را پر نمایید.';
                        break;
                    default:
                        break;
                }
            }
            setFormData((pre) => {
                return {
                    ...pre,
                    errors
                }
            });
        });
        return valid;
    }

    let [selectState, setSelectState] = useState([]);
    let [selectBigCities, setSelectBigCities] = useState([]);
    let [selectCities, setSelectCities] = useState([]);
    let [showSuccessPage, setShowSuccessPage] = useState(false);
    let [formData, setFormData] = useState({
        Title: '',
        Slug: '',
        State: '',
        BigCity: '',
        City: '',
        errors: {
            Title: '',
            Slug: '',
            State: '',
            BigCity: '',
            City: ''
        }
    });



    const { width } = useViewport();
    const breakpoint = 620;

    useEffect(async () => {
        // state
        setSelectState(await getStates());
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
            <form className={styles.form} onSubmit={async (e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                let body = Object.fromEntries(data.entries());
                if (validateForm(formData)) {
                    let response = await createStore(body);
                    if (response.status === 201) {
                        setShowSuccessPage(showSuccessPage => !showSuccessPage);
                    }
                }
            }}>
                <div className={styles.form_right}>
                    {/* title */}
                    <label className={styles.form_label}>نام حجره</label>
                    <input className={styles.form_input} type="text" name="Title"
                        placeholder="پسته اکبری" />
                    {formData.errors.Title.length > 0 &&
                        <span className={styles.form_errors}>{formData.errors.Title}</span>}
                    {/* slug */}
                    <label className={styles.form_label}>آدرس اینترنتی حجره</label>
                    <input style={{ textAlign: "left" }} className={styles.form_input}
                        placeholder="/nakhll.com" type="text" name="Slug" />
                    {formData.errors.Slug.length > 0 &&
                        <span className={styles.form_errors}>{formData.errors.Slug}</span>}
                    {/* state */}
                    <label className={styles.form_label}>استان</label>
                    <select className={styles.form_select} name="State" defaultValue="0" onChange={async (event) => {
                        setSelectBigCities(await getBigCities(event.target.value));
                    }}>
                        <option value="0" disabled>برای باز شدن لیست کلیک کنید</option>
                        {selectState.map((value, index) => {
                            return (
                                <option key={index} value={value.id}>{value.name}</option>
                            );
                        })}
                    </select>
                    {formData.errors.State.length > 0 &&
                        <span className={styles.form_errors}>{formData.errors.State}</span>}
                    {/* big city */}
                    <label className={styles.form_label}>شهرستان</label>
                    <select className={styles.form_select} name="BigCity" defaultValue="0" onChange={async (event) => {
                        setSelectCities(await getCities(event.target.value));
                    }}>
                        <option value="0" disabled>برای باز شدن لیست کلیک کنید</option>
                        {selectBigCities.map((value, index) => {
                            return (
                                <option key={index} value={value.id}>{value.name}</option>
                            );
                        })}
                    </select>
                    {formData.errors.BigCity.length > 0 &&
                        <span className={styles.form_errors}>{formData.errors.BigCity}</span>}
                    {/* city */}
                    <label className={styles.form_label}>شهر</label>
                    <select className={styles.form_select} name="City" defaultValue="0">
                        <option value="0" disabled>برای باز شدن لیست کلیک کنید</option>
                        {selectCities.map((value, index) => {
                            return (
                                <option key={index} value={value.id}>{value.name}</option>
                            );
                        })}
                    </select>
                    {formData.errors.City.length > 0 &&
                        <span className={styles.form_errors}>{formData.errors.City}</span>}
                    {/* roles */}
                    <label className={styles.form_label}>
                        <input className={styles.form_checkbox} type="checkbox" name="roles" />
                        <a>قوانین</a> را به طور کامل مطالعه کردم و آنها را می پذیرم
                    </label>
                    {/* show contact info */}
                    <label className={styles.form_label}>
                        <input className={styles.form_checkbox} type="checkbox" name="show_contact_info" />
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
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>
            </form>
            {showSuccessPage && <SuccessPage />}
        </div>
    );
}
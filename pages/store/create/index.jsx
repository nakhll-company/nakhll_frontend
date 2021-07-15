// node libraies
import Head from "next/head";
import { useEffect, useState } from 'react';
// components
import MobileHeader from '../../../components/mobileHeader';
import useViewport from '../../../components/viewPort';
import SuccessPage from '../../../containers/store/successPage';
// methods
import { getStates } from '../../../containers/store/methods/getStates';
import { getBigCities } from '../../../containers/store/methods/getBigCities';
import { getCities } from '../../../containers/store/methods/getCities';
import { createStore } from '../../../containers/store/methods/createStore';
// styles
import styles from '../../../styles/pages/store/createStore.module.scss';

export default function NewStore() {

    let [selectState, setSelectState] = useState([]);
    let [selectBigCities, setSelectBigCities] = useState([]);
    let [selectCities, setSelectCities] = useState([]);
    let [showSuccessPage, setShowSuccessPage] = useState(false);

    const { width } = useViewport();
    const breakpoint = 620;

    useEffect(async () => {
        // state
        setSelectState(await getStates());
    }, []);

    return (
        <div>
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
            <form className={styles.form} onSubmit={async (e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                let body = Object.fromEntries(data.entries());
                let response = await createStore(body);
                if (response.status === 201) {
                    setShowSuccessPage(showSuccessPage => !showSuccessPage);
                }
            }}>
                <div className={styles.form_right}>
                    <label className={styles.form_label}>نام حجره</label>
                    <input className={styles.form_input} type="text" name="Title" placeholder="پسته اکبری" />
                    <label className={styles.form_label}>آدرس اینترنتی حجره</label>
                    <input style={{ textAlign: "left" }} className={styles.form_input} placeholder="/nakhll.com" type="text" name="Slug" />
                    <label className={styles.form_label}>استان</label>
                    <select className={styles.form_select} name="State" defaultValue="0">
                        <option value="0" disabled>برای باز شدن لیست کلیک کنید</option>
                        {selectState.map((value, index) => {
                            return (
                                <option key={index} value={value.id} onClick={async (e) => {
                                    setSelectBigCities(await getBigCities(e.target.value));
                                }}>{value.name}</option>
                            );
                        })}
                    </select>
                    <label className={styles.form_label}>شهرستان</label>
                    <select className={styles.form_select} name="BigCity" defaultValue="0">
                        <option value="0" disabled>برای باز شدن لیست کلیک کنید</option>
                        {selectBigCities.map((value, index) => {
                            return (
                                <option key={index} value={value.id} onClick={async (e) => {
                                    setSelectCities(await getCities(e.target.value));
                                }}
                                >{value.name}</option>
                            );
                        })}
                    </select>
                    <label className={styles.form_label}>شهر</label>
                    <select className={styles.form_select} name="City" defaultValue="0">
                        <option value="0" disabled>برای باز شدن لیست کلیک کنید</option>
                        {selectCities.map((value, index) => {
                            return (
                                <option key={index} value={value.id}>{value.name}</option>
                            );
                        })}
                    </select>
                    <label className={styles.form_label}>
                        <input className={styles.form_checkbox} type="checkbox" name="roles" />
                        <a>قوانین</a> را به طور کامل مطالعه کردم و آنها را می پذیرم
                    </label>
                    <div className={styles.wrapper_submit}>
                        <button className={styles.button_submit} type="submit">ثبت حجره</button>
                    </div>
                </div>
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
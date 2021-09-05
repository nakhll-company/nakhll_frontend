// node libraries
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
// style
import styles from '../../styles/components/shopLayout/footer.module.scss';

const Footer = () => {
    const router = useRouter();
    return (
        <>
            {!router.pathname.startsWith("/cart") &&
                <>
                    <div style={{display:"none"}} className={styles.wrapper}>
                        <div className={`col-6 ${styles.links_wrapper}`}>
                            <div className="col-4 col-4 d-flex flex-column">
                                <Link href="/">
                                    <a className="font-weight-500 pb-4">نخل</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>داستان نخل</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>تماس با ما</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>فرصت های شغلی</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>نخل چطور کار می کند؟</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>قوانین و شرایط استفاده</a>
                                </Link>
                            </div>
                            <div className="col-4 col-4 d-flex flex-column">
                                <Link href="/">
                                    <a className="font-weight-500 pb-4">پشتیبانی</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>تلفن تماس : 034-32451636</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>پشتیبانی آنلاین</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>پیگیری سفارشات</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>بازگشت کالا</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>گزارش تخلف</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>تضمین رضایت مشتری</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>پاسخ به سوالات پرتکرار</a>
                                </Link>
                            </div>
                            <div className="col-4 col-4 d-flex flex-column">
                                <Link href="/">
                                    <a className="font-weight-500 pb-4">خرید و فروش</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>فروش در نخل</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>90 هزار تومان هدیه</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>کیف پول من</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.item_link}>مدیریت غرفه</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-5">
                            <Link href="/">
                                <a className={`font-weight-500`}>دانلود اپلیکیشن</a>
                            </Link>
                            <div className={`col-11 mt-4 mb-3 ${styles.subscription}`}>
                                <input type="text" />
                                <button>اشتراک</button>
                            </div>
                            <div className="col-12 mt-4">
                                <Link href="/">
                                    <a style={{ marginLeft: "20px" }}>
                                        <Image src="/footer/cafe-bazar.png" alt="cafe-bazar" width="140" height="43" />
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a style={{ marginLeft: "20px" }}>
                                        <Image src="/footer/google-play-black.png" alt="cafe-bazar" width="140" height="43" />
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a style={{ marginLeft: "20px" }}>
                                        <Image src="/footer/myket-black.png" alt="cafe-bazar" width="140" height="43" />
                                    </a>
                                </Link>
                            </div>
                            <div className="col-12 mt-4">
                                <Link href="/">
                                    <a>
                                        <Image src="/footer/digital.png" alt="cafe-bazar" width="101" height="101" />
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <Image src="/footer/digital.png" alt="cafe-bazar" width="101" height="101" />
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <Image src="/footer/digital.png" alt="cafe-bazar" width="101" height="101" />
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <Image src="/footer/digital.png" alt="cafe-bazar" width="101" height="101" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {router.pathname.startsWith("/landing") &&
                        <div className={`col-12 ${styles.wrapper_end_paragraph}`}>
                            <p className={styles.end_paragraph}>
                                خرید از بازار نخل :

                                به قولِ قدیمی­‌ها، وقت طلا است، شاید امروز بهتر بتوان این مطلب را درک کرد، چون بهای اوقات فراغت ما با وجود مشغله­‌های روزانه، ارزشمندتر شده است و در خانواده‌­ها جهت گفتگو و ارتباط وقت کمتری می‌­گذاریم. دوستی‌های ما کمتر شده و دیگر مجالی برای کمک کردن به یکدیگر نداریم. بنابراین به­‌جای صرف زمان­‌های نسبتا طولانی نه چندان با اهمیت برای خرید در پاساژها و مراکز خرید بهتر است با خانواده و یا بادوستان خود «زندگی کنیم» و هوشمندانه‌­تر، امروزی و خیلی آسان از بازار آنلاین نخل محصولات اصیل و مورد نیاز خود را تهیه کنیم و همچنین با استفاده از بازار نخل غیر از لذت خرید، می­‌توان دوستان جدیدتری پیدا کرد و با آنها نیز به گفت­‌وگو نشست و یا در کنار داستان آنها زندگی کرد و به تبادل تجربیات و موفقیت­‌های یگدیگر پرداخت.
                                در این بازار، اعضاء‌ در تمامی زنجیره‌ّ‌های بازار (نهاده‌ها، خدمات، سرمایه‌، کالا، مهارت و ...) به‌­صورت مستقیم حضور پیدا می‌کنند و به معرفی خود، محصولات و خدمات‌شان پرداخته و با ابزارهای متنوع به توسعه کسب‌وکار خود خواهند پرداخت و از سایر اعضا و حتی مشتریان خود برای توسعۀ فعالیت‌هایشان(در تأمین سرمایه، توسعه محتوا، بازاریابی و ...) کمک خواهند گرفت.



                                نخل این امکان را فراهم می کند تا :

                                افراد برای محصولات و خدمات خود بازاری وسیع ­یابند که در آن تصمیم، از آگاهی و احترام نشئت می‌گیرد.
                                مجالی برای مشارکت در کسب‌­وکارهای دیگران و یا کمک‌ گرفتن از مشارکت‌های آنها(سرمایه، تخصص، مهارت) بیابند.
                                دسترسی به طیف وسیعی از کالاهای متنوع و با هویت آسان­‌تر شود که علاوه بر رفع نیازهای مصرفی خریداران، زمینه آگاهی، هوشیاری و تجربه‌های عمیق‌تر و غنی‌تر را نیز مهیّا گردد.
                                بارگذاری برنامه­‌ها برای توسعه‌­دهندگان ماژول‌ها و ابزارهای تحت شبکه، امکان‌­پذیرتر شود و مخاطبین متنوع نیز امکان دسترسی به ابزارهای مختلف برای بهره‌وری، سهولت و ارتقاء‌ِ سطح خدمات را پیدا کنند.

                            </p>
                        </div>
                    }
                </>
            }
        </>
    );
}
// export
export default Footer;
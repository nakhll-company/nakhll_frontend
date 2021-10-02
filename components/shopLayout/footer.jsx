// node libraries
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
// style
import styles from "../../styles/components/shopLayout/footer.module.scss";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        ></link>
      </Head>
      {!router.pathname.startsWith("/cart") && (
        <>

          <div className="container">
            <div className="row d-none d-lg-flex pt-4">
              <div className="col-6">
                <div className="row">
                  <div className="col-4 col-4 d-flex flex-column">
                    <div className="font-lg-size1-1 font-weight-500 pb-4">نخل</div>{" "}
                    <div>
                      <a href="/about/about-us" className={styles.footer_items}>
                        داستان نخل
                      </a>
                    </div>
                    <div>
                      <a href="/about/contact-us" className={styles.footer_items}>
                        تماس با ما
                      </a>
                    </div>
                    <div>
                      <a
                        to="https://jobs.basalam.com/"
                        href="https://jobs.basalam.com/"
                        className={styles.footer_items}
                      >
                        فرصت‌های شغلی
                      </a>
                    </div>
                    <div>
                      <a
                        to="/guides/how-it-works"
                        href="/guides/how-it-works"
                        className={styles.footer_items}
                      >
                        نخل چطور کار می‌کند؟
                      </a>
                    </div>
                    <div>
                      <a
                        to="/about/terms-of-use"
                        href="/about/terms-of-use"
                        className={styles.footer_items}
                      >
                        قوانین و شرایط استفاده
                      </a>
                    </div>{" "}
                    <div className={styles.footer_social_icon}>
                      <div>
                        <a
                          href="https://www.linkedin.com/company/basalam"
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          aria-label="لینکدین"
                        >
                          <i className="fas fa-linkedin"></i>
                        </a>
                      </div>{" "}
                      <div>
                        <a
                          href="https://twitter.com/basalam_bazaar"
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          aria-label="توییتر"
                        >
                          <i className="bi bi-twitter"></i>
                        </a>
                      </div>{" "}
                      <div>
                        <a
                          href="https://www.instagram.com/basalam_bazaar"
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          aria-label="اینستاگرام"
                        >
                          <i className="bi bi-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-4 d-flex flex-column">
                    <div className="font-lg-size1-1 font-weight-500 pb-4">
                      پشتیبانی
                    </div>{" "}
                    <div>
                      <a
                        to="tel://025-31075"
                        href="tel://025-31075"
                        className={styles.footer_items}
                      >
                        تلفن تماس:
                        <span className="d-inline-block">025-31075</span>
                      </a>
                    </div>
                    <div>
                      <a
                        to="https://help.basalam.com/"
                        href="https://help.basalam.com/"
                        className={styles.footer_items}
                      >
                        پشتیبانی آنلاین
                      </a>
                    </div>
                    <div>
                      <a href="/account/orders" className={styles.footer_items}>
                        پیگیری سفارشات
                      </a>
                    </div>
                    <div>
                      <a href="/guides/return-policy" className={styles.footer_items}>
                        بازگشت کالا
                      </a>
                    </div>
                    <div>
                      <a
                        to="https://help.basalam.com/"
                        href="https://help.basalam.com/"
                        className={styles.footer_items}
                      >
                        گزارش تخلف
                      </a>
                    </div>
                    <div>
                      <a
                        to="/guides/customer-satisfaction"
                        href="/guides/customer-satisfaction"
                        className={styles.footer_items}
                      >
                        تضمین رضایت مشتری
                      </a>
                    </div>
                    <div>
                      <a href="/help" className={styles.footer_items}>
                        پاسخ به سوالات پرتکرار
                      </a>
                    </div>{" "}
                  </div>
                  <div className="col-4 col-4 d-flex flex-column">
                    <div className="font-lg-size1-1 font-weight-500 pb-4">
                      خرید و فروش
                    </div>{" "}
                    <div>
                      <a
                        to="/landing/create-vendor"
                        href="/landing/create-vendor"
                        className={styles.footer_items}
                      >
                        فروش در نخل
                      </a>
                    </div>
                    <div>
                      <a
                        href="/account/invite"
                        className="footer-items font-weight-bold"
                      >
                        100 هزار تومان هدیه
                      </a>
                    </div>
                    <div>
                      <a href="/account/credit" className={styles.footer_items}>
                        کیف پول من
                      </a>
                    </div>
                    <div>
                      <a
                        to="https://vendor.basalam.com"
                        href="https://vendor.basalam.com"
                        className={styles.footer_items}
                      >
                        مدیریت غرفه
                      </a>
                    </div>{" "}
                  </div>
                </div>
              </div>{" "}
              <div className="col-6">
                <div className="row">
                  <div className="col-xx-3"></div>{" "}
                  <div className="col-12 col-xx-9 footer-top-part1">
                    <div className="pb-3">
                      <a
                        href="/dl-app"
                        className={`${styles.footer_items} font-lg-size1-1 font-weight-500 m-0`}
                      >
                        دانلود اپلیکیشن
                      </a>
                    </div>{" "}
                    <div className={styles.footer_form_wrapper}>
                      <form
                        action="https://app.mailerlite.com/webforms/submit/k2y8b4"
                        method="POST"
                        target="_blank"
                      >
                        <input
                          type="email"
                          name="fields[email]"
                          placeholder="برای اطلاع از تخفیف‌ها ایمیل خود را وارد کنید"
                        />{" "}
                        <button type="submit">اشتراک</button>
                      </form>
                    </div>{" "}
                    <div className={styles.footer_downloadApp}>
                      <a href="https://basalam.com/dl/cafebazzar">
                        <img
                          src="https://cdn.basalam.com/assets/17543/img/cafe-bazar-black.755828a.png"
                          alt="دانلود اپ نخل از کافه بازار"
                          width="140"
                          height="45"
                        />
                      </a>{" "}
                      <a href="https://basalam.com/dl/googleplay">
                        <img
                          src="https://cdn.basalam.com/assets/17543/img/google-play-black.b737c98.png"
                          alt="دانلود اپ نخل از گوگل پلی"
                          width="140"
                        />
                      </a>{" "}
                      <a href="https://basalam.com/dl/myket">
                        <img
                          src="https://cdn.basalam.com/assets/17543/img/myket-black.aab250b.png"
                          alt="دانلود اپ نخل از مایکت"
                          width="140"
                        />
                      </a>
                    </div>{" "}
                    <div className="row mt-5">
                      <div className="col-6 col-md-3 mb-2 mt-3 pr-0">
                        <div className="d-flex justify-content-center">
                          <a
                            referrerPolicy="origin"
                            target="_blank"
                            href="https://trustseal.enamad.ir/?id=116503&amp;Code=6iQN5yCbmti3PrU4cINp"
                          >
                            <img
                              referrerPolicy="origin"
                              src="https://Trustseal.eNamad.ir/logo.aspx?id=116503&amp;Code=6iQN5yCbmti3PrU4cINp"
                              alt="نماد اعتماد الکترونیکی"
                              title="نماد اعتماد الکترونیکی"
                              id="6iQN5yCbmti3PrU4cINp"
                              className="footer-namad"
                              style={{ cursor: "pointer" }}
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <div className="col-6 col-md-3 mb-2 mt-3">
                        <div className="d-flex justify-content-center mt-1">
                          <a
                            href="http://www.qomstp.ir/"
                            rel="noopener noreferrer nofollow"
                            target="_blank"
                            className="w-100"
                          >
                            <img
                              alt="پارک علم و فناوری قم"
                              title="پارک علم و فناوری قم"
                              src="https://statics.basalam.com/public/photo/explore/bx3V8/06-12/XQY1TLwetRvzVEbz3eJaq90hrTdZnyrYAup92cSq7mKZUC40Ex.png"
                              className="footer-namad"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <div className="col-6 col-md-3 mb-2 mt-3">
                        <div className="d-flex justify-content-center">
                          <img
                            alt="ستاد ساماندهی پایگاه‌های اینترنتی"
                            title="ستاد ساماندهی پایگاه‌های اینترنتی"
                            id="jxlzwlaorgvjrgvjfukzfukz"
                            src="https://statics.basalam.com/public/admin/2gEJ/08-29/HJi1gnRO7aeh22JmOQe3ip64Lo002IKiL7ihlHmrfBwfcvsQL2.png"
                            onClick="window.open('https://logo.samandehi.ir/Verify.aspx?id=143366&amp;p=rfthaodsxlaoxlaogvkagvka', 'Popup','toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30')"
                            className="footer-namad"
                          />
                        </div>
                      </div>{" "}
                      <div className="col-6 col-md-3 mb-2 mt-3">
                        <div className="d-flex justify-content-center">
                          <img
                            alt="انجمن کسب و کار های اینترنتی"
                            title="انجمن کسب و کار های اینترنتی"
                            src="https://statics.basalam.com/public/photo/explore/bx3V8/06-12/IIe9258erPuTim4DEaH2iWRQobRqYydLbaztyiUZ2CAdV35kui.png"
                            onClick="window.open('https://ecunion.ir/verify/basalam.com?token=43445575c7a0a8344a6b', 'Popup','toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30')"
                            className="footer-namad"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-lg-none">
              <div className="border-bottom border-gray py-3">
                <div>
                  <div className="d-flex justify-content-between">
                    <div className="font-weight-500">نخل</div>{" "}
                    <i className="bi bi-angle-up"></i>
                  </div>
                </div>{" "}
                <div
                  data-old-padding-top=""
                  data-old-padding-bottom=""
                  className="is-active"
                  // style="animation-fill-mode: both; animation-timing-function: ease-out;"
                  data-old-overflow=""
                >
                  <div>
                    <a href="/about/about-us" className={styles.footer_items}>
                      داستان نخل
                    </a>
                  </div>
                  <div>
                    <a href="/about/contact-us" className={styles.footer_items}>
                      تماس با ما
                    </a>
                  </div>
                  <div>
                    <a
                      to="https://jobs.basalam.com/"
                      href="https://jobs.basalam.com/"
                      className={styles.footer_items}
                    >
                      فرصت‌های شغلی
                    </a>
                  </div>
                  <div>
                    <a
                      to="/guides/how-it-works"
                      href="/guides/how-it-works"
                      className={styles.footer_items}
                    >
                      نخل چطور کار می‌کند؟
                    </a>
                  </div>
                  <div>
                    <a
                      to="/about/terms-of-use"
                      href="/about/terms-of-use"
                      className={styles.footer_items}
                    >
                      قوانین و شرایط استفاده
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-bottom border-gray py-3">
                <div>
                  <div className="d-flex justify-content-between">
                    <div className="font-weight-500">پشتیبانی</div>{" "}
                    <i className="bi bi-angle-up"></i>
                  </div>
                </div>{" "}
                <div
                  data-old-padding-top=""
                  data-old-padding-bottom=""
                  className="is-active"
                  data-old-overflow=""
                // style="animation-fill-mode: both; animation-timing-function: ease-out;"
                >
                  <div>
                    <div
                      to="tel://025-31075"
                      href="tel://025-31075"
                      className={styles.footer_items}
                    >
                      تلفن تماس:
                      <a href="tel://025-31075" className="d-inline-block">
                        025-31075
                      </a>{" "}
                      <span>و</span>{" "}
                      <a href="tel://025-91003175" className="d-inline-block">
                        025-91003175
                      </a>
                    </div>
                  </div>
                  <div>
                    <a
                      to="https://help.basalam.com/"
                      href="https://help.basalam.com/"
                      className={styles.footer_items}
                    >
                      پشتیبانی آنلاین
                    </a>
                  </div>
                  <div>
                    <a href="/account/orders" className={styles.footer_items}>
                      پیگیری سفارشات
                    </a>
                  </div>
                  <div>
                    <a href="/guides/return-policy" className={styles.footer_items}>
                      بازگشت کالا
                    </a>
                  </div>
                  <div>
                    <a
                      to="https://help.basalam.com/"
                      href="https://help.basalam.com/"
                      className={styles.footer_items}
                    >
                      گزارش تخلف
                    </a>
                  </div>
                  <div>
                    <a
                      to="/guides/customer-satisfaction"
                      href="/guides/customer-satisfaction"
                      className={styles.footer_items}
                    >
                      تضمین رضایت مشتری
                    </a>
                  </div>
                  <div>
                    <a href="/help" className={styles.footer_items}>
                      پاسخ به سوالات پرتکرار
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-bottom border-gray py-3">
                <div>
                  <div className="d-flex justify-content-between">
                    <div className="font-weight-500">خرید و فروش</div>{" "}
                    <i className="bi bi-angle-up"></i>
                  </div>
                </div>{" "}
                <div
                  data-old-padding-top=""
                  data-old-padding-bottom=""
                  className="is-active"
                  data-old-overflow=""
                // style="animation-fill-mode: both; animation-timing-function: ease-out;"
                >
                  <div>
                    <a
                      to="/landing/create-vendor"
                      href="/landing/create-vendor"
                      className={styles.footer_items}
                    >
                      فروش در نخل
                    </a>
                  </div>
                  <div>
                    <a
                      href="/account/invite"
                      className="footer-items font-weight-bold"
                    >
                      100 هزار تومان هدیه
                    </a>
                  </div>
                  <div>
                    <a href="/account/credit" className={styles.footer_items}>
                      کیف پول من
                    </a>
                  </div>
                  <div>
                    <a
                      to="https://vendor.basalam.com"
                      href="https://vendor.basalam.com"
                      className={styles.footer_items}
                    >
                      مدیریت غرفه
                    </a>
                  </div>
                </div>
              </div>{" "}
              <div className="align-items-center d-flex justify-content-between mt-3">
                <div>
                  <a href="https://basalam.com/dl/direct">
                    <button className="btn rounded-pill border-black">
                      دانلود اپلیکیشن
                    </button>
                  </a>
                </div>{" "}
                <div className={styles.footer_social_icon}>
                  <div>
                    <a
                      href="https://www.linkedin.com/company/basalam"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      aria-label="لینکدین"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>{" "}
                  <div>
                    <a
                      href="https://twitter.com/basalam_bazaar"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      aria-label="توییتر"
                    >
                      <i className="bi bi-twitter-outline"></i>
                    </a>
                  </div>{" "}
                  <div>
                    <a
                      href="https://www.instagram.com/basalam_bazaar"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      aria-label="اینستاگرام"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>{" "}
              <div className="row align-items-center d-flex justify-content-between mt-5 row">
                <div className="col-3 col-md-2">
                  <div className="d-flex justify-content-center">
                    <a
                      referrerPolicy="origin"
                      target="_blank"
                      href="https://trustseal.enamad.ir/?id=116503&amp;Code=6iQN5yCbmti3PrU4cINp"
                    >
                      <img
                        referrerPolicy="origin"
                        src="https://Trustseal.eNamad.ir/logo.aspx?id=116503&amp;Code=6iQN5yCbmti3PrU4cINp"
                        alt="نماد اعتماد الکترونیکی"
                        title="نماد اعتماد الکترونیکی"
                        id="6iQN5yCbmti3PrU4cINp"
                        className="w-100"
                      // style="cursor: pointer;"
                      />
                    </a>
                  </div>
                </div>{" "}
                <div className="col-3 col-md-2">
                  <div className="d-flex justify-content-center mt-1">
                    <a
                      href="http://www.qomstp.ir/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      <img
                        alt="پارک علم و فناوری قم"
                        title="پارک علم و فناوری قم"
                        src="https://statics.basalam.com/public/photo/explore/bx3V8/06-12/XQY1TLwetRvzVEbz3eJaq90hrTdZnyrYAup92cSq7mKZUC40Ex.png"
                        className="w-100"
                      />
                    </a>
                  </div>
                </div>{" "}
                <div className="col-3 col-md-2">
                  <div className="d-flex justify-content-center">
                    <img
                      alt="ستاد ساماندهی پایگاه‌های اینترنتی"
                      title="ستاد ساماندهی پایگاه‌های اینترنتی"
                      id="jxlzwlaorgvjrgvjfukzfukz"
                      src="https://statics.basalam.com/public/photo/explore/bx3V8/06-12/ItxiSGJ2SKnErTyX4sDp2EEfDApfmsoQrtiVxR4lIeEJ7tcCcB.png"
                      onClick="window.open('https://logo.samandehi.ir/Verify.aspx?id=143366&amp;p=rfthaodsxlaoxlaogvkagvka', 'Popup','toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30')"
                      className="w-100"
                    />
                  </div>
                </div>{" "}
                <div className="col-3 col-md-2">
                  <div className="d-flex justify-content-center">
                    <img
                      alt="انجمن کسب و کار های اینترنتی"
                      title="انجمن کسب و کار های اینترنتی"
                      src="https://statics.basalam.com/public/photo/explore/bx3V8/06-12/IIe9258erPuTim4DEaH2iWRQobRqYydLbaztyiUZ2CAdV35kui.png"
                      onClick="window.open('https://ecunion.ir/verify/basalam.com?token=43445575c7a0a8344a6b', 'Popup','toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30')"
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" pt-3">
              <div className="container pb-5">
                <hr className="mt-0" />{" "}
                <div className="footer-seo">
                  <div className="font-weight-bold pt-3">
                    نخل، بازار اجتماعی آنلاین
                  </div>{" "}
                  <div>
                    <div className={`${styles.footer_seo_container} show-all-seo-text`}>
                      <div className={styles.footer_seo_text}>
                        نخل آنلاین است و تمام آنچه را كاربر از یک فضای آنلاين
                        انتظار دارد به‌خوبی برآورده می‌کند. کاربری آسان، پرداخت
                        امن از درگاه‌های بانکی، نماد اعتماد الکترونیک، ضمانت
                        بازگشت پول، امانت‌داری، پشتیبانی حرفه‌ای برای راهنمایی و
                        رفع مشکلات احتمالی. اعتماد با سلام آغاز می‌شود.
                        <br />
                        نخل اجتماعی است، به این معنی که راه گفت‌وگو و تعامل
                        بی‌واسطه بین خریداران و غرفه‌داران همیشه باز است. شما به
                        محض ورود به نخل صاحب یک حساب کاربری می‌شوید، می‌نویسید،
                        بحث می‌کنید، نظر می‌دهید، دوست می‌شوید. گفت‌وگو با سلام
                        آغاز می‌شود.
                        <br />
                        نخل بازار است، با تمام ویژگی‌های یک بازار بزرگ و تودرتو
                        ولی با یک تفاوت ارزشمند: تمام راسته‌های این بازار یک‌جا
                        پیش چشم شما هستند.{" "}
                        <a href="/category/food" >
                          مواد غذایی
                        </a>
                        ،
                        <a href="/category/apparel" >
                          مد و پوشاک
                        </a>
                        ،
                        <a href="/category/home-kitchen" >
                          خانه و آشپزخانه
                        </a>
                        ،
                        <a href="/category/handicrafts" >
                          صنایع دستی
                        </a>
                        ،
                        <a href="/category/herbal" >
                          عطاری
                        </a>
                        ،
                        <a href="/category/beauty-health-personal-care" >
                          آرایشی و بهداشتی
                        </a>
                        ، ملزومات
                        <a
                          href="/category/cultural-educational-entertainment"

                        >
                          فرهنگی و آموزشی و سرگرمی
                        </a>{" "}
                        و
                        <a href="/category/sport-travel" >
                          ورزش و سفر
                        </a>
                        ، حتی
                        <a href="/category/business-services" >
                          خدمات کسب‌وکار
                        </a>
                        .
                        <br />
                        وقتی از مواد غذایی حرف می‌زنیم، از چه حرف می‌زنیم؟ چای و
                        قهوه و دم‌نوش و
                        <a href="/category/drinks" >
                          انواع نوشیدنی
                        </a>
                        ،
                        <a href="/category/protein-products" >
                          محصولات پروتئینی
                        </a>
                        ،
                        <a href="/category/honey-and-honey-products" >
                          عسل و فرآورده‌های عسل
                        </a>
                        ،
                        <a href="/category/dairy" >
                          لبنیات
                        </a>
                        ،
                        <a href="/category/sesame-flour-and-products" >
                          ارده و فرآورده‌های کنجد
                        </a>
                        ،
                        <a href="/category/spices-and-condiments" >
                          ادویه و چاشنی
                        </a>
                        ،
                        <a href="/category/fresh-fruits-and-vegetables" >
                          میوه و سبزیجات تازه
                        </a>
                        ،
                        <a href="/category/sweets-nuts-and-dried-fruits" >
                          شیرینی و آجیل و خشکبار
                        </a>
                        ،
                        <a href="/category/pickles-and-salt" >
                          ترشی و شور
                        </a>
                        ، انواع
                        <a href="/category/food-and-times" >
                          خواربار و غلات و حبوبات
                        </a>
                        . سبد خریدی خالی می‌ماند؟
                        <br />
                        راستۀ مد و پوشاک پر است از{" "}
                        <a href="/category/female" >
                          لباس‌ زنانه
                        </a>{" "}
                        و
                        <a href="/category/men" >
                          مردانه
                        </a>{" "}
                        و{" "}
                        <a href="/category/childish" >
                          بچگانه
                        </a>{" "}
                        و زیورآلات و کیف و کفش و اکسسوری. رسیدگی‌های آرایشی و
                        بهداشتی هم در کنار پوشش بسیار مهم است.
                        <a href="/category/skin-and-body-care" >
                          مراقبت از پوست و مو و بدن
                        </a>
                        ،
                        <a href="/category/cosmetics-&amp;-beauty" >
                          ابزار آرایشی و بهداشتی
                        </a>{" "}
                        باکیفیت هم می‌خواهد؛ محصولاتی برای{" "}
                        <a href="/category/personal-hygiene" >
                          بهداشت شخصی
                        </a>{" "}
                        مانند شامپو و رنگ مو و مسواک و{" "}
                        <a href="/category/perfumes-colognes-and-sprays" >
                          عطر ادکلن و اسپری
                        </a>{" "}
                        برای کمک به شما آماده‌اند. نگران ظاهرتان نباشید.
                        <br />
                        اگر برای خانه یا آشپزخانه‌تان دنبال وسیله می‌گردید، بدانید
                        که اینجا یک خانۀ خالی را می‌توان پر کرد.
                        <a href="/category/carpets-and-tablecloths" >
                          فرش و تابلوفرش
                        </a>
                        ،
                        <a href="/category/decorative" >
                          دکوری و تزئینی
                        </a>
                        ،
                        <a href="/category/curtains-and-furniture" >
                          پرده و مبلمان
                        </a>
                        ،
                        <a href="/category/light-and-brightness" >
                          نور و روشنایی
                        </a>
                        ،
                        <a href="/category/sleeping-goods" >
                          کالای خواب
                        </a>
                        ،
                        <a href="/category/flowers-and-plants" >
                          گل و گیاه
                        </a>
                        ،
                        <a
                          href="/category/bathroom-and-toilet-accessories"

                        >
                          لوازم حمام و دستشویی
                        </a>
                        ،
                        <a href="/category/tools-and-detergents" >
                          ابزار و مواد شوینده
                        </a>{" "}
                        برای نظافت و هر چه در آشپزخانه لازمتان می‌شود.
                        <br />
                        در زیبایی و اصالت صنایع دستی ایرانی شکی نیست. از
                        <a
                          href="/category/knitting-fabrics-and-embroidery"

                        >
                          بافتنی
                        </a>{" "}
                        و کار روی پارچه و
                        <a href="/category/wood-and-wicker-products" >
                          محصولات چوبی و فلزی و حصیری
                        </a>{" "}
                        و
                        <a href="/category/pottery-tiles-and-porcelain" >
                          سفالی
                        </a>{" "}
                        و
                        <a href="/category/glass-and-glass-industries" >
                          شیشه‌ای
                        </a>{" "}
                        بگیر تا
                        <a href="/category/stone-products" >
                          سنگ
                        </a>{" "}
                        و
                        <a href="/category/pottery-tiles-and-porcelain" >
                          کاشی و چینی
                        </a>{" "}
                        و
                        <a
                          href="/search?q=%DA%86%D8%B1%D9%85&amp;cat=138"

                        >
                          چرم
                        </a>{" "}
                        و
                        <a href="/category/metal-products" >
                          فلز
                        </a>
                        . همه در برابر شماست، ببینید.
                        <br />
                        استقبال از عطاری‌ها روزبه‌روز بیشتر می‌شود.
                        <a
                          href="/category/medicines-and-therapeutic-oils"

                        >
                          روغن‌های درمانی
                        </a>{" "}
                        و
                        <a href="/category/medicinal-plants" >
                          گیاهان دارویی
                        </a>
                        ،
                        <a href="/category/sweat-and-rose" >
                          عرقیات گیاهی و گلاب
                        </a>
                        ،
                        <a href="/search?cat=1343" >
                          سویق و قاووت
                        </a>{" "}
                        جای خود را در سبد خرید خانواده‌ها پیدا کرده‌اند.
                        <br />
                        معمولاً برای گذراندن اوقات خوش و
                        <a href="/category/games-and-entertainment" >
                          بازی و سرگرمی
                        </a>{" "}
                        سراغ چه ابزارها یا
                        <a href="/category/cultural-and-educational" >
                          محصولات فرهنگی و آموزشی
                        </a>{" "}
                        می‌روید؟ مثلاً کتاب چاپی و صوتی و الکترونیک، لوازم تحریر،
                        اسباب‌بازی، عروسک، کاردستی، ماکت؟ یا اهل بیرون رفتن از
                        خانه هستید و وسایل{" "}
                        <a href="/category/sports" >
                          ورزشی
                        </a>{" "}
                        و
                        <a href="/category/travel" >
                          سفر
                        </a>{" "}
                        (ساک، کوله‌پشتی، چمدان) بیشتر به کارتان می‌آید؟ هر چه
                        باشد، دست‌خالی برنمی‌گردید.
                        <br />
                        نخل فقط بازار محصولات نیست، خدمات بسیاری را هم پوشش
                        می‌دهد.
                        <a
                          href="/category/graphics-design-and-photography"

                        >
                          گرافیک
                        </a>
                        ،
                        <a
                          href="/category/graphics-design-and-photography"

                        >
                          عکاسی
                        </a>
                        ،
                        <a
                          href="/category/graphics-design-and-photography"

                        >
                          طراحی
                        </a>
                        ،
                        <a href="/category/video-and-animation" >
                          ساخت ویدئو
                        </a>
                        ،
                        <a href="/category/content-and-translation" >
                          نوشتن
                        </a>
                        ، ویرایش،
                        <a href="/category/content-and-translation" >
                          ترجمه
                        </a>
                        ،
                        <a href="/category/packaging-and-transportation" >
                          بسته‌بندی
                        </a>
                        ،
                        <a href="/category/packaging-and-transportation" >
                          حمل‌ونقل
                        </a>{" "}
                        و هر ایدۀ دیگری که به ذهن غرفه‌داران می‌رسد.
                        <br />
                        انگار همه چیز با سلام آغاز می‌شود.
                      </div>{" "}

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black text-white py-3">
              <div className="container font-size-sm">
                کلیه حقوق مادی و معنوی برای «توسعه و تدبیر جوامع سلام»، بازار
                اجتماعی آنلاین، محفوظ است.
              </div>{" "}
              <div className="mt-5 mt-lg-0 pt-4 pt-lg-0"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
// export
export default Footer;

// node libraries
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
// style
import styles from "../../styles/components/shopLayout/footer.module.scss";

const Footer = () => {
  const _handel_according = (accord, icon) => {
    let element = document.getElementById(accord);
    if (element.style.height == "0px") {
      element.style.height = "unset";
      document.getElementById(icon).className = "fas fa-angle-down";
    } else {
      element.style.height = "0";
      element.style.overflow = "hidden";
      document.getElementById(icon).className = "fas fa-angle-up";
    }
  };

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
                    <div className="font-lg-size1-1 font-weight-500 pb-4">
                      نخل
                    </div>{" "}
                    <div>
                      <a
                        href="https://nakhll.com/blog/%d9%86%d8%ae%d9%84%d8%8c-%d8%a8%d8%a7%d8%b2%d8%a7%d8%b1%db%8c-%d8%a7%d8%ac%d8%aa%d9%85%d8%a7%d8%b9%db%8c-%d9%88-%d8%a2%d9%86%d9%84%d8%a7%db%8c%d9%86/"
                        className={styles.footer_items}
                      >
                        داستان نخل
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://nakhll.com/blog/%d8%aa%d9%85%d8%a7%d8%b3-%d8%a8%d8%a7-%d9%85%d8%a7/"
                        className={styles.footer_items}
                      >
                        تماس با ما
                      </a>
                    </div>
                    {/* <div>
                      <a
                        to=""
                        href=""
                        className={styles.footer_items}
                      >
                        فرصت‌های شغلی
                      </a>
                    </div> */}
                    {/* <div>
                      <a
                        to="/guides/how-it-works"
                        href="/guides/how-it-works"
                        className={styles.footer_items}
                      >
                        نخل چطور کار می‌کند؟
                      </a>
                    </div> */}
                    <div>
                      <a
                        href="https://nakhll.com/blog/%d8%b4%d8%b1%d8%a7%db%8c%d8%b7-%d9%88-%d8%b6%d9%88%d8%a7%d8%a8%d8%b7/"
                        className={styles.footer_items}
                      >
                        قوانین و شرایط استفاده
                      </a>
                    </div>{" "}
                    <div className={styles.footer_social_icon}>
                      <div>
                        <a
                          href=""
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          aria-label="لینکدین"
                        >
                          <i className="fas fa-linkedin"></i>
                        </a>
                      </div>{" "}
                      <div>
                        <a
                          href=""
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          aria-label="توییتر"
                        >
                          <i className="bi bi-twitter"></i>
                        </a>
                      </div>{" "}
                      <div>
                        <a
                          href=""
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
                      <a to="" href="" className={styles.footer_items}>
                        پشتیبانی آنلاین
                      </a>
                    </div>
                    <div>
                      <a href="/account/orders" className={styles.footer_items}>
                        پیگیری سفارشات
                      </a>
                    </div>
                    <div>
                      <a
                        href="/guides/return-policy"
                        className={styles.footer_items}
                      >
                        بازگشت کالا
                      </a>
                    </div>
                    <div>
                      <a to="" href="" className={styles.footer_items}>
                        گزارش تخلف
                      </a>
                    </div>
                    {/* <div>
                      <a
                        to="/guides/customer-satisfaction"
                        href="/guides/customer-satisfaction"
                        className={styles.footer_items}
                      >
                        تضمین رضایت مشتری
                      </a>
                    </div> */}
                    <div>
                      <a
                        href="https://nakhll.com/blog/%d8%b3%d9%88%d8%a7%d9%84%d8%a7%d8%aa-%d9%be%d8%b1-%d8%aa%da%a9%d8%b1%d8%a7%d8%b1/"
                        className={styles.footer_items}
                      >
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
                    {/* <div>
                      <a
                        href="/account/invite"
                        className="footer-items font-weight-bold"
                      >
                        100 هزار تومان هدیه
                      </a>
                    </div> */}
                    <div>
                      <a href="/account/credit" className={styles.footer_items}>
                        کیف پول من
                      </a>
                    </div>
                    <div>
                      <a href="" className={styles.footer_items}>
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
                    {/* <div className="pb-3">
                      <a
                        href="/dl-app"
                        className={`${styles.footer_items} font-lg-size1-1 font-weight-500 m-0`}
                      >
                        دانلود اپلیکیشن
                      </a>
                    </div>{" "} */}
                    {/* <div className={styles.footer_form_wrapper}>
                      <form
                        action=""
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
                    </div>{" "} */}
                    {/* <div className={styles.footer_downloadApp}>
                      <a href="">
                        <img
                          src=""
                          alt="دانلود اپ نخل از کافه بازار"
                          width="140"
                          height="45"
                        />
                      </a>{" "}
                      <a href=">
                        <img
                          src=""
                          alt="دانلود اپ نخل از گوگل پلی"
                          width="140"
                        />
                      </a>{" "}
                      <a href="">
                        <img
                          src=""
                          alt="دانلود اپ نخل از مایکت"
                          width="140"
                        />
                      </a>
                    </div>{" "} */}
                    <div className="row mt-5">

                      <div className="col-6 col-md-3 mb-2 mt-3">
                        <div className="d-flex justify-content-center mt-1">
                          <a
                            href=""
                            rel="noopener noreferrer nofollow"
                            target="_blank"
                            className="w-100"
                          >
                            <img
                              alt=""
                              title=""
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

                            src="https://statics.basalam.com/public/admin/2gEJ/08-29/HJi1gnRO7aeh22JmOQe3ip64Lo002IKiL7ihlHmrfBwfcvsQL2.png"

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
                <div
                  onClick={() => {
                    _handel_according("part_one", "icon");
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="font-weight-500">نخل</div>{" "}
                    <i id="icon" className="fas fa-angle-up"></i>
                  </div>
                </div>{" "}
                <div
                  id="part_one"
                  style={{
                    transition: "all 1s ease-out",
                    height: "0",
                    overflow: "hidden",
                  }}
                  className="is-active"
                >
                  <div>
                    <a
                      href="https://nakhll.com/blog/%d9%86%d8%ae%d9%84%d8%8c-%d8%a8%d8%a7%d8%b2%d8%a7%d8%b1%db%8c-%d8%a7%d8%ac%d8%aa%d9%85%d8%a7%d8%b9%db%8c-%d9%88-%d8%a2%d9%86%d9%84%d8%a7%db%8c%d9%86/"
                      className={styles.footer_items}
                    >
                      داستان نخل
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://nakhll.com/blog/%d8%aa%d9%85%d8%a7%d8%b3-%d8%a8%d8%a7-%d9%85%d8%a7/"
                      className={styles.footer_items}
                    >
                      تماس با ما
                    </a>
                  </div>
                  {/* <div>
                    <a
                      to=""
                      href=""
                      className={styles.footer_items}
                    >
                      فرصت‌های شغلی
                    </a>
                  </div> */}
                  {/* <div>
                    <a
                      to="/guides/how-it-works"
                      href="/guides/how-it-works"
                      className={styles.footer_items}
                    >
                      نخل چطور کار می‌کند؟
                    </a>
                  </div> */}
                  <div>
                    <a
                      href="https://nakhll.com/blog/%d8%b4%d8%b1%d8%a7%db%8c%d8%b7-%d9%88-%d8%b6%d9%88%d8%a7%d8%a8%d8%b7/"
                      className={styles.footer_items}
                    >
                      قوانین و شرایط استفاده
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-bottom border-gray py-3">
                <div
                  onClick={() => {
                    _handel_according("part_two", "part_two_icon");
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="font-weight-500">پشتیبانی</div>{" "}
                    <i id="part_two_icon" className="fas fa-angle-up"></i>
                  </div>
                </div>{" "}
                <div
                  style={{
                    transition: "all 1s ease-out",
                    height: "0",
                    overflow: "hidden",
                  }}
                  id="part_two"
                  className="is-active"
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
                    <a to="" href="" className={styles.footer_items}>
                      پشتیبانی آنلاین
                    </a>
                  </div>
                  <div>
                    <a href="/account/orders" className={styles.footer_items}>
                      پیگیری سفارشات
                    </a>
                  </div>
                  {/* <div>
                    <a
                      href="/guides/return-policy"
                      className={styles.footer_items}
                    >
                      بازگشت کالا
                    </a>
                  </div> */}
                  <div>
                    <a to="" href="" className={styles.footer_items}>
                      گزارش تخلف
                    </a>
                  </div>
                  {/* <div>
                    <a
                      to="/guides/customer-satisfaction"
                      href="/guides/customer-satisfaction"
                      className={styles.footer_items}
                    >
                      تضمین رضایت مشتری
                    </a>
                  </div> */}
                  <div>
                    <a
                      href="https://nakhll.com/blog/%d8%b3%d9%88%d8%a7%d9%84%d8%a7%d8%aa-%d9%be%d8%b1-%d8%aa%da%a9%d8%b1%d8%a7%d8%b1/"
                      className={styles.footer_items}
                    >
                      پاسخ به سوالات پرتکرار
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-bottom border-gray py-3">
                <div
                  onClick={() => {
                    _handel_according("part_three", "part_three_icon");
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="font-weight-500">خرید و فروش</div>{" "}
                    <i id="part_three_icon" className="fas fa-angle-up"></i>
                  </div>
                </div>{" "}
                <div
                  id="part_three"
                  style={{
                    transition: "all 1s ease-out",
                    height: "0",
                    overflow: "hidden",
                  }}
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
                  {/* <div>
                    <a
                      href="/account/invite"
                      className="footer-items font-weight-bold"
                    >
                      100 هزار تومان هدیه
                    </a>
                  </div> */}
                  <div>
                    <a href="/account/credit" className={styles.footer_items}>
                      کیف پول من
                    </a>
                  </div>
                  <div>
                    <a to="" href="" className={styles.footer_items}>
                      مدیریت غرفه
                    </a>
                  </div>
                </div>
              </div>{" "}
              <div className="align-items-center d-flex justify-content-between mt-3">
                {/* <div>
                  <a href="">
                    <button className="btn rounded-pill border-black">
                      دانلود اپلیکیشن
                    </button>
                  </a>
                </div>{" "} */}
                <div className={styles.footer_social_icon}>
                  <div>
                    <a
                      href=""
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      aria-label="لینکدین"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>{" "}
                  <div>
                    <a
                      href=""
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      aria-label="توییتر"
                    >
                      <i className="bi bi-twitter-outline"></i>
                    </a>
                  </div>{" "}
                  <div>
                    <a
                      href=""
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
                    <div
                      className={`${styles.footer_seo_container} show-all-seo-text`}
                    >
                      <div
                        className={styles.footer_seo_text}
                        style={{ textAlign: "justify" }}
                      >
                        <span>نخل سرزمینی است برای یادآوری سنت­‌های اصیل ایرانی­‌مان. برای شکوفایی استعدادها و بهتردیده­‌شدن‌تان، کالاها و خدمات خود را در سرزمین نخل به اشتراک بگذارید. اینجا راهی برای پیشبرد هدف­‌های‌تان وجود دارد. در سرزمین نخل دریچه‌­ای باز شده است تا شما را برای رسیدن به خواسته‌ها و آرزوهای‌­تان همراهی کنیم. پس با خانوادۀ بزرگ نخل همراه شوید.</span>
                        ‍‍<br />
                        <br />
                        <span>با ضریب نفوذ بالای اینترنت، روش‌های بازاریابی، فروش و حتی خرید به کلی تغییر پیدا کرده است و با محتواهای مناسب، بهتر می‌توان صاحبان کسب­‌وکارهای اصیل را دید و با آنها ارتباط برقرار کرد. بنابراین امروزه تولیدکنندگان و عرضه کنندگان کالا‌ها وحتی کسب‌­ وکارهای خدماتی، به این باور رسیده‌­اند که با آنلاین‌­بودن ­به­‌آسانی می‌­توان دغدغۀ خود را بیان کرد و با نفوذ بالای اینترنت، بهتر می‌­توان کالاها و خدمات خود را به نمایش گذاشت و فروش بهتر و آسان­‌تری را تجربه کرد.</span>
                        <br /><br />
                        <span>امروز صاحبان کسب­‌وکار دوست دارند محصول خود را بدون واسطه و با ارزش افزوده به‌­دست مشتری خود برسانند و با مشتریان خود «کانون مشتریان وفادار» خود را تأسیس و با نظریات آنها به بازار بزرگتری دست یافته و بتوانند با بهترین شرایط رشد کنند تا خود زمینه­‌ای برای کارآفرینی و امیدبخشی جامعۀ خویش باشند. با بازار آنلاین نخل می‌­توان در این مسیر قدم گذاشت و به این هدف مبارک دست یافت.</span>
                        <br /><br />
                        <span>رویکرد اصلی بازار آنلاین نخل، زمینه‌سازی جهت حضور این کسب‌وکارهای خرد، به­‌خصوص کسب‌وکارهای اصیل و پرمعنا در سرتاسر ایران است که علاوه بر آنکه مجموعاً سهم بالایی از تجارت مردمی را به خود اختصاص داده‌اند؛ انگیزۀ بیشتری نیز جهت ارتقاء و توسعۀ کسب‌وکار خود خواهند داشت و همچنین می‌توانند از میراث‌ و هویت بومی خود جهت ایجاد جذابیت و افزایش آگاهی مخاطب و در نتیجه جذب مخاطب‌های علاقه‌مند و وفادار بهره­‌مند شوند</span>
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

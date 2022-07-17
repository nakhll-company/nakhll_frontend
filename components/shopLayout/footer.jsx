import React from "react";
// node libraries
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

// style
import styles from "../../styles/components/shopLayout/footer.module.scss";

const Footer = () => {
  const router = useRouter();
  const userData = useSelector((state) => state.User.userInfo);

  const handelAccording = (accord, icon) => {
    const element = document.getElementById(accord);
    if (element.style.height == "0px") {
      element.style.height = "unset";
      document.getElementById(icon).className = "fas fa-angle-up";
    } else {
      element.style.height = "0";
      element.style.overflow = "hidden";
      document.getElementById(icon).className = "fas fa-angle-down";
    }
  };
  const dataFooter = [
    {
      header: "نخل",
      data: [
        { title: "وبلاگ", url: "" },
        { title: "داستان نخل", url: "" },
        { title: "قوانین و شرایط استفاده", url: "" },
      ],
    },
    {
      header: "پشتیبانی",
      data: [
        { title: " 034-91001230", url: "" },
        { title: "پیگیری سفارشات", url: "" },
        { title: "پاسخ به سوالات پرتکرار", url: "" },
      ],
    },
    {
      header: "خرید و فروش",
      data: [
        { title: "فروش در نخل", url: "" },
        { title: "مدیریت حجره", url: "" },
      ],
    },
  ];

  return (
    <>
      {!router.pathname.startsWith("/cart") && (
        <>
          <div className="container">
            <div className="pt-4 row d-none d-lg-flex">
              <div className="col-6">
                <div className="row">
                  <div className="col-4 d-flex flex-column">
                    <div className="pb-4 font-lg-size1-1 font-weight-500">
                      نخل
                    </div>{" "}
                    <div>
                      <Link href="https://nakhll.com/blog/">
                        <a className={styles.footer_items}>وبلاگ</a>
                      </Link>
                    </div>
                    <div>
                      <Link href="https://nakhll.com/blog/%d9%86%d8%ae%d9%84%d8%8c-%d8%a8%d8%a7%d8%b2%d8%a7%d8%b1%db%8c-%d8%a7%d8%ac%d8%aa%d9%85%d8%a7%d8%b9%db%8c-%d9%88-%d8%a2%d9%86%d9%84%d8%a7%db%8c%d9%86/">
                        <a className={styles.footer_items}>داستان نخل</a>
                      </Link>
                    </div>
                    <div>
                      <Link href="https://nakhll.com/blog/%d8%aa%d9%85%d8%a7%d8%b3-%d8%a8%d8%a7-%d9%85%d8%a7/">
                        <a className={styles.footer_items}>تماس با ما</a>
                      </Link>
                    </div>
                    <div>
                      <Link href="https://nakhll.com/blog/%d8%b4%d8%b1%d8%a7%db%8c%d8%b7-%d9%88-%d8%b6%d9%88%d8%a7%d8%a8%d8%b7/">
                        <a className={styles.footer_items}>
                          قوانین و شرایط استفاده
                        </a>
                      </Link>
                    </div>{" "}
                    <div className={styles.footer_social_icon}>
                      <a
                        href="https://www.linkedin.com/company/nakhll/"
                        target="_blank"
                        aria-label="لینکدین"
                        rel="noreferrer"
                      >
                        <BsLinkedin size={30} />
                      </a>

                      <a
                        style={{ width: "30px" }}
                        href="https://www.aparat.com/nakhll"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="آپارات بازار اجتماعی نخل"
                      >
                        <Image
                          src="/icons/footer/aparat.png"
                          layout="responsive"
                          width={200}
                          height={200}
                          alt="آپارات"
                        />
                      </a>

                      <a
                        href="https://www.instagram.com/nakhll_com/"
                        target="_blank"
                        aria-label="اینستاگرام"
                        rel="noreferrer"
                        style={{ fontSize: "30px", display: "flex" }}
                      >
                        <FiInstagram size={30} />
                      </a>
                    </div>
                  </div>
                  <div className="col-4 d-flex flex-column">
                    <div className="pb-4 font-lg-size1-1 font-weight-500">
                      پشتیبانی
                    </div>{" "}
                    <div>
                      <a
                        href="tel://034-91001230"
                        className={styles.footer_items}
                      >
                        تلفن تماس:
                        <span className="d-block">{`  034-91001230`}</span>
                      </a>
                    </div>
                    {/* <div>
                      <a to="" href="" className={styles.footer_items}>
                        پشتیبانی آنلاین
                      </a>
                    </div> */}
                    <div>
                      <Link
                        href={
                          Object.keys(userData).length > 0
                            ? "/profile"
                            : "/login"
                        }
                      >
                        <a className={styles.footer_items}>پیگیری سفارشات</a>
                      </Link>
                    </div>
                    <div>
                      <Link href="https://nakhll.com/blog/%d8%b3%d9%88%d8%a7%d9%84%d8%a7%d8%aa-%d9%be%d8%b1-%d8%aa%da%a9%d8%b1%d8%a7%d8%b1/">
                        <a className={styles.footer_items}>
                          پاسخ به سوالات پرتکرار
                        </a>
                      </Link>
                    </div>{" "}
                  </div>
                  <div className="col-4 d-flex flex-column">
                    <div className="pb-4 font-lg-size1-1 font-weight-500">
                      خرید و فروش
                    </div>{" "}
                    <div>
                      <Link href="/">
                        <a className={styles.footer_items}>فروش در نخل</a>
                      </Link>
                    </div>
                    <div>
                      <Link
                        href={
                          Object.keys(userData).length > 0
                            ? userData.shops && userData.shops.length > 0
                              ? "/fp"
                              : "/fp/store/create"
                            : "/login"
                        }
                      >
                        <a className={styles.footer_items}>مدیریت حجره</a>
                      </Link>
                    </div>{" "}
                  </div>
                </div>
              </div>{" "}
              <div className="col-6">
                <div className="row">
                  <div className="col-xx-3"></div>{" "}
                  <div className="col-12 col-xx-9 footer-top-part1">
                    <div className="mt-5 row">
                      <div className="mt-3 mb-2 col-6 col-md-3">
                        <div
                          style={{ height: "125px", width: "125px" }}
                          className="mt-1 d-flex justify-content-center"
                        >
                          <Link href="https://kerman.irannsr.org/services/trade_unit/319012-%D8%A7%D8%B9%D8%B6%D8%A7%DB%8C-%D8%AD%D9%82%D9%88%D9%82%DB%8C-%D9%86%D9%88%DB%8C%D8%AF-%D8%AA%DB%8C%D9%85%DA%86%D9%87-%D8%AA%D8%AC%D8%A7%D8%B1%D8%AA-%D9%86%DB%8C%D9%84.html?t=%D8%AC%D8%B3%D8%AA%D8%AC%D9%88%DB%8C-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87">
                            <a aria-label="نماد" className="w-100">
                              <Image
                                layout="responsive"
                                height={100}
                                width={100}
                                alt=""
                                title=""
                                src="/icons/footer/fn.png"
                                className="footer-namad"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>{" "}
                      <div className="mt-3 mb-2 col-6 col-md-3">
                        <div
                          style={{ height: "125px", width: "125px" }}
                          className="d-flex justify-content-center"
                        >
                          <Link href="https://trustseal.enamad.ir/?id=135577&amp;Code=4LVJlUntZdqZWSmXWkA1">
                            <a aria-label="نماد" className="w-100">
                              <Image
                                layout="responsive"
                                height={100}
                                width={100}
                                referrerPolicy="origin"
                                alt="نماد اعتماد الکترونیکی"
                                title="نماد اعتماد الکترونیکی"
                                src="/icons/footer/namad.png"
                                className="footer-namad"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>{" "}
                      <div className="mt-3 mb-2 col-6 col-md-3">
                        <div
                          style={{ height: "125px", width: "125px" }}
                          className="d-flex justify-content-center"
                        >
                          <Link href="https://logo.samandehi.ir/Verify.aspx?id=163029&p=rfthgvkaxlaoobpduiwkpfvl">
                            <a aria-label="نماد" className="w-100">
                              <Image
                                layout="responsive"
                                height={100}
                                width={100}
                                alt="انجمن کسب و کار های اینترنتی"
                                title="انجمن کسب و کار های اینترنتی"
                                src="/icons/footer/namadTwo.png"
                                className="footer-namad"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-lg-none">
              <div className="py-3 border-bottom border-gray">
                <div
                  onClick={() => {
                    handelAccording("part_one", "icon");
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="font-weight-500">نخل</div>{" "}
                    <i id="icon" className="fas fa-angle-down"></i>
                  </div>
                </div>{" "}
                <div
                  id="part_one"
                  style={{
                    transition: "all 1s ease-out",
                    height: "0",
                    overflow: "hidden",
                    paddingTop: "10px",
                  }}
                  className="is-active"
                >
                  <div>
                    <Link href="https://nakhll.com/blog/">
                      <a className={styles.footer_items}>وبلاگ</a>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://nakhll.com/blog/%d8%af%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%a8%d8%a7%d8%b2%d8%a7%d8%b1-%d8%a7%d8%ac%d8%aa%d9%85%d8%a7%d8%b9%db%8c-%d9%86%d8%ae%d9%84/">
                      <a className={styles.footer_items}>داستان نخل</a>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://nakhll.com/blog/%d8%aa%d9%85%d8%a7%d8%b3-%d8%a8%d8%a7-%d9%85%d8%a7/">
                      <a className={styles.footer_items}>تماس با ما</a>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://nakhll.com/blog/%d8%b4%d8%b1%d8%a7%db%8c%d8%b7-%d9%88-%d8%b6%d9%88%d8%a7%d8%a8%d8%b7/">
                      <a className={styles.footer_items}>
                        قوانین و شرایط استفاده
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="py-3 border-bottom border-gray">
                <div
                  onClick={() => {
                    handelAccording("part_two", "part_two_icon");
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="font-weight-500">پشتیبانی</div>{" "}
                    <i id="part_two_icon" className="fas fa-angle-down"></i>
                  </div>
                </div>{" "}
                <div
                  style={{
                    transition: "all 1s ease-out",
                    height: "0",
                    overflow: "hidden",
                    paddingTop: "10px",
                  }}
                  id="part_two"
                  className="is-active"
                >
                  <div>
                    <div className={styles.footer_items}>
                      تلفن تماس:
                      <a href="tel://034-91001230" className="d-inline-block">
                        {`034-91001230`}
                      </a>
                    </div>
                  </div>
                  <div>
                    <Link
                      href={
                        Object.keys(userData).length > 0 ? "/profile" : "/login"
                      }
                    >
                      <a className={styles.footer_items}>پیگیری سفارشات</a>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://nakhll.com/blog/%d8%b3%d9%88%d8%a7%d9%84%d8%a7%d8%aa-%d9%be%d8%b1-%d8%aa%da%a9%d8%b1%d8%a7%d8%b1/">
                      <a className={styles.footer_items}>
                        پاسخ به سوالات پرتکرار
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="py-3 border-bottom border-gray">
                <div
                  onClick={() => {
                    handelAccording("part_three", "part_three_icon");
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="font-weight-500">خرید و فروش</div>{" "}
                    <i id="part_three_icon" className="fas fa-angle-down"></i>
                  </div>
                </div>{" "}
                <div
                  id="part_three"
                  style={{
                    transition: "all 1s ease-out",
                    height: "0",
                    overflow: "hidden",
                    paddingTop: "10px",
                  }}
                >
                  <div>
                    <Link href="/">
                      <a className={styles.footer_items}>فروش در نخل</a>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={
                        Object.keys(userData).length > 0
                          ? userData.shops && userData.shops.length > 0
                            ? "/fp"
                            : "/fp/store/create"
                          : "/login"
                      }
                    >
                      <a className={styles.footer_items}>مدیریت حجره</a>
                    </Link>
                  </div>
                </div>
              </div>{" "}
              <div className="mt-3 align-items-center d-flex justify-content-between">
                <div
                  style={{
                    justifyContent: "space-around",
                    marginBottom: "15px",
                  }}
                  className={styles.footer_social_icon}
                >
                  <a
                    href="https://www.linkedin.com/company/nakhll/"
                    target="_blank"
                    aria-label="لینکدین"
                    rel="noreferrer"
                  >
                    <BsLinkedin size={30} />
                  </a>

                  <a
                    style={{ width: "30px" }}
                    href="https://www.aparat.com/nakhll"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="آپارات بازار اجتماعی نخل"
                  >
                    <Image
                      src="/icons/footer/aparat.png"
                      layout="responsive"
                      alt="آپارات"
                      width={200}
                      height={200}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/nakhll_com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="اینستاگرام"
                    style={{ fontSize: "30px", display: "flex" }}
                  >
                    <FiInstagram size={30} />
                  </a>
                </div>
              </div>{" "}
              <div className="mt-1 row align-items-center d-flex justify-content-between">
                <div className="col-4 col-md-2">
                  <div className="d-flex justify-content-center">
                    <Link href="https://kerman.irannsr.org/services/trade_unit/319012-%D8%A7%D8%B9%D8%B6%D8%A7%DB%8C-%D8%AD%D9%82%D9%88%D9%82%DB%8C-%D9%86%D9%88%DB%8C%D8%AF-%D8%AA%DB%8C%D9%85%DA%86%D9%87-%D8%AA%D8%AC%D8%A7%D8%B1%D8%AA-%D9%86%DB%8C%D9%84.html?t=%D8%AC%D8%B3%D8%AA%D8%AC%D9%88%DB%8C-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87">
                      <a
                        aria-label="نماد"
                        className="w-100"
                        style={{ overflow: "hidden", display: "inline-block" }}
                      >
                        <Image
                          layout="responsive"
                          height={100}
                          width={100}
                          alt=""
                          src="/icons/footer/fn.png"
                          className="footer-namad"
                        />
                      </a>
                    </Link>
                  </div>
                </div>{" "}
                <div className="col-4 col-md-2">
                  <div className="mt-1 d-flex justify-content-center">
                    <Link href="https://trustseal.enamad.ir/?id=135577&Code=4LVJlUntZdqZWSmXWkA1">
                      <a aria-label="نماد" className="w-100">
                        <Image
                          layout="responsive"
                          height={100}
                          width={100}
                          referrerPolicy="origin"
                          alt="نماد اعتماد الکترونیکی"
                          src="/icons/footer/namad.png"
                          className="footer-namad"
                        />
                      </a>
                    </Link>
                  </div>
                </div>{" "}
                <div className="col-4 col-md-2">
                  <div className="d-flex justify-content-center">
                    <Link href="https://logo.samandehi.ir/Verify.aspx?id=163029&p=rfthgvkaxlaoobpduiwkpfvl">
                      <a aria-label="نماد" className="w-100">
                        <Image
                          layout="responsive"
                          height={100}
                          width={100}
                          alt="انجمن کسب و کار های اینترنتی"
                          src="/icons/footer/namadTwo.png"
                          className="footer-namad"
                        />
                      </a>
                    </Link>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="pt-3 ">
              <div className="container pb-5">
                <hr className="mt-0" />{" "}
                <div className="footer-seo">
                  <div className="pt-3 font-weight-bold">
                    <h1>نخل، بازار اجتماعی آنلاین</h1>
                  </div>{" "}
                  <div>
                    <div
                      className={`${styles.footer_seo_container} show-all-seo-text`}
                    >
                      <div
                        className={styles.footer_seo_text}
                        style={{ textAlign: "justify" }}
                      >
                        <span style={{ color: "#000" }}>
                          نخل سرزمینی است برای یادآوری سنت­‌های اصیل
                          ایرانی­‌مان. برای شکوفایی استعدادها و
                          بهتردیده­‌شدن‌تان، کالاها و خدمات خود را در سرزمین نخل
                          به اشتراک بگذارید. اینجا راهی برای پیشبرد هدف­‌های‌تان
                          وجود دارد. در سرزمین نخل دریچه‌­ای باز شده است تا شما
                          را برای رسیدن به خواسته‌ها و آرزوهای‌­تان همراهی کنیم.
                          پس با خانوادۀ بزرگ نخل همراه شوید.
                        </span>
                        ‍‍
                        <br />
                        <br />
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {false && (
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  بازار نخل
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              {dataFooter.map((item, index) => (
                <div key={index}>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    {item.header}
                  </h2>
                  <ul className="text-gray-600 dark:text-gray-400">
                    {item.data.map((el, index) => (
                      <li key={index} className="mb-4">
                        <a
                          href="https://flowbite.com/"
                          className="hover:underline"
                        >
                          {el.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2022{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Dribbbel account</span>
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};
// export
export default Footer;

import React from "react";
// node libraries
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

// style

const Footer = () => {
  const router = useRouter();

  const dataFooter = [
    {
      header: "نخل",
      data: [
        { title: "وبلاگ", url: "https://nakhll.com/blog/" },
        {
          title: "داستان نخل",
          url: "https://nakhll.com/blog/%d9%86%d8%ae%d9%84%d8%8c-%d8%a8%d8%a7%d8%b2%d8%a7%d8%b1%db%8c-%d8%a7%d8%ac%d8%aa%d9%85%d8%a7%d8%b9%db%8c-%d9%88-%d8%a2%d9%86%d9%84%d8%a7%db%8c%d9%86/",
        },
        {
          title: "قوانین و شرایط استفاده",
          url: "https://nakhll.com/blog/%d8%b4%d8%b1%d8%a7%db%8c%d8%b7-%d9%88-%d8%b6%d9%88%d8%a7%d8%a8%d8%b7/",
        },
      ],
    },
    {
      header: "پشتیبانی",
      data: [
        { title: " 034-91001230", url: "tel://034-91001230" },
        { title: "پیگیری سفارشات", url: "/profile" },
        {
          title: "پاسخ به سوالات پرتکرار",
          url: "https://nakhll.com/blog/%d8%b3%d9%88%d8%a7%d9%84%d8%a7%d8%aa-%d9%be%d8%b1-%d8%aa%da%a9%d8%b1%d8%a7%d8%b1/",
        },
      ],
    },
    {
      header: "خرید و فروش",
      data: [
        { title: "فروش در نخل", url: "/fp" },
        { title: "مدیریت حجره", url: "/fp" },
      ],
    },
  ];

  return (
    <>
      {!router.pathname.startsWith("/cart") && (
        <footer className="p-4 mt-2 bg-white sm:p-6 dark:bg-gray-900">
          <div className="md:flex md:justify-between ">
            <div className="mb-6 md:mb-0 md:flex-grow md:flex md:justify-center md:items-center">
              <a href="/" className="flex items-center">
                <img
                  src="/icons/Nakhll.png"
                  className="h-16 mr-3 "
                  alt="FlowBite Logo"
                />
                <span className="self-center mr-2 text-2xl font-semibold whitespace-nowrap ">
                  بازار نخل
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              {dataFooter.map((item, index) => (
                <div key={index}>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                    {item.header}
                  </h2>
                  <ul className="text-gray-600 dark:text-gray-400">
                    {item.data.map((el, index) => (
                      <li key={index} className="mb-4">
                        <a
                          target="_blank"
                          href={el.url}
                          className="hover:underline"
                          rel="noreferrer"
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
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <Link href="https://kerman.irannsr.org/services/trade_unit/319012-%D8%A7%D8%B9%D8%B6%D8%A7%DB%8C-%D8%AD%D9%82%D9%88%D9%82%DB%8C-%D9%86%D9%88%DB%8C%D8%AF-%D8%AA%DB%8C%D9%85%DA%86%D9%87-%D8%AA%D8%AC%D8%A7%D8%B1%D8%AA-%D9%86%DB%8C%D9%84.html?t=%D8%AC%D8%B3%D8%AA%D8%AC%D9%88%DB%8C-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87">
                <a aria-label="نماد" className="w-100">
                  <Image
                    layout="fixed"
                    height={100}
                    width={100}
                    alt=""
                    title=""
                    src="/icons/footer/fn.png"
                    className="footer-namad"
                  />
                </a>
              </Link>
              <Link href="https://trustseal.enamad.ir/?id=135577&amp;Code=4LVJlUntZdqZWSmXWkA1">
                <a aria-label="نماد" className="w-100">
                  <Image
                    layout="fixed"
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
              <Link href="https://logo.samandehi.ir/Verify.aspx?id=163029&p=rfthgvkaxlaoobpduiwkpfvl">
                <a aria-label="نماد" className="w-100">
                  <Image
                    layout="fixed"
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
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {/* inja */}
              <a
                href="https://www.linkedin.com/company/nakhll/"
                target="_blank"
                aria-label="لینکدین"
                rel="noreferrer"
                className="mx-2"
              >
                <BsLinkedin size={30} />
              </a>

              <a
                href="https://www.aparat.com/nakhll"
                target="_blank"
                rel="noreferrer"
                aria-label="آپارات بازار اجتماعی نخل"
                className="mx-2 w-[30px]"
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
                className="mx-2"
              >
                <FiInstagram size={30} />
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

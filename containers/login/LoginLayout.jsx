import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function LoginLayout({
  headrSite = "بازار اجتماعی نخل",
  titleForm = "ورود / ثبت نام",
  children,
}) {
  return (
    <>
      <Head>
        <title>{headrSite}</title>
      </Head>
      <div className="relative flex h-screen items-center justify-center bg-blue-50">
        <Image
          src="/image/hero.jpg"
          className="blur-sm"
          alt="logo"
          layout="fill"
          objectFit="cover"
        />
        <div className="flex transform flex-col rounded-3xl bg-white px-5 pt-2 pb-5 shadow-lg transition duration-200  ease-out">
          <div className="relative h-28">
            <Link href="/">
              <a>
                <Image
                  src="/image/base_logo.png"
                  alt="logo"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>
          <span className="block pb-4 text-center text-lg font-bold">
            {titleForm}
          </span>

          {children}
        </div>
      </div>
    </>
  );
}

export default LoginLayout;

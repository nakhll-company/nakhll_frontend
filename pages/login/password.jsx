// node libraries
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
// methods
import { completeAuth } from "../../api/auth/completeAuth";
import EmptyLayout from "../../components/layout/EmptyLayout";
import { getAccessToken } from "../../api/auth/getAccessToken";
import LoginButton from "../../containers/login/loginButton";
import { useState } from "react";

const Password = () => {
  const [loadButton, setLoadButton] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    setLoadButton(true);
    data.auth_key = JSON.parse(sessionStorage.getItem("login")).auth_key;
    let result = await completeAuth(data);

    if (result !== false) {
      let response = await getAccessToken(result);
      response === true && location.replace("/");
    }
    setLoadButton(false);
  };

  return (
    <>
      <Head>
        <title>ورود بازار آنلاین نخل</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="d-flex flex-column justify-content-center col-12 col-md-8 col-lg-5 m-auto bg-white p-5 mt-5 shadow-lg rounded">
        <div className="m-auto">
          <Link href="/">
            <a>
              <Image
                src="/image/base_logo.png"
                alt="logo"
                width="250"
                height="100"
              />
            </a>
          </Link>
        </div>
        <h1
          className="d-flex justify-content-center font-weight-bold mb-5"
          style={{ fontSize: "20px" }}
        >
          ورود / ثبت نام
        </h1>
        <form onSubmit={handleSubmit(submit)}>
          <label
            htmlFor="user_key"
            className="mb-2"
            style={{ fontSize: "15px" }}
          >
            رمز عبور حساب کاربری خود را وارد کنید
          </label>
          <input
            type="password"
            id="user_key"
            className="form-control mb-3"
            {...register("user_key", {
              required: "لطفا این گزینه را پرنمایید",
            })}
          />
          {errors.user_key && (
            <span style={{ display: "block", color: "red", fontSize: "14px" }}>
              {errors.user_key.message}
            </span>
          )}
          <div className="d-flex justify-content-between align-items-center">
            <Link href="/login/code?forgetPass=true">
              <a className="text-info">فراموشی رمز عبور</a>
            </Link>
            <label
              htmlFor="showPassword"
              className="d-flex justify-content-center align-items-center"
            >
              نمایش رمز عبور
              <input
                type="checkbox"
                name="showPassword"
                id="showPassword"
                className="me-3"
                onClick={() => {
                  let inputPassword = document.querySelector("#user_key");
                  if (inputPassword.type === "password") {
                    inputPassword.type = "text";
                  } else {
                    inputPassword.type = "password";
                  }
                }}
              />
            </label>
          </div>

          <LoginButton loader={loadButton} title="ادامه" />
        </form>
      </div>
    </>
  );
};
// export
export default Password;

Password.Layout = EmptyLayout;

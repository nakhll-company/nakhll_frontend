// node libraries
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
// components
import LoginButton from "../../containers/login/loginButton";
import EmptyLayout from "../../components/layout/EmptyLayout";
// methods
import { sendPhoneNumber } from "../../api/auth/sendPhoneNumber";

const Login = () => {
  const [loadButton, setLoadButton] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    setLoadButton(true);
    let result = await sendPhoneNumber(data);

    if (result !== false) {
      sessionStorage.setItem("login", JSON.stringify(result));

      if (result.mobile_status === "login_pass") {
        router.push("/login/password/");
      } else {
        router.push("/login/code/");
      }
    }
    setLoadButton(false);
  };

  return (
    <>
      <Head>
        <title>ورود بازار آنلاین نخل</title>
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
          <label htmlFor="mobile" className="mb-2" style={{ fontSize: "15px" }}>
            شماره موبایل خود را وارد کنید
          </label>
          <input
            type="number"
            id="mobile"
            className="form-control mb-2"
            placeholder="مثال : *******0913"
            {...register("mobile", {
              required: "لطفا این گزینه را پرنمایید",
              maxLength: {
                value: 11,
                message: "لطفا شماره موبایل خود را صحیح وارد نمایید",
              },
              minLength: {
                value: 11,
                message: "لطفا شماره موبایل خود را صحیح وارد نمایید",
              },
              pattern: {
                value: /^[0-9]*$/,
                message: "لطفا شماره موبایل خود را صحیح وارد نمایید",
              },
            })}
          />
          {errors.mobile && (
            <span style={{ display: "block", color: "red", fontSize: "14px" }}>
              {errors.mobile.message}
            </span>
          )}
          <LoginButton loader={loadButton} />
        </form>
      </div>
    </>
  );
};
// export
export default Login;

Login.Layout = EmptyLayout;

import React from "react";

import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
// components
import LoginButton from "../../containers/login/loginButton";
import EmptyLayout from "../../components/layout/EmptyLayout";
// methods
import { sendPhoneNumber } from "../../api/auth/sendPhoneNumber";
import LoginLayout from "../../containers/login/LoginLayout";

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
    const result = await sendPhoneNumber(data);

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
    <LoginLayout headrSite="ورود بازار آنلاین نخل">
      <form className="mt-4" onSubmit={handleSubmit(submit)}>
        <label htmlFor="mobile" className="mb-2 block">
          شماره موبایل:
        </label>
        <input
          type="number"
          id="mobile"
          className="mb-2 w-full rounded-md border-2 border-blue-400 p-2 caret-blue-600 focus:outline-none"
          placeholder="مثال : *******0913"
          {...register("mobile", {
            required: "بدون شماره موبایل!!!",
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
          <span className="block font-bold text-red-600">
            {errors.mobile.message}
          </span>
        )}
        <LoginButton loader={loadButton} />
      </form>
    </LoginLayout>
  );
};
// export
export default Login;

Login.Layout = EmptyLayout;

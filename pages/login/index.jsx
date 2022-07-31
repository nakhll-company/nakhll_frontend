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
import Link from "next/link";
import { completeAuth } from "../../api/auth/completeAuth";
import { getAccessToken } from "../../api/auth/getAccessToken";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/cart/getProducts";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Login = () => {
  const router = useRouter();
  const [loadButton, setLoadButton] = useState(false);
  const dispatch = useDispatch();
  const [loadButtonPassword, setLoadButtonPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [whichPage, setWhichPage] = useState(1);
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
        setWhichPage(2);
      } else {
        router.push("/login/code/");
      }
    }
    setLoadButton(false);
  };
  const submitPassword = async (data) => {
    setLoadButtonPassword(true);
    data.auth_key = JSON.parse(sessionStorage.getItem("login")).auth_key;
    const result = await completeAuth(data);

    if (!!result) {
      const response = await getAccessToken(result);
      await dispatch(getProducts());
      response === true && router.back();
    } else {
      setLoadButtonPassword(false);
    }
  };

  return (
    <LoginLayout headrSite="ورود بازار آنلاین نخل">
      {whichPage == 1 && (
        <form className="mt-4" onSubmit={handleSubmit(submit)}>
          <label htmlFor="mobile" className="block mb-2">
            شماره موبایل:
          </label>
          <input
            type="number"
            id="mobile"
            className="w-full p-2 mb-2 border-2 border-blue-400 rounded-md caret-blue-600 focus:outline-none"
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
      )}
      {whichPage == 2 && (
        <form onSubmit={handleSubmit(submitPassword)}>
          <label htmlFor="user_key" className="mb-2 font-bold">
            رمز عبور :
          </label>
          <div className="relative">
            <div
              onClick={() => {
                const inputPassword = document.querySelector("#user_key");
                if (inputPassword.type === "password") {
                  inputPassword.type = "text";
                  setShowPassword(true);
                } else {
                  inputPassword.type = "password";
                  setShowPassword(false);
                }
              }}
              className="absolute top-0 bottom-0 flex items-center cursor-pointer left-1 hover:animate-pulse"
            >
              {showPassword ? (
                <AiFillEye size={20} />
              ) : (
                <AiFillEyeInvisible size={20} />
              )}
            </div>

            <input
              type="password"
              id="user_key"
              className="mb-3 form-control"
              {...register("user_key", {
                required: "رمزتون چی بود؟!",
              })}
            />
            {errors.user_key && (
              <span className="block font-bold text-red-600">
                {errors.user_key.message}
              </span>
            )}
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Link href="/login/code?forgetPass=true">
              <a className="text-info">فراموشی رمز عبور</a>
            </Link>
          </div>
          <LoginButton loader={loadButtonPassword} title="ادامه" />
        </form>
      )}
    </LoginLayout>
  );
};
// export
export default Login;

Login.Layout = EmptyLayout;

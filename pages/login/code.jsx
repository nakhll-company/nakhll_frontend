import React from "react";
// node libraries

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
// components
import AppTimer from "../../containers/login/timer";
import LoginButton from "../../containers/login/loginButton";
import EmptyLayout from "../../components/layout/EmptyLayout";
// methods
import { resendCode } from "../../api/auth/resendCode";
import { completeAuth } from "../../api/auth/completeAuth";
import { forgetPassword } from "../../api/auth/forgetPassword";
import { getAccessToken } from "../../api/auth/getAccessToken";
import LoginLayout from "../../containers/login/LoginLayout";

const Code = () => {
  const router = useRouter();
  const [timer, setTimer] = useState(59);
  const [mobile, setMobile] = useState("");
  const [loadButton, setLoadButton] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    setLoadButton(true);
    data.auth_key = JSON.parse(sessionStorage.getItem("login")).auth_key;
    const result = await completeAuth(data);

    if (result !== false) {
      if (
        JSON.parse(sessionStorage.getItem("login")).mobile_status ===
        "login_pass"
      ) {
        sessionStorage.setItem("secret_key", result.auth_secret);
        router.push("/login/forgetPassword");
      } else {
        const response = await getAccessToken(result);
        response === true && location.replace("/");
      }
    }
    setLoadButton(false);
  };

  useEffect(() => {
    router.query.forgetPass === "true" && forgetPassword();
    const mobile = sessionStorage.getItem("mobile");
    setMobile(mobile);
  }, [router.query.forgetPass]);

  return (
    <>
      <LoginLayout titleForm="رمز دریافتی">
        {" "}
        <form onSubmit={handleSubmit(submit)}>
          <label
            htmlFor="user_key"
            className="mb-2"
            style={{ fontSize: "15px" }}
          >
            کد تایید برای شماره موبایل {mobile ?? "وارد شده"} ارسال گردید
          </label>
          <input
            type="number"
            id="user_key"
            className="form-control mb-3"
            {...register("user_key", {
              required: "لطفا این گزینه را پرنمایید",
              maxLength: {
                value: 6,
                message: "لطفا کد را صحیح وارد نمایید",
              },
              minLength: {
                value: 6,
                message: "لطفا کد را صحیح وارد نمایید",
              },
            })}
          />
          {errors.user_key && (
            <span style={{ display: "block", color: "red", fontSize: "14px" }}>
              {errors.user_key.message}
            </span>
          )}
          {timer === 0 && (
            <span
              className="text-info"
              style={{ cursor: "pointer" }}
              onClick={() => {
                resendCode({ mobile: sessionStorage.getItem("mobile") });
                setTimer(59);
              }}
            >
              دریافت مجدد کد تایید
            </span>
          )}
          {timer > 0 && (
            <span className="float-left inline-block">
              <AppTimer timer={timer} setTimer={setTimer} />
            </span>
          )}
          <LoginButton loader={loadButton} title="ادامه" />
        </form>
      </LoginLayout>
    </>
  );
};
// export
export default Code;

Code.Layout = EmptyLayout;

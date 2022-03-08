import React, { useEffect, useRef, useState } from "react";
import EmptyLayout from "../../components/layout/EmptyLayout";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import lottie from "lottie-web";

import s from "./setPassword.module.scss";

import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import rot13 from "../../utils/rout13";

function SetPasswordPage() {
  const router = useRouter();

  const [code, setcode] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPas, setRepeatNewPas] = useState("");
  const [auth_secret, setAuth_secret] = useState("");

  const [toggleClass, setToggleClass] = useState(false);

  const eye = useRef();
  const beam = useRef();
  const passwordInput = useRef();
  const passwordLogo = useRef();
  const passwordInputRepeat = useRef();
  const container = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    lottie.loadAnimation({
      container: passwordLogo.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/passwordLogo.json"),

      //   path: "./lottie/animation.json",
    });
  }, []);
  useEffect(() => {
    setcode(router.query.code);
  }, [router]);

  // useEffect(async () => {
  //   if (code) {
  //     console.log("codessssssssssssssss :>> ", code);
  //     let response = await ApiRegister().apiRequest(
  //       {
  //         auth_key: rot13(code[0]),
  //         user_key: "",
  //       },
  //       "POST",
  //       "/api/v1/auth/complete/",
  //       false,
  //       {}
  //     );
  //   }
  // }, [code]);

  const clicEye = () => {
    setToggleClass(!toggleClass);

    passwordInput.current.type =
      passwordInput.current.type === "password" ? "text" : "password";
    passwordInput.current.focus();
    passwordInputRepeat.current.type =
      passwordInputRepeat.current.type === "password" ? "text" : "password";
  };
  const submitForm = async (data) => {
    console.log("data :>> ", data);
    let response = await ApiRegister().apiRequest(
      {
        auth_key: rot13(code[0]),
        user_key: data.user_key,
      },
      "POST",
      "/api/v1/auth/complete/",
      false,
      {}
    );
    if (response.status === 200) {
      console.log(response.data);
      setAuth_secret(response.data.auth_secret);
      // return response.data;
    }
  };
  useEffect(async () => {
    if (auth_secret) {
      let response = await ApiRegister().apiRequest(
        {
          auth_secret: auth_secret,
          password: newPassword,
        },
        "POST",
        "/api/v1/profile/set_password/",
        false,
        {}
      );
      if (response.status === 200) {
        console.log(response.data);

        // return response.data;
      }
    }
  }, [auth_secret]);

  return (
    <>
      <div
        style={{
          background: toggleClass ? "black" : "white",
          color: toggleClass ? "white" : "black",
        }}
        ref={container}
        className={`${s.container} ${toggleClass ? s.show_password : ""}`}
      >
        <div
          style={{
            width: "180px",
            height: "180px",
            position: "absolute",
            top: "10px",
          }}
          ref={passwordLogo}
        ></div>
        <form className={s.form} onSubmit={handleSubmit(submitForm)}>
          <div className={s.form_item}>
            <label className={s.label}>
              {code && code[1] == "login_pass" ? "رمز قبلی" : "کد ارسالی"}
            </label>
            <div className={s.input_wrapper}>
              <input
                style={{
                  color: toggleClass ? "white" : "black",
                }}
                className={s.input}
                type="text"
                id="username"
                data-lpignore="true"
                {...register("user_key", {
                  required: `${
                    code && code[1] == "login_pass" ? "رمز قبلی" : "کد ارسالی"
                  } را وارد نمایید.`,
                })}
              />
              {errors.user_key && (
                <span
                  style={{
                    display: "block",
                    color: "red",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}
                >
                  {errors.user_key.message}
                </span>
              )}
            </div>
          </div>
          <div className="form-item">
            <label className={s.label}>رمز جدید</label>
            <div className={s.input_wrapper}>
              <input
                ref={passwordInput}
                className={s.input}
                type="password"
                id="password"
                data-lpignore="true"
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <button
                ref={eye}
                onClick={clicEye}
                className={s.eyeball}
                type="button"
                id="eyeball"
              >
                <div
                  style={{
                    borderColor: toggleClass ? "white" : "black",
                    backgroundColor: "white",
                  }}
                  className={s.eye}
                ></div>
              </button>

              {toggleClass && (
                <div ref={beam} className={s.beam} id="beam"></div>
              )}
            </div>
          </div>

          <div className="form-item">
            <label className={s.label}>تکرار رمز</label>
            <div className={s.input_wrapper}>
              <input
                ref={passwordInputRepeat}
                className={s.input}
                type="password"
                id="password-repeat"
                data-lpignore="true"
                onChange={(e) => setRepeatNewPas(e.target.value)}
              />
              <button
                ref={eye}
                onClick={clicEye}
                className={s.eyeball}
                type="button"
                id="eyeball"
              >
                <div
                  style={{
                    borderColor: toggleClass ? "white" : "black",
                    backgroundColor: "white",
                  }}
                  className={s.eye}
                ></div>
              </button>

              {toggleClass && (
                <div ref={beam} className={s.beam} id="beam"></div>
              )}
            </div>
          </div>

          <span
            style={{
              display: "block",
              color: "red",
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            miala
          </span>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              style={{
                backgroundColor: toggleClass ? "white" : "black",
                color: toggleClass ? "black" : "white",
              }}
              className={s.button}
              id="submit"
            >
              ثبت رمز
            </button>
            <button
              style={{
                backgroundColor: toggleClass ? "white" : "black",
                color: toggleClass ? "black" : "white",
              }}
              type="button"
              className={s.button}
              onClick={() => router.push("/")}
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SetPasswordPage;

SetPasswordPage.Layout = EmptyLayout;

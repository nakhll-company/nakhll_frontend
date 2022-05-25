// node libraries
import lottie from "lottie-web";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import EmptyLayout from "../../components/layout/EmptyLayout";
// methods
import rot13 from "../../utils/rout13";
import { http } from "../../services/callApi/api";
import { successMessage } from "../../utils/toastifyMessage";
import { clearTokenStorage } from "../../api/general/clearTokenStorage";
// style
import s from "./setPassword.module.scss";

function SetPasswordPage() {

  const eye = useRef();
  const beam = useRef();
  const container = useRef();
  const router = useRouter();
  const passwordLogo = useRef();
  const passwordInput = useRef();
  const animationLoad = useRef();
  const passwordInputRepeat = useRef();
  const [code, setcode] = useState(null);
  const [loader, setLoader] = useState(false);
  const [authSecret, setAuthSecret] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPas, setRepeatNewPas] = useState("");
  const [toggleClass, setToggleClass] = useState(false);
  const [error, setError] = useState({ newPassword: "", repeatNewPas: "" });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const clicEye = () => {
    setToggleClass(!toggleClass);

    passwordInput.current.type =
      passwordInput.current.type === "password" ? "text" : "password";
    passwordInput.current.focus();
    passwordInputRepeat.current.type =
      passwordInputRepeat.current.type === "password" ? "text" : "password";
  };
  const submitForm = async (data) => {
    if (newPassword == "" || repeatNewPas == "") {
      setError({ newPassword: "دقت کنید!!", repeatNewPas: "دقت کنید!!" });
      return;
    }
    if (newPassword !== repeatNewPas) {
      setError({
        newPassword: "رمز و تکرارش باهم برابر نیستند.",
        repeatNewPas: "رمز و تکرارش باهم برابر نیستند.",
      });
      return;
    }
    setLoader(true);

    const response = await http.post("/api/v1/auth/complete/", {
      auth_key: rot13(code[0]),
      user_key: data.user_key,
    });
    if (response.status < 300) {
      setAuthSecret(response.data.auth_secret);
    } else {
      setLoader(false);
    }
  };

  useEffect(() => {
    lottie.loadAnimation({
      container: passwordLogo.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/passwordLogo.json"),
    });

    lottie.loadAnimation({
      container: animationLoad.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/profilePassword.json"),

      //   path: "./lottie/animation.json",
    });
  }, []);

  useEffect(() => {
    setcode(router.query.code);
  }, [router]);

  useEffect(async () => {
    if (authSecret) {
      const response = await http.post("/api/v1/profile/set_password/", {
        auth_secret: authSecret,
        password: newPassword,
      });
      if (response.status === 200) {
        successMessage("پسورد با موفقیت تغییر یافت. مجدد وارد شوید.");
        clearTokenStorage();

        router.push("/login");

        // return response.data;
      } else {
        setLoader(false);
      }
    }
  }, [authSecret]);

  return (
    <>
      {loader && (
        <div className={s.loaderPage}>
          <div ref={animationLoad} className={s.animaitonLoader}></div>
        </div>
      )}
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
          {error?.repeatNewPas && (
            <span
              style={{
                display: "block",
                color: "red",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              {error.repeatNewPas}
            </span>
          )}

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
          {error?.repeatNewPas && (
            <span
              style={{
                display: "block",
                color: "red",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              {error.repeatNewPas}
            </span>
          )}

          <>
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
          </>
        </form>
      </div>
    </>
  );
}

export default SetPasswordPage;

SetPasswordPage.Layout = EmptyLayout;

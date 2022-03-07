import React, { useEffect, useRef, useState } from "react";
import EmptyLayout from "../../components/layout/EmptyLayout";
import { useRouter } from "next/router";
import lottie from "lottie-web";

import s from "./setPassword.module.scss";

function SetPasswordPage() {
  const [toggleClass, setToggleClass] = useState(false);
  const router = useRouter();

  const eye = useRef(null);
  const beam = useRef();
  const passwordInput = useRef(null);
  const passwordLogo = useRef(null);
  const passwordInputRepeat = useRef(null);
  const container = useRef();
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

  // lottie.loadAnimation({
  //   container: partNine.current,
  //   renderer: "svg",
  //   loop: true,
  //   autoplay: true,
  //   animationData: require("./lottie/wecoverSkel.json"),

  //   //   path: "./lottie/animation.json",
  // });

  const clicEye = () => {
    setToggleClass(!toggleClass);

    passwordInput.current.type =
      passwordInput.current.type === "password" ? "text" : "password";
    passwordInput.current.focus();
    passwordInputRepeat.current.type =
      passwordInputRepeat.current.type === "password" ? "text" : "password";
  };

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
        <form className={s.form}>
          <div className={s.form_item}>
            <label className={s.label}>رمز قبلی / کد</label>
            <div className={s.input_wrapper}>
              <input
                style={{
                  color: toggleClass ? "white" : "black",
                }}
                className={s.input}
                type="text"
                id="username"
                data-lpignore="true"
              />
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

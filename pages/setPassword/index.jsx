import React, { useRef, useState } from "react";
import EmptyLayout from "../../components/layout/EmptyLayout";
import s from "./setPassword.module.scss";

// const root = document.documentElement;

// const beam = document.getElementById("beam");
// const passwordInput = document.getElementById("password");

// root.addEventListener("mousemove", (e) => {
//   let rect = beam.getBoundingClientRect();
//   let mouseX = rect.right + rect.width / 2;
//   let mouseY = rect.top + rect.height / 2;
//   let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
//   let degrees = rad * (20 / Math.PI) * -1 - 350;

//   root.style.setProperty("--beamDegrees", `${degrees}deg`);
// });

function SetPasswordPage() {
  const [toggleClass, setToggleClass] = useState(false);
  const [degree, setDegree] = useState(90);
  const eye = useRef(null);
  const beam = useRef();
  const passwordInput = useRef(null);
  const container = useRef();
  const clicEye = () => {
    setToggleClass(!toggleClass);
    container.current.classList.toggle("show_password");
    passwordInput.current.type =
      passwordInput.current.type === "password" ? "text" : "password";
    passwordInput.current.focus();
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
        <form className={s.form}>
          <div className={s.form_item}>
            <label className={s.label}>رمز جدید</label>
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
            <label className={s.label}>تکرار رمز</label>
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
        </form>
      </div>
    </>
  );
}

export default SetPasswordPage;

SetPasswordPage.Layout = EmptyLayout;

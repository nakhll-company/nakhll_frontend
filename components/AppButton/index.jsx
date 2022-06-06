// node libraries
import React from "react";
import Image from "next/image";
// style
import s from "./AppButton.module.scss";

function AppButton({
  onClick = () => {},
  title = "کلیک",
  loader = false,
  submit,
}) {
  return (
    <>
      {loader ? (
        <div
          style={{ height: "40px" }}
          className=" d-flex justify-content-center"
        >
          <Image src="/loading.svg" width="30" height="30" alt="loading" />
        </div>
      ) : (
        <button
          type={submit ? "submit" : "button"}
          style={{ backgroundColor: "rgb(27,62,104)", color: "#fff" }}
          className={`${s.cart_button} btn w-100 d-flex justify-content-between align-items-center px-4`}
          onClick={onClick}
        >
          <span className="d-inline-block w-100 text-center font-size1">
            {title}
          </span>
        </button>
      )}
    </>
  );
}

export default AppButton;

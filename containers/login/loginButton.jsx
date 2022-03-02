import Image from "next/image";
import React from "react";

function LoginButton({ loader, title = "ورود" }) {
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
          style={{ height: "40px" }}
          type="submit"
          className="btn btn-primary col-12 mt-2 "
        >
          {title}
        </button>
      )}
    </>
  );
}

export default LoginButton;

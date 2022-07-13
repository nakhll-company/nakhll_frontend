import Image from "next/image";
import React from "react";

function LoginButton({ loader, title = "ورود" }) {
  return (
    <>
      {loader ? (
        <div className="flex h-10 justify-center ">
          <Image src="/loading.svg" width="30" height="30" alt="loading" />
        </div>
      ) : (
        <button
          type="submit"
          className="mt-4 h-10 w-full rounded-md bg-cyan-800 font-bold text-white transition duration-200 ease-out hover:scale-95 hover:shadow-2xl active:scale-105"
        >
          {title}
        </button>
      )}
    </>
  );
}

export default LoginButton;

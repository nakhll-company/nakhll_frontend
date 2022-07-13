import React from "react";
// node libraries
import Link from "next/link";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { useState } from "react";
import { useForm } from "react-hook-form";
// components
import LoginButton from "../../containers/login/loginButton";
import EmptyLayout from "../../components/layout/EmptyLayout";
// methods
import { completeAuth } from "../../api/auth/completeAuth";
import { getAccessToken } from "../../api/auth/getAccessToken";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/cart/getProducts";
import { useRouter } from "next/router";
import LoginLayout from "../../containers/login/LoginLayout";

const Password = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loadButton, setLoadButton] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    setLoadButton(true);
    data.auth_key = JSON.parse(sessionStorage.getItem("login")).auth_key;
    const result = await completeAuth(data);

    if (!!result) {
      const response = await getAccessToken(result);
      await dispatch(getProducts());
      response === true && router.push("/");
    } else {
      setLoadButton(false);
    }
  };

  return (
    <LoginLayout titleForm="رمز عبور">
      <form onSubmit={handleSubmit(submit)}>
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
            className="absolute top-0 bottom-0 left-1 flex cursor-pointer items-center hover:animate-pulse"
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
            className="form-control mb-3"
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
        <LoginButton loader={loadButton} title="ادامه" />
      </form>
    </LoginLayout>
  );
};
// export
export default Password;

Password.Layout = EmptyLayout;

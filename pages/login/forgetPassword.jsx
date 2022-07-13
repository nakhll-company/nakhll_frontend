import React from "react";
// node libraries

import { useState } from "react";
import { useForm } from "react-hook-form";
// components
import LoginButton from "../../containers/login/loginButton";
import EmptyLayout from "../../components/layout/EmptyLayout";
// methods
import { setPassword } from "../../api/auth/setPassword";
import LoginLayout from "../../containers/login/LoginLayout";

const ForgetPassword = () => {
  const [loadButton, setLoadButton] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    setLoadButton(true);
    delete data.repeatPass;
    data.auth_secret = sessionStorage.getItem("secret_key");
    const response = await setPassword(data);
    response === true && location.replace("/");
    setLoadButton(false);
  };

  return (
    <LoginLayout titleForm="تغییر رمز عبور">
      <form onSubmit={handleSubmit(submit)}>
        <span className="text-muted">رمز عبور شما باید حداقل 8 حرف باشد</span>
        <br />
        <br />
        <label htmlFor="password" className="mb-2" style={{ fontSize: "15px" }}>
          رمز عبور جدید*
        </label>
        <input
          type="password"
          id="password"
          className="form-control mb-2"
          {...register("password", {
            required: "لطفا این گزینه را پرنمایید",
          })}
        />
        {errors.password && (
          <span style={{ display: "block", color: "red", fontSize: "14px" }}>
            {errors.password.message}
          </span>
        )}
        <label htmlFor="repeatPass" className="mb-2">
          تکرار رمز عبور جدید*
        </label>
        <input
          type="password"
          id="repeatPass"
          className="form-control mb-2"
          {...register("repeatPass", {
            required: "لطفا این گزینه را پرنمایید",
          })}
        />
        {errors.repeatPass && (
          <span style={{ display: "block", color: "red", fontSize: "14px" }}>
            {errors.repeatPass.message}
          </span>
        )}

        <LoginButton loader={loadButton} title="تغییر رمز عبور" />
      </form>
    </LoginLayout>
  );
};
// export
export default ForgetPassword;

ForgetPassword.Layout = EmptyLayout;

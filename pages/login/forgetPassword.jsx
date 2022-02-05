// node libraries
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
// methods
import { setPassword } from "../../api/auth/setPassword";
import EmptyLayout from "../../components/layout/EmptyLayout";

const ForgetPassword = () => {

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const submit = async (data) => {
    delete data.repeatPass;
    data.auth_secret = sessionStorage.getItem("secret_key");
    let response = await setPassword(data);
    response === true && location.replace("/");
  };

  return (
    <>
      <Head>
        <title>ورود بازار آنلاین نخل</title>
      </Head>

      <div className="d-flex flex-column justify-content-center col-12 col-md-8 col-lg-5 m-auto bg-white p-5 mt-5 shadow-lg rounded">
        <div className="m-auto">
          <Link href="/">
            <a>
              <Image
                src="/image/base_logo.png"
                alt="logo"
                width="250"
                height="100"
              />
            </a>
          </Link>
        </div>
        <h1
          className="d-flex justify-content-center font-weight-bold mb-5"
          style={{ fontSize: "20px" }}
        >
          تغییر رمز عبور
        </h1>
        <form onSubmit={handleSubmit(submit)}>
          <span className="text-muted">رمز عبور شما باید حداقل 8 حرف باشد</span>
          <br />
          <br />
          <label
            htmlFor="password"
            className="mb-2"
            style={{ fontSize: "15px" }}
          >
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
          <button type="submit" className="btn btn-primary col-12 mt-2">
            تغییر رمز عبور
          </button>
        </form>
      </div>
    </>
  );
};
// export
export default ForgetPassword;

ForgetPassword.Layout = EmptyLayout;

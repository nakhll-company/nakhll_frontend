// node libraries
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
// methods
import { getAccessToken } from "../../api/auth/getAccessToken";
import { completeAuth } from "../../api/auth/completeAuth";
import EmptyLayout from "../../components/layout/EmptyLayout";
const Password = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    data.auth_key = JSON.parse(sessionStorage.getItem("login")).auth_key;
    let result = await completeAuth(data);

    if (result !== false) {
      let response = await getAccessToken(result);
      response === true && location.replace("/");
    }
  };

  return (
    <>
      <Head>
        <title>ورود بازار آنلاین نخل</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <ToastContainer />
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
          ورود / ثبت نام
        </h1>
        <form onSubmit={handleSubmit(submit)}>
          <label
            htmlFor="user_key"
            className="mb-2"
            style={{ fontSize: "15px" }}
          >
            رمز عبور حساب کاربری خود را وارد کنید
          </label>
          <input
            type="password"
            id="user_key"
            className="form-control mb-3"
            {...register("user_key", {
              required: "لطفا این گزینه را پرنمایید",
            })}
          />
          {errors.user_key && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.user_key.message}
            </span>
          )}
          <Link href="/login/code?forgetPass=true">
            <a className="text-info">فراموشی رمز عبور</a>
          </Link>
          <button type="submit" className="btn btn-primary col-12 mt-3">
            ادامه
          </button>
        </form>
      </div>
    </>
  );
};
// export
export default Password;

Password.Layout = EmptyLayout;

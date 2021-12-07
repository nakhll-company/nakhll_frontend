// node libraries
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
// methods
import { sendPhoneNumber } from '../../api/auth/sendPhoneNumber';

const Login = () => {

    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = async (data) => {
        let result = await sendPhoneNumber(data);

        if (result !== false) {
            sessionStorage.setItem("login", JSON.stringify(result));

            if (result.mobile_status === "login_pass") {
                router.push("/login/password/");
            } else {
                router.push("/login/code/");
            }
        }
    }

    return (
        <>
            <Head>
                <title>ورود بازار آنلاین نخل</title>
            </Head>
            <ToastContainer />
            <div className="d-flex flex-column justify-content-center col-12 col-md-8 col-lg-5 m-auto bg-white p-5 mt-5 shadow-lg rounded">
                <div className="m-auto">
                    <Image src="/image/LOGO_500.png" alt="logo" width="70" height="70" />
                </div>
                <h1>ورود / ثبت نام</h1>
                <form onSubmit={handleSubmit(submit)}>
                    <label htmlFor="mobile" className="mb-2">شماره موبایل خود را وارد کنید</label>
                    <input type="number" id="mobile" className="form-control mb-2" {...register("mobile", {
                        required: "لطفا این گزینه را پرنمایید",
                        maxLength: {
                            value: 11,
                            message: 'لطفا شماره موبایل خود را صحیح وارد نمایید'
                        },
                        minLength: {
                            value: 11,
                            message: 'لطفا شماره موبایل خود را صحیح وارد نمایید'
                        },
                        pattern: {
                            value: /^[0-9]*$/,
                            message: 'لطفا شماره موبایل خود را صحیح وارد نمایید'
                        }
                    })} />
                    {errors.mobile && (
                        <span style={{ color: "red", fontSize: "14px" }}>
                            {errors.mobile.message}
                        </span>
                    )}
                    <small className="form-text text-muted">مثال : *******0913</small>
                    <button type="submit" className="btn btn-primary col-12 mt-2">ورود</button>
                </form>
            </div>
        </>
    );
}
// export
export default Login;
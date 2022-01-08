// node libraries
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
// methods
import { editAdvertisment } from "../../../../api/options/editAdvertisment";
// scss
import styles from "../../../../containers/options/scss/yektanet.module.scss";

const Yektanet = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const activeHojreh = useSelector((state) => state.User.activeHojreh);

    const onSubmit = async (data) => {
        let response = await editAdvertisment(activeHojreh, data);
    };

    return (
        <div className={styles.wrapper}>
            <header>
                <h1>یکتانت</h1>
                <Link href="/fp/options/ads">
                    <a>
                        <i className="fas fa-angle-left"></i>
                    </a>
                </Link>
            </header>
            <p className={styles.discrption}>بعد از ورود به پنل یکتانت در قسمت هدر گزینه اسکریپت یکتانت را انتخاب کرده و id اسکریپت را کپی و در محل زیر جای گذاری کنید.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="id" {...register("yektanet_id", { required: true })} />
                {errors.yektanet_id && <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>}
                <button type="submit">ثبت</button>
            </form>
        </div>
    );
}
// export
export default Yektanet;
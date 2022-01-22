// node libraries
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
// components
import Video from "../../containers/description/video";
import ShopLayout from "../../components/shopLayout";
import ProcessUp from "../../containers/description/processUp";
import ProcessDown from "../../containers/description/processDown";
// scss
import styles from "./description.module.scss";

function Description() {


  const userLogin = useSelector((state) => state.User);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Image src="/image/description/header.svg" layout="responsive" height="100" width="300" alt="description header image" />
      </header>
      <Video />
      <div className={styles.process}>
        <h1>فرآیند کار با نخل چیست؟</h1>
        <ProcessUp title="ثبت نام"
          description="کسب و کارها در نخل یک صفحه ی اختصاصی فروش به عنوان حجره را به صورت رایگان ثبت می کنند که فروشگاه اینترنتی آنها است. صاحبان کسب و کارها در نخل علاوه بر آموزش های رشد و توان افزایی، سایر خدمات زیرساختی، مشاوره ای، تبلیغات، بازاریابی و پشتیبانی را دریافت می کنند."
          image="/image/description/login.svg"
          last="first"
        />
        <ProcessDown title="بارگذاری محصول"
          description="تصویر و مشخصات محصولات و خدمات توسط خودشان در حجره های سایت بارگذاری می شود. حجره مانند یک سایت اختصاصی فروش طراحی شده و مدییت آن برعهده ی صاحب کسب و کار است."
          image="/image/description/create_product.svg"
        />
        <ProcessUp title="دریافت سفارش"
          description="خریداران هر کسب و کار می توانند مستقیم به حجره اختصاصی وی رفتهو خرید خود را انجام دهند. امنیت، درگاه پرداخت، نماد تجارت الکترونیک و سایر زیرساخت های فنی بر عهده ی نخل خواهد بود و همچنین تیم تخصصی نخل طی دوره های توان افزایی کسب و کار، فروش اینترنتی را به حجره دار آموزش خواهد داد."
          image="/image/description/reciveOrder.svg"
          last="second"
        />
        <ProcessDown title="ارسال سفارش"
          description="سفارش ها توسط حجره دار بسته بندی و ارسال می گردد، پس از تحویل محصول، تیم پشتیبانی نخل با خریدار تماس گرفته واز طبیق کیفیت محصول با اطلاعات بارگذاری شده در سایت مطمئن می شود. تمامی این فرآیند در داشبورد حجره دار قابل مشاهده و پیگیری است."
          image="/image/description/sendOrder.svg"
        />
        <ProcessUp title="تسویه حساب"
          description="پس از دریافت تایید خریدار توسط تیم پشتیبانی نخل، وجه واریزی با کسر کارمزد نخل، بلافاصله به حساب حجره دار واریز می گردد. حجره داران می توانند با انعقاد قرار داد تعهد ارسال، حداکثر پس از 72 ساعت بعد از اسال کالا، مبلغ وجه واریزی را دریافت کنند."
          image="/image/description/checkout.svg"
          last="last"
        />
      </div>
      <footer>
        <h2>یک شعار تبلیغاتی جذاب در مورد بازار اجتماعی نخل</h2>
        <p>
          یک توضیح که اگر به راهنمایی بیشتر نیاز داشت میتونه <br />
          سوالات متداول و ببینه یا زنگ بزنه پشتیبانی
        </p>
        <div className={styles.wrapper_button}>
          <Link href={Object.keys(userLogin).length > 0 ? "/fp/store/create/" : "/login"}>
            <a className={styles.button_solid}>
              حجره خودتو بساز
            </a>
          </Link>
          <Link href="https://nakhll.com/blog/">
            <a className={styles.button_empty}>
              سوالات متداول
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}
// export
export default Description;

Description.Layout = ShopLayout;

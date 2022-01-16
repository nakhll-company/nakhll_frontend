// node libraries
import Image from "next/image";
// components
import ShopLayout from "../../components/shopLayout";
import Video from "../../containers/description/video";
import ProcessUp from "../../containers/description/processUp";
import ProcessDown from "../../containers/description/processDown";
// scss
import styles from "./description.module.scss";

function Description() {
  return (
    <div className={styles.wrapper}>
      {/* header */}
      <div className={styles.header}>
        <Image src="/image/description/header.svg" layout="responsive" height="100" width="300" alt="description header image" />
      </div>
      {/* video */}
      <Video />
      {/* title */}
      <h1>فرآیند کار با نخل چیست؟</h1>
      {/* process up */}
      <ProcessUp title="ثبت نام"
        description="کسب و کارها در نخل یک صفحه ی اختصاصی فروش به عنوان حجره را به صورت رایگان ثبت می کنند که فروشگاه اینترنتی آنها است. صاحبان کسب و کارها در نخل علاوه بر آموزش های رشد و توان افزایی، سایر خدمات زیرساختی، مشاوره ای، تبلیغات، بازاریابی و پشتیبانی را دریافت می کنند."
        image="/image/description/login.png"
      />
      {/* process down */}
      <ProcessDown title="بارگذاری محصول"
        description="تصویر و مشخصات محصولات و خدمات توسط خودشان در حجره های سایت بارگذاری می شود. حجره مانند یک سایت اختصاصی فروش طراحی شده و مدییت آن برعهده ی صاحب کسب و کار است."
        image="/image/description/create_product.png"
      />
      {/* process up */}
      <ProcessUp title="دریافت سفارش"
        description="خریداران هر کسب و کار می توانند مستقیم به حجره اختصاصی وی رفتهو خرید خود را انجام دهند. امنیت، درگاه پرداخت، نماد تجارت الکترونیک و سایر زیرساخت های فنی بر عهده ی نخل خواهد بود و همچنین تیم تخصصی نخل طی دوره های توان افزایی کسب و کار، فروش اینترنتی را به حجره دار آموزش خواهد داد."
        image="/image/description/reciveOrder.png"
      />
      {/* process down */}
      <ProcessDown />
      {/* process up */}
      <ProcessUp title="تسویه حساب"
        description="پس از دریافت تایید خریدار توسط تیم پشتیبانی نخل، وجه واریزی با کسر کارمزد نخل، بلافاصله به حساب حجره دار واریز می گردد. حجره داران می توانند با انعقاد قرار داد تعهد ارسال، حداکثر پس از 72 ساعت بعد از اسال کالا، مبلغ وجه واریزی را دریافت کنند."
        image="/image/description/checkout.png"
      />
    </div>
  );
}
// export
export default Description;
Description.Layout = ShopLayout;

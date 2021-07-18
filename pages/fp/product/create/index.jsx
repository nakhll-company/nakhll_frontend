import MyLayout from "../../../../components/layout/Layout";
import styles from "../../../../styles/pages/product/create.module.scss";

// component

import CustomInput1 from "../../../../components/custom/customInput1/index";
import CustomInput2 from "../../../../components/custom/customInput2/index";
import CustomInputArea from "../../../../components/custom/customInputArea/index";
import CustomInputWithBtn from "../../../../components/custom/customInputwithBtn/index";

function HomePage() {
  return (
    <>
      <div className={styles.wrapper}>
        {/* نام محصول */}
        <CustomInputWithBtn label="نام محصول" explain="نام محصول را وارد کن" />
        <CustomInput1 label="نام محصول" explain="نام محصول را وارد کن" />
        <CustomInput2
          label="وزن خالص محصول"
          unit="گرم"
          explain="نام محصول را وارد کن"
        />
        <CustomInput2
          label="وزن با بسته بندی"
          unit="گرم"
          explain="نام محصول را وارد کن"
        />
        <CustomInput2
          label="قیمت محصول"
          unit="گرم"
          explain="نام محصول را وارد کن"
        />
        <CustomInput2
          label="قیمت محصول با تخفیف (اختیاری)"
          unit="تومان"
          explain="نام محصول را وارد کن"
        />
        <CustomInputArea
          label="قیمت محصول با تخفیف (اختیاری)"
          placeholder="توضیحات خود را در صورت  تمایل  اینجا وارد کنید"
          explain="نام محصول را وارد کن"
        />
      </div>
    </>
  );
}

export default HomePage;

HomePage.Layout = MyLayout;

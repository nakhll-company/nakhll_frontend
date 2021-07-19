import MyLayout from "../../../../components/layout/Layout";
import styles from "../../../../styles/pages/product/create.module.scss";

// component

import CustomInput1 from "../../../../components/custom/customInput1/index";
import CustomInput2 from "../../../../components/custom/customInput2/index";
import CustomInputArea from "../../../../components/custom/customInputArea/index";
import CustomInputWithBtn from "../../../../components/custom/customInputwithBtn/index";

// formik
import { Formik, Form } from "formik";
import * as Yup from "yup";
function HomePage() {
  const INITIAL_FORM_STATE = {
    firstName: "",
    lastName: "",
    sex: "",
    code: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    citey: "",
    state: "",
    countery: "",
    arrivelDate: "",
    deputureDate: "",
    message: "",
    termsOfService: false,
    codePosti: "",
    telephone: "",
    Me: "",
  };

  const FORM_VALIDAITIOM = Yup.object().shape({
    firstName: Yup.string().required("الزامی"),
    lastName: Yup.string().required("الزامی"),
    email: Yup.string().email("وجود ندارد").required("الزامی"),
    phone: Yup.number()
      .integer()
      .typeError("مقدار  نامجرا است")
      .required("الزامی"),
    addressLine1: Yup.string().required("الزامی"),
    addressLine2: Yup.string(),
    citey: Yup.string().required("الزامی"),
    state: Yup.string().required("الزامی"),
    countery: Yup.string().required("الزامی"),
    arrivelDate: Yup.date().required("الزامی"),
    deputureDate: Yup.date().required("الزامی"),
    message: Yup.string(),
    termsOfService: Yup.boolean()
      .oneOf([true], "Ghabool Kardi???")
      .required("hatman bayad bezani"),
    code: Yup.number()
      .integer()
      .typeError("مقدار نامجزا است")
      .required("الزامی"),
    sex: Yup.string().required("الزامی"),
    codePosti: Yup.number()
      .integer()
      .typeError("مقدار نامجزا است")
      .required("الزامی"),
    telephone: Yup.number()
      .integer()
      .typeError("type errorr dadai")
      .required("الزامی"),
    Me: Yup.string(),
  });
  return (
    <>
      <div className={styles.wrapper}>
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDAITIOM}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
            <Form>



                
            </Form>
        </Formik>
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

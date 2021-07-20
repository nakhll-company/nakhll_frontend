import MyLayout from "../../../../components/layout/Layout";
import styles from "../../../../styles/pages/product/create.module.scss";

// component

import CustomInput1 from "../../../../components/custom/customInput1/index";
import CustomInput2 from "../../../../components/custom/customInput2/index";
import CustomInputArea from "../../../../components/custom/customInputArea/index";
import CustomInputWithBtn from "../../../../components/custom/customInputwithBtn/index";

// formik

// import { Formik, Form, Field } from "formik";
// import * as yup from "yup";
// const INITIAL_FORM_STATE = {
//   first: "",
// };

// let validationSchema = yup.object().shape({
//   name: yup.string().required(),
//   email: yup.string().email("email ra vared Konid").required(),
// });

const HomePage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        {/* <Formik
          initialValues={{
            name: "",
            email: "",
            isMarried: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(data) => {
            console.log("miiii :>> ", data);
          }}
        >
          {({ values, errors, touched }) => (
            <Form>
              <Field type="input" name="name" placeholder="nameeee"></Field>
              {touched.name && errors.name && (
                <div className={styles.error}>{errors.name}</div>
              )}
              <small>{errors.name}</small>
              <Field type="input" name="email" placeholder="Email"></Field>
              <Field name="isMarried" type="checkbox" />
              <label>married</label>
              <button type="submit"> ok</button>
              <div>
                <h1>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                </h1>
              </div>
            </Form>
          )}
        </Formik> */}
      </div>
    </>
  );
};

export default HomePage;

HomePage.Layout = MyLayout;

//  {/* نام محصول */}
//  <CustomInputWithBtn
//  label="نام محصول"
//  explain="نام محصول را وارد کن"
// />
// <CustomInput1 label="نام محصول" explain="نام محصول را وارد کن">
//  <Field type="input" name="firstName"></Field>
// </CustomInput1>
// <CustomInput2
//  label="وزن خالص محصول"
//  unit="گرم"
//  explain="نام محصول را وارد کن"
// />
// <CustomInput2
//  label="وزن با بسته بندی"
//  unit="گرم"
//  explain="نام محصول را وارد کن"
// />
// <CustomInput2
//  label="قیمت محصول"
//  unit="گرم"
//  explain="نام محصول را وارد کن"
// />
// <CustomInput2
//  label="قیمت محصول با تخفیف (اختیاری)"
//  unit="تومان"
//  explain="نام محصول را وارد کن"
// />
// <CustomInputArea
//  label="قیمت محصول با تخفیف (اختیاری)"
//  placeholder="توضیحات خود را در صورت  تمایل  اینجا وارد کنید"
//  explain="نام محصول را وارد کن"
// />

// {/* نام محصول */}
// <CustomInputWithBtn
//   label="نام محصول"
//   explain="نام محصول را وارد کن"
// />
// <CustomInput1 label="نام محصول" explain="نام محصول را وارد کن">
//   <Field type="input" name="firstName"></Field>
// </CustomInput1>
// <CustomInput2
//   label="وزن خالص محصول"
//   unit="گرم"
//   explain="نام محصول را وارد کن"
// />
// <CustomInput2
//   label="وزن با بسته بندی"
//   unit="گرم"
//   explain="نام محصول را وارد کن"
// />
// <CustomInput2
//   label="قیمت محصول"
//   unit="گرم"
//   explain="نام محصول را وارد کن"
// />
// <CustomInput2
//   label="قیمت محصول با تخفیف (اختیاری)"
//   unit="تومان"
//   explain="نام محصول را وارد کن"
// />
// <CustomInputArea
//   label="قیمت محصول با تخفیف (اختیاری)"
//   placeholder="توضیحات خود را در صورت  تمایل  اینجا وارد کنید"
//   explain="نام محصول را وارد کن"
// />

{
  /* <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDAITIOM}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Field name="firstName" placeholder="milad" />
            <button type="submit"> mmmmmmmm</button>
          </Form>
        </Formik>  */
}

{
  /* <Formik
          initialValues={{
            first: "",
          }}
          validationSchema={FORM_VALIDAITIOM}
          onSubmit={(data) => {
            console.log("data :>> ", data);
          }}
        >
          {(value, errors) => (
            <Form>
              <div className={styles.twoCol}>
                <div>
                  <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                    نام محصول
                  </h2>
                  <div className={styles.inputWidRtl}>
                    <Field name="first" type="input" />
                  </div>
                </div>
                <div>
                  <h4 className={styles.explain}>توضیحات</h4>
                  <h4>{errors.first}</h4>
                </div>
              </div>

              <button type="submit"> mmmmmmmm</button>
            </Form>
          )}
        </Formik> */
}

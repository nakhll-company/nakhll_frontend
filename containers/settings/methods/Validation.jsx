import * as yup from "yup";

// Validation for Hojreh
export const VALIDATION_SCHEMA = yup.object().shape({
  Title: yup.string().required("نام حجره الزامی می باشد."),
  slug: yup.string().required("آدرس اینترنتی حجره الزامی می باشد."),
  Description: yup.string(),
  NationalCode: yup
    .number()
    .integer()
    .typeError("فقط عدد مجاز است.")
    // .min(10, "کد ملی ده رقم می باشد.")
    // .max(10, "کد ملی ده رقم می باشد.")
    .required("کد ملی الزامی می باشد."),
  MobileNumber: yup
    .number()
    .typeError("فقط عدد مجاز است.")

    // .min(11, "شماره موبایل 11 رقم می باشد.")
    // .max(11, "شماره موبایل 11 رقم می باشد.")
    .required("شماره موبایل الزامی می باشد"),
  PhoneNumber: yup.number(),

  Address: yup.string().required("آدرس الزامی می باشد."),
  ZipCode: yup
    .number()
    .typeError("فقط عدد مجاز است.")
    .required("کد پستی الزامی می باشد."),
});

// Validation for HesabBanki

export const VALIDATION_HESAB = yup.object().shape({
  iban: yup
    .number()
    .integer("فقط عدد مجاز می باشد.")
    .min(100000000000000000000000, "شماره شبا ۲۴ رقم می باشد.")
    .max(999999999999999999999999, "شماره شبا ۲۴ رقم می باشد.")

    .required("شماره شبا الزامی می باشد.")
    .typeError("فقط عدد مجاز است."),
  owner: yup.string().required("نام صاحب حساب الزامی  می باشد."),
});

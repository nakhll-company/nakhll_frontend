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
        .min(1000000000, "کد ملی ده رقم می باشد.")
        .max(9999999999, "کد ملی ده رقم می باشد.")
        .required("کد ملی الزامی می باشد."),
    PhoneNumber: yup.number()
        .integer()
        .typeError("فقط عدد مجاز است.")
        .min(10000000, "تلفن ثابت 8 رقم می باشد.")
        .max(99999999, "تلفن ثابت 8 رقم می باشد."),
    CityPerCode: yup.number()
        .integer()
        .typeError("فقط عدد مجاز است.")
        .min(10, "پیش شماره سه رقم می باشد.")
        .max(100, "پیش شماره سه رقم می باشد."),
    Address: yup.string().required("آدرس الزامی می باشد."),
    ZipCode: yup
        .number()
        .typeError("فقط عدد مجاز است.")
        .min(1000000000, "کد پستی ده رقم می باشد.")
        .max(9999999999, "کد پستی ده رقم می باشد.")
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
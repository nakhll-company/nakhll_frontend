import { Form, Formik } from "formik";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { callApiUpDataShop, callBankAccount } from "../../../../api/settings";
import InputUseForm from "../../../creat/component/inputUseForm";
import { VALIDATION_HESAB } from "../../methods/Validation";
import FieldCus from "../field";
import SubButton from "../subButton";
import styles from "./bankAccountForm.module.scss";

function BankAccountForm({ apiSetting, activeHojreh, setClicked }) {
  const [IsLoadingHesab, setIsLoadingHesab] = useState(false);
  const [showMessageHesab, setShowMessageHesab] = useState(0);

  // useform
  const {
    setValue,
    getValues,
    clearErrors,
    register,
    setError,

    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  useEffect(() => {
    setValue("iban", apiSetting.bank_account.iban);
    setValue("owner", apiSetting.bank_account.owner);
  }, []);

  const onSubmit = async (data) => {
    const dataForSend = {
      bank_account: {
        iban: data.iban,
        owner: data.owner,
      },
    };

    const response = await callApiUpDataShop(dataForSend, activeHojreh);

    if (response.status == 200) {
      setIsLoadingHesab(false);
      setShowMessageHesab(1);

      setClicked((pre) => !pre);
    } else {
      setIsLoadingHesab(false);
      setShowMessageHesab(2);
    }
  };
  return (
    <>
      {/* price */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputUseForm title="شماره شبا" error={errors.iban} text="IR- ">
          <input
            type="number"
            {...register("iban", {
              required: "شماره شبا الزامی است",
              minLength: {
                value: 23,
                message: "شماره شبا 24 رقم می باشد",
              },
              maxLength: {
                value: 25,
                message: "شماره شبا 24 رقم می باشد",
              },
            })}
          />
        </InputUseForm>
        <InputUseForm title="صاحب حساب" error={errors.owner}>
          <input
            {...register("owner", {
              required: "نام صاحب حساب الزامی است",
            })}
          />
        </InputUseForm>
        {/* ‌Buttons */}
        {IsLoadingHesab && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={styles.loader}>
              <Image
                src="/image/LOGO_500.png"
                alt="Picture of the author"
                width={50}
                height={50}
              />
            </div>
            <h3
              className={styles.nameLoding}
              style={{
                fontSize: "15px",
                color: "hsl(211deg 100% 50%)",
              }}
            >
              {" "}
              در حال بروزرسانی ...
            </h3>
          </div>
        )}
        {showMessageHesab == 1 && (
          <div>
            <h3 style={{ color: "green", marginTop: "15px" }}>
              به روز رسانی با موفقیت انجام شد.
            </h3>
          </div>
        )}
        {showMessageHesab == 2 && (
          <div>
            <h3 style={{ color: "red", marginTop: "15px" }}>
              عملیات به روز رسانی موفقیت آمیز نبود.لطفا باری دیگر اقدام کنید.
            </h3>
          </div>
        )}
        <SubButton title="به روز رسانی" />
      </form>
    </>
  );
}

export default BankAccountForm;

import React from "react";
// node libraries
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

// components

import InputUseForm from "../../../creat/component/inputUseForm";
// methods
import { callApiUpDataShop } from "../../../../api/settings";
// style
import styles from "./bankAccountForm.module.scss";
import AppButton from "../../../../components/AppButton";

function BankAccountForm({ apiSetting, activeHojreh, setClicked }) {
  const [IsLoadingHesab, setIsLoadingHesab] = useState(false);
  const [showMessageHesab, setShowMessageHesab] = useState(0);

  const [loaderBtn, setLoaderBtn] = useState(false);
  // useform
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  useEffect(() => {
    if (apiSetting.bank_account) {
      setValue("iban", apiSetting.bank_account.iban);
      setValue("owner", apiSetting.bank_account.owner);
    }
  }, [apiSetting, setValue]);

  const onSubmit = async (data) => {
    setLoaderBtn(true);
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
      setLoaderBtn(false);

      setClicked((pre) => !pre);
    } else {
      setIsLoadingHesab(false);
      setShowMessageHesab(2);
      setLoaderBtn(false);
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
                value: 24,
                message: "شماره شبا 24 رقم می باشد",
              },
              maxLength: {
                value: 24,
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
        <div style={{ height: "15px" }}></div>
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
        <AppButton title="به روز رسانی" loader={loaderBtn} submit />
      </form>
    </>
  );
}

export default BankAccountForm;

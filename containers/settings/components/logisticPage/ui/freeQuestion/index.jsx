import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputUseForm from "../../../../../creat/component/inputUseForm";
import BtnSetting from "../../components/btnSetting";
import CheckBoxSend from "../../components/checkBoxSend";
import Explain from "../../components/explain";
import HeaderTitle from "../../components/headerTitle";

function FreeQuestion({ pageController, downPage }) {
  console.log(`Ren`, "FreeQuestion");
  const [checkNoFree, setCheckNoFree] = useState(true);
  const [checkYesFree, setCheckYesFree] = useState(false);
  // state for Saved Sending Unit
  // const [SavedSendingUnit, setSavedSendingUnit] = useState([]);
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

  return (
    <>
      <HeaderTitle onClick={() => downPage()} title="تنظیمات ارسال" />

      <Explain
        text="
              آیا میخواید محصولات انتخاب شده به صورت رایگان ارسال شود؟

            "
      />
      <CheckBoxSend
        checked={checkNoFree}
        onChange={() => {
          !checkNoFree
            ? (setCheckNoFree(true), setCheckYesFree(false))
            : (setCheckNoFree(false), setCheckYesFree(true));
        }}
        id="selectNoFree"
        title="خیر"
      />
      <CheckBoxSend
        checked={checkYesFree}
        onChange={() =>
          !checkYesFree
            ? (setCheckYesFree(true), setCheckNoFree(false))
            : (setCheckYesFree(false), setCheckNoFree(true))
        }
        id="selectYesFree"
        title="بله"
      />

      {checkYesFree && (
        <>
          <form onSubmit={handleSubmit(() => {})}>
            <InputUseForm
              title="حداقل سفارش برای رایگان شدن ارسال"
              error={errors.minPrice}
              text="تومان"
            >
              <input
                onWheel={(event) => {
                  event.currentTarget.blur();
                }}
                type="number"
                placeholder="۲۵,۰۰۰"
                {...register("minPrice")}
              />
            </InputUseForm>
          </form>
        </>
      )}

      <BtnSetting
        onClick={() => {
          checkNoFree ? pageController() : pageController(1, 7);
        }}
        title="مرحله بعد"
      />
    </>
  );
}

export default React.memo(FreeQuestion);

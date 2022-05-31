// node libraries
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
// components
import Explain from "../../components/explain";
import CheckBoxSend from "../../components/checkBoxSend";
import AppButton from "../../../../../../components/AppButton";
import InputUseForm from "../../../../../creat/component/inputUseForm";

function FreeQuestion({ pageController, handleSendInfoScope }) {
  
  const [checkNoFree, setCheckNoFree] = useState(true);
  const [checkYesFree, setCheckYesFree] = useState(false);
  const [loaderBtn, setLoaderBtn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  return (
    <>
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
          <form
            onSubmit={handleSubmit((data) =>
              handleSendInfoScope(
                {
                  constraint: {
                    min_cart_price:
                      data.minPrice != "" ? data.minPrice * 10 : 0,
                  },
                  calculation_metric: {
                    payer: "shop",
                  },
                },
                7
              )
            )}
          >
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
            <AppButton title="مرحله بعد" loader={loaderBtn} submit />
          </form>
        </>
      )}

      {!checkYesFree && (
        <>
          <AppButton
            onClick={() => {
              setLoaderBtn(true);
              checkNoFree ? pageController() : pageController(1, 7);
              setLoaderBtn(false);
            }}
            loader={loaderBtn}
            title="مرحله بعد"
          />
        </>
      )}
    </>
  );
}

export default React.memo(FreeQuestion);

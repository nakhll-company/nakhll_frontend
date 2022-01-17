import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputUseForm from "../../../../../creat/component/inputUseForm";
import BtnSetting from "../../components/btnSetting";
import CheckBoxSend from "../../components/checkBoxSend";
import Explain from "../../components/explain";
import HeaderTitle from "../../components/headerTitle";

function FreeQuestion({
  pageController,
  setPayer,
  setMin_cart_price,
  _handle_send_info_scope,
}) {
  console.log(`Ren`, "FreeQuestion");
  const [checkNoFree, setCheckNoFree] = useState(true);
  const [checkYesFree, setCheckYesFree] = useState(false);
  useEffect(() => {
    checkNoFree ? setPayer("cust") : setPayer("shop");
  }, [checkNoFree]);

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
              _handle_send_info_scope(
                {
                  constraint: {
                    min_cart_price: data.minPrice != "" ? data.minPrice : 0,
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
            <BtnSetting type="submit" title="مرحله بعد" />
          </form>
        </>
      )}

      {!checkYesFree && (
        <BtnSetting
          onClick={() => {
            checkNoFree ? pageController() : pageController(1, 7);
          }}
          title="مرحله بعد"
        />
      )}
    </>
  );
}

export default React.memo(FreeQuestion);

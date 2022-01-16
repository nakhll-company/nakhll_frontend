import { useForm } from "react-hook-form";

import CheckboxTreeCities from "../../../../../../components/CheckboxTree/CheckboxTree";
import InputUseForm from "../../../../../creat/component/inputUseForm";
import BtnSetting from "../../components/btnSetting";
import CheckBoxSend from "../../components/checkBoxSend";
import Explain from "../../components/explain";
import HeaderTitle from "../../components/headerTitle";
import Products from "../../components/products";
import SelectIcon from "../selectIcon";
import FreeQuestion from "../../ui/freeQuestion";
import SoRent from "../../ui/soRent";
import { useState } from "react";

function AllEdit({
  checkedCities,
  setCheckedCities,
  checkedSelectAllProducts,
  upPage,
  downPage,
}) {
  const [checkNO, setCheckNO] = useState(true);
  const [checkYes, setCheckYes] = useState(false);
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
      <HeaderTitle onClick={() => upPage(1, 1)} title="تنظیمات ارسال" />
      <div style={{ marginBottom: "35px" }}></div>
      {/* first */}
      <HeaderTitle
        enabel={false}
        onClick={() => downPage()}
        title="انتخاب شهرها"
      />

      {/* <Explain text="توضیحات به حجره دار" /> */}
      <CheckboxTreeCities
        checkedCity={checkedCities}
        setCheckedCity={setCheckedCities}
      />

      {/* two */}
      <div style={{ marginBottom: "35px" }}></div>
      <HeaderTitle
        enabel={false}
        onClick={() => downPage()}
        title="انتخاب محصولات"
      />

      <Explain text="" />

      <CheckBoxSend
        checked={checkedSelectAllProducts}
        onChange={() => setCheckedSelectAllProducts(!checkedSelectAllProducts)}
        id="selectAllProducts"
        title="تمام محصولات"
      />

      {!checkedSelectAllProducts && (
        <Products
          constraintId={constraintId}
          ProductsShop={ProductsShop}
          setProductsShop={setProductsShop}
          changePage={upPage}
          wichIdScope={wichIdScope}
        />
      )}

      {/* three */}
      <>
        <Explain
          text="

           آیا ارسال به صورت پس کرایه (پرداخت هزینه توسط مشتری زمان دریافت محصول) است؟
            "
        />
        <CheckBoxSend
          checked={checkNO}
          onChange={() => {
            !checkNO
              ? (setCheckNO(true), setCheckYes(false))
              : (setCheckNO(false), setCheckYes(true));
          }}
          id="selectNoSoRent"
          title="خیر"
        />
        <CheckBoxSend
          checked={checkYes}
          onChange={() => {
            !checkYes
              ? (setCheckYes(true), setCheckNO(false))
              : (setCheckYes(false), setCheckNO(true));
          }}
          id="selectYesSoRent"
          title="بله"
        />
      </>

      {/* four */}
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
      </>
      {/* five */}

      <Explain text="" />

      <form onSubmit={handleSubmit(() => {})}>
        {/* <InputUseForm title="نام روش" error={errors.name}>
                <input {...register("name")} />
              </InputUseForm> */}

        <InputUseForm
          title="هزینه پست به ازای هر واحد"
          error={errors.price_per_kg}
          text="تومان"
        >
          <input
            onWheel={(event) => {
              event.currentTarget.blur();
            }}
            type="number"
            {...register("price_per_kg")}
          />
        </InputUseForm>

        <InputUseForm
          title="هزینه پست به ازای هر واحد اضافه تر"
          error={errors.price_per_extra_kg}
          text="تومان"
        >
          <input
            onWheel={(event) => {
              event.currentTarget.blur();
            }}
            type="number"
            {...register("price_per_extra_kg")}
          />
        </InputUseForm>
      </form>

      {/* six */}

      <SelectIcon pageController={upPage} />
    </>
  );
}

export default AllEdit;

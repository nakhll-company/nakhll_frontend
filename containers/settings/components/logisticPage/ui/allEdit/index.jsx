import { useForm } from "react-hook-form";
import Image from "next/image";
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
import { useEffect, useState } from "react";
import { ApiRegister } from "../../../../../../services/apiRegister/ApiRegister";
import st from "./allEdit.module.scss";
const icons = [
  { src: "/icons/settings/pishtaz.svg" },
  { src: "/icons/settings/sefareshi.svg" },
  { src: "/icons/settings/free.svg" },
  { src: "/icons/settings/pasKeraieh.svg" },
  { src: "/icons/settings/peik.svg" },
  { src: "/icons/settings/plus.svg" },
];
const CUSTOMER = "cust";
const SHOP = "shop";
const AT_DELIVERY = "at_delivery";
const WHEN_BUYING = "when_buying";
function AllEdit({
  checkedSelectAllProducts,
  upPage,
  downPage,
  constraintId,
  informationForm,
  _handle_send_info_scope,
  _handle_update_data_scope,
  wichIdScope,
}) {
  const [checkNO, setCheckNO] = useState(true);
  const [checkYes, setCheckYes] = useState(false);
  const [checkNoFree, setCheckNoFree] = useState(true);
  const [checkYesFree, setCheckYesFree] = useState(false);
  const [editCheckedCities, setEditCheckedCities] = useState([]);
  const [editProductsShop, setEditProductsShop] = useState([]);
  const [editcheckedSelectAllProducts, setEditcheckedSelectAllProducts] =
    useState(true);
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
  const _handel_get_all_data_scope = async () => {
    let response = await ApiRegister().apiRequest(
      null,
      "get",
      `/api/v1/logistic/shop-logistic-unit-constraint/${constraintId}/`,
      true,
      ""
    );

    if (response.status == 200) {
      setEditProductsShop(response.data.products);
      setEditCheckedCities(response.data.cities);
      if (response.data.products.length > 1) {
        setEditcheckedSelectAllProducts(false);
      }
    }
  };

  const _update_cities = async (data) => {
    let response = await ApiRegister().apiRequest(
      data,
      "PATCH",
      `/api/v1/logistic/shop-logistic-unit-constraint/${constraintId}/`,
      true,
      ""
    );

    if (response.status == 200) {
    } else {
      errorMessage("در بارگذاری شهرها مشکلی پیش آمده.مجدد تلاش کنید.");
    }
  };
  // set data in form
  useEffect(() => {
    if (Object.keys(informationForm).length > 0) {
      setValue("edit_name", informationForm.name);
      setValue(
        "edit_price_per_kg",
        informationForm.calculation_metric.price_per_kilogram
      );
      setValue(
        "edit_price_per_extra_kg",
        informationForm.calculation_metric.price_per_extra_kilogram
      );
      setValue("edit_minPrice", informationForm.constraint.min_cart_price);
      // when send is free
      if (informationForm.calculation_metric.payer == SHOP) {
        setCheckYesFree(true);
        setCheckNoFree(false);
      }

      // when send is at delivery

      if (
        informationForm.calculation_metric.payer == CUSTOMER &&
        informationForm.calculation_metric.pay_time == AT_DELIVERY
      ) {
        setCheckNO(false);
        setCheckYes(true);
      }
    }
  }, [informationForm]);

  useEffect(() => {
    if (constraintId !== "") {
      _handel_get_all_data_scope();
    }
  }, [constraintId]);

  useEffect(() => {
    if (checkYes) {
      setCheckYesFree(false);
      setCheckNoFree(true);
    }
  }, [checkYes]);

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
        checkedCity={editCheckedCities}
        setCheckedCity={setEditCheckedCities}
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
        checked={editcheckedSelectAllProducts}
        onChange={() =>
          setEditcheckedSelectAllProducts(!editcheckedSelectAllProducts)
        }
        id="selectAllProducts"
        title="تمام محصولات"
      />

      {!editcheckedSelectAllProducts && (
        <Products
          _handle_update_data_scope={_handle_update_data_scope}
          move={false}
          ProductsShop={editProductsShop}
          title="ثبت محصولات"
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
      <form
        onSubmit={handleSubmit(
          (data) => {
            _handle_send_info_scope(
              {
                name: data.edit_name ? data.edit_name : "بدون نام",
                calculation_metric: {
                  price_per_kilogram: data.edit_price_per_kg
                    ? data.edit_price_per_kg
                    : 0,
                  price_per_extra_kilogram: data.edit_price_per_extra_kg
                    ? data.edit_price_per_extra_kg
                    : 0,

                  payer: checkYesFree ? SHOP : CUSTOMER,
                  pay_time: checkYes ? AT_DELIVERY : WHEN_BUYING,
                },
                constraint: {
                  min_cart_price:
                    data.edit_minPrice != "" ? data.edit_minPrice : 0,
                },
              },
              8
            );

            _update_cities({
              cities: editCheckedCities.length > 0 ? editCheckedCities : [],
            });
          }
          // _handle_send_info_scope({ name: data.name ? data.name : "بدون نام" })
        )}
      >
        {checkNO && (
          <>
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
                    ? (setCheckNoFree(true),
                      setValue("edit_minPrice", 0),
                      setCheckYesFree(false))
                    : (setCheckNoFree(false), setCheckYesFree(true));
                }}
                id="selectNoFree"
                title="خیر"
              />
              <CheckBoxSend
                checked={checkYesFree}
                onChange={() =>
                  !checkYesFree
                    ? (setCheckYesFree(true),
                      setCheckNoFree(false),
                      setValue("edit_minPrice", 0))
                    : (setCheckYesFree(false), setCheckNoFree(true))
                }
                id="selectYesFree"
                title="بله"
              />

              {checkYesFree && (
                <>
                  <InputUseForm
                    title="حداقل سفارش برای رایگان شدن ارسال"
                    error={errors.edit_minPrice}
                    text="تومان"
                  >
                    <input
                      onWheel={(event) => {
                        event.currentTarget.blur();
                      }}
                      type="number"
                      placeholder="۲۵,۰۰۰"
                      {...register("edit_minPrice")}
                    />
                  </InputUseForm>
                </>
              )}
            </>
            {/* five */}

            <Explain text="" />

            {!checkYesFree && (
              <>
                <InputUseForm
                  title="هزینه پست به ازای هر واحد"
                  error={errors.edit_price_per_kg}
                  text="تومان"
                >
                  <input
                    onWheel={(event) => {
                      event.currentTarget.blur();
                    }}
                    type="number"
                    {...register("edit_price_per_kg")}
                  />
                </InputUseForm>

                <InputUseForm
                  title="هزینه پست به ازای هر واحد اضافه تر"
                  error={errors.edit_price_per_extra_kg}
                  text="تومان"
                >
                  <input
                    onWheel={(event) => {
                      event.currentTarget.blur();
                    }}
                    type="number"
                    {...register("edit_price_per_extra_kg")}
                  />
                </InputUseForm>
              </>
            )}
            {/* six */}
          </>
        )}
        <InputUseForm title="عنوان روش ارسال" error={errors.name}>
          <input {...register("edit_name")} />
        </InputUseForm>

        <div className={st.header}>
          <span>لوگو روش ارسال</span>
        </div>
        {/* icones */}
        <div className={st.warpperIcons}>
          {icons.map((icon, index) => (
            <div key={index} className={st.wrappIcon}>
              <Image
                src={icon.src}
                layout="fixed"
                height={50}
                width={50}
                alt="banner"
              />
            </div>
          ))}
        </div>
        <BtnSetting type="submit" title="ثبت" />
      </form>
    </>
  );
}

export default AllEdit;

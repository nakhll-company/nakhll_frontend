// node libraries
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
// components
import Explain from "../../components/explain";
import Products from "../../components/products";
import BtnSetting from "../../components/btnSetting";
import HeaderTitle from "../../components/headerTitle";
import CheckBoxSend from "../../components/checkBoxSend";
import InputUseForm from "../../../../../creat/component/inputUseForm";
import CheckboxTreeCities from "../../../../../../components/CheckboxTree/CheckboxTree";
// methods
import { ApiRegister } from "../../../../../../services/apiRegister/ApiRegister";
// style
import st from "./allEdit.module.scss";

const SHOP = "shop";
const CUSTOMER = "cust";
const AT_DELIVERY = "at_delivery";
const WHEN_BUYING = "when_buying";
const ICONS = [
  { src: "/icons/settings/pishtaz.svg", id: 1 },
  { src: "/icons/settings/sefareshi.svg", id: 2 },
  { src: "/icons/settings/peik.svg", id: 3 },
  { src: "/icons/settings/pasKeraieh.svg", id: 4 },
  { src: "/icons/settings/free.svg", id: 5 }
];
function AllEdit({
  upPage,
  downPage,
  constraintId,
  informationForm,
  _handle_send_info_scope,
  _handle_update_data_scope
}) {
  const [checkNO, setCheckNO] = useState(true);
  const [checkYes, setCheckYes] = useState(false);
  const [checkNoFree, setCheckNoFree] = useState(true);
  const [checkYesFree, setCheckYesFree] = useState(false);
  const [idselectedIcon, setIdselectedIcon] = useState(1);
  const [editProductsShop, setEditProductsShop] = useState([]);
  const [editCheckedCities, setEditCheckedCities] = useState([]);
  const [editcheckedSelectAllProducts, setEditcheckedSelectAllProducts] = useState(true);
  const { setValue, register, handleSubmit, formState: { errors } } = useForm({ criteriaMode: "all", mode: "all" });

  const _update_cities = async (data) => {
    let response = await ApiRegister().apiRequest(
      data,
      "PATCH",
      `/api/v1/logistic/shop-logistic-unit-constraint/${constraintId}/`,
      true,
      ""
    );
    return response;
  };
  // set data in form
  useEffect(() => {
    if (Object.keys(informationForm).length > 0) {
      setValue("edit_name", informationForm.name);
      setValue(
        "edit_price_per_kg",
        informationForm.calculation_metric.price_per_kilogram / 10
      );
      setValue(
        "edit_price_per_extra_kg",
        informationForm.calculation_metric.price_per_extra_kilogram / 10
      );
      setValue("edit_minPrice", informationForm.constraint.min_cart_price / 10);
      if (informationForm.calculation_metric.payer == SHOP) {
        setCheckYesFree(true);
        setCheckNoFree(false);
      }
      if (
        informationForm.calculation_metric.payer == CUSTOMER &&
        informationForm.calculation_metric.pay_time == AT_DELIVERY
      ) {
        setCheckNO(false);
        setCheckYes(true);
      }
      setIdselectedIcon(informationForm.logo_type);
    }
  }, [informationForm, setValue]);

  useEffect(() => {
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
      }
    };
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
  const [witchUnit, setWitchUnit] = useState("kg");

  const unitConverter = (num) => {
    // aaaaaaaaaa
    if (witchUnit == "gr") {
      return num * 1000;
    }
    if (witchUnit == "kg") {
      return num;
    }
    if (witchUnit == "ton") {
      return num / 1000;
    }
  };

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
      <CheckboxTreeCities
        checkedCity={editCheckedCities}
        setCheckedCity={setEditCheckedCities}
      />
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
                logo_type: idselectedIcon,
                calculation_metric: {
                  price_per_kilogram: data.edit_price_per_kg
                    ? unitConverter(data.edit_price_per_kg) * 10
                    : 0,
                  price_per_extra_kilogram: data.edit_price_per_extra_kg
                    ? unitConverter(data.edit_price_per_extra_kg) * 10
                    : 0,

                  payer: checkYesFree ? SHOP : CUSTOMER,
                  pay_time: checkYes ? AT_DELIVERY : WHEN_BUYING,
                },
                constraint: {
                  min_cart_price:
                    data.edit_minPrice != "" ? data.edit_minPrice * 10 : 0,
                },
              },
              8
            );

            _update_cities({
              cities: editCheckedCities.length > 0 ? editCheckedCities : [],
            });
            if (editcheckedSelectAllProducts) {
              _update_cities({
                products: [],
              });
            }
          }
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
                {/* iiiiiii */}
                <div style={{ position: "relative" }}>
                  <div className={st.wrap_select}>
                    <select
                      id="select-unit"
                      onChange={(a) => {
                        setWitchUnit(a.target.value);
                      }}
                    >
                      <option value="kg">کیلوگرم</option>
                      <option value="gr">گرم</option>
                      <option value="ton">تن</option>
                    </select>
                  </div>
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
                </div>

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
          {ICONS.map((icon, index) => (
            <div
              key={index}
              className={st.wrappIcon}
              style={{
                backgroundColor:
                  icon.id == idselectedIcon
                    ? "#D09600"
                    : "rgba(34, 78, 130, 0.1)",
              }}
              onClick={() => setIdselectedIcon(icon.id)}
            >
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

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import CheckboxTreeCities from "../../../../components/CheckboxTree/CheckboxTree";
import LoadingAllPage from "../../../../components/loadingAllPage";
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
import InputUseForm from "../../../creat/component/inputUseForm";
import TextAreaUseForm from "../../../creat/component/textAreaUseForm";
import { errorMessage } from "../../../utils/message";
import ActiveSendBox from "./components/ActiveSendBox";
import BtnSetting from "./components/btnSetting";
import CheckBoxSend from "./components/checkBoxSend";
import Explain from "./components/explain";
import HeaderTitle from "./components/headerTitle";

import Panel from "./components/panel";
import Products from "./components/products";
import Search from "./components/search";
import SendBox from "./components/sendBox";
import SendBoxCu from "./components/sendBoxCu";
import Tabel from "./components/tabel";

import st from "./logisticPage.module.scss";
import AllEdit from "./ui/allEdit";
import FreeQuestion from "./ui/freeQuestion";
import ResultOperation from "./ui/resultOperation";
import SelectIcon from "./ui/selectIcon";
import SoRent from "./ui/soRent";

function LogisticPage() {
  const activeHojreh = useSelector((state) => state.User.activeHojreh);

  // state for send data
  const [payer, setPayer] = useState("cust");
  const [pay_time, setPay_time] = useState("when_buying");

  const [min_cart_price, setMin_cart_price] = useState(0);

  // state for loader
  const [loader, setLoader] = useState(false);

  // state for handel page
  const [wichPage, setWichPage] = useState(1);

  // for save type post
  const [whichMethod, setWhichMethod] = useState("");

  // for save id scope
  const [wichIdScope, setWichIdScope] = useState("");

  // for Save cities
  const [checkedCities, setCheckedCities] = useState([]);

  // for Save Products
  const [ProductsShop, setProductsShop] = useState([]);

  // for Save constraintItems
  const [constraintId, setConstraintId] = useState("");

  // for save metricId

  const [metricId, setMetricId] = useState("");
  const [informationForm, setInformationForm] = useState({});

  // for checkbox
  const [checkedSelectAllProducts, setCheckedSelectAllProducts] =
    useState(true);

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

  // function for Create Shop Logistic Unit Constraint

  const _handle_add_new_scope = async () => {
    let response = await ApiRegister().apiRequest(
      {
        shop: activeHojreh,
        name: "بدون نام",
      },
      "post",
      `/api/v1/logistic/shop-logistic-unit/`,
      true,
      ""
    );

    if (response.status == 201) {
      setWichIdScope(response.data.id);
      setInformationForm(response.data);
      setConstraintId(response.data.constraint.id);
      setMetricId(response.data.calculation_metric.id);
      upPage();
    }
  };

  const _handle_update_data_scope = async () => {
    setLoader(true);
    let response = await ApiRegister().apiRequest(
      {
        cities: checkedCities.length > 0 ? checkedCities : [],
      },
      "PATCH",
      `/api/v1/logistic/shop-logistic-unit-constraint/${constraintId}/`,
      true,
      ""
    );

    if (response.status == 200) {
      upPage();
      setLoader(false);
    } else {
      setLoader(false);

      errorMessage("باری دیگر تلاش کنید.");
    }
  };

  // functoin for send data for price per kg

  const _handle_send_info_scope = async (data, page = 0) => {
    console.log(`data`, data);
    let response = await ApiRegister().apiRequest(
      data,
      "PATCH",
      `/api/v1/logistic/shop-logistic-unit/${wichIdScope}/`,
      true,
      ""
    );
    if (response.status == 200) {
      upPage(1, page);
    }
  };

  const upPage = (num = 1, page = 0) => {
    page !== 0 ? setWichPage(page) : setWichPage(wichPage + num);
  };
  const downPage = () => {
    setWichPage(wichPage - 1);
  };
  const setIdWithWay = (id) => {
    setWhichMethod(id);
  };

  const _handle_send_all_cities = async () => {
    let response = await ApiRegister().apiRequest(
      {
        products: [],
      },
      "PATCH",
      `/api/v1/logistic/shop-logistic-unit-constraint/${constraintId}/`,
      true,
      ""
    );
    upPage();
  };

  return (
    <>
      {loader && <LoadingAllPage title="در حال به روز رسانی ..." />}

      <div className={st.main}>
        {wichPage == 1 && (
          <>
            <HeaderTitle
              enabel={false}
              onClick={() => downPage()}
              title="تنظیمات لجستیک"
            />

            <Explain text="با استفاده از ثبت واحد ارسال جدید شهرها، محصولات، روش و هزینه ارسال دلخواه را انتخاب کنید." />

            <BtnSetting
              onClick={_handle_add_new_scope}
              title="ثبت واحد ارسال جدید"
            />

            <Panel
              setConstraintId={setConstraintId}
              setMetricId={setMetricId}
              setWichIdScope={setWichIdScope}
              changePage={upPage}
              setInformationForm={setInformationForm}
              setWichPage={setWichPage}
            />
          </>
        )}
        {wichPage == 2 && (
          <>
            <HeaderTitle
              onClick={() => downPage()}
              title="به کدام شهرها ارسال می کنید؟"
            />

            {/* <Explain text="توضیحات به حجره دار" /> */}
            <CheckboxTreeCities
              checkedCity={checkedCities}
              setCheckedCity={setCheckedCities}
            />

            <BtnSetting onClick={_handle_update_data_scope} title="مرحله بعد" />
          </>
        )}
        {wichPage == 3 && (
          <>
            <HeaderTitle
              onClick={() => downPage()}
              title="چه محصولاتی را ارسال می کنید؟"
            />

            <Explain text="" />

            <CheckBoxSend
              checked={checkedSelectAllProducts}
              onChange={() =>
                setCheckedSelectAllProducts(!checkedSelectAllProducts)
              }
              id="selectAllProducts"
              title="تمام محصولات"
            />
            {checkedSelectAllProducts && (
              <BtnSetting onClick={_handle_send_all_cities} title="مرحله بعد" />
            )}

            {!checkedSelectAllProducts && (
              <Products
                constraintId={constraintId}
                ProductsShop={ProductsShop}
                setProductsShop={setProductsShop}
                changePage={upPage}
                wichIdScope={wichIdScope}
              />
            )}
          </>
        )}
        {wichPage == 4 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="تنظیمات ارسال" />

            <SoRent
              _handle_send_info_scope={_handle_send_info_scope}
              pageController={upPage}
              setPay_time={setPay_time}
            />
          </>
        )}

        {wichPage == 5 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="تنظیمات ارسال" />

            <FreeQuestion
              pageController={upPage}
              setPayer={setPayer}
              setMin_cart_price={setMin_cart_price}
              _handle_send_info_scope={_handle_send_info_scope}
            />
          </>
        )}

        {wichPage == 6 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="تنظیمات  ارسال" />

            <Explain text="" />

            <form
              onSubmit={handleSubmit((data) =>
                _handle_send_info_scope({
                  calculation_metric: {
                    price_per_kilogram: data.price_per_kg
                      ? data.price_per_kg
                      : 0,
                    price_per_extra_kilogram: data.price_per_extra_kg
                      ? data.price_per_extra_kg
                      : 0,
                  },
                })
              )}
            >
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

              <BtnSetting type="submit" title="مرحله بعد" />
            </form>
          </>
        )}
        {wichPage == 7 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="تنظیمات  ارسال" />
            <SelectIcon
              pageController={upPage}
              _handle_send_info_scope={_handle_send_info_scope}
            />
          </>
        )}

        {wichPage == 8 && (
          <>
            <ResultOperation pageController={upPage} />
          </>
        )}

        {wichPage == 9 && (
          <>
            <AllEdit
              constraintId={constraintId}
              checkedCities={checkedCities}
              setCheckedCities={setCheckedCities}
              checkedSelectAllProducts={checkedSelectAllProducts}
              upPage={upPage}
              downPage={downPage}
              informationForm={informationForm}
              _handle_send_info_scope={_handle_send_info_scope}
            />
          </>
        )}
      </div>
    </>
  );
}

export default LogisticPage;

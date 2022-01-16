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

  // state for free post

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

  const _handel_get_all_data_scope = async () => {
    let response = await ApiRegister().apiRequest(
      null,
      "get",
      `/api/v1/logistic/shop-logistic-unit-constraint/${constraintId}/`,
      true,
      ""
    );

    if (response.status == 200) {
      setProductsShop(response.data.products);
      setCheckedCities(response.data.cities);
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

  const _handle_send_info_scope = async (data) => {
    let response = await ApiRegister().apiRequest(
      {
        name: data.name ? data.name : "بدون نام",
        description: data.description ? data.description : "",
        calculation_metric: {
          price_per_kilogram: data.price_per_kg ? data.price_per_kg : 0,
          price_per_extra_kilogram: data.price_per_extra_kg
            ? data.price_per_extra_kg
            : 0,
        },
        constraint: {
          min_cart_price: data.minPrice ? data.minPrice : 0,
          max_weight: data.max_weight,
        },
      },
      "PATCH",
      `/api/v1/logistic/shop-logistic-unit/${wichIdScope}/`,
      true,
      ""
    );
    if (response.status == 200) {
      upPage();
    }
  };

  // set data in form
  useEffect(() => {
    if (Object.keys(informationForm).length > 0) {
      setValue("name", informationForm.name);
      setValue(
        "price_per_kg",
        informationForm.calculation_metric.price_per_kilogram
      );
      setValue(
        "price_per_extra_kg",
        informationForm.calculation_metric.price_per_extra_kilogram
      );
      setValue("minPrice", informationForm.constraint.min_cart_price);
      setValue("max_weight", informationForm.constraint.max_weight);
    }
  }, [informationForm]);

  const upPage = (num = 1, page = 0) => {
    page !== 0 ? setWichPage(page) : setWichPage(wichPage + num);
  };
  const downPage = () => {
    setWichPage(wichPage - 1);
  };
  const setIdWithWay = (id) => {
    setWhichMethod(id);
  };

  // for get all data for scope
  useEffect(() => {
    if (constraintId !== "") {
      _handel_get_all_data_scope();
    }
  }, [constraintId]);

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
          <SoRent pageController={upPage} downPage={downPage} />
        )}

        {wichPage == 5 && (
          <FreeQuestion pageController={upPage} downPage={downPage} />
        )}

        {wichPage == 6 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="تنظیمات  ارسال" />

            <Explain text="" />

            <form onSubmit={handleSubmit(_handle_send_info_scope)}>
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

              {/* <InputUseForm
                title="حداقل هزینه سفارش"
                error={errors.minPrice}
                text="تومان"
              >
                <input
                  onWheel={(event) => {
                    event.currentTarget.blur();
                  }}
                  type="number"
                  {...register("minPrice")}
                />
              </InputUseForm> */}
              {/* <InputUseForm
                title="حداکثر وزن مرسوله"
                error={errors.max_weight}
                text="کیلوگرم"
              >
                <input
                  onWheel={(event) => {
                    event.currentTarget.blur();
                  }}
                  type="number"
                  {...register("max_weight")}
                />
              </InputUseForm> */}
              {/* <TextAreaUseForm title="توضیح روش ارسال">
                <textarea
                  rows="7"
                  type="text"
                  placeholder="در روش ارسال من محصولتون در کمترین زمان  بدستتون میرسه.پس با خیال راحت قهوه بنوشید و منتظر  شنیدن صدای زنگ در باشید."
                  {...register("description")}
                />
              </TextAreaUseForm> */}
              {/* type="submit" */}

              <BtnSetting onClick={() => upPage()} title="مرحله بعد" />
            </form>
          </>
        )}
        {wichPage == 7 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="تنظیمات  ارسال" />
            <SelectIcon pageController={upPage} />
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
              checkedCities={checkedCities}
              setCheckedCities={setCheckedCities}
              checkedSelectAllProducts={checkedSelectAllProducts}
              upPage={upPage}
              downPage={downPage}
            />
          </>
        )}
      </div>
    </>
  );
}

export default LogisticPage;

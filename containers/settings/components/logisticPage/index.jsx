import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import CheckboxTreeCities from "../../../../components/CheckboxTree/CheckboxTree";
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
import InputUseForm from "../../../creat/component/inputUseForm";
import ActiveSendBox from "./components/ActiveSendBox";
import BtnSetting from "./components/btnSetting";
import CheckBoxSend from "./components/checkBoxSend";
import Explain from "./components/explain";
import HeaderTitle from "./components/headerTitle";
import Products from "./components/products";
import Search from "./components/search";
import SendBox from "./components/sendBox";
import Tabel from "./components/tabel";

import st from "./logisticPage.module.scss";

function LogisticPage() {
  const activeHojreh = useSelector((state) => state.User.activeHojreh);

  // state for handel page
  const [wichPage, setWichPage] = useState(1);

  // for save type post
  const [whichMethod, setWhichMethod] = useState("");

  // for save id scope
  const [wichIdScope, setWichIdScope] = useState("");

  // State for get card
  const [cardSend, setCardSend] = useState([]);
  // for Save cities
  const [checkedCities, setCheckedCities] = useState([]);

  // for Save Products
  const [ProductsShop, setProductsShop] = useState([]);

  useEffect(() => {
    console.log(`checkedCities`, checkedCities);
  }, [checkedCities]);

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

  useEffect(() => {
    async function fetchData() {
      let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/api/v1/logistic/shop-logistic-unit/?shop=${activeHojreh}`,
        true,
        ""
      );
      if (response.status == 200) {
        setCardSend(response.data);
      }
    }

    fetchData();
  }, []);

  // function for Create Shop Logistic Unit Constraint

  const _handle_add_new_scope = async () => {
    let response = await ApiRegister().apiRequest(
      {
        is_active: false,
        shop_logistic_unit: whichMethod,
      },
      "post",
      `/api/v1/logistic/shop-logistic-unit-constraint/`,
      true,
      ""
    );

    if (response.status == 201) {
      setWichIdScope(response.data.id);
      upPage();
    }
  };

  const _handel_get_all_data_scope = async () => {
    let response = await ApiRegister().apiRequest(
      null,
      "get",
      `/api/v1/logistic/shop-logistic-unit-constraint-parameter/${wichIdScope}/`,
      true,
      ""
    );

    if (response.status == 200) {
      setProductsShop(response.data.products);
    }
  };

  const _handle_update_data_scope = async () => {
    let response = await ApiRegister().apiRequest(
      {
        cities: checkedCities,
      },
      "PATCH",
      `/api/v1/logistic/shop-logistic-unit-constraint-parameter/${wichIdScope}/`,
      true,
      ""
    );

    if (response.status == 200) {
      upPage();
    }
  };

  const upPage = () => {
    setWichPage(wichPage + 1);
  };
  const downPage = () => {
    setWichPage(wichPage - 1);
  };
  const setIdWithWay = (id) => {
    setWhichMethod(id);
  };

  // for get all data for scope
  useEffect(() => {
    if (wichIdScope !== "") {
      _handel_get_all_data_scope();
    }
  }, [wichIdScope]);

  return (
    <>
      <div className={st.main}>
        {wichPage == 1 && (
          <>
            <HeaderTitle
              enabel={false}
              onClick={() => downPage()}
              title="تنظیمات لجستیک"
            />

            <Explain text="توضیحات به حجره دار" />

            <ActiveSendBox title="پست پیشتاز" description="توضیحات سرویس" />
            {cardSend.map((el, index) => (
              <SendBox
                key={index}
                onClick={() => {
                  setIdWithWay(el.id);
                  upPage();
                }}
                title={el.logistic_unit.name}
                description={el.logistic_unit.description}
                isActive={el.is_active}
                id={el.id}
              />
            ))}
          </>
        )}
        {wichPage == 2 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="واحد ارسال" />

            <Explain text="توضیحات به حجره دار" />
            <CheckBoxSend title="استفاده از تنظیمات پیشفرض" />
            <Tabel changePage={upPage} setWichIdScope={setWichIdScope} />
            <BtnSetting
              onClick={_handle_add_new_scope}
              title="ثبت محدوده جدید"
            />
          </>
        )}

        {wichPage == 3 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="ثبت محدوده" />

            <Explain text="توضیحات به حجره دار" />
            <CheckboxTreeCities
              checkedCity={checkedCities}
              setCheckedCity={setCheckedCities}
            />

            <BtnSetting
              onClick={() => _handle_update_data_scope()}
              title="مرحله بعد"
            />
          </>
        )}
        {wichPage == 4 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="ثبت محدوده" />

            <Explain text="توضیحات به حجره دار" />

            <CheckBoxSend title="تمام محصولات" />

            <Products
              ProductsShop={ProductsShop}
              setProductsShop={setProductsShop}
              changePage={upPage}
              wichIdScope={wichIdScope}
            />
          </>
        )}

        {wichPage == 5 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="ثبت محدوده" />

            <Explain text="توضیحات به حجره دار" />

            <form>
              <InputUseForm
                title="هزینه پست به ازای هر کیلوگرم"
                error={errors.pricPerKilo}
              >
                <input
                  {...register("pricPerKilo", {
                    required: "هشدار سقف و پیش فرض هزینه ها",
                  })}
                />
              </InputUseForm>
              <InputUseForm
                title="هزینه پست به ازای هر کیلوگرم اضافه تر"
                error={errors.plusPricPerKilo}
              >
                <input
                  {...register("plusPricPerKilo", {
                    required: "هشدار سقف و پیش فرض هزینه ها",
                  })}
                />
              </InputUseForm>
              <InputUseForm title="حداقل هزینه سفارش" error={errors.minPrice}>
                <input
                  {...register("minPrice", {
                    required: "هشدار",
                  })}
                />
              </InputUseForm>
            </form>

            <BtnSetting title="ثبت" />
          </>
        )}
      </div>
    </>
  );
}

export default LogisticPage;

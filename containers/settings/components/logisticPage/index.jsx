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

  const [isShow, setIsShow] = useState(0);

  // State for get card
  const [cardSend, setCardSend] = useState([]);
  // for Save cities
  const [checkedCities, setCheckedCities] = useState([]);
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
        `/logistic/api/logistic-unit/?shop=${activeHojreh}`,
        true,
        ""
      );
      if (response.status == 200) {
        setCardSend(response.data);
      }
      console.log(`response`, response);
    }

    fetchData();
  }, []);

  return (
    <>
      <button onClick={() => setIsShow(() => isShow + 1)}>.</button>
      <div className={st.main}>
        {true && (
          <>
            <HeaderTitle title="تنظیمات لجستیک" />

            <Explain text="توضیحات به حجره دار" />

            <ActiveSendBox title="پست پیشتاز" description="توضیحات سرویس" />
            {cardSend.map((el, index) => (
              <SendBox
                key={index}
                title={el.logistic_unit.name}
                description={el.logistic_unit.description}
                isActive={el.is_active}
              />
            ))}
          </>
        )}
        {false && (
          <>
            <HeaderTitle title="واحد ارسال" />

            <Explain text="توضیحات به حجره دار" />
            <CheckBoxSend title="استفاده از تنظیمات پیشفرض" />
            <Tabel />
            <BtnSetting title="ثبت محدوده جدید" />
          </>
        )}

        {false && (
          <>
            <HeaderTitle title="ثبت محدوده" />

            <Explain text="توضیحات به حجره دار" />
            <CheckboxTreeCities
              checkedCity={checkedCities}
              setCheckedCity={setCheckedCities}
            />

            <BtnSetting title="مرحله بعد" />
          </>
        )}
        {false && (
          <>
            <HeaderTitle title="ثبت محدوده" />

            <Explain text="توضیحات به حجره دار" />

            <CheckBoxSend title="تمام محصولات" />

            <Products />
            <BtnSetting title="مرحله بعد" />
          </>
        )}

        {true && (
          <>
            <HeaderTitle title="ثبت محدوده" />

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

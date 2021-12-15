import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CheckboxTreeCities from "../../../../components/CheckboxTree/CheckboxTree";
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
import ActiveSendBox from "./components/ActiveSendBox ";
import BtnSetting from "./components/btnSetting";
import CheckBoxSend from "./components/checkBoxSend";
import Explain from "./components/explain";
import HeaderTitle from "./components/headerTitle";
import SendBox from "./components/sendBox";
import Tabel from "./components/tabel";

import st from "./logisticPage.module.scss";

function LogisticPage() {
  const [isShow, setIsShow] = useState(0);
  // for Save cities
  const [checkedCities, setCheckedCities] = useState([]);
  const [products, setProducts] = useState([]);
  const activeHojreh = useSelector((state) => state.User.activeHojreh);

  useEffect(async () => {
    let dataUrl = `/api/v1/shop/${activeHojreh}/products/`;
    let response = await ApiRegister().apiRequest(
      null,
      "get",
      dataUrl,
      true,
      null
    );
    if (response.status == 200) {
      setProducts(response.data);
      console.log(`response.data`, response.data);
    }
  }, []);

  return (
    <>
      <button onClick={() => setIsShow(() => isShow + 1)}>.</button>
      <div className={st.main}>
        {false && (
          <>
            <HeaderTitle title="تنظیمات لجستیک" />

            <Explain text="توضیحات به حجره دار" />

            <ActiveSendBox title="پست پیشتاز" description="توضیحات سرویس" />
            <SendBox title="پست سفارشی " description="توضیحات سرویس" />
            <SendBox title="ارسال رایگان" description="توضیحات سرویس" />
            <SendBox title="ارسال پس کرایه" description="توضیحات سرویس" />
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

            <BtnSetting title="ثبت محدوده جدید" />
          </>
        )}
        {true && (
          <>
            <HeaderTitle title="ثبت محدوده" />

            <Explain text="توضیحات به حجره دار" />
            <CheckBoxSend title="تمام محصولات" />

            <BtnSetting title="ثبت محدوده جدید" />
          </>
        )}
      </div>
    </>
  );
}

export default LogisticPage;

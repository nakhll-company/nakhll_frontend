import { useState } from "react";

import CheckboxTreeCities from "../../../../components/CheckboxTree/CheckboxTree";
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
  return (
    <>
      <button onClick={() => setIsShow(() => isShow + 1)}>.</button>
      {false && (
        <div className={st.main}>
          <HeaderTitle title="تنظیمات لجستیک" />

          <Explain text="توضیحات به حجره دار" />

          <ActiveSendBox title="پست پیشتاز" description="توضیحات سرویس" />
          <SendBox title="پست سفارشی " description="توضیحات سرویس" />
          <SendBox title="ارسال رایگان" description="توضیحات سرویس" />
          <SendBox title="ارسال پس کرایه" description="توضیحات سرویس" />
        </div>
      )}
      {false && (
        <div className={st.main}>
          <HeaderTitle title="واحد ارسال" />

          <Explain text="توضیحات به حجره دار" />
          <CheckBoxSend title="استفاده از تنظیمات پیشفرض" />
          <Tabel />
          <BtnSetting title="ثبت محدوده جدید" />
        </div>
      )}

      {true && (
        <div className={st.main}>
          <HeaderTitle title="ثبت محدوده" />

          <Explain text="توضیحات به حجره دار" />
          <CheckboxTreeCities
            checkedCity={checkedCities}
            setCheckedCity={setCheckedCities}
          />

          <BtnSetting title="ثبت محدوده جدید" />
        </div>
      )}
    </>
  );
}

export default LogisticPage;

import Explain from "./components/explain";
import HeaderTitle from "./components/headerTitle";
import SendBox from "./components/sendBox";

import st from "./logisticPage.module.scss";

function LogisticPage() {
  return (
    <>
      <div className={st.main}>
        <HeaderTitle title="تنظیمات لجستیک" />

        <Explain text="توضیحات به حجره دار" />

        <SendBox title="پست معمولی" description="توضیحات سرویس" />
        <SendBox title="پست پیشتاز" description="توضیحات سرویس" />
        <SendBox title="پست سفارشی " description="توضیحات سرویس" />
        <SendBox title="ارسال رایگان" description="توضیحات سرویس" />
        <SendBox title="ارسال پس کرایه" description="توضیحات سرویس" />
      </div>
    </>
  );
}

export default LogisticPage;

import Explain from "./components/explain";
import HeaderTitle from "./components/headerTitle";

import st from "./logisticPage.module.scss";

function LogisticPage() {
  return (
    <>
      <div className={st.main}>
        <HeaderTitle title="تنظیمات لجستیک" />

        <Explain />

        <div className="">روش های ارسال</div>
      </div>
    </>
  );
}

export default LogisticPage;

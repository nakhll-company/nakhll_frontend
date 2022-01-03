import EmptyLayout from "../../components/layout/EmptyLayout";
import st from "./aboutMe.module.scss";
function Test() {
  return (
    <>
      <div className={st.wrapper}>
        <span className={st.title}>درباره ما</span>
        <span className={st.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        </span>
      </div>
    </>
  );
}

export default Test;

Test.Layout = EmptyLayout;

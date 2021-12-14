import st from "./btnSetting.module.scss";
function BtnSetting({ title }) {
  return (
    <>
      <div className={st.wrapBtn}>
        <button className={st.btn}>{title}</button>
      </div>
    </>
  );
}

export default BtnSetting;

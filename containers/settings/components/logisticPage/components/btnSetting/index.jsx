import st from "./btnSetting.module.scss";
function BtnSetting({ title, onClick }) {
  return (
    <>
      <div className={st.wrapBtn}>
        <button className={st.btn} onClick={onClick}>
          {title}
        </button>
      </div>
    </>
  );
}

export default BtnSetting;

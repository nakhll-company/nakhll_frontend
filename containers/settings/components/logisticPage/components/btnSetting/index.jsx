import st from "./btnSetting.module.scss";
function BtnSetting({ title, onClick, type = "button" }) {
  return (
    <>
      <div className={st.wrapBtn}>
        <button type={type} className={st.btn} onClick={onClick}>
          {title}
        </button>
      </div>
    </>
  );
}

export default BtnSetting;

import st from "./sendBox.module.scss";
import SwitchButtonSetting from "./switchButton";

function SendBox({ title, description, isActive, id, onClick }) {
  return (
    <>
      <div className={st.box}>
        {/* icon */}
        <div onClick={onClick} className={st.rigth}>
          <div className={st.icon}></div>
          {/* text */}
          <div className={st.text}>
            <div className={st.header}>{title}</div>
            <div className={st.sub_text}> {description}</div>
          </div>
        </div>
        {/* checkBox */}
        <div className={st.radio_btn}>
          <SwitchButtonSetting id={id} isActive={isActive} />
        </div>
      </div>
    </>
  );
}

export default SendBox;

import st from "./sendBox.module.scss";

function ActiveSendBox({ title, description }) {
  return (
    <>
      <div className={st.box}>
        {/* icon */}
        <div className={st.rigth}>
          <div className={st.icon}></div>
          {/* text */}
          <div className={st.text}>
            <div className={st.header}>{title}</div>
            <div className={st.sub_text}> {description}</div>
          </div>
        </div>
        {/* checkBox */}
      </div>
    </>
  );
}

export default ActiveSendBox;

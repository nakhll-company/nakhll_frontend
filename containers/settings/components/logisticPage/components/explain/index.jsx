import st from "./explain.module.scss";

function Explain({ text }) {
  return (
    <>
      <div className={st.content}>{text}</div>
    </>
  );
}

export default Explain;

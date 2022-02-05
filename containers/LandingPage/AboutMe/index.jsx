import st from "./aboutMe.module.scss";
function AboutMe({ text }) {
  return (
    <>
      <div className={`${st.wrapper}  container`}>
        <span className={st.title}>درباره ما</span>
        <span className={st.content}>{text}</span>
      </div>
    </>
  );
}

export default AboutMe;

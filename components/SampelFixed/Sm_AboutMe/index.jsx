import st from "./aboutMe.module.scss";
function AboutMeFix() {
  return (
    <>
      <div className={st.wrapper}>
        <span className={st.title}>درباره ما</span>
        <span className={st.content}>
          درباره حجره خود بنویسید تا دیگران از داستان کسب و کار شما باخبر بشوند
        </span>
      </div>
    </>
  );
}

export default AboutMeFix;

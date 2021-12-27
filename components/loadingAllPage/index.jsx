import st from "./loadingAllPage.module.scss";

function LoadingAllPage({ title }) {
  return (
    <>
      <div className={st.create_product}>
        <div className={st.create_messege}>{title}</div>
      </div>
    </>
  );
}

export default LoadingAllPage;

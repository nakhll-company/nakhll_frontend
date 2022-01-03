import st from "./vipProducts.module.scss";
import Image from "next/image";
function VipProducts() {
  return (
    <>
      <div className={st.wrapper}>
        <div className={st.card}>
          <div className={st.imgBx}>
            <Image
              className={st.image}
              layout="fixed"
              width={260}
              height={260}
              alt="product"
              src="/image/pic1.jpg"
            />
          </div>
          <div className={st.content}>
            <h2>card one</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className={st.card}>
          <div className={st.imgBx}>
            <Image
              className={st.image}
              layout="fixed"
              width={260}
              height={260}
              alt="product"
              src="/image/pic1.jpg"
            />
          </div>
          <div className={st.content}>
            <h2>card one</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className={st.card}>
          <div className={st.imgBx}>
            <Image
              className={st.image}
              layout="fixed"
              width={260}
              height={260}
              alt="product"
              src="/image/pic1.jpg"
            />
          </div>
          <div className={st.content}>
            <h2>card one</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VipProducts;

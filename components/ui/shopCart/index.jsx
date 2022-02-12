// node libraries
import Link from "next/link";
import Image from "next/image";
// style
import st from "./shopCart.module.scss";

function ShopCart({ dataCart }) {
  return (
    <div className={st.a_box}>
      <div className={st.img_container}>
        <div className={st.img_inner}>
          <div className={st.inner_skew}>
            <Image src={dataCart.products[0].Image_medium_url} alt="" layout="fill" />
          </div>
        </div>
      </div>
      <div className={st.icon_container}>
        <Image
          layout="fixed"
          height={50}
          width={50}
          src="/image/mahsol.svg"
          alt="camp"
        />
      </div>
      <div className={st.text_container}>
        <h3>نوبت مامانه</h3>
        <div>
          <Link href={`/shop/${dataCart.Slug}`}>
            <a>حجره {dataCart.Title}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShopCart;

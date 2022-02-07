// node libraries
import Link from "next/link";
import Image from "next/image";
// style
import st from "./vipProducts.module.scss";

function VipProducts({ dataLinerProducts = [] }) {

  return (
    <>
      <div className={st.wrapper}>
        {dataLinerProducts.map((item, index) => (
          <div key={index} className={st.card}>
            <Link href={`/shop/${item.FK_Shop.slug}/product/${item.Slug}/`}>
              <a>
                <div className={st.imgBx}>
                  <Image
                    className={st.image}
                    layout="fixed"
                    width={260}
                    height={260}
                    alt="product"
                    src={item.Image_medium_url}
                  />
                </div>
                <div className={st.content}>
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {item.Title}
                  </span>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default VipProducts;

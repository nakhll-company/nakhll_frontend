import st from "./rotationProduct.module.scss";
import Image from "next/image";
import { useState } from "react";
function RotationProducts({ data }) {
  return (
    <>
      <div className={st.wrapper}>
        <div className={st.box}>
          {data &&
            data.map((product, index) => (
              <span key={index} style={{ "--i": `${index}` }}>
                <Image
                  className={st.image}
                  layout="fixed"
                  width={200}
                  height={200}
                  alt="product"
                  src={product.Image_medium_url}
                />
              </span>
            ))}
        </div>
      </div>
    </>
  );
}

export default RotationProducts;

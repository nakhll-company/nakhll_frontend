// node libraries
import Image from "next/image";
// style
import st from "./rotationProduct.module.scss";

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

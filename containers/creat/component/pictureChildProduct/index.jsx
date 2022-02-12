// node libraris
import Image from "next/image";
// components
import InputPictureCreat from "../InputPicture";
// style
import styles from "./pictureChildProduct.module.scss";

function PictureChildProduct({ setImageSrc, image }) {
  const handel_delet_pic = () => {
    setImageSrc(null);
  };

  return (
    <>
      <div className={styles.child_picture}>
        {image ? (
          <Image src={image} layout="responsive" height={100} width={100} alt="" />
        ) : (
          <Image
            src="/image/sample/pic.jpg"
            layout="responsive"
            height={100}
            width={100}
            alt=""
          />
        )}
        <div className={styles.input_picture}>
          <InputPictureCreat
            setImageSrc={setImageSrc}
            image={image}
            ratio={1}
            witchIndex={0}
          />
        </div>

        <div className={styles.deleteBtn}>
          <div className={styles.wrapBtn} onClick={() => handel_delet_pic()}>
            <i className="fas fa-trash"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default PictureChildProduct;

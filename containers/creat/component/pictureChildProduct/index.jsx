import InputPictureCreat from "../InputPicture";
import Image from "next/image";
import styles from "./pictureChildProduct.module.scss";

function PictureChildProduct({ setImageSrc, image, id }) {
  const handel_delet_pic = () => {
    setImageSrc(null);
  };

  return (
    <>
      <div className={styles.child_picture}>
        {image ? (
          <Image src={image} layout="responsive" height={100} width={100} />
        ) : (
          <Image
            src="/image/sample/pic.jpg"
            layout="responsive"
            height={100}
            width={100}
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
// node libraries
import Image from "next/image";
// components
import useViewport from "../../components/viewPort";
// scss
import styles from "./scss/processUp.module.scss";

const ProcessUp = ({ title, description, image, last }) => {
  const breakpoint = 1000;
  const { width } = useViewport();
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_login}>
        <div style={{ flexShrink: "0" }}>
          <Image src={image} width="192" height="195" alt="login logo" />
        </div>
        <p>
          <b>{title}</b> <br />
          {description}
        </p>
      </div>
      <div className={styles.process_vector}>
        {width > breakpoint ? (
          last !== "last" && (
            <Image
              src="/image/description/process_up.svg"
              alt=""
              width={842}
              height={172}
            />
          )
        ) : (
          <Image
            src="/image/description/process_left.svg"
            width="340"
            height="340px"
            alt=""
            className={styles.mobile_image_process}
          />
        )}
      </div>
    </div>
  );
};
// exprt
export default ProcessUp;

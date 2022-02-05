// node libraries
import Image from "next/image";
// components
import useViewport from "../../components/viewPort";
// scss
import styles from "./scss/processDown.module.scss";

const ProcessDown = ({ title, description, image }) => {
    const breakpoint = 1000;
    const { width } = useViewport();
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_login}>
                <p>
                    <b>{title}</b> <br />
                    {description}
                </p>
                <div style={{ flexShrink: "0" }}>
                    <Image src={image} width="192" height="195" alt="login logo" />
                </div>
            </div>
            <div className={styles.process_vector}>
                {width > breakpoint ?
                    <Image src="/image/description/process_down.svg" alt="" width={842} height={172} />
                    :
                    <Image src="/image/description/process_right.svg" width="340" height="340px" alt="" className={styles.mobile_image_process} />
                }
            </div>
        </div>
    )
}
// export
export default ProcessDown;
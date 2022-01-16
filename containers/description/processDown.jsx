// node libraries
import Image from "next/image";
// scss
import styles from "./scss/processDown.module.scss";

const ProcessDown = ({ title, description, image }) => {
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
                <Image src="/image/description/process_down.png" alt="" width={842} height={172} />
            </div>
        </div>
    )
}
// export
export default ProcessDown;
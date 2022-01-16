// node libraries
import Image from "next/image";
// scss
import styles from "./scss/processUp.module.scss";

const ProcessUp = ({ title, description, image }) => {
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
                <Image src="/image/description/process_up.png" alt="" width={842} height={172} />
            </div>
        </div>
    );
}
// exprt
export default ProcessUp;
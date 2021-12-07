import Image from "next/image";
import styles from "./Process.module.scss";
function Process() {
  return (
    <>
      {/* styles.desktop */}
      <div className={styles.desktop}>
        <Image
          src="/image/description/02.png"
          layout="responsive"
          width={4}
          height={1.1}
        />
      </div>

      <div className={styles.mobile}>
        <Image
          src="/image/description/01.png"
          layout="responsive"
          width={1}
          height={1.8}
        />
      </div>
    </>
  );
}

export default Process;

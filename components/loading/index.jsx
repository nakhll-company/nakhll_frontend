// node librairies
import Image from "next/image";
// style
import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <h1>لطفا منتظر بمانید.</h1>
      <Image src="/loading.svg" width="45" height="45" alt="loading" />
    </div>
  );
}

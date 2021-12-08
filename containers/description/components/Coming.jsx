import styles from "./Coming.module.scss";
import { useRouter } from "next/router";
 
function Coming() {
  const router = useRouter();
  return (
    <>
      <div id="content" className={styles.patern_coming}>
        <div className={styles.box_coming}>
          <div className={styles.inner_box_coming}>
            <h4 className={styles.liner_top_box}></h4>

            <h2 className={styles.text_in_box}>به عصر جدید تجارت وارد شوید</h2>
            <button
              onClick={() => router.replace("/login")}
              value="button"
              className={styles.btn_in_box}
            >
              ورود
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coming;

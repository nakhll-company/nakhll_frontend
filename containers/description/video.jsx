// node libraries
import Link from "next/link";
import Script from "next/script";
import { useSelector } from "react-redux";
// scss
import styles from "./scss/video.module.scss";

function Video() {

  const userLogin = useSelector((state) => state.User.userInfo);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_text}>
        <h1>بازار اجتماعی نخل</h1>
        <p>یک بستر آنلاین برای <b> رشد کسب و کارهای کوچک </b> </p>
        <p>جهت <b> فروش اینترنتی </b> است.</p>
        <Link href={Object.keys(userLogin).length > 0 ? "/fp/store/create/" : "/login"}>
          <a className={styles.button}>
            حجره خودتو بساز
          </a>
        </Link>
      </div>
      <div className={styles.video}>
        <div id="70341046536" className={styles.video}>
          <Script type="text/JavaScript" src="https://www.aparat.com/embed/B6lLS?data[rnddiv]=70341046536&data[responsive]=yes&recom=none"></Script>
        </div>
      </div>
    </div>
  );
}
// export
export default Video;

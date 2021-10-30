import React, { useEffect, useRef } from "react";
import styles from "./game.module.scss";
import Link from "next/link";
function index(props) {
  let btn = useRef(null);
  let btn2 = useRef(null);
  return (
    <>
      <div className={styles.onePage}>
        دنیای کسب و کار مثل یه بازی می‌مونه، باید اهل رقابت و رفاقت باشی و
        بپذیری که این بازی، باخت هم داره! حالا در کنار رقابت سالمی که صاحبان کسب
        و کار با همدیگه دارن، دلال‌هایی هم هستن که به دور از اخلاق و انسانیت،
        فقط به فکر سود خودشونن و براشون هیچ مهم نیست که با کارشون چه بلایی سر
        بازار و کسب و کارها میارن. 
      </div>
      <div className={styles.twoPage}>
      بازی توی بازار آنلاین نخل اما دست دلال‌ها رو
        کوتاه می‌کنه و باخت نداره. بازی‌ای که نه طاقت‌فرساس، نه هزینه‌ای داره و
        نه کسی متضرر میشه. اینجا تو وارد رفاقت میشی که با دوستای جدیدت بتونی
        شبکه‌ی بزرگتری از جامعه در سراسر کشور برای خودت بسازی و کسب و کارت رو با
        این جامعه رشد بدی. «اینجوری همه‌جای ایران، سرای تو میشه...»

      </div>
      <div className={styles.threePage}>
        <div className={styles.wrap}>
          <Link href="/game/four">
            <a>
              <div ref={(el) => (btn = el)} className={styles.btnYes}>
                <button>بله</button>
              </div>
            </a>
          </Link>
          <Link href="/game/No">
            <a>
              <div ref={(el) => (btn2 = el)} className={styles.btnNo}>
                <button>خیر</button>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default index;

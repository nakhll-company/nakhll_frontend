import React, { useEffect, useRef } from "react";
import styles from "./game.module.scss";
import Link from "next/link";
import Image from 'next/image';
import { gsap } from "gsap";
function index(props) {

  let tl = new gsap.timeline();
  let onePart = useRef(null);
  let sp = useRef(null);
  let threePage = useRef(null);

  useEffect(() => {
    tl.from(onePart, {
      opacity: 0,
      duration: 2,
    })
      .from(sp, { y: 600, duration: 25 })
      .from(threePage, {
        opacity: 0,
        duration: 2,
        scale: 0
      })
      ;
  }, []);
  return (
    <>
      <div className={styles.wrapAll}>
        <div ref={(el) => (onePart = el)} className={styles.onePage}>
          <Image src="/image/game/03-1.jpg" layout="fill"
            objectFit="cover"
            quality={10}
          />
          <div style={{ height: "300px" }}>
            <span ref={(el) => (sp = el)}>
              <b style={{ fontSize: "18px" }}>درباره بازی:</b><br />
              دنیای کسب و کار مثل یه بازی می‌مونه،<br />
              باید اهل رقابت و رفاقت باشی<br />
              بپذیری که این بازی، باخت هم داره!<br />
              حالا در کنار رقابت سالمی که صاحبان کسب و کار با همدیگه دارن<br />
              دلال‌هایی هم هستن که به دور از اخلاق و انسانیت، فقط به فکر سود
              خودشونن و براشون هیچ مهم نیست که با کارشون چه بلایی سر بازار و کسب و
              کارها میار<br />
              بازی توی بازار آنلاین نخل اما دست دلال‌ها رو کوتاه می‌کنه و باخت
              نداره.{" "}<br />
              بازی‌ای که نه طاقت‌فرساس، نه هزینه‌ای داره و نه کسی متضرر میشه.{" "}<br />
              اینجا تو وارد رفاقت میشی که با دوستای جدیدت بتونی شبکه‌ی بزرگتری
              از جامعه در سراسر کشور برای خودت بسازی و کسب و کارت رو با این
              جامعه رشد بدی.<br />
            </span>
          </div>
          <br />.
        </div>
        <div ref={(el) => (threePage = el)} className={styles.threePage}>
          <Image src="/image/game/03-3.jpg" layout="fill"
            objectFit="cover"
            quality={10}
          />
          <div className={styles.ques}>
            <i>«اینجوری همه‌جای ایران، سرای تو میشه...»</i>
          </div>
          <div className={styles.ques}>
            <span> بازی رو شروع کنیم؟</span>
          </div>
          <div className={styles.wrap}>
            <Link href="/game/four">
              <a>
                <div className={styles.btnYes}>
                  <button>بله</button>
                </div>
              </a>
            </Link>
            <Link href="/game/No">
              <a>
                <div className={styles.btnNo}>
                  <button>خیر</button>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;

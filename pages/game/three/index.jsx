import React, { useEffect, useRef } from "react";
import styles from "./game.module.scss";
import Link from "next/link";
import { gsap, Power3 } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
function index(props) {
  let tl = new gsap.timeline();
  let onePart = useRef(null);
  let sp = useRef(null);
  let sp2 = useRef(null);
  let sp3 = useRef(null);
  let sp4 = useRef(null);
  let sp5 = useRef(null);
  let sp6 = useRef(null);
  let sp7 = useRef(null);
  let sp8 = useRef(null);
  let sp9 = useRef(null);
  useEffect(() => {
    tl.from(onePart, {
      opacity: 0,
      duration: 2,
    })
      .from(sp, { x: -400, duration: 0.5 })
      .from(sp2, { x: -400, duration: 0.5 })
      .from(sp3, { x: -400, duration: 0.5 })
      .from(sp4, { x: -400, duration: 1 })
      .from(sp5, { y: 400, duration: 2 })
      .from(sp6, { y: 400, duration: 2 })
      .from(sp7, { y: 400, duration: 2 })
      .from(sp8, { y: 400, duration: 2 })
      .from(sp9, { y: 400, duration: 2 });
  }, []);
  return (
    <>
      <div className={styles.wrapAll}>
        <div ref={(el) => (onePart = el)} className={styles.onePage}>
          <span ref={(el) => (sp = el)}>
            دنیای کسب و کار مثل یه بازی می‌مونه،
          </span>
          <br />
          <span ref={(el) => (sp2 = el)}>باید اهل رقابت و رفاقت باشی</span>{" "}
          <br />
          <span ref={(el) => (sp3 = el)}>
            بپذیری که این بازی، باخت هم داره!
          </span>{" "}
          <br />
          <span ref={(el) => (sp4 = el)}>
            حالا در کنار رقابت سالمی که صاحبان کسب و کار با همدیگه دارن
          </span>{" "}
          <br />
          <span ref={(el) => (sp5 = el)}>
            دلال‌هایی هم هستن که به دور از اخلاق و انسانیت، فقط به فکر سود
            خودشونن و براشون هیچ مهم نیست که با کارشون چه بلایی سر بازار و کسب و
            کارها میار
          </span>{" "}
          <br />.
        </div>
        <div className={styles.twoPage}>
          <span ref={(el) => (sp6 = el)}>
            بازی توی بازار آنلاین نخل اما دست دلال‌ها رو کوتاه می‌کنه و باخت
            نداره.{" "}
          </span>
          <span ref={(el) => (sp7 = el)}>
            {" "}
            بازی‌ای که نه طاقت‌فرساس، نه هزینه‌ای داره و نه کسی متضرر میشه.{" "}
          </span>
          <div className={styles.bot}>
            <span ref={(el) => (sp8 = el)}>
              {" "}
              اینجا تو وارد رفاقت میشی که با دوستای جدیدت بتونی شبکه‌ی بزرگتری
              از جامعه در سراسر کشور برای خودت بسازی و کسب و کارت رو با این
              جامعه رشد بدی.
            </span>
            <span ref={(el) => (sp9 = el)}>
              «اینجوری همه‌جای ایران، سرای تو میشه...»
            </span>
          </div>
        </div>
        <div className={styles.threePage}>
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

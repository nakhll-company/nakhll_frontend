import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./game.module.scss";
import Link from "next/link";
import Image from 'next/image';
function index(props) {
  let tl = new gsap.timeline();
  let box1 = useRef(null);
  let box2 = useRef(null);
  useEffect(() => {
    // for Animation
    tl.from(box1, {
      opacity: 0,
      duration: 20,
    }).from(box2, {
      opacity: 0,
      scale: 0,
      ease: "back",
      duration: 2,
      delay: 1,
    });
  }, []);
  return (
    <>
      <div className={styles.wrap}>
        <div ref={(el) => (box1 = el)} className={styles.onePage}>
          <Image src="/image/game/last_1.jpg" layout="fill"
            objectFit="cover"
            quality={10} />
          <span>
            رطب نخل!<br />
            بزرگ‌ترین تفاوت نخل با بازی مرکب اینه:<br />
            اگر در بازی مرکب، تعداد شرکت‌کننده‌ها در گذر زمان کم و کم‌تر می‌شد و مردم به جون هم میفتادن تا به یه پول کلان برسن، بازار نخل، رویه‌ای کاملا متفاوت داره!
            چون این‌جا لحظه به لحظه به تعداد شرکت‌کننده‌هاش اضافه می‌شه و در آخر همه با هم برنده می‌شن.
            (این بازی دیگه پایان نداره...)
          </span>
        </div>
        <div ref={(el) => (box2 = el)} className={styles.twoPage}>
          <Image src="/image/game/last.jpg" layout="fill"
            objectFit="cover"
            quality={10} />
          <Link href="/fp/store/create/">
            <a>
              تیله اول رو بدست بیار<br />
              کلیک کنید
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default index;

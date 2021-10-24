import React, { useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./liveEdit.module.scss";
import Living from "../../components/liveEdit/living";
// gsap
import { gsap, Power3 } from "gsap";

function index(props) {
  // gsap
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  // Ref
  let navigation = useRef(null);
  let main = useRef(null);
  let profile = useRef(null);
  let toggleMenu = useRef(null);

  useEffect(() => {
    tl.from(profile, { y: 1200, ease: "ease", opacity: 0, duration: 0.8 })
      .from(profile, {
        scale: 1.6,
        ease: "ease",
      })
      .from(toggleMenu, {
        opacity: 0,
        scale: 0,
        ease: "back",
        duration: 0.4,
      });
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div
          ref={(el) => (navigation = el)}
          id="navigation"
          className={styles.navigation}
        >
          <ul>
            <li>
              <a href="">
                <span className={styles.icon}></span>
                <span className={styles.title}>بازار نخل</span>
              </a>
            </li>
            <li>
              <Link href="/liveEdit/edit">
                <a>
                  <span className={`${styles.icon} fas fa-dice-d20`}></span>
                  <span className={styles.title}>چیدمان</span>
                </a>
              </Link>
            </li>
            <li>
              <a href="">
                <span className={`${styles.icon}  fab fa-fort-awesome`}></span>
                <span className={styles.title}>داشبورد</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className={`${styles.icon} fas fa-scroll`}></span>
                <span className={styles.title}>پیش نمایش</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className={`${styles.icon}   fas fa-hat-wizard`}></span>
                <span className={styles.title}>ثبت نهایی</span>
              </a>
            </li>
          </ul>
        </div>

        {/* main */}
        <div ref={(el) => (main = el)} id="main" className={styles.main}>
          <div className={styles.topbar}>
            <div
              ref={(el) => (toggleMenu = el)}
              className={styles.toggle}
              onClick={() => {
                let navigation = document.querySelector("#navigation");
                let main = document.querySelector("#main");
                navigation.classList.toggle("active_side_bar_liveEdit");
                main.classList.toggle("active_hamberg_icon");
              }}
            >
              <i style={{ fontSize: "25px" }} className="fas fa-bars icon"></i>
            </div>
            {/* userImg */}
            <div ref={(el) => (profile = el)} className={styles.user}>
              <img src="/image/person.jpeg" alt="" />
            </div>
          </div>
          <Living />
        </div>

        <style jsx>{`
          .active_side_bar_liveEdit {
            width: 90px;
          }

          .active_hamberg_icon {
            width: calc(100% - 90px);
            right: 90px;
          }
          @media (max-width: 991px) {
            .active_hamberg_icon {
              right: 300px;
            }
            .active_side_bar_liveEdit {
              right: 0px;
              width: 300px;
            }
          }

          @media (max-width: 480px) {
            .active_side_bar_liveEdit {
              right: 0;
              width: 100%;
            }
            .active_hamberg_icon .icon {
              color: #fff;
              position: fixed;
              left: 0;
              right: initial;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default index;

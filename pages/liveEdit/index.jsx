import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import styles from "./liveEdit.module.scss";
import Living from "../../components/liveEdit/living";
import Head from "next/head";
// gsap
import { gsap, Power3 } from "gsap";
import Sm_InputPlace from "../../components/SampelComponents/InputPlace";
import Sm_HeroSlides from "../../components/SampelComponents/HeroSlides";
import Sm_LinerFourImg from "../../components/SampelComponents/Sm_LinerFourImg";
import Sm_LinerProducts from "../../components/SampelComponents/Sm_LinerProducts";
import Sm_LinerTwoImg from "../../components/SampelComponents/Sm_LinerTwoImg";
import Sm_LinerThreeImg from "../../components/SampelComponents/Sm_LinerThreeImg";
import Sm_LinerOneImg from "../../components/SampelComponents/Sm_LinerOneImg";
import ListComponent from "../../containers/liveEdit/ListComponent";
import { useSelector } from "react-redux";

function index() {
  const [characters, setCharacters] = useState([]);
  const [openPlaneEditor, setOpenPlaneEditor] = useState(false);

  // Animations
  // gsap
  let tl = new gsap.timeline();
  // Ref
  let profile = useRef(null);
  let toggleMenu = useRef(null);
  const list = [
    // {
    //   type: 6,
    //   component: <Sm_LinerProducts />,
    //   ID: "c22xzczxc6da83-9526-465a-97d4-9f112a0dc636",
    //   slug: "Irana",
    //   title: "نقش و نگار",
    // },
    // {
    //   type: 5,
    //   component: <Sm_LinerFourImg />,
    //   ID: "c226da83czxvzxvz-9526-465a-97d4-9f112a0dc636",
    //   slug: "Irana",
    //   title: "نقش و نگار",
    // },
    {
      type: 0,
      component: <Sm_InputPlace />,
      ID: "46153726-<zczxcvxz3f09-4bb1-967c-ebd55c9751ba",
      slug: "mohammadi",
      title: "محمدی",
    },
    // {
    //   type: 1,
    //   component: <Sm_HeroSlides />,
    //   ID: "f3501a78-2b0e-4zxvzxvzx302-9d1c-f282daa5592e",
    //   slug: "Roya",
    //   title: "رویا",
    // },
    // {
    //   type: 2,
    //   component: <Sm_LinerOneImg />,
    //   ID: "c226da83-9526-465a-9zc<zcz7d4-9f112a0dc636",
    //   slug: "Irana",
    //   title: "نقش و نگار",
    //   data: {
    //     src: "",
    //     url: "",
    //   },
    // },
    // {
    //   type: 2,
    //   component: <Sm_LinerOneImg />,
    //   ID: "c226da83-9526-465a-9zc<zcz7d4-9f112a0dc63sdsadsd6",
    //   slug: "Irana",
    //   title: "نقش و نگار",
    //   data: {
    //     src: "",
    //     url: "",
    //   },
    // },
    // {
    //   type: 3,
    //   component: <Sm_LinerTwoImg />,
    //   ID: "c226da83-9zx526-465a-97d4-9f112a0dc636",
    //   slug: "Irana",
    //   title: "نقش و نگار",
    // },
    // {
    //   type: 4,
    //   component: <Sm_LinerThreeImg />,
    //   ID: "c226da83-zxvzx9526-465a-97d4-9f112a0dc636",
    //   slug: "Irana",
    //   title: "نقش و نگار",
    // },
  ];
  const sta = useSelector((state) => state.allDataLanding);

  useEffect(() => {
    setCharacters(list);
    // for Animation
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

  // function for add component in empty Place
  const _handel_add_component = (type) => {
    const items = [...characters];

    items.map((element, index) => {
      let newItem = {};
      if (type == 2) {
        newItem = {
          ID: uuidv4(),
          type,
          data: [
            {
              src: "",
              url: "",
              order: "",
            },
          ],
        };
      }
      if (type == 3) {
        newItem = {
          ID: uuidv4(),
          type,
          data: [
            {
              src: "",
              url: "",
              order: 0,
            },
            {
              src: "",
              url: "",
              order: 1,
            },
          ],
        };
      }
      if (type == 4 || type == 1) {
        newItem = {
          ID: uuidv4(),
          type,
          data: [
            {
              src: "",
              url: "",
              order: 0,
            },
            {
              src: "",
              url: "",
              order: 1,
            },
            {
              src: "",
              url: "",
              order: 2,
            },
          ],
        };
      }
      if (type == 5) {
        newItem = {
          ID: uuidv4(),
          type,
          data: [
            {
              src: "",
              url: "",
              order: 0,
            },
            {
              src: "",
              url: "",
              order: 1,
            },
            {
              src: "",
              url: "",
              order: 2,
            },
            {
              src: "",
              url: "",
              order: 3,
            },
          ],
        };
      }

      if (element.type == 0) {
        items.splice(index, 1);
        items.splice(index, 0, newItem);
      }
    });
    setCharacters(items);
    setOpenPlaneEditor(false);
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div className={styles.container}>
        <div id="navigation" className={styles.navigation}>
          {!openPlaneEditor && (
            <ul>
              <li>
                <a href="">
                  <span className={styles.icon}>
                    {/* <img style={{position:"absolute"}} src="/image/LOGO_500.png" alt="" /> */}
                  </span>
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
                  <span
                    className={`${styles.icon}  fab fa-fort-awesome`}
                  ></span>
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
          )}
          {openPlaneEditor && (
            <ListComponent _handel_add_component={_handel_add_component} />
          )}
        </div>

        {/* main */}
        <div id="main" className={styles.main}>
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

          <Living
            characters={characters}
            setCharacters={setCharacters}
            setOpenPlaneEditor={setOpenPlaneEditor}
          />
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

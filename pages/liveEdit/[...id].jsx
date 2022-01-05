import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import styles from "./liveEdit.module.scss";
import Living from "../../components/liveEdit/living";
import Head from "next/head";
// gsap
import { gsap, Power3 } from "gsap";
import lottie from "lottie-web";

import ListComponent from "../../containers/liveEdit/ListComponent";
import { useDispatch, useSelector } from "react-redux";
import { _updateDataLanding } from "../../redux/actions/liveEdit/_updateDataLanding";
import SaveLanding from "../../containers/liveEdit/SaveLanding";
import { ApiReference } from "../../Api";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import EmptyLayout from "../../components/layout/EmptyLayout";

function LiveEdit({ idLanding }) {
  let getDataLanding = `${ApiReference.landing.getLanding.url}${idLanding[0]}/${idLanding[1]}`;
  // idLanding=[slugShop,idLanding]
  let apiUpdateLanding = `${ApiReference.landing.update.url}${idLanding[0]}/${idLanding[1]}/`;
  // const userLog = useSelector((state) => state.User.userInfo);
  const [characters, setCharacters] = useState([]);
  const [openPlaneEditor, setOpenPlaneEditor] = useState(false);
  const [openSaveLanding, setOpenSaveLanding] = useState(false);
  const dispatch = useDispatch();
  // Animations
  // gsap
  let tl = new gsap.timeline();
  // Ref
  let profile = useRef(null);
  let toggleMenu = useRef(null);
  const nakhlAnim = useRef(null);
  const list = [
    {
      ID: uuidv4(),
      type: 1,
      data: [
        {
          image: "",
          url: "",
          title: "",
          order: 0,
        },
        {
          image: "",
          url: "",
          title: "",
          order: 1,
        },
        {
          image: "",
          url: "",
          title: "",
          order: 2,
        },
      ],
    },
  ];

  useEffect(async () => {
    let response = await ApiRegister().apiRequest(
      null,
      "get",
      getDataLanding,
      true,
      ""
    );

    if (response.status == 200) {
      if (response.data.page_data == "") {
        setCharacters(list);
        dispatch(_updateDataLanding(list));
      } else {
        let item = JSON.parse(response.data.page_data);

        setCharacters(item);
        dispatch(_updateDataLanding(item));
      }
    }

    // setCharacters(list);
    // for Animation
    tl.from(toggleMenu, {
      opacity: 0,
      scale: 0,
      ease: "back",
      duration: 0.4,
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: nakhlAnim.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/Nakhl.json"),

      //   path: "./lottie/animation.json",
    });
  }, [openPlaneEditor]);

  // Function For Update Landing
  // Start
  const landing = useSelector((state) => state.allDataLanding);
  const _handel_update_landing = async () => {
    let ansapi = {
      shop: idLanding[0],
      page_data: JSON.stringify(landing),
    };
    let response = await ApiRegister().apiRequest(
      ansapi,
      "patch",
      apiUpdateLanding,
      true,
      ""
    );
  };

  // End

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
              image: "",
              url: "",
              title: "",
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
              image: "",
              url: "",
              title: "",
              order: 0,
            },
            {
              image: "",
              url: "",
              title: "",
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
              image: "",
              url: "",
              title: "",
              order: 0,
            },
            {
              image: "",
              url: "",
              title: "",
              order: 1,
            },
            {
              image: "",
              url: "",
              title: "",
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
              image: "",
              url: "",
              title: "",
              order: 0,
            },
            {
              image: "",
              url: "",
              title: "",
              order: 1,
            },
            {
              image: "",
              url: "",
              title: "",
              order: 2,
            },
            {
              image: "",
              url: "",
              title: "",
              order: 3,
            },
          ],
        };
      }
      if (type == 6) {
        newItem = {
          ID: uuidv4(),
          type,
          data: [
            {
              image: "",
              url: "",
              order: 0,
              color: "#a1db43",
              title: "",
              titleComponent: "پروفروش ترین",
              products: [],

              subTitle: "ویژه فصل پاییز",
            },
          ],
        };
      }

      if (type == 7) {
        newItem = {
          ID: uuidv4(),
          type,
          data: [
            {
              text: "",
            },
          ],
        };
      }

      if (type == 8) {
        newItem = {
          ID: uuidv4(),
          type,
          data: [
            {
              text: "درباره حجره خود بنویسید تا دیگران از داستان کسب و کار شما باخبر بشوند",
            },
          ],
        };
      }
      if (type == 9) {
        newItem = {
          ID: uuidv4(),
          type,
          data: [
            {
              order: 0,

              products: [],
            },
          ],
        };
      }
      if (type == 10) {
        newItem = {
          ID: uuidv4(),
          type,
          data: [
            {
              order: 0,

              products: [],
            },
          ],
        };
      }

      if (type == 11) {
        newItem = {
          ID: uuidv4(),
          type,
          data: [
            {
              order: 0,

              video: "",
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
    dispatch(_updateDataLanding(items));
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
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className={styles.container}>
        <div id="navigation" className={styles.navigation}>
          {!openPlaneEditor && (
            <ul>
              <li style={{ pointerEvents: "none" }}>
                <a className={styles.wrap_item} href="">
                  <span className={styles.icon}>
                    <img
                      style={{
                        height: "40px",
                        width: "40px",
                        pointerEvents: "none",
                      }}
                      src="/iconWhite.png"
                      alt=""
                    />
                  </span>
                  <span className={styles.title} style={{ fontSize: "bold" }}>
                    بازار نخل
                  </span>
                </a>
              </li>
              <li
                className={styles.activeLink}
                style={{ pointerEvents: "none" }}
              >
                <a className={styles.wrap_item}>
                  <span className={`${styles.icon} fas fa-dice-d20`}></span>
                  <span className={styles.title}>چیدمان</span>
                </a>
              </li>
              <li>
                <div
                  className={styles.wrap_item}
                  onClick={() => {
                    _handel_update_landing();
                    window.open(`/fp`, "_blank");
                  }}
                >
                  <span
                    className={`${styles.icon}  fab fa-fort-awesome`}
                  ></span>
                  <span className={styles.title}>داشبورد</span>
                </div>
              </li>
              <li>
                <div
                  className={styles.wrap_item}
                  onClick={() => {
                    _handel_update_landing();
                    window.open(
                      `/showLanding/${idLanding[0]}/${idLanding[1]}/`,
                      "_blank"
                    );
                  }}
                >
                  <span className={`${styles.icon} fas fa-scroll`}></span>
                  <span className={styles.title}>پیش نمایش</span>
                </div>
              </li>
              {/* <li>
                <div
                  onClick={() => setOpenSaveLanding(true)}
                  className={styles.wrap_item}
                >
                  <span className={`${styles.icon}   fas fa-hat-wizard`}></span>
                  <span className={styles.title}>ثبت نهایی</span>
                </div>
              </li> */}
              <div ref={nakhlAnim} className={styles.nakhlAnim}></div>
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
            <div
              onClick={() => setOpenSaveLanding(true)}
              className={styles.wrap_item}
            >
              <span className={`${styles.icon}   fas fa-hat-wizard`}></span>
              <span className={styles.title}>ثبت نهایی</span>
            </div>
            {/* userImg */}
            <div ref={(el) => (profile = el)} className={styles.user}>
              {/* <img src="/image/person.jpeg" alt="" /> */}
            </div>
          </div>

          <Living
            idLanding={idLanding}
            characters={characters}
            setCharacters={setCharacters}
            setOpenPlaneEditor={setOpenPlaneEditor}
          />
        </div>
        {openSaveLanding && (
          <SaveLanding
            setOpenSaveLanding={setOpenSaveLanding}
            idLanding={idLanding}
          />
        )}

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
              right: 0px;
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
              left: -290px;
              right: initial;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default LiveEdit;

// function server side
export async function getServerSideProps(context) {
  const idLanding = context.params.id;

  return {
    props: { idLanding },
  };
}

LiveEdit.Layout = EmptyLayout;

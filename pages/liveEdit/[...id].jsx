// node libraies
import { gsap } from "gsap";
import Head from "next/head";
import Image from "next/image";
import lottie from "lottie-web";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import React, { useRef, useEffect, useState } from "react";
// components
import Living from "../../components/liveEdit/living/index";
import EmptyLayout from "../../components/layout/EmptyLayout";
import SaveLanding from "../../containers/liveEdit/SaveLanding";
import ListComponent from "../../containers/liveEdit/ListComponent";
import { addComponent } from "../../containers/liveEdit/metodes/addComponent";
// methods
import { ApiReference } from "../../api/Api";
import { _updateDataLanding } from "../../redux/actions/liveEdit/_updateDataLanding";
// scss
import styles from "./liveEdit.module.scss";
import { authhttp } from "../../services/callApi/api";

function LiveEdit({ idLanding }) {
  let toggleMenu = useRef(null);
  const nakhlAnim = useRef(null);
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);
  const [openPlaneEditor, setOpenPlaneEditor] = useState(false);
  const [openSaveLanding, setOpenSaveLanding] = useState(false);
  const landing = useSelector((state) => state.allDataLanding);
  const apiUpdateLanding = `${ApiReference.landing.update.url}${idLanding[0]}/${idLanding[1]}/`;
  const getDataLanding = `${ApiReference.landing.getLanding.url}${idLanding[0]}/${idLanding[1]}/`;

  useEffect(() => {
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
    async function fetchData() {
      const response = await authhttp.get(getDataLanding);

      if (response.status == 200) {
        if (response.data.page_data == "") {
          setCharacters(list);
          dispatch(_updateDataLanding(list));
        } else {
          const item = JSON.parse(response.data.page_data);
          setCharacters(item);
          dispatch(_updateDataLanding(item));
        }
      }
    }
    fetchData();

    // eslint-disable-next-line new-cap
    const tl = new gsap.timeline();
    tl.from(toggleMenu, {
      opacity: 0,
      scale: 0,
      ease: "back",
      duration: 0.4,
    });
  }, [dispatch, getDataLanding]);

  useEffect(() => {
    lottie.loadAnimation({
      container: nakhlAnim.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/Nakhl.json"),
    });
  }, [openPlaneEditor]);

  const handelUpdateLanding = async () => {
    const ansapi = {
      shop: idLanding[0],
      page_data: JSON.stringify(landing),
    };
    const response = await authhttp.patch(apiUpdateLanding, ansapi);
    return response;
  };

  const handelAddComponent = (type) => {
    const items = [...characters];

    items.map((element, index) => {
      const newItem = addComponent(type, idLanding);
      if (element.type == 0) {
        items.splice(index, 1);
        items.splice(index, 0, newItem);
      }
    });
    setCharacters(items);
    dispatch(_updateDataLanding(items));
    setOpenPlaneEditor(false);
  };

  const menuList = (
    <ul>
      <li style={{ pointerEvents: "none" }}>
        <a className={styles.wrap_item} href="">
          <span className={styles.icon}>
            <Image
              className={styles.icon_nakhll}
              width={40}
              height={40}
              src="/iconWhite.png"
              alt=""
            />
          </span>
          <span className={styles.title} style={{ fontSize: "bold" }}>
            ?????????? ??????
          </span>
        </a>
      </li>
      <li className={styles.activeLink} style={{ pointerEvents: "none" }}>
        <a className={styles.wrap_item}>
          <span className={`${styles.icon} fas fa-dice-d20`}></span>
          <span className={styles.title}>????????????</span>
        </a>
      </li>
      <li>
        <div
          className={styles.wrap_item}
          onClick={() => {
            handelUpdateLanding();
            window.open(`/fp`, "_blank");
          }}
        >
          <span className={`${styles.icon}  fab fa-fort-awesome`}></span>
          <span className={styles.title}>??????????????</span>
        </div>
      </li>
      <li>
        <div
          className={styles.wrap_item}
          onClick={() => {
            handelUpdateLanding();
            window.open(
              `/liveEdit/preview/${idLanding[0]}/${idLanding[1]}/`,
              "_blank"
            );
          }}
        >
          <span className={`${styles.icon} fas fa-scroll`}></span>
          <span className={styles.title}>?????? ??????????</span>
        </div>
      </li>

      <div ref={nakhlAnim} className={styles.nakhlAnim}></div>
    </ul>
  );

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
          {!openPlaneEditor && <>{menuList}</>}

          {openPlaneEditor && (
            <ListComponent handelAddComponent={handelAddComponent} />
          )}
        </div>

        {/* main */}
        <div id="main" className={styles.main}>
          <div className={styles.topbar}>
            <div
              ref={(el) => (toggleMenu = el)}
              className={styles.toggle}
              onClick={() => {
                const navigation = document.querySelector("#navigation");
                const main = document.querySelector("#main");
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
              <span className={styles.title}>?????? ??????????</span>
            </div>
            {/* userImg */}
            <div className={styles.user}></div>
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

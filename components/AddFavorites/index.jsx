// node libraries
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Assistent from "zaravand-assistent-number";
import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
// methods
import { ApiReference } from "../../api/Api";
import { _addToWishList } from "../../redux/actions/Wishlist/_addToWishList";
// styles
import styles from "./AddFavorites.module.scss";
import { authhttp } from "../../services/callApi/api";

const _asist = new Assistent();

function AddFavorites() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [listFav, setListFav] = useState([]);
  const [openAdd, setOpenAdd] = useState(true);
  const [textInput, settextInput] = useState("");
  const [openList, setOpenList] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const apiCreat = ApiReference.PinnedURL.creat.url;
  const apiListPinned = ApiReference.PinnedURL.PinnedList.url;

  const transition = useTransition(isVisible, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 800, opacity: 0 },
  });

  const _handel_menu = () => {
    setIsVisible(!isVisible);
  };
  const _handel_tabs = () => {
    setOpenAdd(!openAdd);
    setOpenList(!openList);
  };

  // function add page to favourite
  const _handel_add_page_to_favourit = async () => {
    if (textInput !== "") {
      const link = router.asPath;

      const newFav = {
        link: `https://nakhll.com${link}`,
        name: textInput == "" ? "بدون عنوان" : textInput,
      };

      const response = await authhttp.post(apiCreat, newFav);

      if (response.status === 201) {
        dispatch(_addToWishList(response.data));
        setListFav([...listFav, response.data]);
        settextInput("");
      }
    }
  };

  // function Delete form fav
  const _handel_delete_from_fav = async (ID) => {
    const urlDelet = `/api/v1/shop/pinned-urls/${ID}/`;
    const deletePinned = await authhttp.delete(urlDelet);
    const arr = [...listFav];
    const arrDeleted = arr.filter((el) => el.id !== ID);
    setListFav(arrDeleted);
    return deletePinned;
  };

  useEffect(() => {
    async function fetchData() {
      const response = await authhttp.get(apiListPinned);

      if (response.status == 200) {
        setListFav(response.data);
      }
    }
    fetchData();
  }, [apiListPinned]);

  return (
    <div className={styles.content}>
      <div className={styles.updater}>
        <button className={styles.btnPin} onClick={_handel_menu}>
          <i
            style={{
              transform: isVisible ? "rotate(0deg)" : "rotate(45deg)",
              color: isVisible ? "#2e3192" : "#1b3e68",
            }}
            className="fas fa-thumbtack"
          ></i>
        </button>
        {transition((style, item) =>
          item ? (
            <animated.div style={style} className={styles.menu}>
              <div className={styles.header}>
                <div className={styles.top}>
                  <h3 className={styles.text}>
                    لیست علاقه مندیها <br /> <span>راحتتر به گردش بپرداز</span>
                  </h3>
                </div>
              </div>
              <div className={styles.selectHeader}>
                <div
                  onClick={_handel_tabs}
                  style={
                    openAdd
                      ? { backgroundColor: "rgb(69, 4, 247)", color: "#fff" }
                      : {}
                  }
                  className={styles.right}
                >
                  <span>افزودن</span>
                </div>
                <div
                  style={
                    openList
                      ? { backgroundColor: "rgb(69, 4, 247)", color: "#fff" }
                      : {}
                  }
                  onClick={_handel_tabs}
                  className={styles.left}
                >
                  <span>
                    {" "}
                    لیست
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginRight: "4px",
                        color: openList ? "#fff" : "blue",
                      }}
                    >
                      <span style={{ fontSize: "12px", marginLeft: "2px" }}>
                        (
                      </span>
                      {_asist.number(listFav.length)}
                      <span style={{ fontSize: "12px", marginRight: "2px" }}>
                        )
                      </span>
                    </span>
                  </span>
                </div>
              </div>
              {openAdd && (
                <div className={styles.addPage}>
                  <span>عنوانی که دوست داری</span>
                  <div className={styles.wrapInput}>
                    <input
                      type="text"
                      placeholder=" عنوان را وارد کنید "
                      value={textInput}
                      onChange={(e) => settextInput(e.target.value)}
                    />
                  </div>
                  <div className={styles.wrapButton}>
                    <button
                      className={styles.btnAdd}
                      onClick={_handel_add_page_to_favourit}
                    >
                      <i className="fas fa-plus-square"></i>
                    </button>
                  </div>
                </div>
              )}
              {openList && (
                <div className={styles.list}>
                  {listFav.map((el, index) => (
                    <div key={index} className={styles.items}>
                      <a href={el.link}>
                        <span>{el.name}</span>
                      </a>
                      <i
                        onClick={() => {
                          _handel_delete_from_fav(el.id);
                        }}
                        className="fas fa-times"
                      ></i>
                    </div>
                  ))}
                </div>
              )}
            </animated.div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default AddFavorites;

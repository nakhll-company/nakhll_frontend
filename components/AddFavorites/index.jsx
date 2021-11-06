import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddFavorites.module.scss";
import Assistent from "zaravand-assistent-number";
import { useDispatch, useSelector } from "react-redux";
import { _addToWishList } from "../../redux/actions/Wishlist/_addToWishList";
import { _deleteFromWishList } from "../../redux/actions/Wishlist/_deleteFromWishList";
const _asist = new Assistent();

function AddFavorites() {
  const listFav = useSelector((state) => state.WishList);

  const router = useRouter();
  const [openAdd, setOpenAdd] = useState(true);
  const [openList, setOpenList] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  // state for input
  const [textInput, settextInput] = useState("");
  // state for favourite

  const transition = useTransition(isVisible, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 800, opacity: 0 },
  });
  const list = useSelector((state) => state.WishList);
  const dispatch = useDispatch();

  const _handel_menu = () => {
    setIsVisible(!isVisible);
  };
  const _handel_tabs = () => {
    setOpenAdd(!openAdd);
    setOpenList(!openList);
  };

  // function add page to favourite
  const _handel_add_page_to_favourit = () => {
    const url = router.asPath;
    const newFav = {
      url,
      title: textInput == "" ? "بدون عنوان" : textInput,
      ID: uuidv4(),
    };

    dispatch(_addToWishList(newFav));
    settextInput("");
  };

  // function Delete form fav

  const _handel_delete_from_fav = (ID) => {
    let arr = [...listFav];
    let arrDeleted = arr.filter((el) => el.ID !== ID);

    dispatch(_deleteFromWishList(arrDeleted));
  };

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
                      <span style={{ fontSize: "10px", marginLeft: "2px" }}>
                        (
                      </span>
                      {_asist.number(listFav.length)}
                      <span style={{ fontSize: "10px", marginRight: "2px" }}>
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
                  {listFav.map((el) => (
                    <div className={styles.items}>
                      <a href={el.url}>
                        <span>{el.title}</span>
                      </a>
                      <i
                        onClick={() => _handel_delete_from_fav(el.ID)}
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

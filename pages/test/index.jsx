import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import styles from "./test.module.scss";

function index(props) {
  const [openAdd, setOpenAdd] = useState(true);
  const [openList, setOpenList] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  // state for input
  const [textInput, settextInput] = useState("");
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
  // function for time click on item in list

  const _handel_click_list=()=>{
    
  }
  return (
    <div className={styles.content}>
      <div className={styles.updater}>
        <button className={styles.btnPin} onClick={_handel_menu}>
          <i
            style={{
              transform: isVisible ? "rotate(0deg)" : "rotate(45deg)",
              color: isVisible ? "blue" : "#fff",
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
                <div onClick={_handel_tabs} className={styles.right}>
                  <span>افزودن</span>
                </div>
                <div onClick={_handel_tabs} className={styles.left}>
                  <span>لیست</span>
                </div>
              </div>
              {openAdd && (
                <div className={styles.addPage}>
                  <span>عنوان صفحه</span>
                  <div className={styles.wrapInput}>
                    <input
                      type="text"
                      placeholder=" عنوان را وارد کنید "
                      value={textInput}
                      onChange={(e) => settextInput(e.target.value)}
                    />
                  </div>
                  <div className={styles.wrapButton}>
                    <button className={styles.btnAdd}>
                      <i className="fas fa-plus-square"></i>
                    </button>
                  </div>
                </div>
              )}
              {openList && (
                <div className={styles.list}>
                  نمایش لیست
                  <div className={styles.items} onClick={()=>_handel_click_list()}>
                    <span>عنوان</span>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className={styles.items}>
                    <span>عنوان</span>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className={styles.items}>
                    <span>عنوان</span>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className={styles.items}>
                    <span>عنوان</span>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className={styles.items}>
                    <span>عنوان</span>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className={styles.items}>
                    <span>عنوان</span>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className={styles.items}>
                    <span>عنوان</span>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className={styles.items}>
                    <span>عنوان</span>
                    <i className="fas fa-times"></i>
                  </div>
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

export default index;

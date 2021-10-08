import React from "react";
import styles from "./Category.module.scss";
function Category(props) {
  let root = [
    { pos: "arayesh.svg", title: "آرایشی" },
    { pos: "atari.svg", title: "عطاری" },

    { pos: "farhangi.svg", title: "فرهنگی" },

    { pos: "khaneh.svg", title: "خانه" },
    { pos: "lebas.svg", title: "لباس" },

    { pos: "sanaieh.svg", title: "صنایع دستی" },
  ];
  return (
    <div className={styles.category}>
      <span className={styles.mar}></span>
      {root.map((item, index) => (
        <div key={index} className={styles.loader}>
          <span className={styles.part_icon}>
            <i className={styles.between}></i>
          </span>

          {/* image */}
          <div className={styles.icon}>
            <img
              onClick={() => alert("hi")}
              src={`/icons/${item.pos}`}
              className={styles.img_Category}
            />
          </div>

          {/* title */}

          <div className={styles.title}>
            <h1 className={styles.subtitle}>{item.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;

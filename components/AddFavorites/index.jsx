import React, { useState } from "react";
import styles from "./AddFavorites.module.scss";
function AddFavorites(props) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className={styles.action}>
        <div className={styles.profile} onClick={() => setOpenMenu(!openMenu)}>
          <img src="/image/person.jpeg" alt="" />
        </div>
        <div className={`${styles.menu} `}>
          <h3>
            لیست علاقه مندیها <br /> <span>راحتتر به گردش بپرداز</span>
          </h3>
          <ul>
            <li>
              <img src="" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AddFavorites;

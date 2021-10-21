import React, { useEffect, useState } from "react";
import { apiReference } from "../../../api/apiReference";

import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import styles from "./living.module.scss";
function Living(props) {
  const [allshops, setAllshops] = useState([]);
  useEffect(() => {
    _get_all_shops();
  }, []);

  // Get all shops
  const _get_all_shops = async () => {
    let shops = await ApiRegister().apiRequest(
      null,
      "GET",
      apiReference.allShops,
      true,
      ""
    );

    if (shops.status === 200) {
      
      setAllshops([...shops.data]);
      //   setAllshops(shops.data);
    }
  };

  return (
    <div className={styles.wrap}>
      {allshops.map((e) => (
        <div className={styles.child}>{e.title}</div>
      ))}
    </div>
  );
}

export default Living;

import React, { useEffect, useState } from "react";

import styles from "./HeroSlides.module.scss";
import ShopCart from "../../../components/ui/shopCart";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

function LinearShopsCart({ part }) {
  const [shopes, setShopes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await ApiRegister().apiRequest(
          null,
          "GET",
          "https://nakhll.com/api/v1/landing/campaign/",
          false,
          {}
        );
        if (response.status === 200) {
          if (part == 1) {
            setShopes(response.data.slice(0, 16));
          } else {
            setShopes(response.data.slice(15));
          }
        }
      } catch (error) {}
    }
    fetchData();
  }, []);

  return (
    <div className="container-full ">
      <div className={styles.wrapcarts}>
        {shopes.map((data, index) => (
          <ShopCart key={index} dataCart={data} />
        ))}
      </div>
    </div>
  );
}

export default LinearShopsCart;

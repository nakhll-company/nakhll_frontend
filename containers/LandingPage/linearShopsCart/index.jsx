import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

import styles from "./HeroSlides.module.scss";
import ShopCart from "../../../components/ui/shopCart";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

function LinearShopsCart({}) {
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
          console.log("response.data :>> ", response.data);
          setShopes(response.data);
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

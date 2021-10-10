import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import styles from "./hojreh.module.scss";

import { ApiRegister } from "../../services/apiRegister/ApiRegister";

import ListProduct from "../../containers/listProduct";
import DynamicLanding from "../../containers/LandingPage/DynamicLanding";

// fetch data
const fetchData = async (id) => {
  let response = await ApiRegister().apiRequest(
    null,
    "GET",
    `/api/v1/shop/${id}/`,
    true,
    ""
  );

  if (response.status === 200) {
    return response.data;
  } else {
    return false;
  }
};

const Hojreh = ({ dataShop }) => {
  console.log("dataShop :>> ", dataShop);
  const [informationShop, setInformationShop] = useState(dataShop);
  const router = useRouter();

  const id_Hojreh = router.query.id;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        ></link>
      </Head>
      {!dataShop.is_landing && (
        <>
          <div className={styles.topHoj}>
            <div className={styles.liner}>
              <span>خانه</span>
              <i className="fas fa-angle-left"></i>
              <span> حجره ها</span>
              <i className="fas fa-angle-left"></i>
              <span>{informationShop.title}</span>
            </div>
            <div className={styles.slide}>
              <div className="">
                <img className={styles.imgslid} src="/image/back.jpeg" alt="" />
              </div>
              <div className={styles.profile}>
                <img
                  className={styles.img_profile}
                  src={informationShop.image_thumbnail_url}
                  alt=""
                />
                <div className={styles.information}>
                  <h1>{informationShop.title}</h1>
                  <h5>{informationShop.title}</h5>
                </div>
                <i className="fas fa-share-alt-square"></i>
              </div>
            </div>
            <div className={styles.title}>
              <span> محصولات حجره</span>
            </div>
            <div className={styles.sub_line}></div>
          </div>

          <ListProduct shop_products={dataShop.slug} />
        </>
      )}

      {dataShop.is_landing && dataShop.id && (
        <DynamicLanding urlSchema={`/api/v1/shop/schema/${dataShop.id}/`} />
      )}
    </>
  );
};

export default Hojreh;

// function server side
export async function getServerSideProps(context) {
  const dataShop = await fetchData(context.params.id);

  return {
    props: {
      dataShop,
    },
  };
}

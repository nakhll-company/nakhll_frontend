import React, { useEffect, useState } from "react";
import Head from "next/head";

import MenuMobile from "../../../components/layout/MenuMobile";
import { WoLoading } from "../../../components/custom/Loading/woLoading/WoLoading";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import ProductCard from "../../../components/ProductCart/ProductCard";

function ListWitOutFilters({ api }) {
  const [listProducts, setlistProducts] = useState([]);
  // state for show loading
  const [isLoading, setIsLoading] = useState(false);

  const _Call_Products = async () => {
    try {
      let response = await ApiRegister().apiRequest(null, "get", api, true, {});
      if (response.status === 200) {
        setlistProducts(response.data);
      }
    } catch (e) {
    }
  };

  useEffect(() => {
    _Call_Products();
  }, []);

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
      <div className="container_N">
        <div className="row sidebar-parent">
          <div className="col-12 ">
            <div className="mx-auto row">
              {isLoading ? (
                // <Loading />
                // <BeautyLoading />
                <WoLoading />
              ) : (
                // isLoading
                // <WoLoading />

                <div className="mx-auto row">
                  {listProducts.map((oneProduct, index) => (
                    <ProductCard
                      key={index}
                      padding={1}
                      product={{
                        id: oneProduct.id,
                        imageUrl: oneProduct.image_thumbnail_url,
                        url: `/product/${oneProduct.slug}/`,
                        title: oneProduct.title,
                        chamberTitle: oneProduct.shop && oneProduct.shop.title,
                        chamberUrl: `/hojreh/${oneProduct.shop.slug} `,
                        discount: oneProduct.discount,
                        price: oneProduct.price / 10,
                        discountNumber: oneProduct.old_price / 10,
                        city: oneProduct.shop && oneProduct.shop.state,
                        is_advertisement: oneProduct.is_advertisement,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MenuMobile */}
      <MenuMobile />
      {/* MenuMobile */}
    </>
  );
}

export default ListWitOutFilters;

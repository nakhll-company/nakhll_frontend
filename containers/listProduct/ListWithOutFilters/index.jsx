// node libraries
import Head from "next/head";
import Script from "next/script";
import React, { useEffect, useState } from "react";
// components
import MenuMobile from "../../../components/layout/MenuMobile";
import ProductCard from "../../../components/ProductCart/ProductCard";
// methods
import { WoLoading } from "../../../components/custom/Loading/woLoading/WoLoading";
import { http } from "../../../services/callApi/api";

function ListWitOutFilters({ api }) {
  const isLoading = false;
  const [listProducts, setlistProducts] = useState([]);

  useEffect(() => {
    const _Call_Products = async () => {
      try {
        
        let response = await http.get(api);
        if (response.status === 200) {
          setlistProducts(response.data);
        }
      } catch (e) {
        return false;
      }
    };
    _Call_Products();
  }, [api]);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossOrigin="anonymous"
      ></Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
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
                <WoLoading />
              ) : (
                <div className="mx-auto row">
                  {listProducts.map((oneProduct, index) => (
                    <ProductCard
                      key={index}
                      padding={1}
                      dataProduct={oneProduct}
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

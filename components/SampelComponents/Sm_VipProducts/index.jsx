import React from "react";
// node libraries
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// components
import InputUrl from "../../../containers/liveEdit/InputUrl";
// methods

import { _updateProducts } from "../../../redux/actions/liveEdit/_updateProducts";
// style
import st from "./vipProducts.module.scss";
import { http } from "../../../services/callApi/api";

function Sm_VipProducts({ id, data }) {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const Queries = { page_size: "3" };
      if (data[0].url !== "" && data[0].url !== undefined) {
        const url = data[0].url;
        if (url.split("?")[1]) {
          const partTwoUrl = url.split("?")[1].split("&");
          const arrayString = partTwoUrl.map((el) => el.split("="));

          arrayString.map((el) => {
            if (el[0] == "q") {
              Queries["search"] = decodeURI(el[1]);
            } else {
              Queries[el[0]] = decodeURI(el[1]);
            }
          });
        }

        if (Object.keys(Queries).length > 1) {
          const response = await http.get(
            "https://nakhll.com/api/v1/products/",
            {
              params: Queries,
            }
          );

          if (response.status == 200) {
            setProducts(response.data.results);
            dispatch(_updateProducts(response.data.results));
          }
        }
      }
    }
    fetchData();
  }, [data, dispatch]);

  return (
    <>
      <div className={st.wrapper}>
        <div className={st.icon_change_url}>
          <InputUrl id={id} order={0} />
        </div>

        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className={st.card}>
              <div className={st.imgBx}>
                <Image
                  className={st.image}
                  layout="fixed"
                  width={260}
                  height={260}
                  alt="product"
                  src={product.Image_medium_url}
                />
              </div>
              <div className={st.content}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {product.Title}
                </span>
              </div>
            </div>
          ))
        ) : (
          <>
            {[1, 1, 1].map((product, index) => (
              <div key={index} className={st.card}>
                <div className={st.imgBx}>
                  <Image
                    className={st.image}
                    layout="fixed"
                    width={260}
                    height={260}
                    alt="product"
                    src="/image/productTwo.jpg"
                  />
                </div>
                <div className={st.content}>
                  <span>نام محصول</span>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default Sm_VipProducts;

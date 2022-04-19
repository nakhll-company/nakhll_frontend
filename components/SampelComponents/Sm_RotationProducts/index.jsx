// node libraries
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// components
import InputUrl from "../../../containers/liveEdit/InputUrl";
// methods
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { _updateProducts } from "../../../redux/actions/liveEdit/_updateProducts";
// style
import st from "./rotationProduct.module.scss";
import { http } from "../../../services/callApi/api";

function Sm_RotationProducts({ id, data }) {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let Queries = { page_size: "8" };
      if (data[0].url !== "" && data[0].url !== undefined) {
        let url = data[0].url;
        if (url.split("?")[1]) {
          let partTwoUrl = url.split("?")[1].split("&");
          let arrayString = partTwoUrl.map((el) => el.split("="));

          arrayString.map((el) => {
            if (el[0] == "q") {
              Queries["search"] = decodeURI(el[1]);
            } else {
              Queries[el[0]] = decodeURI(el[1]);
            }
          });
        }

        if (Object.keys(Queries).length > 1) {
          let response = await http.get(
            "https://nakhll.com/api/v1/products/",
            Queries
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
        <div className={st.box}>
          {products.length > 0 ? (
            products.map((product, index) => (
              <span key={index} style={{ "--i": `${index}` }}>
                <Image
                  className={st.image}
                  layout="fixed"
                  width={200}
                  height={200}
                  alt="product"
                  src={product.Image_medium_url}
                />
              </span>
            ))
          ) : (
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((el, index) => (
                <span key={index} style={{ "--i": `${index}` }}>
                  <Image
                    className={st.image}
                    layout="fixed"
                    width={200}
                    height={200}
                    alt="product"
                    src="/image/productTwo.jpg"
                  />
                </span>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Sm_RotationProducts;

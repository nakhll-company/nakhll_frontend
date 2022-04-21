// node librares
import Image from "next/image";
import { useState, useEffect, Fragment } from "react";
// components
import ProductCart from "../../components/ProductCart/ProductCard";
import { authhttp } from "../../services/callApi/api";
import { errorMessage } from "../../utils/toastifyMessage";
// methods
import { getFavoritesList } from "./methods/getFavoritesList";
// scss
import styles from "./scss/favoritesList.module.scss";
/**
 * favorites List in profile
 */

const FavoritesList = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState({ products: [] });
  async function fetch() {
    await getFavoritesList(setList, setLoading);
  }
  useEffect(() => {
    async function fetchData() {
      await fetch();
    }
    fetchData();
  }, []);

  const deletProduct = async (idProduct) => {
    let response = await authhttp.delete(
      `/api/v1/lists/favorites/${idProduct}/remove/`
    );
    if (response.status === 204) {
      fetch();
      errorMessage("محصول مورد نظر از لیست علاقه مندی ها حذف شد");
    }
  };

  return (
    <div className={styles.main}>
      <h1>لیست علاقه مندی ها</h1>
      <div className="d-flex flex-wrap">
        {loading ? (
          <div className="d-flex flex-column">
            <Image src="/loading.svg" alt="loding" width="40" height="40" />
            <h6>لطفا منتظر بمانید</h6>
          </div>
        ) : list.products.length > 0 ? (
          list.products.map((value, index) => {
            return (
              <Fragment key={index}>
                <ProductCart
                  padding={2}
                  dataProduct={value}
                  deletProduct={() => deletProduct(value.ID)}
                />
              </Fragment>
            );
          })
        ) : (
          <h6>لیست علاقه مندی ها خالی می باشد</h6>
        )}
      </div>
    </div>
  );
};
// export
export default FavoritesList;

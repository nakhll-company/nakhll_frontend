// node librares
import Image from "next/image";
import { useState, useEffect, Fragment } from "react";
// components
import ProductCart from "../../components/ProductCart/ProductCard";
// methods
import { getFavoritesList } from "./methods/getFavoritesList";
// scss
import styles from "./scss/favoritesList.module.scss";
/**
 * favorites List in profile
 */
const FavoritesList = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState({ product: [] });
  async function fetch() {
    await getFavoritesList(setList, setLoading);
  }
  useEffect(async () => {
    await fetch();
  }, []);
  return (
    <div className={styles.main}>
      <h1>لیست علاقه مندی ها</h1>
      <div className="d-flex flex-wrap">
        {loading ? (
          <div className="d-flex flex-column">
            <Image src="/loading.svg" alt="loding" width="40" height="40" />
            <h6>لطفا منتظر بمانید</h6>
          </div>
        ) : list.product.length > 0 ? (
          list.product.map((value, index) => {
            return (
              <Fragment key={index}>
                <ProductCart
                  padding={2}
                  product={{
                    id: value.id,
                    imageUrl: value.image_thumbnail_url,
                    url: `/product/${value.slug}`,
                    title: value.title,
                    chamberTitle: value.shop.title,
                    chamberUrl: `/shop?shop=${value.shop.slug} `,
                    discount: value.discount,
                    price: value.price / 10,
                    discountNumber: value.old_price / 10,
                    city: value.shop.city,
                    is_advertisement: value.is_advertisement,
                    iconClose: true,
                  }}
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

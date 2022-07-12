// node libraries
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
// methods
import { gtag } from "../../utils/googleAnalytics";
import { diviedNumber } from "../../utils/diviedNumber";
import { addToFavoritesList } from "./methods/addToFavotitesList";
import { _addProduct } from "../../redux/actions/cart/_addProduct";
import { FaRegBookmark, FaPlus, FaWindowClose } from "react-icons/fa";
// scss
import styles from "./ProductCard.module.scss";

const ProductCard = ({
  sm = 6,
  md = 5,
  lg = 4,
  xl = 3,
  xs = 6,
  col,
  padding,
  dataProduct,
  deletProduct,
}) => {
  const dispatch = useDispatch();
  const [disablBtn, setDisablBtn] = useState(false);

  const product = {
    id: dataProduct.ID,
    imageUrl: dataProduct.Image_medium_url,
    url: `/shop/${dataProduct.FK_Shop.slug}/product/${dataProduct.Slug}/`,
    title: dataProduct.Title,
    chamberTitle: dataProduct.FK_Shop ? dataProduct.FK_Shop.title : "",
    chamberUrl: dataProduct.FK_Shop ? `/shop/${dataProduct.FK_Shop.slug} ` : "",
    discount: dataProduct.discount,
    price: dataProduct.Price / 10,
    discountNumber: dataProduct.OldPrice / 10,
    city: dataProduct.FK_Shop && dataProduct?.FK_Shop?.state?.name,
    is_advertisement: dataProduct.is_advertisement,
  };

  const cardBadge = (
    <>
      <div
        className={styles._product_card_badge}
        type="button"
        style={{ bottom: ".75rem" }}
        onClick={() => {
          addToFavoritesList(product.id);
        }}
      >
        <i>
          <FaRegBookmark size={18} />
        </i>
      </div>
    </>
  );

  const cardImg = (
    <Image
      layout="responsive"
      height={100}
      width={100}
      src={product.imageUrl}
      className={`card-img-top _product_card_rounded animationCart ${
        product.unavailable && "_unavailable_product"
      }`}
      alt={product.title}
      placeholder="blur"
      blurDataURL="/logoCart.png"
    />
  );

  const campBadge = (
    <>
      <div
        className={styles._product_card_camp_badge}
        type="button"
        style={{ bottom: "-7px", right: "-5px" }}
      >
        <Image
          layout="fixed"
          height={100}
          width={100}
          src="/image/mahsol.svg"
          alt="camp"
        />
      </div>
    </>
  );

  const deletIcon = (
    <>
      <>
        <div
          type="button"
          style={{ top: "-13px", right: "-15px", position: "absolute" }}
          onClick={deletProduct}
        >
          <i>
            <FaWindowClose color="red" size={20} />
          </i>
        </div>
      </>
    </>
  );

  return (
    <div
      className={` ${
        col
          ? `col-${col}`
          : `col-${xs} col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl}`
      } ${padding ? `px-${padding}` : ""} mb-2`}
    >
      <div className={`card ${styles._product_card} _product_card_rounded p-2`}>
        <div className={styles.paterImage}>
          {cardBadge}
          {dataProduct.in_campaign && campBadge}
          {deletProduct && deletIcon}
          <Link href={product.url}>
            <a className={styles.links}>{cardImg}</a>
          </Link>
        </div>

        <div
          className={`card-body mt-2 p-1 ${
            product.unavailable && "_unavailable_product"
          }`}
        >
          <div className="mb-3 ">
            <Link href={product.url}>
              <a
                style={{ fontWeight: "bold" }}
                className="_product_card_title text-truncate "
              >
                {product.title}
              </a>
            </Link>
          </div>
          <div className="mb-3 _product_card_city text-truncate">
            <span className="_product_card_subtitle">{product.city}</span>
            {product.city && <i className="px-1 fa fa-angle-left"></i>}
            <Link href={product.chamberUrl}>
              <a
                title={product.chamberTitle}
                className="_product_card_subtitle"
              >
                {product.chamberTitle}
              </a>
            </Link>
          </div>
          {product.discount !== 0 && (
            <div className={`_product_card_discount  ${styles.discount_badge}`}>
              {product.discount}%
            </div>
          )}
          {product.is_advertisement && (
            <div className={styles.Ads_badge}>آگهی</div>
          )}

          <hr style={{ marginBottom: "5px" }} />
          <div style={{ height: "50px" }} className="_product_card_price ">
            <div>
              {dataProduct.Inventory === 0 ? (
                <div className={styles.warp_namojod}>
                  <Image
                    src="/icons/namojod.svg"
                    layout="fixed"
                    height={40}
                    width={40}
                    alt="ناموجود"
                  />
                </div>
              ) : (
                <>
                  <button
                    aria-label="خرید"
                    disabled={disablBtn}
                    className={`btn ${styles._product_card_add_to_cart}`}
                    onClick={async () => {
                      setDisablBtn(true);
                      await dispatch(_addProduct(product.id));

                      setDisablBtn(false);

                      gtag("event", "دکمه خرید", {
                        event_category: `‍‍‍‍${product.title}`,
                        event_label: "زدن روی دکمه خرید",
                      });
                    }}
                  >
                    <i>
                      <FaPlus />
                    </i>
                  </button>
                </>
              )}
            </div>
            <div
              className="_product_card_price_number"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span className="_product_card_orginal_number">
                {diviedNumber(product.price)}
              </span>
              <span
                className="_product_card_discount_number"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {product.discount !== 0 && diviedNumber(product.discountNumber)}
              </span>
            </div>
            <span
              className="_product_card_toman"
              style={{ fontSize: ".75rem", transform: "rotate(270deg)" }}
            >
              تومان
            </span>
          </div>
          {false && (
            <div className="_product_card_progressbar">
              <>
                <div className="_sales_progressbar">
                  <div
                    className="_sales_progressbar_passed"
                    style={{ width: `${product.sales}%` }}
                  />
                </div>
                <div className="mt-1">
                  <p className="_sales_progressbar_text">
                    %{product.sales} فروش رفته
                  </p>
                </div>
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

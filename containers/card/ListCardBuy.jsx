// node libraries
import Link from "next/link";
import Image from "next/image";
import { isEmpty } from "lodash";
import { useContext } from "react";
import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import Loading from "../../components/loading";
// methods
import ContextProduct from "./Context/context";
import { diviedNumber } from "../../utils/diviedNumber";
import { _addProduct } from "../../redux/actions/cart/_addProduct";
import { _reduceProduct } from "../../redux/actions/cart/_reduceProduct";
import { _deleteProduct } from "../../redux/actions/cart/_deleteProduct";
// style
import styles from "../../styles/pages/cart/cart.module.scss";

export default function ListCardBuy() {
  const dispatch = useDispatch();
  const allProductListBuy = useSelector((state) => state.Cart.allProduct);

  const [loading, setLoading] = useState(false);
  const [productId, setProductId] = useState(0);

  const {
    handelDeleteProductFromList,
    handelAddProductTOList,
    handelReduceProductFromList,
  } = useContext(ContextProduct);

  return (
    <div className="col-12 col-lg-8 my-md-3 my-lg-0 order-md-1 order-lg-0 order-1 mb-3">
      <div className="cart-items mt-2">
        {!isEmpty(allProductListBuy) &&
          allProductListBuy.ordered_items.map((El, index) => (
            <Fragment key={index + 10}>
              <div
                className={`${styles.cart_product_group} bg-white`}
                style={
                  !(
                    index > 0 &&
                    El.product.FK_Shop.slug ==
                      allProductListBuy.ordered_items[index - 1].product.FK_Shop
                        .slug
                  )
                    ? { position: "relative" }
                    : {
                        position: "relative",
                        marginTop: "-12px",
                        borderTop: "2px dashed hsl(213deg 59% 26%)",
                        borderTopLeftRadius: "inherit",
                        borderTopRightRadius: "inherit",
                      }
                }
              >
                {!(
                  index > 0 &&
                  El.product.FK_Shop.slug ==
                    allProductListBuy.ordered_items[index - 1].product.FK_Shop
                      .slug
                ) && (
                  <div className="px-3 pt-3 pb-1">
                    <span className="font-size1">از حجره: </span>{" "}
                    <Link href={`/shop/${El.product.FK_Shop.slug}/`}>
                      <a className="vendor-link font-size1 font-weight-bold link-body font-weight-normal txtcut">
                        {El.product.FK_Shop.title}
                      </a>
                    </Link>
                  </div>
                )}
                {/* ^^^^^^^^^^^ IF CHANGE IN PRODUCT IN LIST ^^^^^^^^^^^*/}
                <div className="cart-product-item mt-2 p-3">
                  {loading && productId === El.product.ID ? (
                    <div>
                      <Loading />
                    </div>
                  ) : (
                    <>
                      <div className="d-flex justify-content-between flex-wrap">
                        <div className="d-flex w-100">
                          <a className="product-link">
                            <Image
                              src={El.product.Image_medium_url}
                              className={`${styles.cart_product_item_img} ${styles.rounded}`}
                              width={100}
                              height={100}
                              alt=""
                            />
                          </a>
                          <div className="d-flex flex-column justify-content-between w-100 mr-3 overflow-hidden">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Link
                                href={`/shop/${El.product.FK_Shop.slug}/product/${El.product.Slug}/`}
                              >
                                <a className="product-link d-block font-size1 link-body font-weight-bold text-truncate">
                                  {El.product.Title}
                                </a>
                              </Link>
                              <i
                                className="fas fa-times-circle"
                                style={{
                                  fontSize: "25px",
                                  marginRight: "5px",
                                  color: "#1b3e68",
                                  cursor: "pointer",
                                }}
                                onClick={async () => {
                                  await setProductId(El.product.ID);
                                  await setLoading(true);
                                  dispatch(
                                    _deleteProduct(El.id, El.product.Title)
                                  );

                                  await setLoading(true);
                                }}
                              ></i>
                            </div>
                            <div
                              className={styles.cart_product_item_remain_stock}
                            ></div>

                            <div
                              className={`d-block small teaberry-light ml-auto `}
                            >
                              <span className="font-weight-bold">
                                {diviedNumber(El?.product?.Price / 10)}
                              </span>{" "}
                              <span className="pr-1">تومان</span>
                            </div>

                            <div className="d-flex align-items-center">
                              <div
                                className="d-flex align-items-center mt-2"
                                style={{ witheSpace: "nowrap" }}
                              >
                                <div
                                  className="quantity-box input-group input-group-sm"
                                  style={{
                                    width: "7rem",
                                    alignItems: "center",
                                  }}
                                >
                                  <div className="input-group-prepend ">
                                    <button
                                      className={`${styles.btnplus}   ${styles.raise}`}
                                    >
                                      <i
                                        style={{
                                          fontSize: "25px",
                                          color: "#1b3e68 ",
                                        }}
                                        className="fas fa-plus-square"
                                        onClick={async () => {
                                          await setProductId(El.product.ID);
                                          await setLoading(true);
                                          await dispatch(
                                            _addProduct(El.product.ID)
                                          );
                                          await setLoading(false);
                                        }}
                                      ></i>
                                    </button>
                                  </div>
                                  <input
                                    min="0"
                                    type="text"
                                    disabled="disabled"
                                    value={El.count}
                                    className="font-size1-2 font-weight-bold form-control mt-1 border-0 bg-white px-1 text-center"
                                  />
                                  <div className="input-group-append">
                                    <button
                                      className={`${styles.btnminus}   ${styles.raise}`}
                                      style={{
                                        backgroundColor: "#fff",
                                        outline: "none",
                                      }}
                                    >
                                      <i
                                        style={{
                                          fontSize: "25px",
                                          color: "#91a6c1 ",
                                        }}
                                        className="fas fa-minus-square"
                                        onClick={async () => {
                                          await setProductId(El.product.ID);
                                          await setLoading(true);
                                          await dispatch(_reduceProduct(El.id));
                                          await setLoading(false);
                                        }}
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                                <span className="d-inline-block font-size-9 pointer mr-3">
                                  {" "}
                                </span>
                              </div>
                              <div className="mr-auto">
                                <div className="d-flex">
                                  <span
                                    style={{ display: "block" }}
                                    className={`${
                                      styles.cart_product_item_primary_price
                                    } ${
                                      El.product.discount == 0 && "opacity_none"
                                    }`}
                                  >
                                    {diviedNumber(El.total_old_price / 10)}
                                  </span>
                                  <div
                                    className={`nakhl-label small  teaberry-light mr-1 ${
                                      El.product.discount == 0 && "opacity_none"
                                    }`}
                                  >
                                    {El.product.discount}
                                    <span> %</span>
                                  </div>
                                </div>{" "}
                                <span className="font-weight-bold">
                                  {diviedNumber(El.total_price / 10)}
                                </span>{" "}
                                <span>تومان</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="v-portal"
                        style={{ display: "none" }}
                      ></div>
                    </>
                  )}
                </div>
              </div>

              {false &&
                index !== 0 &&
                El.product.FK_Shop.slug ==
                  allProductListBuy.ordered_items[index - 1].product.FK_Shop
                    .slug && (
                  <div
                    className="cart-product-group mt-0 bg-white"
                    style={{ position: "relative" }}
                  >
                    {/* ^^^^^^^^^^^ IF CHANGE IN PRODUCT IN LIST ^^^^^^^^^^^*/}
                    <div className="cart-product-item  margin_top_zero p-3">
                      <div className="d-flex justify-content-between flex-wrap">
                        <div className="d-flex w-100">
                          <a className="product-link">
                            <Image
                              src={El.product.Image_medium_url}
                              className={`${styles.cart_product_item_img} ${styles.rounded}`}
                              width={100}
                              height={100}
                              alt=""
                            />
                          </a>
                          <div className="d-flex flex-column justify-content-between w-100 mr-3 overflow-hidden">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Link href={El.product.url}>
                                <a className="product-link d-block font-size1 link-body font-weight-bold text-truncate">
                                  {El.product.Title}
                                </a>
                              </Link>
                              <i
                                className="fas fa-times-circle"
                                style={{
                                  fontSize: "25px",
                                  marginRight: "5px",
                                  color: "#1b3e68",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  handelDeleteProductFromList(El.id)
                                }
                              ></i>
                            </div>
                            <div className="cart-product-item-remain-stock"></div>
                            <div
                              className={`nakhl-label small teaberry-light mr-auto ${
                                El.product.discount == 0 && "opacity_none"
                              }`}
                            >
                              {El.product.discount}
                              <span> %</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div
                                className="d-flex align-items-center mt-2"
                                style={{ witheSpace: "nowrap" }}
                              >
                                <div
                                  className="quantity-box input-group input-group-sm"
                                  style={{
                                    width: "7rem",
                                    alignItems: "center",
                                  }}
                                >
                                  <div className="input-group-prepend">
                                    <button className="btn  plus-minus-icon">
                                      <i
                                        style={{
                                          fontSize: "25px",
                                          color: "#1b3e68 ",
                                        }}
                                        className="fas fa-plus-square"
                                        onClick={() =>
                                          handelAddProductTOList(El.product.ID)
                                        }
                                      ></i>
                                    </button>
                                  </div>
                                  <input
                                    min="0"
                                    type="text"
                                    disabled="disabled"
                                    value={El.count}
                                    className="font-size1-2 font-weight-bold form-control mt-1 border-0 bg-white px-1 text-center"
                                  />
                                  <div className="input-group-append">
                                    <button className="btn  plus-minus-icon">
                                      <i
                                        style={{
                                          fontSize: "25px",
                                          color: "#91a6c1 ",
                                        }}
                                        className="fas fa-minus-square"
                                        onClick={() =>
                                          handelReduceProductFromList(El.id)
                                        }
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                                <span className="d-inline-block font-size-9 pointer mr-3">
                                  {" "}
                                </span>
                              </div>
                              <div className="mr-auto">
                                <span
                                  className={`${
                                    styles.cart_product_item_primary_price
                                  } ${
                                    El.product.discount == 0 && "opacity_none"
                                  }`}
                                >
                                  {diviedNumber(El.total_old_price / 10)}
                                </span>{" "}
                                <span className="font-weight-bold">
                                  {diviedNumber(El.total_price / 10)}
                                </span>{" "}
                                <span>تومان</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="v-portal"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                  </div>
                )}
            </Fragment>
          ))}
      </div>
    </div>
  );
}

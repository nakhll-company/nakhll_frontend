import React, { useState, Fragment } from "react";
import Link from "next/link";
import { useContext } from "react";
import Assistent from "zaravand-assistent-number";
import ContextProduct from "./Context/context";
import Loading from "../../components/loading";
import styles from "../../styles/pages/cart/cart.module.scss";
const _asist = new Assistent();

// REDUX

import { useDispatch, useSelector } from "react-redux";
import { _addProduct } from "../../redux/actions/cart/_addProduct";
import { _reduceProduct } from "../../redux/actions/cart/_reduceProduct";
import { _deleteProduct } from "../../redux/actions/cart/_deleteProduct";

// LODASH
import { isElement, isEmpty } from "lodash";

export default function ListCardBuy() {
  const dispatch = useDispatch();
  const All_product_list_buy = useSelector((state) => state.Cart.allProduct);

  let [loading, setLoading] = useState(false);
  let [productId, setProductId] = useState(0);

  const { handel_DeleteProductFromList } = useContext(ContextProduct);

  return (
    <div className="col-12 col-lg-8 mb-3 my-md-3 my-lg-0 order-1 order-md-1 order-lg-0">
      <div className="cart-items mt-2">
        {!isEmpty(All_product_list_buy) &&
          All_product_list_buy.ordered_items.map((El, index) => (
            <Fragment key={index + 10}>
              <div
                className={`${styles.cart_product_group} bg-white`}
                style={
                  !(
                    index > 0 &&
                    El.product.shop.slug ==
                      All_product_list_buy.ordered_items[index - 1].product.shop
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
                  El.product.shop.slug ==
                    All_product_list_buy.ordered_items[index - 1].product.shop
                      .slug
                ) && (
                  <div className="pt-3 pb-1 px-3">
                    <span className="font-size1">از حجره: </span>{" "}
                    <Link href={`/shop?shop=${El.product.shop.slug}/`}>
                      <a className="vendor-link font-size1 font-weight-bold link-body font-weight-normal txtcut">
                        {El.product.shop.title}
                      </a>
                    </Link>
                  </div>
                )}
                {/*</mnbvcxz> IF CHANGE IN PRODUCT IN LIST */}

                {/* <div className="align-items-center nakhl-label d-flex justify-content-between mx-3 mt-3 p-2 rounded  border border-danger text-danger">
                <div className="mb-0 pr-2 font-size-sm">
                  <div style={{ fontSize: "15px", fontWeight: "400" }}>
                    از محصول روان نویس (خودکار) یونیکورن (اسب تک شاخ)به اندازه
                    کافی موجود نمی‌باشد
                  </div>
                  <div>قیمت محصول تغییر کرده است</div>
                </div>{" "}
                <span className="dd-flex align-items-center mr-2 pointer font-size-sm text-nowrap">
                  حذف
                  <i
                    className="fas fa-times-circle"
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  ></i>
                </span>
              </div> */}

                {/*^^^^^^^^^^^ IF CHANGE IN PRODUCT IN LIST ^^^^^^^^^^^*/}

                <div className="p-3 mt-2 cart-product-item">
                  {loading && productId === El.product.id ? (
                    <div>
                      <Loading />
                    </div>
                  ) : (
                    <>
                      <div className="d-flex flex-wrap justify-content-between">
                        <div className="d-flex w-100">
                          <a className="product-link">
                            <img
                              src={El.product.image_thumbnail_url}
                              className={`${styles.cart_product_item_img} ${styles.rounded}`}
                            />
                          </a>
                          <div className="d-flex flex-column justify-content-between mr-3 w-100 overflow-hidden">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Link href={`product/${El.product.slug}/`}>
                                <a className="product-link d-block font-size1 link-body font-weight-bold text-truncate">
                                  {_asist.number(El.product.title)}
                                </a>
                              </Link>
                              <i
                                className="fas fa-times-circle"
                                style={{
                                  fontSize: "20px",
                                  marginRight: "5px",
                                  fontSize: "25px",
                                  color: "#1b3e68",
                                  cursor: "pointer",
                                }}
                                onClick={async () => {
                                  await setProductId(El.product.id);
                                  await setLoading(true);
                                  dispatch(
                                    _deleteProduct(El.id, El.product.title)
                                  );

                                  await setLoading(true);
                                }}
                              ></i>
                            </div>
                            <div
                              className={styles.cart_product_item_remain_stock}
                            ></div>
                            <div
                              className={`nakhl-label mr-auto small teaberry-light ${
                                El.product.discount == 0 && "opacity_none"
                              }`}
                            >
                              {_asist.number(El.product.discount)}
                              <span> %</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div
                                className="mt-2 d-flex align-items-center"
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
                                          await setProductId(El.product.id);
                                          await setLoading(true);
                                          await dispatch(
                                            _addProduct(El.product.id)
                                          );
                                          // await handel_AddProductTOList(
                                          //   El.product.id
                                          // );
                                          await setLoading(false);
                                        }}
                                      ></i>
                                    </button>
                                  </div>
                                  <input
                                    min="0"
                                    type="text"
                                    disabled="disabled"
                                    value={_asist.number(El.count)}
                                    className="bg-white border-0 font-size1-2 font-weight-bold form-control mt-1 px-1 text-center"
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
                                          await setProductId(El.product.id);
                                          await setLoading(true);
                                          await dispatch(_reduceProduct(El.id));

                                          await setLoading(false);
                                        }}
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                                <span className="d-inline-block font-size-9 mr-3 pointer">
                                  {" "}
                                  {/* حذف؟{" "} */}
                                </span>
                              </div>
                              <div className="mr-auto">
                                <span
                                  style={{ display: "block" }}
                                  className={`${
                                    styles.cart_product_item_primary_price
                                  } ${
                                    El.product.discount == 0 && "opacity_none"
                                  }`}
                                >
                                  {_asist.PSeparator(El.total_old_price / 10)}
                                </span>{" "}
                                <span className="font-weight-bold">
                                  {_asist.PSeparator(El.total_price / 10)}
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
                El.product.shop.slug ==
                  All_product_list_buy.ordered_items[index - 1].product.shop
                    .slug && (
                  <div
                    className="mt-0 cart-product-group bg-white"
                    style={{ position: "relative" }}
                  >
                    {/*^^^^^^^^^^^ IF CHANGE IN PRODUCT IN LIST ^^^^^^^^^^^*/}

                    <div className="p-3  cart-product-item margin_top_zero">
                      <div className="d-flex flex-wrap justify-content-between">
                        <div className="d-flex w-100">
                          <a className="product-link">
                            <img
                              src={El.product.image_thumbnail_url}
                              className={`${styles.cart_product_item_img} ${styles.rounded}`}
                            />
                          </a>
                          <div className="d-flex flex-column justify-content-between mr-3 w-100 overflow-hidden">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Link href={El.product.url}>
                                <a className="product-link d-block font-size1 link-body font-weight-bold text-truncate">
                                  {_asist.number(El.product.title)}
                                </a>
                              </Link>
                              <i
                                className="fas fa-times-circle"
                                style={{
                                  fontSize: "20px",
                                  marginRight: "5px",
                                  fontSize: "25px",
                                  color: "#1b3e68",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  handel_DeleteProductFromList(El.id)
                                }
                              ></i>
                            </div>
                            <div className="cart-product-item-remain-stock"></div>
                            <div
                              className={`nakhl-label mr-auto small teaberry-light ${
                                El.product.discount == 0 && "opacity_none"
                              }`}
                            >
                              {_asist.number(El.product.discount)}
                              <span> %</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div
                                className="mt-2 d-flex align-items-center"
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
                                          handel_AddProductTOList(El.product.id)
                                        }
                                      ></i>
                                    </button>
                                  </div>
                                  <input
                                    min="0"
                                    type="text"
                                    disabled="disabled"
                                    value={_asist.number(El.count)}
                                    className="bg-white border-0 font-size1-2 font-weight-bold form-control mt-1 px-1 text-center"
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
                                          handel_ReduceProductFromList(El.id)
                                        }
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                                <span className="d-inline-block font-size-9 mr-3 pointer">
                                  {" "}
                                  {/* حذف؟{" "} */}
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
                                  {_asist.PSeparator(El.total_old_price / 10)}
                                </span>{" "}
                                <span className="font-weight-bold">
                                  {_asist.PSeparator(El.total_price / 10)}
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

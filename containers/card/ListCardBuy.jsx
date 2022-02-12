import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import ContextProduct from "./Context/context";
import Loading from "../../components/loading";
import React, { useState, Fragment } from "react";
import Assistent from "zaravand-assistent-number";
import styles from "../../styles/pages/cart/cart.module.scss";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { _addProduct } from "../../redux/actions/cart/_addProduct";
import { _reduceProduct } from "../../redux/actions/cart/_reduceProduct";
import { _deleteProduct } from "../../redux/actions/cart/_deleteProduct";
// LODASH
import { isEmpty } from "lodash";

const _asist = new Assistent();

export default function ListCardBuy() {
  const dispatch = useDispatch();
  const All_product_list_buy = useSelector((state) => state.Cart.allProduct);

  let [loading, setLoading] = useState(false);
  let [productId, setProductId] = useState(0);

  const { handel_DeleteProductFromList, handel_AddProductTOList, handel_ReduceProductFromList } = useContext(ContextProduct);

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
                    El.product.FK_Shop.slug ==
                    All_product_list_buy.ordered_items[index - 1].product
                      .FK_Shop.slug
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
                  All_product_list_buy.ordered_items[index - 1].product
                    .FK_Shop.slug
                ) && (
                    <div className="pt-3 pb-1 px-3">
                      <span className="font-size1">از حجره: </span>{" "}
                      <Link href={`/shop/${El.product.FK_Shop.slug}/`}>
                        <a className="vendor-link font-size1 font-weight-bold link-body font-weight-normal txtcut">
                          {El.product.FK_Shop.title}
                        </a>
                      </Link>
                    </div>
                  )}
                {/*^^^^^^^^^^^ IF CHANGE IN PRODUCT IN LIST ^^^^^^^^^^^*/}
                <div className="p-3 mt-2 cart-product-item">
                  {loading && productId === El.product.ID ? (
                    <div>
                      <Loading />
                    </div>
                  ) : (
                    <>
                      <div className="d-flex flex-wrap justify-content-between">
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
                          <div className="d-flex flex-column justify-content-between mr-3 w-100 overflow-hidden">
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
                                  {_asist.number(El.product.Title)}
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
                              className={`nakhl-label mr-auto small teaberry-light ${El.product.discount == 0 && "opacity_none"
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
                                          await setProductId(El.product.ID);
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
                                </span>
                              </div>
                              <div className="mr-auto">
                                <span
                                  style={{ display: "block" }}
                                  className={`${styles.cart_product_item_primary_price
                                    } ${El.product.discount == 0 && "opacity_none"
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
                El.product.FK_Shop.slug ==
                All_product_list_buy.ordered_items[index - 1].product.FK_Shop
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
                            <Image
                              src={El.product.Image_medium_url}
                              className={`${styles.cart_product_item_img} ${styles.rounded}`}
                              width={100}
                              height={100}
                              alt=""
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
                                  {_asist.number(El.product.Title)}
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
                                  handel_DeleteProductFromList(El.id)
                                }
                              ></i>
                            </div>
                            <div className="cart-product-item-remain-stock"></div>
                            <div
                              className={`nakhl-label mr-auto small teaberry-light ${El.product.discount == 0 && "opacity_none"
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
                                          handel_AddProductTOList(El.product.ID)
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
                                </span>
                              </div>
                              <div className="mr-auto">
                                <span
                                  className={`${styles.cart_product_item_primary_price
                                    } ${El.product.discount == 0 && "opacity_none"
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

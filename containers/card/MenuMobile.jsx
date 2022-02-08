// node libraries
import Link from "next/link";
import React, { useContext } from "react";
import Assistent from "zaravand-assistent-number";
// methods
import ContextProduct from "./Context/context";
// style
import styles from "./MenuMobile.module.scss";

const _asist = new Assistent();

export const MenuMobile = () => {

  const { All_product_list_buy } = useContext(ContextProduct);

  return (
    <>
      {All_product_list_buy != null &&
        Object.keys(All_product_list_buy).length > 0 && (
          <div className={styles.fix_bottom}>
            <div>
              <Link href="/cart/address" passHref>
                <button
                  style={{ width: "120px" }}
                  className={`btn ${styles.btn_Buy} px-2 rounded-pill `}
                >
                  {_asist.number(`ادامه خرید `)}
                </button>
              </Link>
            </div>
            <div>
              <div className={styles.cart_invoice_vendor_count}>
                مبلغ قابل پرداخت
              </div>
              <div style={{ display: "flex" }}>
                <span
                  style={{
                    color: "hsl(0deg 0% 62%)",
                    fontSize: "12px",
                    textDecoration: "line-through",
                    alignSelf: "center",
                    marginLeft: "5px",
                  }}
                >
                  {All_product_list_buy.total_old_price !==
                    All_product_list_buy.total_price &&
                    _asist.PSeparator(
                      All_product_list_buy.total_old_price / 10
                    )}
                </span>

                <span className="font-weight-500" style={{ marginLeft: "5px" }}>
                  {_asist.PSeparator(All_product_list_buy.total_price / 10)}
                </span>
                <span>تومان</span>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

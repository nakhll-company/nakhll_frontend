import React, { useContext } from "react";

import styles from "./MenuMobile.module.scss";
import Assistent from "zaravand-assistent-number";
import Link from "next/link";

const _asist = new Assistent();
import ContextProduct from "./Context/context";

export const MenuMobile = () => {
  const { All_product_list_buy } = useContext(ContextProduct);
  return (
    <>
      {Object.keys(All_product_list_buy).length > 0 && (
        <div className={styles.fix_bottom}>
          <div>
            <Link href="/cart/address">
              <button
                style={{ width: "120px" }}
                className="btn btn-Buy px-2 rounded-pill "
              >
                {_asist.number(`ادامه خرید `)}
              </button>
            </Link>
          </div>
          <div>
            <div className="cart-invoice-vendor-count">مبلغ قابل پرداخت</div>
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
                {_asist.PSeparator(All_product_list_buy.total_old_price / 10)}
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

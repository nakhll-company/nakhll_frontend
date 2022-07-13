// node libraries
import Link from "next/link";
import React, { useContext } from "react";
// methods
import ContextProduct from "./Context/context";
// style
import styles from "./MenuMobile.module.scss";

const MenuMobile = () => {
  const { allProductListBuy } = useContext(ContextProduct);

  return (
    <>
      {allProductListBuy != null && Object.keys(allProductListBuy).length > 0 && (
        <div className={styles.fix_bottom}>
          <div>
            <Link href="/cart/address" passHref>
              <button
                style={{ width: "120px" }}
                className={`btn ${styles.btn_Buy} rounded-pill px-2 `}
              >
                {`ادامه خرید `}
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
                {allProductListBuy.total_old_price !==
                  allProductListBuy.total_price &&
                  diviedNumber(allProductListBuy.total_old_price / 10)}
              </span>

              <span className="font-weight-500" style={{ marginLeft: "5px" }}>
                {diviedNumber(allProductListBuy.total_price / 10)}
              </span>
              <span>تومان</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
// export
export default MenuMobile;

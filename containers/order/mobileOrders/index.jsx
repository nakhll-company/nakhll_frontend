// node
import Link from "next/link";
import Image from "next/image";
import Assistent from "zaravand-assistent-number";
// components
import CustomLabel from "../../../components/custom/customLabel";
import CustomBadge from "../../../components/custom/customBadge";
// scss
import styles from "../../../styles/pages/order/mobileOrders.module.scss";

const _asist = new Assistent();

const MobileOrders = ({ loading, ordersList }) => {

  let jsonAddress = ordersList.address_json || "{}";
  jsonAddress = JSON.parse(jsonAddress);

  return (
    <div className={styles.wrapper}>
      {loading ? (
        <div style={{ textAlign: "center", margin: "20px 0px" }}>
          <Image src="/loading.svg" alt="loding" width="40" height="40" />
        </div>
      ) : ordersList.length > 0 ? (
        ordersList.map((value, index) => {
          return (
            <div key={index} className={styles.card}>
              <Link key={index} href={`/fp/order/orderdetail/${value.id}`}>
                <a>
                  <div className={styles.card_header}>
                    <CustomLabel
                      type="normal"
                      value={_asist.number(value.id)}
                      label="شماره سفارش"
                    />
                    {value.status === "awaiting_paying" && <CustomBadge
                      title="در انتظار پرداخت"
                      customBadgeStyle={{ fontSize: "12px" }}
                    />}
                    {value.status === "wait_store_approv" && <CustomBadge
                      title="در انتظار تایید فروشگاه"
                      customBadgeStyle={{ fontSize: "12px" }}
                    />}
                    {value.status === "preparing_product" && <CustomBadge
                      title="در حال آماده سازی"
                      customBadgeStyle={{ fontSize: "12px" }}
                    />}
                    {value.status === "wait_customer_approv" && <CustomBadge
                      title="در انتظار تایید مشتری"
                      customBadgeStyle={{ fontSize: "12px" }}
                    />}
                  </div>
                  <CustomLabel
                    type="normal"
                    value={(value.items && value.items[0].buyer) ||
                      (value.address_json && jsonAddress.receiver_full_name)}
                    label="خریدار"
                    customLabelDiv="wrapper_custom_label"
                  />
                  <CustomLabel
                    type="normal"
                    value={`${_asist.number(value.created_date_jalali)}`}
                    label="ثبت"
                    customLabelDiv="wrapper_custom_label"
                  />
                  <div className={styles.card_image_wrapper}>
                  </div>
                </a>
              </Link>
            </div>
          );
        })
      ) : (
        <h3 style={{ textAlign: "center" }}>موردی برای نمایش وجود ندارد</h3>
      )}
    </div>
  );
};
// export
export default MobileOrders;

// node
import Image from "next/image";
import Link from "next/link";
// components
import CustomLabel from "../../../components/custom/customLabel";
import CustomBadge from "../../../components/custom/customBadge";
// methods
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// scss
import styles from "../../../styles/pages/order/mobileOrders.module.scss";
import { errorMessage } from "../../utils/message";

const MobileOrders = ({ loading, ordersList }) => {
  const _handleRequestApi = async (id) => {
    let params = {};
    let loadData = null;
    let dataUrl = `/app/api/v1/factor/change-status/confirmed/${id}/`;
    let response = await ApiRegister().apiRequest(
      loadData,
      "PUT",
      dataUrl,
      true,
      params
    );
    if (response.status === 200) {
      getUncompleted(activeHojreh);
    } else {
      errorMessage("خطایی در ارسال داده ها پیش آمده است");
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.header}>
                <Link href={`/fp/product/list/filter`}>
                    <a className={styles.header_link}>
                        <Image src="/image/product/filter.svg" alt="filter" className={styles.header_link_icon} width="15" height="15" />
                        <i className="fa fa-sliders" aria-hidden="true"></i>
                        فیلترها
                    </a>
                </Link>
                <span className={styles.header_link}>
                    <Image src="/image/product/sort.svg" alt="sort" className={styles.header_link_icon} width="15" height="15" />
                    <i className="fa fa-sort-amount-asc" aria-hidden="true"></i>
                    ترتیب نمایش</span>
            </div> */}
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
                      value={value.factor_number}
                      label="شماره سفارش"
                    />
                    <CustomBadge
                      title={`${value.factor_status}`}
                      customBadgeStyle={{ fontSize: "12px" }}
                    />
                  </div>
                  <CustomLabel
                    type="normal"
                    value={value.user}
                    label="خریدار"
                    customLabelDiv="wrapper_custom_label"
                  />
                  <CustomLabel
                    type="normal"
                    value={`${value.order_date}`}
                    label="ثبت"
                    customLabelDiv="wrapper_custom_label"
                  />
                  <CustomLabel
                    type="normal"
                    value={`${value.max_due_date}`}
                    label="مهلت"
                    customLabelDiv="wrapper_custom_label"
                  />
                  <div className={styles.card_details}>
                    <li className="fas fa-shopping-basket"></li>
                    <span className={styles.card_details_span}>
                      {value.factor_posts_count} کالا
                    </span>
                    <li className="fas fa-map-marker"></li>
                    <span className={styles.card_details_span}>
                      {value.state}-{value.big_city}
                    </span>
                  </div>
                  <div className={styles.card_image_wrapper}>
                    {value.factor_posts_summary.length > 0 &&
                      value.factor_posts_summary.map((value, index) => {
                        return (
                          <div key={index} className={styles.card_image}>
                            <Image
                              src={value.product_image_thumbnail}
                              alt="sort"
                              width="45"
                              height="45"
                            />
                          </div>
                        );
                      })}
                  </div>
                </a>
              </Link>
              {value.order_status === "3" && (
                <button
                  type="button"
                  className={styles.button_ready}
                  onClick={() => {
                    _handleRequestApi(value.id);
                  }}
                >
                  به موقع ارسال میکنم
                </button>
              )}
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

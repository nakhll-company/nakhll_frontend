// libraries
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { useState } from "react";
// component
import useViewport from "../../../../components/viewPort";
import MobileHeader from "../../../../components/mobileHeader";
import Layout from "../../../../components/layout/Layout";
// methods
import { getProduct } from "../../../../redux/actions/product/getProduct";
import { mapState } from "../../../../containers/product/methods/mapState";
// scss
import styles from "../../../../styles/pages/product/filter.module.scss";
/**
 * filter product component
 * @param
 * @returns void
 */
const FilterProduct = ({ getProduct, activeHojreh }) => {
  let [filterData, setFilterData] = useState({
    price_from: 0,
    price_to: 0,
    inventory_from: 0,
    inventory_to: 0,
  });

  const { width } = useViewport();
  const breakpoint = 620;

  const router = useRouter();

  return (
    <>
      {width < breakpoint && (
        <div className={styles.wrapper}>
          <MobileHeader title="فیلترها" type="back" />
          <form
            id="formFilter"
            className={styles.form}
            onSubmit={(event) => {
              event.preventDefault();
              let product_status = document.querySelector(
                "input[type=radio]:checked"
              ).value;
              let search = document.querySelector("#search").value;
              getProduct(
                activeHojreh,
                product_status,
                filterData.price_from,
                filterData.price_to,
                filterData.inventory_from,
                filterData.inventory_to,
                "",
                search
              );
              router.push("/fp/product?filter=true");
            }}
          >
            <div className={styles.form_card}>
              <div className={styles.form_status}>
                <label htmlFor="search">نام محصول:</label>
                <input type="text" name="search" id="search" />
              </div>
            </div>
            <div className={styles.form_card}>
              <h6 className={styles.form_header}>وضعیت محصول:</h6>
              <div className={styles.form_status}>
                <label className={styles.form_status_checkboxLabel}>
                  {/* <input className={styles.form_status_checkbox} type="checkbox" name="active" id="active" /> */}
                  <input
                    className={styles.form_status_checkbox}
                    type="radio"
                    name="product_status"
                    value={1}
                    checked={true}
                  />
                  آماده در انبار
                </label>
                <label className={styles.form_status_checkboxLabel}>
                  {/* <input className={styles.form_status_checkbox} type="checkbox" name="inactive" id="inactive" /> */}
                  <input
                    className={styles.form_status_checkbox}
                    type="radio"
                    name="product_status"
                    value={2}
                  />
                  تولید بعد از سفارش
                </label>
                <label className={styles.form_status_checkboxLabel}>
                  {/* <input className={styles.form_status_checkbox} type="checkbox" name="accepted" id="accepted" /> */}
                  <input
                    className={styles.form_status_checkbox}
                    type="radio"
                    name="product_status"
                    value={3}
                  />
                  سفارش سازی فروش
                </label>
                <label className={styles.form_status_checkboxLabel}>
                  {/* <input className={styles.form_status_checkbox} type="checkbox" name="failed" id="failed" /> */}
                  <input
                    className={styles.form_status_checkbox}
                    type="radio"
                    name="product_status"
                    value={4}
                  />
                  موجود نیست
                </label>
              </div>
            </div>
            <div className={styles.form_card}>
              <h6 className={styles.form_header}>قیمت :</h6>
              <label className={styles.form_card_label}>
                از
                <input
                  value={filterData.price_from}
                  className={styles.form_card_input}
                  type="number"
                  name="price_from"
                  onChange={(e) => {
                    setFilterData((pre) => {
                      return {
                        ...pre,
                        price_from: e.target.value,
                      };
                    });
                  }}
                />
                تومان تا
                <input
                  value={filterData.price_to}
                  className={styles.form_card_input}
                  type="number"
                  name="price_to"
                  onChange={(e) => {
                    setFilterData((pre) => {
                      return {
                        ...pre,
                        price_to: e.target.value,
                      };
                    });
                  }}
                />
                تومان
              </label>
              <input
                value={filterData.price_to}
                className={styles.form_card_input_range}
                type="range"
                step="10"
                max="100000"
                min="0"
                onChange={(e) => {
                  setFilterData((pre) => {
                    return {
                      ...pre,
                      price_to: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className={styles.form_card}>
              <h6 className={styles.form_header}>موجودی :</h6>
              <label className={styles.form_card_label}>
                از
                <input
                  value={filterData.inventory_from}
                  className={styles.form_card_input}
                  type="number"
                  onChange={(e) => {
                    setFilterData((pre) => {
                      return {
                        ...pre,
                        inventory_from: e.target.value,
                      };
                    });
                  }}
                />
                عدد تا
                <input
                  value={filterData.inventory_to}
                  className={styles.form_card_input}
                  type="number"
                  onChange={(e) => {
                    setFilterData((pre) => {
                      return {
                        ...pre,
                        inventory_to: e.target.value,
                      };
                    });
                  }}
                />
                عدد
              </label>
            </div>
            <div className={styles.form_buttons}>
              <button type="submit" className={styles.form_buttonSubmit}>
                اعمال فیلترها
              </button>
              <button
                type="reset"
                className={styles.form_clearFilter}
                onClick={() => {
                  document.getElementById("formFilter").reset();
                  setFilterData({
                    price_from: 0,
                    price_to: 0,
                    inventory_from: 0,
                    inventory_to: 0,
                  });
                }}
              >
                تنظیم مجدد
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
// export
const connector = connect(mapState, { getProduct });
export default connector(FilterProduct);
FilterProduct.Layout = Layout;

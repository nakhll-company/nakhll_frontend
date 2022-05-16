// next libraries
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// components
import Sort from "../sort";
import Edit from "../edit";
import Footer from "./desktopFooter";
import MobileHeader from "../../../components/mobileHeader";
import CustomBadge from "../../../components/custom/customBadge";
import CustomLabel from "../../../components/custom/customLabel";
import CustomModal from "../../../components/custom/customModal";
// styles
import styles from "../../../styles/pages/product/mobileList.module.scss";

const MobileList = ({ loading, productList, activeHojreh, getProduct }) => {
  let [showModalSort, setShowModalSort] = useState(false);
  let [showModalEdit, setShowModalEdit] = useState(false);

  return (
    <div className={styles.wrapper}>
      <MobileHeader
        title="لیست محصولات"
        type="search"
        linkSearch="/fp/product/filter"
      />
      <div className={styles.product_header}>
        <Link href={`/fp/product/filter`}>
          <a className={styles.product_header_link}>فیلتر</a>
        </Link>
        <a
          className={styles.product_header_link}
          onClick={() => {
            setShowModalSort((showModal) => !showModal);
          }}
        >
          ترتیب نمایش
        </a>
        <a
          className={styles.product_header_link}
          onClick={() => {
            setShowModalEdit((showModal) => !showModal);
          }}
        >
          ویرایش گروهی
        </a>
      </div>
      {loading ? (
        <div className={styles.loading_image}>
          <Image src="/loading.svg" alt="loding" width="40px" height="40px" />
        </div>
      ) : productList.results && productList.results.length > 0 ? (
        productList.results.map((value, index) => {
          return (
            <Link
              href={`/fp/product/update/product/${value.ID}`}
              key={index}
              passHref
            >
              <div className={`${styles.product_card}`}>
                <div className={styles.first_row}>
                  <div className={styles.product_name_wrapper}>
                    <div style={{ width: "50px", height: "50px" }}>
                      <Image
                        src={value.image_thumbnail_url}
                        alt="product"
                        layout="responsive"
                        width={45}
                        height={45}
                      />
                    </div>
                    <h6 className={`${styles.name_product}`}>{value.Title}</h6>
                  </div>
                  <i className={`fas fa-ellipsis-v ${styles.icon_more}`}></i>
                </div>
                <div className={styles.second_row}>
                  <CustomLabel
                    type="normal"
                    value={value.Inventory}
                    label="موجودی"
                  />
                  {value.OldPrice === 0 && (
                    <CustomLabel
                      type="normal"
                      value={`${value.Price / 10}تومان`}
                      label="قیمت"
                    />
                  )}
                  {value.OldPrice !== 0 && (
                    <CustomLabel
                      type="price"
                      valuePrice={value.OldPrice / 10}
                      valueOldPrice={`${value.Price / 10}تومان`}
                      label="قیمت"
                    />
                  )}
                </div>
                <div className={styles.third_row}>
                  <div>
                    <span className={styles.icons}>
                      <i className="fas fa-shopping-basket"></i>
                      {value.total_sell}
                    </span>
                    <span className={styles.icons}>
                      <i className="far fa-star"></i>
                      {value.star}({value.comments_count} نظر)
                    </span>
                  </div>
                  <CustomBadge
                    title={value.status}
                    color="#089319"
                    backgroundColor="rgba(8, 147, 25, 0.15)"
                    customBadgeStyle={{
                      borderRadius: "3px",
                      padding: "2px 6px",
                    }}
                  />
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <h3 style={{ marginTop: "10px", textAlign: "center" }}>
          موردی برای نمایش وجود ندارد
        </h3>
      )}
      <table>
        <tfoot>
          <Footer
            productList={productList}
            getProduct={getProduct}
            activeHojreh={activeHojreh}
          />
        </tfoot>
      </table>
      <CustomModal
        show={showModalSort}
        onClose={() => {
          setShowModalSort((showModal) => !showModal);
        }}
        content={
          <Sort
            setShowModalSort={setShowModalSort}
            activeHojreh={activeHojreh}
          />
        }
      />
      <CustomModal
        show={showModalEdit}
        onClose={() => {
          setShowModalEdit((showModal) => !showModal);
        }}
        content={<Edit />}
      />
      <Link href={`/fp/product/create`}>
        <a className={styles.add_product}>
          <i className="fa fa-plus"></i>
        </a>
      </Link>
    </div>
  );
};
// export
export default MobileList;

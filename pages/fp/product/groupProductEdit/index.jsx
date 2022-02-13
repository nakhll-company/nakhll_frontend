// node libraries
import { useState } from "react";
import { useSelector } from "react-redux";
// methods
import { successMessage } from "../../../../utils/toastifyMessage";
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
// scss
import styles from "./groupProduct.module.scss";

const GroupProduct = () => {
  const [showResult, setShowResult] = useState({
    old_products: 0,
    new: 0,
    total_rows: 0,
    na_rows: 0,
    slug_duplicate_rows: 0,
  });
  const activeHojreh = useSelector((state) => state.User.activeHojreh);

  return (
    <div className={styles.main_wrapper}>
      <form onSubmit={async (event) => {
        event.preventDefault();
        let excel = document.getElementById('productExcelUpload').files[0];
        let zipFile = document.getElementById('productZipFile').files[0];
        let data = new FormData();
        data.append('product-excel-upload', excel);
        data.append('product-zip-file', zipFile);
        successMessage('درحال بارگزاری محصولات...')
        let response = await ApiRegister().apiRequest(
          data, "post",
          `/api/v1/product/group-update/${activeHojreh}/`,
          true, {}
        );
        if (response.status === 200) {
          successMessage("محصول با موفقیت بارگزاری شد");
          setShowResult(response.data);

        }
      }} className="d-flex flex-column align-items-center">
        <div className="mt-4" name="mainPhoto">
          <div className={styles.product_image_container}>
            <h6>لطفا فایل مورد نظر خود را وارد نمایید</h6>
            <label
              style={{ marginTop: 10, marginRight: 10 }}
              htmlFor="productExcelUpload"
            >
              <div className={styles.add_image_container}>
                <i style={{ fontSize: "25px" }}>+</i>
                <p style={{ fontSize: "15px" }} className="mt-2">
                  افزودن فایل csv
                </p>
              </div>
            </label>
            {/* input file */}
            <input
              style={{ width: "0px", height: "0px", opacity: "0px" }}
              type="file"
              id="productExcelUpload"
              name="productExcelUpload"
              accept=".csv"
            ></input>
            <label
              style={{ marginTop: 10, marginRight: 10 }}
              htmlFor="productZipFile"
            >
              <div className={styles.add_image_container}>
                <i style={{ fontSize: "25px" }}>+</i>
                <p style={{ fontSize: "15px" }} className="mt-2">
                  افزودن فایل zip
                </p>
              </div>
            </label>
            <input
              style={{ width: "0px", height: "0px", opacity: "0px" }}
              type="file"
              id="productZipFile"
              name="productZipFile"
              accept=".zip,.rar,.7zip"
            ></input>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="submit"
            id="sumbitButton"
            className={`${styles.form_buttonSubmit} mx-5`}
            style={{ fontSize: "18px", width: "200px" }}
          >
            ثبت محصولات
          </button>
          <button
            type="button"
            id="buttonUodo"
            className={styles.form_buttonSubmit}
            style={{ fontSize: "18px", width: "200px" }}
            onClick={async () => {
              let response = await ApiRegister().apiRequest(
                null,
                "get",
                `/api/v1/product/group-undo/${activeHojreh}/`,
                true, {}
              );
              if (response.status === 200) {
                successMessage("درخواست لغو بارگزاری با موفقیت ارسال شد");
              }
            }}
          >
            لغو بارگزاری
          </button>
        </div>
      </form>
      <div className="d-flex flex-column mt-5">
        <span>تعداد کل سطرها: {showResult.total_rows}</span>
        <span>تعداد ستون های خالی: {showResult.na_rows}</span>
        <span>
          مجموع سطر هایی که نام محصول تکراری است:{" "}
          {showResult.slug_duplicate_rows}
        </span>
        <span>تعداد محصولات بروزرسانی شده: {showResult.old_products}</span>
        {/* <span>تعداد محصولاتی که جدید ایجاد شده: {showResult.new}</span> */}
      </div>
    </div>
  );
};
// export
export default GroupProduct;

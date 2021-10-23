// methods
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
import { errorMessage, successMessage } from "../../../../containers/utils/message";
// scss
import styles from "./groupProduct.module.scss";
import { useSelector } from "react-redux";

const GroupProduct = (data) => {
  const activeHojreh = useSelector(state => state.User.activeHojreh);
  return (
    <div className={styles.main_wrapper}>
      <form onSubmit={async (event) => {
        event.preventDefault();
        let excel = document.getElementById('productExcelUpload').files[0];
        let zipFile = document.getElementById('productZipFile').files[0];
        let data = new FormData();
        data.append('product-excel-upload', excel);
        data.append('product-zip-file', zipFile);
        let loadData = data;
        successMessage('درحال بارگزاری محصولات...')
        let response = await ApiRegister().apiRequest(
          loadData,
          "post",
          `/api/v1/product/group-create-edit/${activeHojreh}/`,
          true,
          {}
        );
        if (response.status === 200) {
          successMessage(`عملیات با موقیت انجام شد.\n ${response.data.available_rows} محصول بروزرسانی شد.\n ${response.data.unavailable_rows} محصول ایجاد شد.\د.`);
          errorMessage(`${response.data.slug_duplicate_rows} عنوان محصول تکراری است.\n${response.data.na_rows} بارکد محصول خالی است.`)

        } else {
          errorMessage('مشکلی رخ داده است.');
        }
      }} className="d-flex flex-column align-items-center">
        <div className="mt-4" name="mainPhoto">
          <div className={styles.product_image_container}>
            <h6>لطفا فایل مورد نظر خود را وارد نمایید</h6>
            <label style={{ marginTop: 10, marginRight: 10 }} htmlFor="productExcelUpload">
              <div className={styles.add_image_container}>
                <i style={{ fontSize: "25px" }}>+</i>
                <p style={{ fontSize: "15px" }} className="mt-2">
                  افزودن فایل csv
                </p>
              </div>
            </label>
            {/* input file */}
            <input style={{ width: "0px", height: "0px", opacity: "0px" }}
              type="file" id="productExcelUpload" name="productExcelUpload" accept=".csv"
            >
            </input>
            <label style={{ marginTop: 10, marginRight: 10 }} htmlFor="productZipFile">
              <div className={styles.add_image_container}>
                <i style={{ fontSize: "25px" }}>+</i>
                <p style={{ fontSize: "15px" }} className="mt-2">
                  افزودن فایل zip
                </p>
              </div>
            </label>
            {/* input file */}
            <input style={{ width: "0px", height: "0px", opacity: "0px" }}
              type="file" id="productZipFile" name="productZipFile" accept=".zip,.rar,.7zip"
            >
            </input>
          </div>
        </div>
        <button
          type="submit"
          id="sumbitButton"
          className={styles.form_buttonSubmit}
        >
          ثبت محصولات
        </button>
      </form>
    </div>
  )
}
// export
export default GroupProduct;

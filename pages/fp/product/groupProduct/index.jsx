// methods
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
import { errorMessage,successMessage } from "../../../../containers/utils/message";
// scss
import styles from "./groupProduct.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getActiveHojreh } from "../../../../redux/actions/user/getActiveHojreh";


const GroupProduct = (data) =>{
    const activeHojreh = useSelector(state => state.User.activeHojreh);
    return(
        <div className={styles.main_wrapper}>
            <form onSubmit={async(event)=>{
                event.preventDefault();
                let excel = document.getElementById('productExcelUpload').files[0];
                let data = new FormData();
                data.append('product-excel-upload', excel);
                let loadData = data
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
            }}>
                <div className="mt-4" name="mainPhoto">
                    <div className={styles.product_image_container}>
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
                        type="file" id="productExcelUpload" name="productExcelUpload"
                      >
                      </input>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="sumbitButton"
                    className={styles.form_buttonSubmit}
                  >
                    ثبت محصول
                  </button>
            </form>
        </div>
    )
}
// export
export default GroupProduct;

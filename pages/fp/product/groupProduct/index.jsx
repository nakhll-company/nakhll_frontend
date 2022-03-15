// node libraries
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
// methods
import { createGroupProducts, undoGroupProducts } from "../../../../api/product/groupProduct";
import { getGroupProductCsvData } from "../../../../redux/actions/product/getGroupProductCsvData";
import { getGroupProductCsvHeader } from "../../../../redux/actions/product/getGroupProductCsvHeader";
import { previewFileCsv } from "../../../../containers/product/groupProduct/methods/previewFileCsv";
// scss
import styles from "./groupProduct.module.scss";

const GroupProduct = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const [file, setFile] = useState();
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
            <h1>بارگذاری محصولات به صورت گروهی</h1>
            <form onSubmit={(event) => { createGroupProducts(event, setShowResult, activeHojreh) }} className="d-flex flex-column align-items-center">
                <div className={styles.inputs_wrapper}>
                    {/* input csv */}
                    <div className={styles.input_file_wrapper}>
                        <h6>لطفا فایل csv خود را آپلود نمایید.</h6>
                        <input className={styles.inputs_file} type="file" id="productExcelUpload" name="productExcelUpload" accept=".csv"
                            onChange={(e) => { setFile(e.target.files[0]); }}
                        />
                        {file && <div className={styles.preview_wrapper}>
                            <span>مشخصات فایل</span><br />
                            <span>نام فایل : {file.name}</span><br />
                            <span>حجم فایل : {file.size}</span><br />
                            <button type="button" className={styles.button_preview} onClick={async (event) => {
                                await previewFileCsv(event, file, dispatch, getGroupProductCsvData, getGroupProductCsvHeader);
                                await router.push("/fp/product/groupProduct/previewCsv");
                            }}>پیش نمایش</button>
                        </div>}
                        <label className={styles.inputs_label} htmlFor="productExcelUpload">
                            <div className={styles.add_image_container}>
                                <i style={{ fontSize: "25px" }}>+</i>
                                <p style={{ fontSize: "15px" }} className="mt-2">
                                    افزودن فایل csv
                                </p>
                            </div>
                        </label>
                    </div>
                    {/* input zip */}
                    <div className={styles.input_file_wrapper}>
                        <h6>لطفا فایل zip خود را آپلود نمایید.</h6>
                        <input className={styles.inputs_file} type="file" id="productZipFile" name="productZipFile" accept=".zip,.rar,.7zip" />
                        <label className={styles.inputs_label} htmlFor="productZipFile">
                            <div className={styles.add_image_container}>
                                <i style={{ fontSize: "25px" }}>+</i>
                                <p style={{ fontSize: "15px" }} className="mt-2">
                                    افزودن فایل zip
                                </p>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" id="sumbitButton" className={`${styles.form_buttonSubmit} mx-5`}>
                        ثبت محصولات
                    </button>
                    <button type="button" id="buttonUodo" className={styles.form_buttonSubmit} onClick={() => { undoGroupProducts(activeHojreh) }}>
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
                <span>تعداد محصولاتی که جدید ایجاد شده: {showResult.new}</span>
            </div>
        </div>
    );
};
// export
export default GroupProduct;

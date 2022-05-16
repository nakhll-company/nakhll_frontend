// node libraries
import Head from "next/head";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import Layout from "../../../../components/layout/Layout";
// methods
import { errorMessage } from "../../../../utils/toastifyMessage";
import {
  createGroupProducts,
  undoGroupProducts,
} from "../../../../api/product/groupProduct";
import { getGroupProductCsvData } from "../../../../redux/actions/product/getGroupProductCsvData";
import { previewFileCsv } from "../../../../containers/product/groupProduct/methods/previewFileCsv";
import { getGroupProductCsvHeader } from "../../../../redux/actions/product/getGroupProductCsvHeader";
import { tableValidition } from "../../../../containers/product/groupProduct/methods/tableValidition";
import { changeCsvColumns } from "../../../../containers/product/groupProduct/methods/changeCsvColumns";
import { calculateFileSize } from "../../../../containers/product/groupProduct/methods/calculateFileSize";
// scss
import styles from "./previewCsv.module.scss";

const PreviewCsv = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [zipFile, setZipFile] = useState();
  const [updateCsv, setUpdateCsv] = useState([]);
  const [nextStep, setNextStep] = useState(false);
  const [showResult, setShowResult] = useState({
    old_products: 0,
    new: 0,
    total_rows: 0,
    na_rows: 0,
    slug_duplicate_rows: 0,
  });
  const activeHojreh = useSelector((state) => state.User.activeHojreh);
  const groupProductCsvData = useSelector(
    (state) => state.Product.groupProductCsvData
  );
  const groupProductCsvHeader = useSelector(
    (state) => state.Product.groupProductCsvHeader
  );

  return (
    <div className={styles.main_wrapper}>
      <Head>
        <title>ثبت محصولات به صورت گروهی</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1 className="text-center">بارگذاری محصولات به صورت گروهی</h1>
        <form
          id="myform"
          onSubmit={(event) => {
            event.preventDefault();
            let errors = document.querySelectorAll(`.${styles.error}`);
            if (errors.length > 0) {
              errorMessage("لطفا خطاهای مشخص شده را برطرف نمایید");
            } else {
              createGroupProducts(event, setShowResult, activeHojreh);
            }
          }}
          className="d-flex flex-column align-items-center"
        >
          <div className={styles.inputs_wrapper}>
            {/* input csv */}
            <div className={styles.input_file_wrapper}>
              <h5>لطفا فایل csv خود را آپلود نمایید.</h5>
              <input
                className={styles.inputs_file}
                type="file"
                id="productExcelUpload"
                name="productExcelUpload"
                accept=".csv"
                onChange={(event) => {
                  setFile(event.target.files[0]);
                  previewFileCsv(
                    event,
                    event.target.files[0],
                    dispatch,
                    getGroupProductCsvData,
                    getGroupProductCsvHeader
                  );
                }}
              />
              {file && (
                <div className={styles.preview_wrapper}>
                  <span>مشخصات فایل</span>
                  <br />
                  <span>نام فایل : {file.name}</span>
                  <br />
                  <span>حجم فایل : {calculateFileSize(file)}</span>
                  <br />
                </div>
              )}
              <label
                className={styles.inputs_label}
                htmlFor="productExcelUpload"
              >
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
              <h5>لطفا فایل zip خود را آپلود نمایید.</h5>
              <input
                className={styles.inputs_file}
                type="file"
                id="productZipFile"
                name="productZipFile"
                accept=".zip,.rar,.7zip"
                onChange={(event) => {
                  setZipFile(event.target.files[0]);
                }}
              />
              {zipFile && (
                <div className={styles.preview_wrapper}>
                  <span>مشخصات فایل</span>
                  <br />
                  <span>نام فایل : {zipFile.name}</span>
                  <br />
                  <span>حجم فایل : {calculateFileSize(zipFile)}</span>
                  <br />
                </div>
              )}
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
        </form>
      </div>
      {false && file && zipFile && (
        <>
          <hr className="mb-5" />
          <div>
            <h2 className="mb-4">مرحله اول - انتخاب نام ستون ها</h2>
            <p>
              لطفا اسم ستون های فایل بارگذاری شده را براساس اسم هایی که در سلکت
              باکس موجود می باشند تغییر دهید
            </p>
            <p>
              ستون هایی با نام عنوان، بارکد، موجودی، قیمت جدید، قیمت قدیم، دسته
              بندی، عکس اصلی باید حتما در فایل بارگذاری شده موجود باشند
            </p>
            {groupProductCsvHeader.map((column, index) => {
              return (
                <select
                  key={index}
                  className={styles.select_box_colmuns}
                  onChange={(event) => {
                    changeCsvColumns(
                      event,
                      groupProductCsvData,
                      setUpdateCsv,
                      column,
                      setNextStep
                    );
                  }}
                >
                  <option value={column}>{column}</option>
                  <option value="barcode">بارکد</option>
                  <option value="Title">عنوان</option>
                  <option value="Inventory">موجودی</option>
                  <option value="Price">قیمت جدید</option>
                  <option value="OldPrice">قیمت قدیم</option>
                  <option value="Net_Weight">وزن</option>
                  <option value="Weight_With_Packing">وزن با بسته بندی</option>
                  <option value="category_id">دسته بندی</option>
                  <option value="image_1">عکس اصلی</option>
                  <option value="image_2">عکس دوم</option>
                  <option value="image_3">عکس سوم</option>
                </select>
              );
            })}
          </div>
        </>
      )}
      {false && nextStep && (
        <>
          <hr className="my-5" />
          <div>
            <h2 className="mb-4">مرحله دوم - تصحیح داده های جدول</h2>
            <p>هیچکدام از داده های جدول نباید مقدار خالی داشته باشند</p>
            <p>
              در صورتی که محصول مورد نظر تخفیف ندارد لطفا ستون قیمت قدیم را با
              مقدار صفر پرنمایید و قیمت محصول را در ستون قیمت جدید بنویسید
            </p>
            <table className={styles.table}>
              <thead>
                <tr className={styles.tr} key={"header"}>
                  {updateCsv.length > 0 &&
                    Object.keys(updateCsv[0]).map((value, index) => {
                      switch (value) {
                        case "Title":
                          return (
                            <th className={styles.th} key={index}>
                              عنوان
                            </th>
                          );
                        case "barcode":
                          return (
                            <th className={styles.th} key={index}>
                              بارکد
                            </th>
                          );
                        case "Inventory":
                          return (
                            <th className={styles.th} key={index}>
                              موجودی
                            </th>
                          );
                        case "Price":
                          return (
                            <th className={styles.th} key={index}>
                              قیمت جدید
                            </th>
                          );
                        case "OldPrice":
                          return (
                            <th className={styles.th} key={index}>
                              قیمت قدیم
                            </th>
                          );
                        case "Net_Weight":
                          return (
                            <th className={styles.th} key={index}>
                              وزن
                            </th>
                          );
                        case "Weight_With_Packing":
                          return (
                            <th className={styles.th} key={index}>
                              وزن با بسته بندی
                            </th>
                          );
                        case "category_id":
                          return (
                            <th className={styles.th} key={index}>
                              دسته بندی
                            </th>
                          );
                        case "image_1":
                          return (
                            <th className={styles.th} key={index}>
                              عکس اصلی
                            </th>
                          );
                        case "image_2":
                          return (
                            <th className={styles.th} key={index}>
                              عکس دوم
                            </th>
                          );
                        case "image_3":
                          return (
                            <th className={styles.th} key={index}>
                              عکس سوم
                            </th>
                          );
                      }
                    })}
                  <th className={styles.th}>حذف</th>
                </tr>
              </thead>
              <tbody>
                {updateCsv.length > 0 &&
                  updateCsv.map((item, index) => (
                    <tr className={styles.tr} key={Math.random()}>
                      {Object.keys(item).map((key) => (
                        <td
                          className={`${styles.td} ${
                            tableValidition(key, item[key]) ? styles.error : ""
                          }`}
                          key={Math.random() * 0.1}
                        >
                          <input
                            type="text"
                            defaultValue={item[key]}
                            className={styles.readOnly_input}
                            readOnly={true}
                            onDoubleClick={(event) => {
                              event.currentTarget.removeAttribute("readonly");
                            }}
                            onBlur={(event) => {
                              let newArray = updateCsv;
                              newArray[index][key] = event.target.value;
                              setUpdateCsv([...newArray]);
                            }}
                          />
                        </td>
                      ))}
                      <td className={`${styles.td}`}>
                        <i
                          className="fas fa-trash"
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={() => {
                            let newArray = [...updateCsv];
                            newArray.splice(index, 1);
                            setUpdateCsv([...newArray]);
                          }}
                        ></i>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-around">
            <button
              form="myform"
              type="submit"
              id="sumbitButton"
              className={`${styles.form_buttonSubmit} mx-5`}
            >
              ثبت محصولات
            </button>
            <button
              form="myform"
              type="button"
              id="buttonUodo"
              className={styles.form_buttonSubmit}
              onClick={() => {
                undoGroupProducts(activeHojreh);
              }}
            >
              لغو بارگزاری
            </button>
          </div>
          <div className="d-flex flex-column mt-5">
            <span>تعداد کل سطرها: {showResult.total_rows}</span>
            <span>تعداد ستون های خالی: {showResult.na_rows}</span>
            <span>
              مجموع سطر هایی که نام محصول تکراری است:{" "}
              {showResult.slug_duplicate_rows}
            </span>
            <span>تعداد محصولاتی که جدید ایجاد شده: {showResult.new}</span>
          </div>
        </>
      )}
      <div className="d-flex justify-content-around">
        <button
          form="myform"
          type="submit"
          id="sumbitButton"
          className={`${styles.form_buttonSubmit} mx-5`}
        >
          ثبت محصولات
        </button>
        <button
          form="myform"
          type="button"
          id="buttonUodo"
          className={styles.form_buttonSubmit}
          onClick={() => {
            undoGroupProducts(activeHojreh);
          }}
        >
          لغو بارگزاری
        </button>
      </div>
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
export default PreviewCsv;
PreviewCsv.Layout = Layout;

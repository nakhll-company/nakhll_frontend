// node libraries
import Link from "next/link";
import { useState } from "react";
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
// components
import EmptyLayout from "../../../../components/layout/EmptyLayout";
// scss
import styles from "./previewCsv.module.scss";

const PreviewCsv = () => {

    const productProperties = ["barcode", "Title", "Inventory", "Price", "OldPrice", "Net_Weight", "Weight_With_Packing", "category_id", "image_1"];
    const [colmuns, setColmuns] = useState([]);
    const groupProductCsvData = useSelector((state) => state.Product.groupProductCsvData);
    const groupProductCsvHeader = useSelector((state) => state.Product.groupProductCsvHeader);

    let newArray = [];


    return (
        <div className={styles.main_wrapper}>
            <h1>فایل اکسل بارگذاری شده</h1>
            <div className="d-flex justify-content-end">
                <div className={styles.button_export}>
                    <CSVLink data={groupProductCsvData}>خروجی گرفتن از فایل اکسل</CSVLink>
                </div>
                <Link href={"/fp/product/groupProduct/"}><a className={styles.button_back}>بازگشت به صفحه قبل</a></Link>
            </div>
            <div>
                <h2>مرحله اول - انتخاب نام ستون ها</h2>
                <p>لطفا اسم ستون ها را براساس اسم هایی که موجود هستند تغییر دهید</p>
                {groupProductCsvHeader.map((value, index) => {
                    return (
                        <select key={index} className={styles.select_box_colmuns} onChange={(event) => {
                            newArray = groupProductCsvData.map(csvData => {
                                switch (event.target.value) {
                                    case "barcode":
                                        return {
                                            ...csvData,
                                            barcode: csvData[value],
                                        };
                                    case "Title":
                                        return {
                                            ...csvData,
                                            Title: csvData[value],
                                        };
                                    case "Inventory":
                                        return {
                                            ...csvData,
                                            Inventory: csvData[value],
                                        };
                                    case "Price":
                                        return {
                                            ...csvData,
                                            Price: csvData[value],
                                        };
                                    case "OldPrice":
                                        return {
                                            ...csvData,
                                            OldPrice: csvData[value],
                                        };
                                    case "Net_Weight":
                                        return {
                                            ...csvData,
                                            Net_Weight: csvData[value],
                                        };
                                    case "Weight_With_Packing":
                                        return {
                                            ...csvData,
                                            Weight_With_Packing: csvData[value],
                                        };
                                    case "category_id":
                                        return {
                                            ...csvData,
                                            category_id: csvData[value],
                                        };
                                    case "image_1":
                                        return {
                                            ...csvData,
                                            image_1: csvData[value],
                                        };
                                    case "image_2":
                                        return {
                                            ...csvData,
                                            image_2: csvData[value],
                                        };
                                    case "image_3":
                                        return {
                                            ...csvData,
                                            image_3: csvData[value],
                                        };
                                    default:
                                        break;
                                }
                            });
                            console.log(">>>>", newArray);
                        }}>
                            <option value={value}>{value}</option>
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
                    )
                })}
            </div>
            {/* <table className={styles.table}>
                <thead>
                    <tr className={styles.tr} key={"header"}>
                        {groupProductCsvHeader.map((value, index) => (
                            <th className={styles.th} key={index}>{value}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {groupProductCsvData.map((item, index) => (
                        <tr className={styles.tr} key={index}>
                            {Object.values(item).map((value, index) => (
                                <td className={styles.td} key={index}>
                                    <input type="text" value={value} className={styles.readOnly_input} readOnly />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    );
}
// export
export default PreviewCsv;
PreviewCsv.Layout = EmptyLayout;
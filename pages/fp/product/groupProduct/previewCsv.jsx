// node libraries
import { useSelector } from "react-redux";
// components
import EmptyLayout from "../../../../components/layout/EmptyLayout";
// scss
import styles from "./previewCsv.module.scss";

const PreviewCsv = () => {

    const groupProductCsvData = useSelector((state) => state.Product.groupProductCsvData);
    const groupProductCsvHeader = useSelector((state) => state.Product.groupProductCsvHeader);

    return (
        <div className={styles.main_wrapper}>
            <h1>فایل اکسل بارگذاری شده</h1>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tr} key={"header"}>
                        {groupProductCsvHeader.map((value, index) => (
                            <th className={styles.th} key={index}>{value}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {groupProductCsvData.map((item) => (
                        <tr className={styles.tr} key={item.id}>
                            {Object.values(item).map((value, index) => (
                                <td className={styles.td} key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
// export
export default PreviewCsv;
PreviewCsv.Layout = EmptyLayout;
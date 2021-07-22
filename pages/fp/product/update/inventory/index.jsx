// node libraries
import { connect } from 'react-redux';
// component
import Layout from '../../../../../components/layout/Layout';
import MobileHeader from '../../../../../components/mobileHeader';
import useViewport from "../../../../../components/viewPort";
// methods
import { mapState } from '../../../../../containers/product/methods/mapState';
import { ApiRegister } from '../../../../../services/apiRegister/ApiRegister';
// scss
import styles from '../../../../../styles/pages/product/editInventory.module.scss';

const Inventory = ({ productList }) => {

    const { width } = useViewport();
    const breakpoint = 620;

    const _handleRequestApi = async (data) => {
        let params = {};
        let loadData = data;
        let dataUrl = `/api/v1/shop/multiple-update/inventory/`;
        let response = await ApiRegister().apiRequest(
            loadData,
            "PATCH",
            dataUrl,
            true,
            params
        );
    };

    return (
        <>
            {width < breakpoint &&
                <div className={styles.wrapper}>
                    <MobileHeader title="ویرایش موجودی محصولات" type="back" />
                    <div className={styles.header}>
                        <span className={styles.header_first_child}>عنوان محصول</span>
                        <span className={styles.header_last_child}>موجودی</span>
                    </div>
                    <form className={styles.form_edit} onSubmit={(e) => {
                        e.preventDefault();
                        const data = new FormData(e.target);
                        const value = Object.fromEntries(data.entries());
                        const objArray = [];
                        let formValues = Object.values(value);
                        Object.keys(value).forEach((key, index) => {
                            if (index % 2 === 0) {
                                objArray.push({
                                    Slug: formValues[index + 0],
                                    Inventory: formValues[index + 1],
                                })
                            }
                        });
                        _handleRequestApi(objArray);
                    }}>
                        {productList.length > 0 ? productList.map((value, index) => {
                            return (
                                <div key={index} className={styles.form_edit_card}>
                                    <label className={styles.form_edit_label}>{value.title}</label>
                                    <input type="hidden" name={`Slug${index + 100}`} defaultValue={value.slug} />
                                    <input className={styles.form_edit_input} type="number" name={`Inventory${index + 100}`}
                                        defaultValue={value.inventory} />
                                </div>
                            )
                        }) : <h3 style={{ textAlign: "center" }}>موردی برای نمایش وجود ندارد</h3>}
                        <div className={styles.form_edit_wrapper_button}>
                            <button type="submit" className={styles.form_edit_button}>اعمال تغییرات</button>
                        </div>
                    </form>
                </div>
            }
        </>
    );
}
// export
const connector = connect(mapState);
export default connector(Inventory);
Inventory.Layout = Layout;
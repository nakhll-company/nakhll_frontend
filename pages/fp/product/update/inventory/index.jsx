// node libraries
import { connect } from 'react-redux';
// component
import Layout from '../../../../../components/layout/Layout';
import MobileHeader from '../../../../../components/mobileHeader';
// methods
import { mapState } from '../../../../../containers/product/methods/mapState';
// scss
import styles from '../../../../../styles/pages/product/editInventory.module.scss';

const Inventory = ({ productList }) => {
    return (
        <div className={styles.wrapper}>
            <MobileHeader title="ویرایش موجودی محصولات" type="back" />
            <div className={styles.header}>
                <span className={styles.header_first_child}>عنوان محصول</span>
                <span className={styles.header_last_child}>موجودی</span>
            </div>
            <form className={styles.form_edit} onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.target);
            }}>
                {productList.length > 0 && productList.map((value, index) => {
                    return (
                        <div key={index} className={styles.form_edit_card}>
                            <label className={styles.form_edit_label}>{value.title}</label>
                            <input className={styles.form_edit_input} type="number" name={`inventory${index}`}
                                defaultValue={value.inventory} />
                        </div>
                    )
                })}
                <div className={styles.form_edit_wrapper_button}>
                    <button type="submit" className={styles.form_edit_button}>اعمال تغییرات</button>
                </div>
            </form>
        </div>
    );
}
// export
const connector = connect(mapState);
export default connector(Inventory);
Inventory.Layout = Layout;
// node libraries
import { connect } from 'react-redux';
// component
import Layout from '../../../../../components/layout/Layout';
import MobileHeader from '../../../../../components/mobileHeader';
// methods
import { mapState } from '../../../../../containers/product/methods/mapState';
// scss
import styles from '../../../../../styles/pages/product/editPrice.module.scss';

const Price = ({ productList }) => {
    return (
        <div className={styles.wrapper}>
            <MobileHeader title="ویرایش قیمت و تخفیف محصولات" type="back" />
            <div className={styles.header}>
                <span>عنوان محصول</span>
                <span>قیمت</span>
                <span>قیمت با تخفیف</span>
            </div>
            <form className={styles.form_edit} onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                console.log(Object.fromEntries(data.entries()));
            }}>
                {productList.map((value, index) => {
                    return (
                        <div key={index} className={styles.form_edit_card}>
                            <label className={styles.form_edit_label}>{value.title}</label>
                            <input className={styles.form_edit_input} type="number" name={`old_price${index}`}
                                defaultValue={value.old_price} />
                            <input className={styles.form_edit_input} type="number" name={`price${index}`}
                                defaultValue={value.price} />
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
export default connector(Price);
Price.Layout = Layout;
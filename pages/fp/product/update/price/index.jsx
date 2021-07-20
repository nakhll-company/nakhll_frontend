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

                const value = Object.fromEntries(data.entries());

                value.topics = data.getAll("topics");

                let result = Object.entries(value);
                let kkkk = [];
                for (let i = 0; i < result.length; i + 3) {
                    kkkk.push({
                        Slug: result[i][1],
                        OldPrice: result[i + 1][1],
                        Price: result[i + 2][1]
                    });

                }
                // console.log(">>>", kkkk);
                // const form = new FormData(e.target);
                // let result = Object.fromEntries(form.entries());
                // let data = [];
                // let Slug, OldPrice, Price;
                // let keys = Object.keys(result);
                // let keys = Object.values(result);
                // for (let i = 0; i < keys.length; i + 3) {
                //     data[i] = {
                //         Slug: keys[0],
                //         OldPrice: keys[0 + i],
                //         Price: keys[0 + i]
                //     };
                // for (let j = 0; j < keys.length; j++) {
                //     if (keys[j].includes(`${i + 100}`)) {
                //         if (keys[j].includes('i')) {
                //             Slug = result[`${keys[j]}`];
                //             data.push(Slug);
                //         }
                //         if (keys[j].includes('Old')) {
                //             OldPrice = result[`${keys[j]}`];
                //             data.push(OldPrice);
                //         }
                //         if (keys[j].includes('Price')) {
                //             Price = result[`${keys[j]}`];
                //             data.push(Price);
                //         }
                //     }
                // }
                // }
                // let ggg = [];
                // for (let i = 0; i < 8; i + 3) {
                //     ggg.push({
                //         Slug: data[0],
                //         OldPrice: data[0 + 1],
                //         Price: data[0 + 2]
                //     });

                // }
                // console.log(">>>", data);
            }}>
                {productList.length > 0 ? productList.map((value, index) => {
                    return (
                        <div key={index} className={styles.form_edit_card}>
                            <label className={styles.form_edit_label}>{value.title}</label>
                            <input type="hidden" name={`Slug${index + 100}`} defaultValue={value.slug} />
                            <input className={styles.form_edit_input} type="number" name={`Old${index + 100}`}
                                defaultValue={value.old_price} />
                            <input className={styles.form_edit_input} type="number" name={`Price${index + 100}`}
                                defaultValue={value.price} />
                        </div>
                    )
                }) : <h3 style={{ textAlign: "center" }}>موردی برای نمایش وجود ندارد</h3>}
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
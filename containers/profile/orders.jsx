// node libraries
import Assistent from "zaravand-assistent-number";
// scss
import styles from './scss/orders.module.scss';
/**
 * orders in profile
 */
const _asist = new Assistent();

const Orders = () => {
    return (
        <div className={styles.main_wrapper}>
            <h1>لیست سفارشات</h1>
            <table>
                <thead>
                    <tr>
                        <th>ردیف</th>
                        <th>شماره سفارش</th>
                        <th>تاریخ ثبت</th>
                        <th>مبلغ پرداخت شده</th>
                        <th>لیست محصولات</th>
                        <th>وضعیت</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{_asist.number(1)}</td>
                        <td>{_asist.number(2504)}</td>
                        <td>1400 / 05 / 23</td>
                        <td>{_asist.PSeparator(3000000)}</td>
                        <td></td>
                        <td>مهلت پرداخت گذشته است</td>
                    </tr>
                    <tr>
                        <td>{_asist.number(2)}</td>
                        <td>{_asist.number(2505)}</td>
                        <td>1400 / 08 / 28</td>
                        <td>{_asist.PSeparator(3000000)}</td>
                        <td></td>
                        <td>مهلت پرداخت گذشته است</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
// export
export default Orders;
// node libraries
import Link from 'next/link';
import Assistent from "zaravand-assistent-number";
// component
import CustomSwitch from '../../components/custom/customSwitch';
// scss
import styles from './scss/desktopLanding.module.scss';

const _asist = new Assistent();

const DesktopLanding = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1 className={styles.title}>فرودها</h1>
                <Link href="/liveEdit">
                    <a className={styles.link_add}>
                        <i className="fa fa-plus ms-2"></i>
                        افزودن فرود
                    </a>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ردیف</th>
                        <th>نام</th>
                        <th>تاریخ ثبت</th>
                        <th>وضعیت</th>
                        <th>پیش نمایش</th>
                        <th>حذف</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{_asist.number(1)}</td>
                        <td>تست فرود</td>
                        <td>{_asist.number('1400/05/31')}</td>
                        <td className="d-flex justify-content-center pb-3">
                            <CustomSwitch defaultChecked={true} id="active" />
                        </td>
                        <td><i className="fas fa-eye"></i></td>
                        <td><i className="far fa-trash-alt"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
// export
export default DesktopLanding;
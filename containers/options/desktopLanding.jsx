// node libraries
import Link from 'next/link';
import { useRouter } from 'next/router';
import Assistent from "zaravand-assistent-number";
// component
import CustomSwitch from '../../components/custom/customSwitch';
// methods
import { errorMessage } from '../utils/message';
import { ApiRegister } from '../../services/apiRegister/ApiRegister';
import { deleteItemListLanding } from './methods/deleteItemListLanding';
import { activeListItemLanding } from './methods/activeListItemLanding';
// scss
import styles from './scss/desktopLanding.module.scss';

const _asist = new Assistent();

const DesktopLanding = ({ landingList, id, activeHojreh, setLandingList }) => {

    const router = useRouter();

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1 className={styles.title}>فرودها</h1>
                {/* <Link href="/liveEdit"> */}
                <span className={styles.link_add} onClick={async () => {
                    let response = await ApiRegister().apiRequest(
                        {
                            name: "صفحه بدون نام",
                            page_data: "",
                            shop: activeHojreh
                        },
                        "post",
                        `/api/v1/shop_landing/${activeHojreh}/`,
                        true,
                        ""
                    );
                    if (response.status === 200) {
                        router.push(`/liveEdit/${activeHojreh}/${response.data.id}`);
                    } else {
                        errorMessage("خطایی رخ داده است");
                    }
                }}>
                    <i className="fa fa-plus ms-2"></i>
                    افزودن فرود
                </span>
                {/* </Link> */}
                <Link href={`/fp/options/landing/orders?id=${id}`}>
                    <a className={styles.link_add}>
                        سفارشات
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
                    {landingList.length > 0 && landingList.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{_asist.number(index + 1)}</td>
                                <td>{value.name}</td>
                                <td>{_asist.number(value.created_at)}</td>
                                <td className="d-flex justify-content-center pb-3" onClick={() => {
                                    value.status === "inactive" && activeListItemLanding(value.id, activeHojreh, setLandingList);
                                }}>
                                    <CustomSwitch defaultChecked={value.status === "active" ? true : false} id="active" />
                                </td>
                                <td>
                                    <Link href={`/showLanding/${activeHojreh}/${value.id}`}>
                                        <a>
                                            <i className="fas fa-eye"></i>
                                        </a>
                                    </Link>
                                </td>
                                <td><i className="far fa-trash-alt" style={{ cursor: "pointer" }} onClick={() => {
                                    deleteItemListLanding(value.id, activeHojreh, setLandingList);
                                }}></i></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
// export
export default DesktopLanding;
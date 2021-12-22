// node libraries
import Link from 'next/link';
import { useRouter } from 'next/router';
import Assistent from "zaravand-assistent-number";
// components
import MobileHeader from '../../components/mobileHeader';
import CustomLabel from '../../components/custom/customLabel';
import CustomSwitch from '../../components/custom/customSwitch';
// methods
import { errorMessage } from '../utils/message';
import { ApiRegister } from '../../services/apiRegister/ApiRegister';
import { deleteItemListLanding } from './methods/deleteItemListLanding';
import { activeListItemLanding } from './methods/activeListItemLanding';
// scss
import styles from './scss/mobileLanding.module.scss';

const _asist = new Assistent();

const MobileLanding = ({ landingList, id, activeHojreh, setLandingList }) => {

    const router = useRouter();
    return (
        <div>
            <MobileHeader type="search" title="فرودها" />
            <div className={styles.wrapper_cart}>
                <div className={styles.wrapper_links}>
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
                        if (response.status === 201) {
                            router.push(`/liveEdit/${activeHojreh}/${response.data.id}`);
                        } else {
                            errorMessage("خطایی رخ داده است");
                        }
                    }}>
                        <i className="fa fa-plus ms-2"></i>
                        افزودن فرود
                    </span>
                    {/* </Link> */}
                    {/* <Link href={`/fp/options/landing/orders?id=${id}`}>
                        <a className={styles.link_add}>
                            سفارشات
                        </a>
                    </Link> */}
                </div>
                {(landingList && landingList.length > 0) ? landingList.map((value, index) => {
                    return (
                        <div className={styles.cart_item} key={index}>
                            <div className="d-flex justify-content-between align-items-center" onClick={() => {
                                value.status === "inactive" && activeListItemLanding(value.id, activeHojreh, setLandingList);
                            }}>
                                <CustomLabel type="normal" value={_asist.number(index + 1)} label="شماره" />
                                <CustomSwitch defaultChecked={value.status === "active" ? true : false} id="active" />
                            </div>
                            <CustomLabel type="normal" value={value.name} label="نام" />
                            <CustomLabel type="normal" value={_asist.number(value.created_at)} label="تاریخ ثبت" />
                            <div className="d-flex justify-content-end align-items-center">
                                <Link href={`/showLanding/${activeHojreh}/${value.id}`}>
                                    <a>
                                        <i className="fas fa-eye mx-3"></i>
                                    </a>
                                </Link>
                                <i className="far fa-trash-alt" onClick={() => { deleteItemListLanding(value.id, activeHojreh, setLandingList) }}></i>
                            </div>
                        </div>
                    )
                }) : <tr>
                    <td colSpan="7">
                        داده ای موجود نیست
                    </td>
                </tr>
                }
            </div>
        </div>
    );
}
// export
export default MobileLanding;
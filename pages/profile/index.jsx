// node libraries
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
// components
import EditProfile from '../../containers/profile/editProfile';
import Oredrs from '../../containers/profile/orders';
// scss
import styles from './profile.module.scss';
/**
 * component profile
 */
const Profile = () => {
    const [profilePages, setProfilePages] = useState({
        editProfile: false,
        ordersPage: false,
        favoritesList: false,
        shoppingExperiences: false
    });
    function activeLink(event) {
        let elementsActive = document.querySelectorAll("li");
        elementsActive.forEach((value) => value.classList.remove(`${styles.active_link}`));
        event.currentTarget.classList.add(`${styles.active_link}`);
    }
    return (
        <div className={`container ${styles.main_wrapper}`}>
            <div className="row">
                <div className={`col-3 ${styles.right_menu}`}>
                    <ul>
                        <li className="d-flex flex-column align-items-center mb-3">
                            <Image src="/productDetail/avatar.png" width="90" height="90" />
                            <h6>سحر شفیعی</h6>
                        </li>
                        <hr />
                        <li className="d-flex align-items-center mb-3"
                            onClick={(event) => {
                                activeLink(event);
                                setProfilePages((pre) => {
                                    return {
                                        ...pre,
                                        editProfile: true
                                    }
                                });
                            }}>
                            <i className="fas fa-user-cog ms-2"></i>
                            ویرایش پروفایل
                        </li>
                        <li className="mb-3" onClick={(event) => { activeLink(event) }}>
                            <Link href="/fp">
                                <a className="d-flex align-items-center">
                                    <i className="fas fa-store ms-2"></i>
                                    مدیریت حجره
                                </a>
                            </Link>
                        </li>
                        <li className="d-flex align-items-center mb-3" onClick={(event) => {
                            activeLink(event);
                            setProfilePages((pre) => {
                                return {
                                    ...pre,
                                    ordersPage: true
                                }
                            });
                        }}>
                            <i className="fas fa-box-open ms-2"></i>
                            پیگیری سفارشات
                        </li>
                        <li className="d-flex align-items-center mb-3" onClick={(event) => { activeLink(event) }}>
                            <i className="far fa-bookmark ms-2"></i>
                            لیست علاقمندی ها
                        </li>
                        <li className="d-flex align-items-center mb-3" onClick={(event) => { activeLink(event) }}>
                            <i className="fas fa-boxes ms-2"></i>
                            تجربه های خرید من
                        </li>
                        <li className="d-flex align-items-center mb-3" onClick={(event) => { activeLink(event) }}>
                            <i className="fas fa-wallet ms-2"></i>
                            موجودی
                        </li>
                    </ul>
                </div>
                <div className={`col-9`}>
                    {profilePages.editProfile && <EditProfile />}
                    {profilePages.ordersPage && <ordersPage />}
                </div>
            </div>
        </div>
    );
}
export default Profile;
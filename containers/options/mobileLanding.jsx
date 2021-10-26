// node libraries
import Assistent from "zaravand-assistent-number";
// components
import MobileHeader from '../../components/mobileHeader';
import CustomLabel from '../../components/custom/customLabel';
import CustomSwitch from '../../components/custom/customSwitch';
// scss
import styles from './scss/mobileLanding.module.scss';

const _asist = new Assistent();

const MobileLanding = () => {
    return (
        <div>
            <MobileHeader type="search" title="فرودها" />
            <div className={styles.wrapper_cart}>
                <div className={styles.cart_item}>
                    <div className="d-flex justify-content-between align-items-center">
                        <CustomLabel type="normal" value={_asist.number(1)} label="شماره" />
                        <CustomSwitch defaultChecked={true} id="active" />
                    </div>
                    <CustomLabel type="normal" value={"تست فرود"} label="نام" />
                    <CustomLabel type="normal" value={_asist.number("1400/05/21")} label="تاریخ ثبت" />
                    <div className="d-flex justify-content-end align-items-center">
                        <i className="fas fa-eye"></i>
                        <i className="far fa-trash-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
// export
export default MobileLanding;
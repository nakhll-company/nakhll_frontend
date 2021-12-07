// methods
import { getAddress } from "../../api/cartAddress/getAddress";
import { deleteAddress } from '../../api/cartAddress/deleteAddress';
// styles
import styles from '../../styles/pages/cart/deleteAddress.module.scss';
/**
 * component delete modal
 */
const DeleteAddress = ({ onClose, id, setAddress }) => {
    return (
        <div>
            <h5 className={styles.text}>آیا از حذف آدرس خود مطمئن هستید؟</h5>
            <div className={styles.wrapper_button}>
                <button type="button" onClick={async () => {
                    await deleteAddress(id);
                    await getAddress(setAddress);
                    await onClose();
                }}>بله</button>
                <button type="button" style={{ color: "red" }} onClick={() => { onClose() }}>خیر</button>
            </div>
        </div>
    );
}
// export
export default DeleteAddress;
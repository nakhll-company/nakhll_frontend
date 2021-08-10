// styles
import styles from '../../styles/pages/cart/deleteAddress.module.scss';
/**
 * component delete modal
 */
const DeleteAddress = ({ onClose }) => {
    return (
        <div>
            <h5 className={styles.text}>آیا از حذف آدرس خود مطمئن هستید؟</h5>
            <div className={styles.wrapper_button}>
                <button type="button">بله</button>
                <button type="button" style={{ color: "red" }} onClick={() => { onClose() }}>خیر</button>
            </div>
        </div>
    );
}
// export
export default DeleteAddress;
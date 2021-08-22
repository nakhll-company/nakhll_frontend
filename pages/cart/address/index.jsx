// node libraries
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Assistent from "zaravand-assistent-number";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
// componentes
import CustomModal from '../../../components/custom/customModal';
import DeleteAddress from '../../../containers/cartAddress/deleteAddress';
import Steps from '../../../components/CheckOutSteps/CheckOutSteps';
import Loading from '../../../components/loading';
// methods
import { getAddress } from '../../../containers/cartAddress/methods/getAddress';
import { checkUserLogin } from '../../../containers/cartAddress/methods/checkUserLogin';
import { sendUserAddress } from '../../../containers/cartAddress/methods/sendUserAddress';
// styles
import styles from '../../../styles/pages/cart/address.module.scss';
/**
 * component address cart 
 * @param {}  => 
 */
const _asist = new Assistent();
const Address = () => {

    const router = useRouter();

    let [loading, setLoading] = useState(true);
    let [showModal, setShowModal] = useState({
        show: false,
        id: 0
    });
    let [address, setAddress] = useState([]);

    useEffect(async () => {
        await checkUserLogin();
        await getAddress(setAddress);
        await setLoading(false);
    }, []);

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
                    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
                    crossOrigin="anonymous"
                />
            </Head>
            <Steps step="2" />
            <ToastContainer />
            {loading ?
                <div className={`col-12 col-lg-5 py-5 my-2 ${styles.wrapper}`}>
                    <Loading />
                </div>
                :
                <div className={`col-12 col-lg-5 ${styles.wrapper}`}>
                    <header className={styles.header}>
                        <Link href="/cart">
                            <a className={styles.header_back_link}>
                                <i className="fas fa-arrow-right px-2"></i>
                                بازگشت
                            </a>
                        </Link>
                        <h2 className={styles.header_title}>انتخاب نشانی</h2>
                    </header>
                    <section className={styles.body_address}>
                        <div className={styles.address_head}>
                            <span>می خواهید سفارش شما به کدام نشانی ارسال شود :</span>
                            <Link href="/cart/address/add">
                                <a className={styles.address_head_link}>
                                    <i className="fas fa-plus px-2"></i>
                                    یک نشانی جدید اضافه کنید
                                </a>
                            </Link>
                        </div>
                        <form className={styles.address_items_form} onSubmit={async (event) => {
                            event.preventDefault();
                            if (document.querySelector('input[type=radio]:checked') !== null) {
                                let selectedAddressId = document.querySelector('input[type=radio]:checked').value;
                                let data = {
                                    address: selectedAddressId
                                };
                                await setLoading(true);
                                let response = await sendUserAddress(data);
                                response === true && router.push("/cart/payment");
                                await setLoading(false);
                            } else {
                                toast.error("لطفا ادرس خود را وارد نمایید", {
                                    position: "top-right",
                                    closeOnClick: true,
                                });
                            }
                        }}>
                            {address.map((value, index) => {
                                return (
                                    <label key={index} className={`${styles.address_items_label} ${index === 0 && styles.active_address}`} onClick={(event) => {
                                        let activeLabels = document.querySelectorAll(`.${styles.active_address}`);
                                        let activeCircles = document.querySelectorAll(`.${styles.active_circle}`);
                                        activeLabels.forEach((value) => {
                                            value.classList.remove(`${styles.active_address}`);
                                        });
                                        activeCircles.forEach((value) => {
                                            value.classList.remove(`${styles.active_circle}`);
                                        });
                                        event.currentTarget.classList.add(`${styles.active_address}`);
                                        document.getElementById(`firstCircle${index}`).classList.add(`${styles.active_circle}`);
                                    }}>
                                        <div id={`firstCircle${index}`} className={`${styles.address_item_circle} ${index === 0 && styles.active_circle}`}>
                                            <div className={styles.address_item_embeded_circle}></div>
                                        </div>
                                        <div className={styles.address_item_detail}>
                                            <b>{value.receiver_full_name}</b> <span>موبایل:</span> <b>{_asist.number(`${value.receiver_mobile_number}`)}</b>
                                            <br />
                                            <b>{value.big_city}</b><span>/ {_asist.number(`${value.city} ${value.address}`)}</span>
                                        </div>
                                        <div className={styles.address_item_icons}>
                                            <i className="far fa-edit mx-3" onClick={() => {
                                                router.push(`/cart/address/update/${value.id}`)
                                            }}></i>
                                            <i className="far fa-trash-alt" onClick={(e) => {
                                                e.stopPropagation();
                                                setShowModal({
                                                    id: value.id,
                                                    show: true
                                                });
                                            }}></i>
                                        </div>
                                        <input id={`addressId${index}`} type="radio" name="addressId" value={value.id} defaultChecked={index === 0 && true} />
                                    </label>
                                )
                            })}
                            <button type="submit" className={`${styles.button_submit} w-100`}>ادامه و تایید نشانی</button>
                        </form>
                    </section>
                </div>
            }
            <CustomModal show={showModal.show} onClose={() => {
                setShowModal(pre => {
                    return {
                        ...pre,
                        show: false
                    }
                });
            }} content={<DeleteAddress
                onClose={() => {
                    setShowModal(pre => {
                        return {
                            ...pre,
                            show: false
                        }
                    });
                }}
                id={showModal.id} setAddress={setAddress} />} />
        </>
    );
}
// export
export default Address;
import React from "react";
// node libraries
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Assistent from "zaravand-assistent-number";
// componentes
import Loading from "../../../components/loading";
import ShopLayout from "../../../components/shopLayout";
import CustomModal from "../../../components/custom/customModal";
import DeleteAddress from "../../../containers/cartAddress/deleteAddress";
// methods
import { getAddress } from "../../../api/cartAddress/getAddress";
import { selectAddress } from "../../../containers/cartAddress/methods/selectAddress";
import { changeRadioButtonColor } from "../../../containers/cartAddress/methods/changeRadioButtonsColor";
// styles
import styles from "../../../styles/pages/cart/address.module.scss";
import AppButton from "../../../components/AppButton";

const _asist = new Assistent();

const Address = () => {
  const [loaderButton, setLoaderButton] = useState(false);
  const router = useRouter();
  const userLogin = useSelector((state) => state.User.userInfo);
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState({
    show: false,
    id: 0,
  });

  useEffect(() => {
    async function fetchData() {
      !Object.keys(userLogin).length > 0 && router.push("/login");
      await getAddress(setAddress);
      await setLoading(false);
    }
    fetchData();
  }, [router, userLogin]);

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

      {loading ? (
        <div className={`col-12 col-lg-5 py-5 my-4 ${styles.wrapper}`}>
          <Loading />
        </div>
      ) : (
        <div className={`col-12 col-lg-5 ${styles.wrapper} mt-4`}>
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
              <Link href={`/cart/address/add/`}>
                <a className={styles.address_head_link}>
                  <i className="fas fa-plus px-2"></i>
                  یک نشانی جدید اضافه کنید
                </a>
              </Link>
            </div>
            <form
              className={styles.address_items_form}
              onSubmit={async (event) => {
                setLoaderButton(true);
                event.preventDefault();
                await selectAddress(router, setLoading);
                setLoaderButton(false);
              }}
            >
              {address.map((value, index) => {
                return (
                  <label
                    key={index}
                    className={`${styles.address_items_label} ${
                      index === 0 && styles.active_address
                    }`}
                    onClick={(event) => {
                      changeRadioButtonColor(event, styles, index);
                    }}
                  >
                    <div
                      id={`firstCircle${index}`}
                      className={`${styles.address_item_circle} ${
                        index === 0 && styles.active_circle
                      }`}
                    >
                      <div className={styles.address_item_embeded_circle}></div>
                    </div>
                    <div className={styles.address_item_detail}>
                      <b>{value.receiver_full_name}</b> <span>موبایل:</span>{" "}
                      <b>{_asist.number(`${value.receiver_mobile_number}`)}</b>
                      <br />
                      <b>{value.big_city}</b>
                      <span>
                        / {_asist.number(`${value.city} ${value.address}`)}
                      </span>
                    </div>
                    <div className={styles.address_item_icons}>
                      <i
                        className="far fa-edit mx-3"
                        onClick={() => {
                          router.push(`/cart/address/update/${value.id}`);
                        }}
                      ></i>
                      <i
                        className="far fa-trash-alt"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowModal({
                            id: value.id,
                            show: true,
                          });
                        }}
                      ></i>
                    </div>
                    <input
                      id={`addressId${index}`}
                      type="radio"
                      name="addressId"
                      value={value.id}
                      defaultChecked={index === 0 && true}
                    />
                  </label>
                );
              })}

              <AppButton
                loader={loaderButton}
                title="ادامه و تایید نشانی"
                submit
              />
            </form>
          </section>
        </div>
      )}
      <CustomModal
        show={showModal.show}
        onClose={() => {
          setShowModal((pre) => {
            return {
              ...pre,
              show: false,
            };
          });
        }}
        content={
          <DeleteAddress
            onClose={() => {
              setShowModal((pre) => {
                return {
                  ...pre,
                  show: false,
                };
              });
            }}
            id={showModal.id}
            setAddress={setAddress}
          />
        }
      />
    </>
  );
};
// export
export default Address;

Address.Layout = ShopLayout;

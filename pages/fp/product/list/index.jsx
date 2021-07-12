// next libraries
import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
// components
import CustomBadge from '../../../../components/custom/customBadge';
import CustomLabel from '../../../../components/custom/customLabel';
import CustomModal from '../../../../components/custom/customModal';
import useViewport from '../../../../components/viewPort';
import MobileHeader from '../../../../components/mobileHeader';
import Sort from '../../../../containers/product/sort';
import Edit from '../../../../containers/product/edit';
import MyLayout from "../../../../components/layout/Layout";
// methods
import { getProduct } from '../../../../redux/actions/product/getProduct';
import { mapState } from '../../../../containers/product/methods/mapState';
// styles
import styles from "../../../../styles/pages/product/list.module.scss";

const Card = ({ getProduct, productList }) => {

    let [showModalSort, setShowModalSort] = useState(false);
    let [showModalEdit, setShowModalEdit] = useState(false);

    const { width } = useViewport();
    const breakpoint = 620;

    useEffect(() => {
        getProduct();
    }, [getProduct]);

    return (
        <>
            {width < breakpoint &&
                <div className={styles.wrapper}>

                    <Head>
                        <title>My page title</title>
                        <link
                            rel="stylesheet"
                            href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                        />
                        <meta
                            name="viewport"
                            content="initial-scale=1.0, width=device-width"
                        />
                    </Head>
                    <MobileHeader title="لیست محصولات" type="search" />
                    <div className={styles.product_header}>
                        <Link href={`/fp/product/list/filter`}>
                            <a className={styles.product_header_link}>
                                <Image src="/image/product/filter.svg" alt="filter" className={styles.product_header_link_icon} width="15" height="15" />
                                فیلتر
                            </a>
                        </Link>
                        <span className={styles.product_header_link} onClick={() => {
                            setShowModalSort(showModal => !showModal);
                        }}>
                            <Image src="/image/product/sort.svg" alt="sort" className={styles.product_header_link_icon} width="15" height="15" />
                            ترتیب نمایش</span>
                        <span className={styles.product_header_link} onClick={() => {
                            setShowModalEdit(showModal => !showModal);
                        }}>
                            <Image src="/image/product/edit.svg" alt="edit" className={styles.product_header_link_icon} width="15" height="15" />
                            ویرایش گروهی</span>
                    </div>
                    {productList.length > 0 && productList.map((value, index) => {
                        return (
                            <div key={index} className={`${styles.product_card}`}>
                                <div className={styles.first_row}>
                                    <div className={styles.product_name_wrapper}>
                                        <div className={`${styles.image_product}`}></div>
                                        <h6 className={`${styles.name_product}`}>{value.title}</h6>
                                    </div>
                                    <i className={`fas fa-ellipsis-v ${styles.icon_more}`}></i>
                                </div>
                                <div className={styles.second_row}>
                                    <CustomLabel value={value.inventory} label="موجودی" />
                                    <CustomLabel value={`${value.price}تومان`} label="قیمت" />
                                </div>

                                <div className={styles.third_row}>
                                    <div>
                                        <span className={styles.icons}>
                                            <i className="fas fa-shopping-basket"></i>
                                            {value.total_sell}
                                        </span>
                                        <span className={styles.icons}>
                                            <i className="far fa-star"></i>
                                            {value.star}({value.comments_count} نظر)
                                        </span>
                                    </div>
                                    <CustomBadge
                                        title={value.status}
                                        color="#089319"
                                        backgroundColor="rgba(8, 147, 25, 0.15)"
                                        customBadgeStyle={{
                                            borderRadius: "3px",
                                            padding: "2px 6px"
                                        }}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            <CustomModal show={showModalSort} onClose={() => {
                setShowModalSort(showModal => !showModal);
            }} content={<Sort setShowModalSort={setShowModalSort} />} />
            <CustomModal show={showModalEdit} onClose={() => {
                setShowModalEdit(showModal => !showModal);
            }} content={<Edit />} />
        </>
    );
};
// export
const connector = connect(mapState, { getProduct });
export default connector(Card);
Card.Layout = MyLayout;


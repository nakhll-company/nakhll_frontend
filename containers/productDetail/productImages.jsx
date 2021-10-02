// node libraries
import React, { useState } from 'react';
// component
import Modal from '../../components/custom/customModal';
import ShowImages from './showImage';
// methods
import { largeImage } from './methods/largeImage';
// scss
import styles from '../../styles/pages/productDetail/pruductImages.module.scss';
/**
 * component of pruduct images
 * @param {string} productTitle => product Title
 * @param {string} originalPhoto => original photo
 * @param {array} thumbnailImages => thumbnail images is array of objects
 */
const ProductImages = ({
    productTitle,
    originalPhoto,
    thumbnailImages
}) => {

    let [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className={`col-12 ${styles.firstImage}`}>
                <img id="orginal" src={`${originalPhoto}`} alt={`${productTitle}`} />
            </div>
            <div className={`col-12 ${styles.imagesAlbum}`}>
                <img id="orginal" src={`${originalPhoto}`} alt={`${productTitle}`}
                    onClick={(event) => {
                        largeImage(event.target.id);
                    }}
                />
                {thumbnailImages.length > 0 && thumbnailImages.map((value, index) => {
                    return (
                        <img key={index} id={`image${index}`} src={`${value.image}`} alt={`${productTitle}`}
                            onClick={(event) => {
                                largeImage(event.target.id);
                            }}
                        />
                    );
                })}
                <button type="button" className={styles.button_open_modal} onClick={() => {
                    setShowModal(showModal => !showModal);
                }}>...</button>
            </div>
            <Modal show={showModal} onClose={() => {
                setShowModal(showModal => !showModal);
            }} content={<ShowImages productTitle={productTitle} originalPhoto={originalPhoto} thumbnailImages={thumbnailImages} />} />
        </>
    );
}
// export
export default ProductImages;
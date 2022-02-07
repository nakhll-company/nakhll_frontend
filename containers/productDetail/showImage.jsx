// node libraries
import React from 'react';
import Image from 'next/image';
// scss
import styles from '../../styles/pages/productDetail/imagesInModal.module.scss';

const ShowImages = ({
    productTitle,
    originalPhoto,
    thumbnailImages
}) => {
    function changeImage(id) {

        let image = document.querySelector(`#${id}`);
        let orginal = document.querySelector("#modalOrginal");

        orginal.src = image.src;

    }
    return (
        <div className={`${styles.productImageInModal}`}>
            <h3 className="p-3 mb-3">{productTitle && productTitle}</h3>
            <div className="row">
                <div className={`col-8 ${styles.orginalImage}`}>
                    {originalPhoto && <Image id="modalOrginal" src={`${originalPhoto}`} alt="originalPhoto" />}
                </div>
                <div className={`col-4 ${styles.imagesWrapper}`}>
                    {originalPhoto && <Image id="modalOrginal" src={`${originalPhoto}`} alt="originalPhoto"
                        onClick={(event) => {
                            changeImage(event.target.id);
                        }}
                    />}
                    {thumbnailImages && thumbnailImages.length > 0 && thumbnailImages.map((value, index) => {
                        return (
                            <Image id={`image${index}`} key={index} src={`${value.image}`} alt={`${productTitle}`}
                                onClick={(event) => {
                                    changeImage(event.target.id);
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
// export
export default ShowImages;
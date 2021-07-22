// ImageCropper.js

import React, { useState } from 'react'
import Cropper from 'react-easy-crop'
import { getCroppedImg } from './cropImage'
import styles from "../../../styles/pages/product/create.module.scss";


const ImageCropper = ({ getBlob, inputImg }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    /* onCropComplete() will occur each time the user modifies the cropped area, 
    which isn't ideal. A better implementation would be getting the blob 
    only when the user hits the submit button, but this works for now  */
    const onCropComplete = async (_, croppedAreaPixels) => {
        const croppedImage = await getCroppedImg(
            inputImg,
            croppedAreaPixels
        )
        getBlob(croppedImage)
    }

    return (
        /* need to have a parent with `position: relative` 
    to prevent cropper taking up whole page */
        // <div className='cropper'> 
        //     <Cropper
        //         image={inputImg}
        //         crop={crop}
        //         zoom={zoom}
        //         aspect={1}
        //         onCropChange={setCrop}
        //         onCropComplete={onCropComplete}
        //         onZoomChange={setZoom}
        //     />
        // </div>
        <>
            <Cropper
                image={inputImg}
                crop={crop}
                classes={{
                    containerClassName: "container_cropper_product",
                    cropAreaClassName: "product_cropArea",
                }}

                restrictPosition={true}
                zoom={zoom}
                aspect={2 / 2}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
            />
            <div className={styles.controls}>
                <input
                    onChange={(e) => setZoom(e.target.value)}
                    value={zoom}
                    type="range"
                    step="0.1"
                    max="3"
                    min="1"
                />
                <div className={styles.wrapperButton}>
                    <div style={{ marginLeft: "10px" }}>
                        <button
                            // onClick={showCroppedImage}
                            className="btn btn-success btn-lg"
                        >تایید
                        </button>
                    </div>
                    <div>
                        <button
                            // onClick={_onCloseCropper}
                            className="btn btn-secondary btn-lg"
                        >
                            لغو
                        </button>
                    </div>
                </div>
            </div>


        </>









    )
}

export default ImageCropper
// node libraries
import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
// components
import CustomModal from "../../custom/customModal";
// methods
import { selectImage } from "./methods/selectImage";
import { getCroppedImg } from "./methods/getCropImage";
// scss
import styles from "./Sm_LinerTwoImg.module.scss";

function Sm_LinerTwoImg(props) {
  const [showModal, setShowModal] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  return (
    <div className={styles.wrap}>
      <div className={styles.right}>
        <label htmlFor="firstImageLinerTwo">
          <img
            src={croppedImage ? croppedImage : "/image/sample/main.jpg"}
            alt="banner one"
          />
          <input
            type="file"
            name="firstImageLinerTwo"
            id="firstImageLinerTwo"
            onChange={(e) => {
              selectImage(e, setImageSrc, setShowModal);
            }}
            accept="image/*"
            style={{ visibility: "hidden" }}
          />
        </label>
        <CustomModal
          show={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          content={
            <div className={styles.modal_wrapper}>
              <div className={styles.cropper_wrapper}>
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  rotation={rotation}
                  zoom={zoom}
                  aspect={2 / 1}
                  onCropChange={setCrop}
                  onRotationChange={setRotation}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              </div>
              <div className={styles.button_submit}>
                <button
                  onClick={() => {
                    showCroppedImage();
                    setShowModal(false);
                  }}
                >
                  تایید
                </button>
              </div>
            </div>
          }
        />
      </div>
      <div className={styles.left}>
        <label htmlFor="secondImageLinerTwo">
          <img src="/image/sample/main.jpg" alt="banner two" />
          <input
            type="file"
            name="secondImageLinerTwo"
            id="secondImageLinerTwo"
            style={{ visibility: "hidden" }}
          />
        </label>
      </div>
    </div>
  );
}

export default Sm_LinerTwoImg;

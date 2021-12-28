import Cropper from "react-easy-crop";
import React, { useCallback, useState } from "react";
// methods
import { getCroppedImg } from "./methods/getCropImage";
// scss
import styles from "./customCropper.module.scss";
import { _updatePicture } from "../../redux/actions/liveEdit/_updatePicture";

function CustomCropperAll({
  setImageSrc,
  image,
  setShowCropper,
  ratio = 1,
}) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotation
      );
      setImageSrc(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [image, croppedAreaPixels, rotation, setImageSrc]);

  return (
    <>
      <div className={styles.modal_wrapper}>
        <div>
          <div className={styles.cropper_wrapper}>
            <div className={styles.wrapper_close}>
              <i className="fa fa-times" onClick={() => {
                setShowCropper(false);
              }}></i>
            </div>
            <Cropper
              image={image}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={ratio / 1}
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
                setShowCropper(false);
              }}
            >
              تایید
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomCropperAll;

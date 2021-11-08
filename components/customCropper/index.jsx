import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
// methods
import { selectImage } from "./methods/selectImage";
import { getCroppedImg } from "./methods/getCropImage";

// scss
import styles from "./customCropper.module.scss";
import { useDispatch } from "react-redux";
import { showCropper } from "../../redux/actions/liveEdit/showCropper";
import { _updatePicture } from "../../redux/actions/liveEdit/_updatePicture";
function CustomCropper({ imageSrc, setCroppedImage }) {
  // const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  // const [croppedImage, setCroppedImage] = useState(null);
  const dispatch = useDispatch();
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
      dispatch(_updatePicture(croppedImage));
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  return (
    <>
      <div className={styles.modal_wrapper}>
        <div>
          <div className={styles.cropper_wrapper}>
            <Cropper
              image={imageSrc}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={4 / 3}
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

                dispatch(showCropper());
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

export default CustomCropper;

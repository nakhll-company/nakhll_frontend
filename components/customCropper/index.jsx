// node libraries
import Cropper from "react-easy-crop";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// methods
import { getCroppedImg } from "./methods/getCropImage";
import { showCropper } from "../../redux/actions/liveEdit/showCropper";
import { _updatePicture } from "../../redux/actions/liveEdit/_updatePicture";
// scss
import styles from "./customCropper.module.scss";

function CustomCropper({ imageSrc, setCroppedImage }) {
  const dispatch = useDispatch();
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const Component = useSelector((state) => state.selectIdFormLanding);

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
    } catch (e) {}
  }, [imageSrc, croppedAreaPixels, rotation, dispatch, setCroppedImage]);

  const b = Component.ratio;

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
              aspect={b / 1}
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

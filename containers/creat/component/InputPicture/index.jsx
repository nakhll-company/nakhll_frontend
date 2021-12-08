import React, { useRef, useState } from "react";
import CustomCropperAll from "../../../../components/customCropperAll";

import styles from "./InputPicture.module.scss";

function InputPictureCreat({ setImageSrc, image, ratio }) {
  const [showCropper, setShowCropper] = useState(false);
  const refInput = useRef(null);
  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  return (
    <>
      {showCropper && (
        <CustomCropperAll
          image={image}
          setImageSrc={setImageSrc}
          setShowCropper={setShowCropper}
          ratio={ratio}
        />
      )}
      <div className={styles.icon_change_pic}>
        <i
          onClick={() => refInput.current.click()}
          className="fas fa-images"
        ></i>
        <input
          style={{ display: "none" }}
          ref={refInput}
          type="file"
          name=""
          id=""
          onChange={async (e) => {
            if (e.target.files && e.target.files.length > 0) {
              const file = e.target.files[0];
              let imageDataUrl = await readFile(file);
              setImageSrc(imageDataUrl);
            }
            setShowCropper(true);
          }}
          accept="image/*"
        />
      </div>
    </>
  );
}

export default InputPictureCreat;

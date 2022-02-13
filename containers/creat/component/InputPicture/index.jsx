// node libraries
import React, { useRef, useState } from "react";
import imageCompression from "browser-image-compression";
// methods
import { errorMessage } from "../../../../utils/toastifyMessage";
// components
import CustomCropperAll from "../../../../components/customCropperAll";
// scss
import styles from "./InputPicture.module.scss";

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

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
              if (e.target.files[0].size > 10000000) {
                errorMessage("لطفا عکس هایی با حجم کمتر از 10 مگابایت انتخاب کنید");
              } else {
                const file = e.target.files[0];
                let imageDataUrl = await readFile(file);
                var options = {
                  maxSizeMB: 1,
                  maxWidthOrHeight: 1920,
                  useWebWorker: true,
                };
                await imageCompression
                  .getFilefromDataUrl(imageDataUrl)
                  .then((file) => imageCompression(file, options))
                  .then(toBase64)
                  .then((base64) => {
                    setImageSrc(base64);
                    // setImg(base64);
                    // return "HI";
                    // return base64.toDataURL("image/png");
                    setShowCropper(true);
                  });
                // setImageSrc(imageDataUrl);
              }
            }
          }}
          accept="image/*"
        />
      </div>
    </>
  );
}

export default InputPictureCreat;

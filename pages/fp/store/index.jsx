// node libraies
import Image from 'next/image';
import Cropper from 'react-easy-crop';
import { useState, useCallback } from 'react';
// components
import CustomModal from '../../../components/custom/customModal';
// methods
import { getCroppedImg } from '../../../containers/store/methods/getCropImage';
import { selectImage } from '../../../containers/store/methods/selectImage';
// scss
import styles from './imageCrop.module.scss';

const Demo = () => {

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
        <div>
            <label htmlFor="uploadIamge" className={styles.label_image} style={{ backgroundImage: `url(${croppedImage})` }}>
                <i className="fas fa-plus"></i>
                <span>انتخاب کنید</span>
                <input type="file" id="uploadIamge" name="uploadIamge" onChange={(e) => { selectImage(e, setImageSrc, setShowModal) }} accept="image/*" style={{ visibility: "hidden" }} />
            </label>

            {croppedImage && <Image src={croppedImage} alt="image crop" width="100" height="100" />}
        </div>
    )
}
// export
export default Demo;
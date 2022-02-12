import React, { useRef } from "react";
import { useDispatch } from "react-redux";
// redux
import { _selectId } from "../../../redux/actions/liveEdit/_selectId";
import { showCropper } from "../../../redux/actions/liveEdit/showCropper";
import { selectImage } from "../../../components/customCropper/methods/selectImage";
// style
import styles from "./InputPicture.module.scss";

function InputPicture({ setImageSrc, id, order = 0, ratio = 2 }) {
  const refInput = useRef(null);
  const dispatch = useDispatch();
  return (
    <div className={styles.icon_change_pic}>
      <i onClick={() => refInput.current.click()} className="fas fa-images"></i>
      <input
        style={{ display: "none" }}
        ref={refInput}
        type="file"
        name=""
        id=""
        onChange={(e) => {
          selectImage(e, setImageSrc);
          let idSelected = { id, order, ratio };
          dispatch(_selectId(idSelected));
          dispatch(showCropper());
        }}
        accept="image/*"
      />
    </div>
  );
}

export default InputPicture;

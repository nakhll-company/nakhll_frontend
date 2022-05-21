// node
import { useState, useEffect } from "react";
// scss
import styles from "../../../styles/components/custom/modal.module.scss";

const Modal = ({ show, onClose, wrapperClassName, className, content }) => {
  const [open, setOpen] = useState(false);
  // use effect
  useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <>
      {open && (
        <div
          style={{ overflowY: "auto" }}
          className={`${styles.general_modal_wrapper} ${
            wrapperClassName ? wrapperClassName : ""
          }`}
          onClick={() => {
            setOpen((open) => !open);
            onClose();
          }}
        >
          <div
            className={`${styles.general_modal_content_div} ${
              className ? className : ""
            }`}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {content}
          </div>
        </div>
      )}
    </>
  );
};
// export
export default Modal;

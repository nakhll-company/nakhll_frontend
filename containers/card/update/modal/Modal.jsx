import { useRouter } from "next/router";
import React from "react";
import { CgClose } from "react-icons/cg";
import s from "./Modal.module.scss";
function Modal({ setOpenModal }) {
  const router = useRouter();
  return (
    <div className={s.warpper}>
      <div className={s.wraper_modal}>
        <div className={s.close} onClick={() => setOpenModal(false)}>
          <CgClose size={25} color="#c73a27" />
        </div>

        <div className={s.question}>
          <span>آیا از ذخیره نکردن تغییرات خود مطمئن هستید؟</span>
        </div>
        <div className={s.explain}>
          <span>
            {` با خروج از این صفحه، همه تغییرات شما 
                      از بین می روند.
            `}
          </span>
        </div>
        <div className={s.wraper_buttons}>
          <button onClick={() => setOpenModal(false)}>
            بازگشت به ویرایش آدرس
          </button>
          <button onClick={() => router.push("/cart/address")}>
            دور ریختن تغییرات
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

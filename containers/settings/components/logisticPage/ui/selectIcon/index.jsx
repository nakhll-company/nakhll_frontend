// node libraries
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
// components
import BtnSetting from "../../components/btnSetting";
import InputUseForm from "../../../../../creat/component/inputUseForm";
// style
import st from "./selectIcon.module.scss";
import AppButton from "../../../../../../components/AppButton";

const ICONS = [
  { src: "/icons/settings/pishtaz.svg", id: 1 },
  { src: "/icons/settings/sefareshi.svg", id: 2 },
  { src: "/icons/settings/peik.svg", id: 3 },
  { src: "/icons/settings/pasKeraieh.svg", id: 4 },
  { src: "/icons/settings/free.svg", id: 5 },
];

function SelectIcon({ _handle_send_info_scope }) {
  const [idselectedIcon, setIdselectedIcon] = useState(1);
  const [loaderBtn, setLoaderBtn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all", mode: "all" });
  return (
    <>
      <form
        onSubmit={handleSubmit(async (data) => {
          setLoaderBtn(true);
          await _handle_send_info_scope({
            name: data.name ? data.name : "بدون نام",
            logo_type: idselectedIcon,
          });
          setLoaderBtn(false);
        })}
      >
        <InputUseForm title="عنوان روش ارسال" error={errors.name}>
          <input {...register("name")} />
        </InputUseForm>

        <div className={st.header}>
          <span>لوگو روش ارسال</span>
        </div>
        {/* icones */}
        <div className={st.warpperIcons}>
          {ICONS.map((icon, index) => (
            <div
              key={index}
              className={st.wrappIcon}
              style={{
                backgroundColor:
                  icon.id == idselectedIcon
                    ? "#D09600"
                    : "rgba(34, 78, 130, 0.1)",
              }}
              onClick={() => setIdselectedIcon(icon.id)}
            >
              <Image
                src={icon.src}
                layout="fixed"
                height={50}
                width={50}
                alt="banner"
              />
            </div>
          ))}
        </div>
        <div className="mt-4 mb-4">
          <AppButton title="ثبت" loader={loaderBtn} submit />
        </div>
      </form>
    </>
  );
}

export default SelectIcon;

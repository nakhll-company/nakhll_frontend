import { useForm } from "react-hook-form";
import Image from "next/image";
import InputUseForm from "../../../../../creat/component/inputUseForm";
import BtnSetting from "../../components/btnSetting";
import st from "./selectIcon.module.scss";

const icons = [
  { src: "/icons/settings/pishtaz.svg" },
  { src: "/icons/settings/sefareshi.svg" },
  { src: "/icons/settings/free.svg" },
  { src: "/icons/settings/pasKeraieh.svg" },
  { src: "/icons/settings/peik.svg" },
  { src: "/icons/settings/plus.svg" },
];

function SelectIcon({ pageController, _handle_send_info_scope }) {
  console.log(`Ren`, "SelectIcon");

  const {
    setValue,
    getValues,
    clearErrors,
    register,
    setError,

    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  return (
    <>
      {/* name: data.name ? data.name : "بدون نام" */}
      <form
        onSubmit={handleSubmit((data) =>
          _handle_send_info_scope({ name: data.name ? data.name : "بدون نام" })
        )}
      >
        <InputUseForm title="عنوان روش ارسال" error={errors.name}>
          <input {...register("name")} />
        </InputUseForm>

        <div className={st.header}>
          <span>لوگو روش ارسال</span>
        </div>
        {/* icones */}
        <div className={st.warpperIcons}>
          {icons.map((icon, index) => (
            <div key={index} className={st.wrappIcon}>
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
        <BtnSetting type="submit" title="ثبت" />
      </form>
    </>
  );
}

export default SelectIcon;

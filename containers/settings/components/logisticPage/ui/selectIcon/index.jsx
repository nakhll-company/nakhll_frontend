import { useForm } from "react-hook-form";

import InputUseForm from "../../../../../creat/component/inputUseForm";
import BtnSetting from "../../components/btnSetting";

function SelectIcon({ pageController }) {
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
      <form onSubmit={handleSubmit(() => {})}>
        <InputUseForm title="عنوان روش ارسال" error={errors.name}>
          <input {...register("name")} />
        </InputUseForm>
      </form>
      <BtnSetting onClick={() => pageController()} title="ثبت" />
    </>
  );
}

export default SelectIcon;

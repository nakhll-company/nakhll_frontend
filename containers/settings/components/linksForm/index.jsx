import { callApiUpDataShop, linkSetting } from "../../../../api/settings";
import { useForm } from "react-hook-form";
import SubButton from "../subButton";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import InputUseForm from "../../../creat/component/inputUseForm";

function FormInputs({ apiSetting, setClicked, activeHojreh }) {
  const [IsLoadingHesab, setIsLoadingHesab] = useState(false);
  const [showMessageHesab, setShowMessageHesab] = useState(0);
  // useform
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
  useEffect(() => {
    if (apiSetting.social_media) {
      setValue("telegram", apiSetting.social_media.telegram);
      setValue("instagram", apiSetting.social_media.instagram);
    }
  }, [apiSetting]);

  const onSubmit = async (data) => {
    const dataForSend = {
      social_media: {
        telegram: data.telegram,
        instagram: data.instagram,
      },
    };

    const response = await callApiUpDataShop(dataForSend, activeHojreh);

    if (response.status == 200) {
      setIsLoadingHesab(false);
      setShowMessageHesab(1);

      setClicked((pre) => !pre);
    } else {
      setIsLoadingHesab(false);
      setShowMessageHesab(2);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputUseForm title="آدرس تلگرام" text="t.me/ ">
          <input type="text" {...register("telegram")} />
        </InputUseForm>
        <InputUseForm title="آیدی اینستاگرام" text="@  ">
          <input {...register("instagram")} />
        </InputUseForm>
        <div style={{ height: "15px" }}></div>
        {/* ‌Buttons */}
        {IsLoadingHesab && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={styles.loader}>
              <Image
                src="/image/LOGO_500.png"
                alt="Picture of the author"
                width={50}
                height={50}
              />
            </div>
            <h3
              className={styles.nameLoding}
              style={{
                fontSize: "15px",
                color: "hsl(211deg 100% 50%)",
              }}
            >
              {" "}
              در حال بروزرسانی ...
            </h3>
          </div>
        )}
        {showMessageHesab == 1 && (
          <div>
            <h3 style={{ color: "green", marginTop: "15px" }}>
              به روز رسانی با موفقیت انجام شد.
            </h3>
          </div>
        )}
        {showMessageHesab == 2 && (
          <div>
            <h3 style={{ color: "red", marginTop: "15px" }}>
              عملیات به روز رسانی موفقیت آمیز نبود.لطفا باری دیگر اقدام کنید.
            </h3>
          </div>
        )}

        <SubButton title="به روز رسانی" />
        
      </form>
    </>
  );
}

export default FormInputs;

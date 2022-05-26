import React from "react";
// node libraries
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// component
import CustomSwitch from "../../../../components/custom/customSwitch";
// methods
import { editAdvertisment } from "../../../../api/options/editAdvertisment";
import { getAdvertisement } from "../../../../api/options/getAdvertisement";
// scss
import styles from "../../../../containers/options/scss/yektanet.module.scss";

const Yektanet = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const activeHojreh = useSelector((state) => state.User.activeHojreh);
  const [adsData, setAdsData] = useState({});

  const onSubmit = async (data) => {
    const response = await editAdvertisment(activeHojreh, data);
    setAdsData(response);
  };

  useEffect(() => {
    async function getData() {
      const response = await getAdvertisement(activeHojreh);
      setAdsData(response);
      setValue("yektanet_id", adsData.yektanet_id);
    }
    activeHojreh && getData();
  }, [activeHojreh, setValue, adsData.yektanet_id]);

  return (
    <div className={styles.wrapper}>
      <header>
        <h1>یکتانت</h1>
        <div>
          <CustomSwitch
            title={adsData.yektanet_status ? "فعال" : "فعال نشده"}
            id={adsData.id}
            checked={adsData.yektanet_status}
            onClick={async () => {
              const data = {
                yektanet_status: adsData.yektanet_status ? 0 : 1,
                yektanet_id: adsData.yektanet_id,
              };
              const res = await editAdvertisment(activeHojreh, data);

              setAdsData(res);
            }}
          />
        </div>
        <Link href="/fp/options/ads">
          <a>
            <i className="fas fa-angle-left fa-2x"></i>
          </a>
        </Link>
      </header>
      <p className={styles.discrption}>
        بعد از ورود به پنل یکتانت در قسمت هدر گزینه اسکریپت یکتانت را انتخاب
        کرده و id اسکریپت را کپی و در محل زیر جای گذاری کنید.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="id"
          {...register("yektanet_id", { required: true })}
          id="anid"
          onChange={() => {}}
        />
        {errors.yektanet_id && (
          <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>
        )}
        <button type="submit">ثبت</button>
      </form>
    </div>
  );
};
// export
export default Yektanet;

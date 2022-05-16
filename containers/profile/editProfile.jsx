// node libraries
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
// methods
import { getStates } from "../../api/general/getStates";
import { getCities } from "../../api/general/getCities";
import { Day, Months, Year } from "../../utils/staticDate";
import { getBigCities } from "../../api/general/getBigCities";
import { updatUserProfile } from "./methods/updateUserProfile";
import { AiFillDelete } from "react-icons/ai";
// components
import InputPictureSetting from "../settings/components/InputPicture";
// scss
import styles from "./scss/editProfile.module.scss";
import AppButton from "../../components/AppButton";
import { base64Profile } from "../../public/icons/icon";
/**
 * edit profile
 */
const EditProfile = ({ dataProfile, setDataProfile }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [selectState, setSelectState] = useState([]);
  let [selectBigCities, setSelectBigCities] = useState([]);
  let [selectCities, setSelectCities] = useState([]);
  const [imgProfile, setImgProfile] = useState(
    dataProfile.image ? dataProfile.image : null
  );
  const [loaderBtn, setLoaderBtn] = useState(false);

  const onSubmit = async (data) => {
    setLoaderBtn(true);
    if (imgProfile.startsWith("data:image")) {
      data.Image = imgProfile;
    }

    data.FK_User = {
      first_name: data.first_name,
      last_name: data.last_name,
    };
    data.BrithDay = `${data.year}-${data.month}-${data.day}`;

    if (data.BrithDay === "--") {
      delete data.BrithDay;
    }
    if (data.Sex === "") {
      delete data.Sex;
    }
    updatUserProfile(data, setDataProfile);
    setLoaderBtn(false);
  };

  useEffect(() => {
    async function fetchData() {
      // state
      setSelectState(await getStates());
    }
    fetchData();
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-center mt-3">
        <div className={styles.wrap_all}>
          <div
            onClick={() =>
              updatUserProfile(
                {
                  Image: base64Profile,
                  FK_User: {
                    first_name: dataProfile.FK_User.first_name,
                    last_name: dataProfile.FK_User.last_name,
                  },
                },
                setDataProfile
              )
            }
            style={{
              position: "absolute",
              top: "-10px",
              left: "-20px",
              cursor: "pointer",
            }}
          >
            <AiFillDelete size={25} color="red" />
          </div>
          <div className={styles.Parent_imageProfile}>
            {imgProfile ? (
              <Image
                src={imgProfile ? imgProfile : "/icons/iconpro.png"}
                width={120}
                height={120}
                alt=""
              />
            ) : (
              <Image
                src={
                  dataProfile.image ? dataProfile.image : "/icons/iconpro.png"
                }
                width={120}
                height={120}
                alt=""
              />
            )}
          </div>
          <div className={styles.btnProfile}>
            <InputPictureSetting
              setImageSrc={setImgProfile}
              image={imgProfile}
              // ratio={1}
            />
          </div>
        </div>
      </div>
      <div className="form-group d-flex mt-4">
        <div className="col ps-3">
          <label className="d-block m-0 my-1 font-size-8 text-gray-800">
            نام
          </label>
          <input
            type="text"
            {...register("first_name", { required: true })}
            defaultValue={dataProfile.FK_User.first_name}
            className="form-control p-2 font-size-9 text-gray-900"
          />
          {errors.first_name && (
            <span className={styles.form_errors}>
              لطفا این گزینه را پر کنید
            </span>
          )}
        </div>
        <div className="col">
          <label className="d-block m-0 my-1 font-size-8 text-gray-800">
            نام خانوادگی
          </label>
          <input
            type="text"
            {...register("last_name", { required: true })}
            defaultValue={dataProfile.FK_User.last_name}
            className="form-control p-2 font-size-9 text-gray-900"
          />
          {errors.last_name && (
            <span className={styles.form_errors}>
              لطفا این گزینه را پر کنید
            </span>
          )}
        </div>
      </div>
      <div className="form-group mt-3">
        <label
          htmlFor="city_field"
          className="d-block m-0 my-1 font-size-8 text-gray-800"
        >
          محل سکونت
        </label>
        <div className="d-flex">
          <select
            {...register("State")}
            className="form-control ms-2"
            onChange={async (event) => {
              let optionsArray = Object.values(event.target.options);
              setSelectBigCities(
                await getBigCities(
                  optionsArray[event.target.options.selectedIndex].id
                )
              );
            }}
          >
            <option value={dataProfile.State}>{dataProfile.State}</option>
            {selectState.map((value, index) => {
              return (
                <option key={index} value={value.name} id={value.id}>
                  {value.name}
                </option>
              );
            })}
          </select>
          {errors.State && (
            <span className={styles.form_errors}>
              لطفا این گزینه را پر کنید
            </span>
          )}
          <select
            {...register("BigCity")}
            className="form-control ms-2"
            onChange={async (event) => {
              let optionsArray = Object.values(event.target.options);
              setSelectCities(
                await getCities(
                  optionsArray[event.target.options.selectedIndex].id
                )
              );
            }}
          >
            <option value={dataProfile.BigCity}>{dataProfile.BigCity}</option>
            {selectBigCities.map((value, index) => {
              return (
                <option key={index} value={value.name} id={value.id}>
                  {value.name}
                </option>
              );
            })}
          </select>
          {errors.BigCity && (
            <span className={styles.form_errors}>
              لطفا این گزینه را پر کنید
            </span>
          )}
          <select {...register("City")} className="form-control">
            <option value={dataProfile.City}>{dataProfile.City}</option>
            {selectCities.map((value, index) => {
              return (
                <option key={index} value={value.name}>
                  {value.name}
                </option>
              );
            })}
          </select>
          {errors.City && (
            <span className={styles.form_errors}>
              لطفا این گزینه را پر کنید
            </span>
          )}
        </div>
      </div>
      <div className="form-group mt-3">
        <label className="d-block m-0 my-1 font-size-8 text-gray-800">
          درباره‌ی من
        </label>
        <textarea
          rows="4"
          {...register("Bio")}
          defaultValue={dataProfile.Bio}
          className="form-control p-2 font-size-9 text-gray-800"
        ></textarea>
        {errors.Bio && (
          <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>
        )}
      </div>
      <div className="form-group mt-3">
        <label className="d-block m-0 my-1 font-size-8 text-gray-800">
          جنسیت
        </label>
        <select
          {...register("Sex")}
          defaultValue={dataProfile.Sex}
          id="gender"
          className="form-control p-2 font-size-9 text-gray-800"
        >
          <option value="">انتخاب کنید</option>
          <option value="2">آقا</option>
          <option value="1">خانم</option>
        </select>
        {errors.Sex && (
          <span className={styles.form_errors}>لطفا این گزینه را پر کنید</span>
        )}
      </div>
      <div className="form-group mt-3">
        <label className="d-block m-0 my-1 font-size-8 text-gray-800">
          تاریخ تولد
        </label>
        <div className="d-flex">
          <select
            {...register("day")}
            defaultValue={
              dataProfile.BrithDay && dataProfile.BrithDay.slice(8, 10)
            }
            className="form-control p-2 font-size-9 text-gray-800 ms-2"
          >
            <option value="">روز</option>
            {Day.map((value, index) => (
              <option value={value} key={index}>
                {value}
              </option>
            ))}
          </select>
          {errors.day && (
            <span className={styles.form_errors}>
              لطفا این گزینه را پر کنید
            </span>
          )}
          <select
            {...register("month")}
            defaultValue={
              dataProfile.BrithDay && dataProfile.BrithDay.slice(5, 7)
            }
            className="form-control p-2 font-size-9 text-gray-800 ms-2"
          >
            <option value="">ماه</option>
            {Months.map((value, index) => (
              <option value={value.value} key={index}>
                {value.label}
              </option>
            ))}
          </select>
          {errors.month && (
            <span className={styles.form_errors}>
              لطفا این گزینه را پر کنید
            </span>
          )}
          <select
            {...register("year")}
            defaultValue={
              dataProfile.BrithDay && dataProfile.BrithDay.slice(0, 4)
            }
            className="form-control p-2 font-size-9 text-gray-800"
          >
            <option value="">سال</option>
            {Year.map((value, index) => (
              <option value={value} key={index}>
                {value}
              </option>
            ))}
          </select>
          {errors.year && (
            <span className={styles.form_errors}>
              لطفا این گزینه را پر کنید
            </span>
          )}
        </div>
        <div className="mt-4"></div>

        <AppButton title="ذخیره تغییرات" loader={loaderBtn} submit />
      </div>
    </form>
  );
};
// export
export default EditProfile;

// node libraries
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
// methods
import { Day, Months, Year } from "../../utils/staticDate";
import { getStates } from "./methods/getStates";
import { getBigCities } from "./methods/getBigCities";
import { getCities } from "./methods/getCities";
import { updatUserProfile } from "./methods/updateUserProfile";
// scss
import styles from "./scss/editProfile.module.scss";
/**
 * edit profile
 */
const EditProfile = ({ dataProfile }) => {

  const { register, handleSubmit, formState: { errors }, } = useForm();
  let [previewImageSrc, setPreviewImageSrc] = useState("");
  let [selectState, setSelectState] = useState([]);
  let [selectBigCities, setSelectBigCities] = useState([]);
  let [selectCities, setSelectCities] = useState([]);

  const onSubmit = async (data) => {
    data.FK_User = {
      first_name: data.first_name,
      last_name: data.last_name,
    };
    data.BrithDay = `${data.year}-${data.month}-${data.day}`;
    let imageProfile = data.image[0];
    let reader = new FileReader();
    reader.onloadend = async function () {
      data.Image = `${reader.result}`;
    }
    reader.readAsDataURL(imageProfile);
    setTimeout(() => {
      updatUserProfile(data);
    }, 1000);
  };

  function previewImage(e) {
    if (e.target.files[0]) {
      setPreviewImageSrc(URL.createObjectURL(e.target.files[0]));
    }
  }
  useEffect(async () => {
    // state
    setSelectState(await getStates());
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <div className="d-flex justify-content-center mt-3">
        <div className={styles.Parent_imageProfile}>
          <label htmlFor="image" style={{ cursor: "pointer" }}>
            {previewImageSrc.length === 0 && <img src={Object.keys(dataProfile).length > 0 ? dataProfile.image : "/productDetail/avatar.png"}
              style={{ width: "90px", height: "90px" }} className={styles.imageProfile}
            />}
            {previewImageSrc.length > 0 && <img src={previewImageSrc} style={{ width: "90px", height: "90px" }} className={styles.imageProfile} />}
          </label>
          <input type="file" {...register("image")} id="image" accept="image/png, image/jpeg" style={{ visibility: "hidden" }}
            onChange={(e) => { previewImage(e) }}
          />
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
            {...register("State", { required: true })}
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
            {...register("BigCity", { required: true })}
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
          <select
            {...register("City", { required: true })}
            className="form-control"
          >
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
          {...register("Bio", { required: true })}
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
          {...register("Sex", { required: true })}
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
            {...register("day", { required: true })}
            defaultValue={dataProfile.BrithDay.slice(8, 10)}
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
            {...register("month", { required: true })}
            defaultValue={dataProfile.BrithDay.slice(5, 7)}
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
            {...register("year", { required: true })}
            defaultValue={dataProfile.BrithDay.slice(0, 4)}
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
        <button className={`py-2 mt-4 rounded w-100 ${styles.save_btn}`}>
          ذخیره تغییرات
        </button>
      </div>
    </form>
  );
};
// export
export default EditProfile;

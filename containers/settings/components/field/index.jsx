import styles from "./field.module.scss";
import { useField, Form, FormikProps, Formik } from "formik";

function FieldCus({ title, description, text, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.input_setting}>
          <span
            style={{
              marginBottom: "10px",
              color: "#364254",
              fontSize: "16px",
              display: "block",
            }}
          >
            {title}
          </span>
          {!text && (
            <div className={styles.inputWidRtl}>
              <input {...field} {...props} />
              {meta.touched && meta.error ? (
                <small className={styles.error}>{meta.error}</small>
              ) : null}
            </div>
          )}

          {text && (
            <>
              <div className={styles.inputWid_withWord}>
                <div>
                  <span style={{ fontSize: "16px" }}>{text}</span>
                </div>
                <input {...field} {...props} />
              </div>
              {meta.touched && meta.error ? (
                <small className={styles.error}>{meta.error}</small>
              ) : null}
            </>
          )}
        </div>
        <div className="">
          <h4
            className={styles.explain}
            style={{
              marginTop: "33px",
              fontSize: "14px",
              color: "#a4aebb",
            }}
          >
            {description?.title}
          </h4>
          <h4
            className={styles.explain}
            style={{ fontSize: "14px", color: "#a4aebb" }}
          >
            {description?.cont}
          </h4>
        </div>
      </div>
    </>
  );
}

export default FieldCus;

// {({ values, errors, touched }) => (
//     <Form>
//       <div className={styles.Hojreh_profile}>
//         <div className={styles.HeadName}>
//           <h1 style={{ margin: "0px" }}>حجره</h1>
//         </div>
//         <div className={styles.hojrehD}>
//           <div className={styles.input_setting}>
//             <h2
//               style={{
//                 marginBottom: "10px",
//                 color: "#364254",
//                 fontSize: "16px",
//               }}
//             >
//               نام حجره
//             </h2>
//             <div className={styles.inputWidRtl}>
//               <Field name="Title" type="text" />
//               {touched.Title && errors.Title ? (
//                 <small className={styles.error}>
//                   {errors.Title}
//                 </small>
//               ) : null}
//             </div>
//           </div>
//           <div className="">
//             <h4
//               className={styles.explain}
//               style={{
//                 marginTop: "33px",
//                 fontSize: "14px",
//                 color: "#a4aebb",
//               }}
//             >
//               نام حجره:
//             </h4>
//             <h4
//               className={styles.explain}
//               style={{ fontSize: "14px", color: "#a4aebb" }}
//             >
//               نام حجره خود را به زبان فارسی انتخاب کنید. نام
//               حجره باید مختص شما و جز مالکیت شخص دیگری نشود. سعی
//               شود تا نام نامناسب و بیگانه استفاده نباشد. این نام
//               هویت و شخصیت شماست و برای کاربران نمایش داده می
//               شود.
//             </h4>
//           </div>

//           <div className={styles.input_setting}>
//             <h2
//               style={{
//                 marginBottom: "10px",
//                 color: "#364254",
//                 fontSize: "16px",
//               }}
//             >
//               آدرس اینترنتی حجره
//             </h2>
//             <div className={styles.inputWid}>
//               <Field name="slug" type="text" />
//               {touched.slug && errors.slug ? (
//                 <small className={styles.error}>
//                   {errors.slug}
//                 </small>
//               ) : null}
//             </div>
//           </div>
//           <div className="">
//             <h4
//               className={styles.explain}
//               style={{
//                 marginTop: "33px",
//                 fontSize: "14px",
//                 color: "#a4aebb",
//               }}
//             >
//               آدرس اینترنتی:
//             </h4>
//             <h4
//               className={styles.explain}
//               style={{ fontSize: "14px", color: "#a4aebb" }}
//             >
//               آدرس اینترنتی، نشانی حجره شما در نخل است. نام حجره
//               خود را ﺑﺎ ﺣﺮوف و اﻋﺪاد اﻧﮕﻠﯿﺴﯽ ﺑﻨﻮﯾﺴﯿﺪ. برای فاصه
//               از (_) استفاده کنید.
//             </h4>
//           </div>

//           <div className={styles.input_setting}>
//             <h2
//               style={{
//                 marginBottom: "10px",
//                 color: "#364254",
//                 fontSize: "16px",
//               }}
//             >
//               درباره حجره
//             </h2>
//             <div className={styles.inputWidRtlH}>
//               <Field type="input" name="Description" />
//             </div>
//           </div>

//           <div className="">
//             <h4
//               className={styles.explain}
//               style={{
//                 marginTop: "33px",
//                 fontSize: "14px",
//                 color: "#a4aebb",
//               }}
//             >
//               درباره حجره:
//             </h4>
//             <h4
//               className={styles.explain}
//               style={{ fontSize: "14px", color: "#a4aebb" }}
//             >
//               به عنوان مثال: کتاب غذای روح است.هر کس با کتاب
//               آرامش یابد هیچ آرامشی را از دست ندهد. اینجا
//               نمایشگاه کتاب ... است.گامی در جهت تحول فرهنگ
//               مطالعه مردم کشورمان! محلی برای آشنایی با یک حس
//               شیرین و دلنشین.
//             </h4>
//           </div>
//         </div>
//       </div>

//       <div className={styles.Hojreh_space}>
//         <div className={styles.HeadName}>
//           <h1 style={{ margin: "0px" }}>مشخصات</h1>
//         </div>

//         <div className={styles.spaceGridD}>
//           <div className={styles.input_setting}>
//             <h2
//               style={{
//                 marginBottom: "10px",
//                 color: "#364254",
//                 fontSize: "16px",
//               }}
//             >
//               کد ملی
//             </h2>
//             <div className={styles.inputWid}>
//               <Field name="NationalCode" type="text" />
//               {touched.NationalCode && errors.NationalCode ? (
//                 <small className={styles.error}>
//                   {errors.NationalCode}
//                 </small>
//               ) : null}
//             </div>
//           </div>
//           <div className="">
//             <h4 className={styles.explain}></h4>
//           </div>
//           <div className={styles.input_setting}>
//             <h2
//               style={{
//                 marginBottom: "10px",
//                 color: "#364254",
//                 fontSize: "16px",
//               }}
//             >
//               شماره تماس اصلی
//             </h2>
//             <div className={styles.inputWid}>
//               <Field name="MobileNumber" type="text" />
//               {touched.MobileNumber && errors.MobileNumber ? (
//                 <small className={styles.error}>
//                   {errors.MobileNumber}
//                 </small>
//               ) : null}
//             </div>
//           </div>

//           <div className="">
//             <h4
//               style={{
//                 marginTop: "33px",
//                 fontSize: "14px",
//                 color: "#a4aebb",
//               }}
//               className={styles.explain}
//             >
//               شماره تماس:
//             </h4>
//             <h4
//               className={styles.explain}
//               style={{ fontSize: "14px", color: "#a4aebb" }}
//             >
//               پیامک های مهم به این شماره ارسال می‌شوند. جهت
//               تغییر با پشتیبانی تماس بگیرید.
//             </h4>
//           </div>
//           <div className={styles.input_setting}>
//             <h2
//               style={{
//                 marginBottom: "10px",
//                 color: "#364254",
//                 fontSize: "16px",
//               }}
//             >
//               شماره تلفن ثابت
//             </h2>
//             <div className={styles.inputWid}>
//               <Field
//                 name="PhoneNumber"
//                 type="text"
//                 // defaultValue={
//                 //   apiSetting.FK_ShopManager &&
//                 //   apiSetting.FK_ShopManager.User_Profile.PhoneNumber
//                 // }
//               />
//             </div>
//           </div>
//           <div className="">
//             <h4 className={styles.explain}></h4>
//           </div>
//         </div>
//       </div>

//       <div className={styles.Hojreh_Address}>
//         <div className={styles.HeadName}>
//           <h1 style={{ margin: "0px" }}>آدرس</h1>
//         </div>

//         <div className={styles.AddressGridD}>
//           <div className={styles.forAddress}>
//             {/* استان */}
//             <label className={styles.form_label}>استان</label>
//             <select
//               className={styles.form_select}
//               name="State"
//               defaultValue=""
//               onChange={async (event) => {
//                 setSelectBigCities(
//                   await getBigCities(event.target.value)
//                 );

//                 setChoiceState(
//                   event.target[event.target.selectedIndex].text
//                 );
//               }}
//             >
//               <option value="" disabled>
//                 {apiSetting.FK_ShopManager.User_Profile.State}
//               </option>
//               {selectState.map((value, index) => {
//                 return (
//                   <option key={index} value={value.id}>
//                     {value.name}
//                   </option>
//                 );
//               })}
//             </select>
//             <label className={styles.form_label}>شهرستان</label>
//             <select
//               className={styles.form_select}
//               name="BigCity"
//               defaultValue=""
//               onChange={async (event) => {
//                 setSelectCities(
//                   await getCities(event.target.value)
//                 );

//                 setChoiceBigCity(
//                   event.target[event.target.selectedIndex].text
//                 );
//               }}
//             >
//               <option value="" disabled>
//                 {apiSetting.FK_ShopManager.User_Profile.BigCity}
//               </option>
//               {selectBigCities.map((value, index) => {
//                 return (
//                   <option key={index} value={value.id}>
//                     {value.name}
//                   </option>
//                 );
//               })}
//             </select>
//             <label className={styles.form_label}>شهر</label>
//             <select
//               className={styles.form_select}
//               name="City"
//               defaultValue=""
//               onChange={(event) => {
//                 setChoiceCity(event.target.value);
//               }}
//             >
//               <option value="" disabled>
//                 {apiSetting.FK_ShopManager.User_Profile.City}{" "}
//               </option>
//               {selectCities.map((value, index) => {
//                 return (
//                   <option key={index} value={value.name}>
//                     {value.name}
//                   </option>
//                 );
//               })}
//             </select>
//           </div>
//           <div className="">
//             <h4 className={styles.explain}></h4>
//           </div>
//           <div className={styles.input_setting}>
//             <h2
//               style={{
//                 marginBottom: "10px",
//                 color: "#364254",
//                 fontSize: "16px",
//               }}
//             >
//               آدرس
//             </h2>

//             <div className={styles.inputWidRtlH}>
//               <Field
//                 name="Address"
//                 rows="4"
//                 cols="50"
//                 // defaultValue={
//                 //   apiSetting.FK_ShopManager &&
//                 //   apiSetting.FK_ShopManager.User_Profile.Address
//                 // }
//               />
//               {touched.Address && errors.Address ? (
//                 <small className={styles.error}>
//                   {errors.Address}
//                 </small>
//               ) : null}
//             </div>
//           </div>

//           <div className="">
//             <h4 className={styles.explain}></h4>
//           </div>

//           <div className={styles.input_setting}>
//             <h2
//               style={{
//                 marginBottom: "10px",
//                 color: "#364254",
//                 fontSize: "16px",
//               }}
//             >
//               کد پستی
//             </h2>
//             <div className={styles.inputWid}>
//               <Field type="input" name="ZipCode" />
//               {touched.ZipCode && errors.ZipCode ? (
//                 <small className={styles.error}>
//                   {errors.ZipCode}
//                 </small>
//               ) : null}
//             </div>
//           </div>
//           <div className="">
//             <h4 className={styles.explain}></h4>
//           </div>

//           <div
//             style={{
//               display: "flex",
//               height: "40px",
//               flexWrap: "wrap",
//             }}
//           >
//             {SavaAllCity.map((e) => (
//               <div key={e.id} style={{ display: "flex" }}>
//                 <h4
//                   style={{
//                     backgroundColor: "gray",
//                     padding: "2px 10px",
//                     color: "#fff",
//                     margin: "0px",
//                     marginLeft: "1px",
//                     borderRadius: "2px",
//                     marginTop: "10px",
//                     fontSize: "10px",
//                   }}
//                   className={styles.explain}
//                 >
//                   {e.name}
//                 </h4>
//                 <i
//                   style={{
//                     fontSize: "15px",
//                     marginLeft: "5px",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => handelDeletState(e.id)}
//                   className="fas fa-times"
//                 ></i>
//               </div>
//             ))}
//           </div>
//         </div>

//         {IsLoading && (
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <div className={styles.loader}>
//               <Image
//                 src="/image/LOGO_500.png"
//                 alt="Picture of the author"
//                 width={50}
//                 height={50}
//               />
//             </div>
//             <h3
//               className={styles.nameLoding}
//               style={{
//                 fontSize: "15px",
//                 color: "hsl(211deg 100% 50%)",
//               }}
//             >
//               {" "}
//               در حال بروزرسانی ...
//             </h3>
//           </div>
//         )}
//         {showMessage == 1 && (
//           <div>
//             <h3 style={{ color: "green" }}>
//               به روز رسانی با موفقیت انجام شد.
//             </h3>
//           </div>
//         )}
//         {showMessage == 2 && (
//           <div>
//             <h3 style={{ color: "red" }}>
//               عملیات به روز رسانی موفقیت آمیز نبود.لطفا باری
//               دیگر اقدام کنید.
//             </h3>
//           </div>
//         )}
//       </div>

//       <div className={styles.status_button_one}>
//         <button
//           type="submit"
//           className={`${styles.btn} ${styles.btnSubmit}`}
//         >
//           <h3 style={{ margin: "0px", fontSize: "15px" }}>
//             ذخیره اطلاعات
//           </h3>
//         </button>
//       </div>
//     </Form>
//   )}

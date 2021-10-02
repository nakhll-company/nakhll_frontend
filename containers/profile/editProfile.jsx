import Image from 'next/image';
// scss
import styles from './scss/editProfile.module.scss';
/**
 * edit profile
 */
const EditProfile = () => {
    return (
        <form className={styles.form}>
            <div className="d-flex justify-content-center">
                <Image src="/productDetail/avatar.png" width="80" height="80" />
            </div>
            <div className="form-group">
                <label className="d-block m-0 my-1 font-size-8 text-gray-800">نام و نام خانوادگی</label>
                <input type="text" id="name" name="name" defaultValue="پسته خندون" className="form-control p-2 font-size-9 text-gray-900" />
            </div>
            <div className="form-group">
                <label htmlFor="city_field" className="d-block m-0 my-1 font-size-8 text-gray-800">محل سکونت</label>
                <div className="d-flex">
                    <select name="state" id="state" className="form-control">
                        <option value="2597">کرمان</option>
                    </select>
                    <select name="bigCity" id="bigCity" className="form-control">
                        <option value="2597">کرمان</option>
                    </select>
                    <select name="city" id="city" className="form-control">
                        <option value="2597">کرمان</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label className="d-block m-0 my-1 font-size-8 text-gray-800">درباره‌ی من</label>
                <textarea rows="4" id="bio" name="bio" className="form-control p-2 font-size-9 text-gray-800"></textarea>
                <div id="bio-error" className="input-error-message d-none font-size-7 mt-1 text-danger"></div>
            </div>
            <div className="form-group">
                <label className="d-block m-0 my-1 font-size-8 text-gray-800">جنسیت</label>
                <select name="gender" defaultValue="MEN" id="gender" className="form-control p-2 font-size-9 text-gray-800">
                    <option value="">انتخاب کنید</option>
                    <option value="MEN">آقا</option>
                    <option value="WOMEN">خانم</option>
                </select>
            </div>
            <div className="form-group">
                <label className="d-block m-0 my-1 font-size-8 text-gray-800">تاریخ تولد</label>
                <div className="d-flex">
                    <select name="birthday-year" id="birthday-year" defaultValue="1371" className="form-control p-2 font-size-9 text-gray-800 ml-2">
                        <option value="">سال</option>
                        <option value="1300">1300</option>
                        <option value="1301">1301</option>
                    </select>
                    <select name="birthday-month" id="birthday-month" defaultValue="06" className="form-control p-2 font-size-9 text-gray-800 ml-2">
                        <option value="">ماه</option>
                        <option value="01">فروردین</option>
                        <option value="02">اردیبهشت</option>
                        <option value="03">خرداد</option>
                        <option value="04">تیر</option>
                        <option value="05">مرداد</option>
                    </select>
                    <select name="birthday-day" id="birthday-day" defaultValue="12" className="form-control p-2 font-size-9 text-gray-800">
                        <option value="">روز</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <button className={`py-2 mt-4 rounded w-100 ${styles.save_btn}`}>
                    ذخیره تغییرات
                </button>
            </div>
        </form>
    );
}
// export
export default EditProfile;
// node libraries
import { connect } from "react-redux";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import Assistent from "zaravand-assistent-number";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
// components
import MyLayout from "../../../../components/layout/Layout";
import Loading from "../../../../components/loading/index";
import Category from "../../../../containers/product/create/category";
// methods
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
import { mapState } from "../../../../containers/product/methods/mapState";
// styles
import styles from "../../../../styles/pages/product/create.module.scss";
import { errorMessage } from "../../../../containers/utils/message";
import CheckboxTreeCities from "../../../../components/CheckboxTree/CheckboxTree";
import InputPictureCreat from "../../../../containers/creat/component/InputPicture";
import TitleLiner from "../../../../containers/settings/components/titleLiner";
import PictureChildProduct from "../../../../containers/creat/component/pictureChildProduct";
import InputUseForm from "../../../../containers/creat/component/inputUseForm";
import TextAreaUseForm from "../../../../containers/creat/component/textAreaUseForm";
/**
 * component create product
 * @param {string} activeHojreh => it has slug of product
 */
const CreateProduct = ({ activeHojreh }) => {
  const router = useRouter();
  const _asist = new Assistent();
  // useform
  const {
    setValue,
    getValues,
    clearErrors,
    register,
    setError,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  console.log(watch());
  // submit
  const onSubmit = async (data) => {
    let err = false;
    if (!placeholderSubmarckets) {
      setError("submark", { type: "focus" }, { shouldFocus: true });
    } else {
      err = true;
    }
    let product_status = document.querySelector("input[type=radio]:checked")
      .value;
    if (err) {
      setIsLoad(false);
      let confirm = {
        Title: data.Title,
        Inventory: Add,
        Slug: activeHojreh,
        Price: data.Price,
        OldPrice: data.OldPrice,
        Net_Weight: data.Net_Weight,
        Weight_With_Packing: data.Weight_With_Packing,
        Description: data.Description,
        Status: product_status,
        PostRangeType: 1,
        PreparationDays: AddPreparationDays,
        FK_Shop: activeHojreh,
        post_range: checkedCities,
        new_category: submarketId,
      };
      let paramsProduct = {};
      let loadDataProduct = confirm;
      let dataUrlProduct = "/api/v1/landing/products/";
      let response = await ApiRegister().apiRequest(
        loadDataProduct,
        "post",
        dataUrlProduct,
        true,
        paramsProduct
      );

      if (response.status !== 201) {
        errorMessage("خطایی در ایجاد محصول پیش آمده است");
      }
      var resultId = response.data.ID;

      if (resultId) {
        let imagesProduct = {
          product: resultId,
          images: previewImage,
        };

        let paramsImages = {};
        let loadDataImages = imagesProduct;
        let dataUrlImages = "/api/v1/product/images/";
        let responseImages = await ApiRegister().apiRequest(
          loadDataImages,
          "post",
          dataUrlImages,
          true,
          paramsImages
        );
        if (responseImages.status === 200) {
          setShowSuccessPage(true);
          // setIsLoad(false)
        } else {
          errorMessage("خطایی در ایجاد محصول پیش آمده است");
        }
      }
    }
  };
  // states
  const [placeholderSubmarckets, setPlaceholderSubmarckets] = useState("");
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  const [previewImage, setPreviewImage] = useState(null);
  const [Add, setAdd] = useState(1);
  const [AddPreparationDays, setAddPreparationDays] = useState(1);
  const [submarketId, setSubmarketId] = useState(null);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  // stat for test image
  const [imgProduct, setImgProduct] = useState(null);
  const [imgProductOne, setImgProductOne] = useState(null);
  const [imgProductTwo, setImgProductTwo] = useState(null);
  const [imgProductThree, setImgProductThree] = useState(null);
  const [imgProductFour, setImgProductFour] = useState(null);
  const [imgProductFive, setImgProductFive] = useState(null);
  const [imgProductSix, setImgProductSix] = useState(null);

  // for Save cities
  const [checkedCities, setCheckedCities] = useState([]);

  useEffect(() => {}, [checkedCities]);

  // show success page
  if (showSuccessPage) {
    router.replace("/fp/product/create/successPageProduct");
  }
  // use effect
  useEffect(() => {
    const _handleRequestApi = async () => {
      let params = null;
      let loadData = null;
      let dataUrl = "/api/v1/categories/";
      let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        false,
        params
      );
      if (response.status === 200) {
        setIsLoad(true);
        setData(response.data); //==> output: {}
        setCategories(response.data);
      }
    };
    _handleRequestApi();
  }, [activeHojreh]);
  // inputButton
  const mini = () => {
    if (Add == 0) {
      return;
    }
    setAdd(Add - 1);
  };
  const add = () => {
    setAdd(Add + 1);
  };
  // mini Preparation Days
  const miniPreparationDays = () => {
    if (AddPreparationDays == 0) {
      return;
    }
    setAddPreparationDays(AddPreparationDays - 1);
  };
  // Add Preparation Days
  const AddPreparationDayss = () => {
    setAddPreparationDays(AddPreparationDays + 1);
  };
  // select Submarket
  const _selectSubmarket = () => {
    let element = document.getElementById("wrapperMarkets");
    element.style.display = "block";
    let elementProduct = document.getElementById("wrapper_product");
    elementProduct.style.display = "none";
  };

  if (isLoad) {
    return (
      <>
        <div className={styles.wrapper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div id="wrapper_product" className={styles.wrapper_product}>
              <div className={styles.createProduct_lineRighte}>
                <TitleLiner title="اطلاعات محصول" />
                {/* product name */}
                <InputUseForm title="نام محصول" error={errors.Title}>
                  <input
                    type="number"
                    {...register("Title", {
                      required: "لطفا نام محصول را تکمیل کنید.",
                    })}
                  />
                </InputUseForm>
                {/* category */}
                <div className={styles.wrapper_input}>
                  <label className={styles.lable_product} htmlFor="Title">
                    دسته بندی
                  </label>
                  <input
                    className={styles.input_product}
                    value={placeholderSubmarckets}
                    id="submark"
                    name="submark"
                    type="text"
                    onClick={_selectSubmarket}
                    {...register("submark")}
                  />
                  {errors.submark && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                      لطفا این گزینه را پر کنید
                    </span>
                  )}
                </div>
                {/* image */}
                <div id="imageProduct">
                  <div>
                    <p style={{ fontSize: "14px" }}>تصاویر</p>
                  </div>
                  <div
                    style={{
                      color: "#5E7488",
                      fontSize: "14px",
                      marginBottom: "15px",
                    }}
                    className="mt-3"
                  >
                    حداکثر تا ۷ تصویر ، تصویر ابتدایی به عنوان تصویر اصلی نمایش
                    داده خواهد شد.
                  </div>

                  <div className={styles.main_picture_product}>
                    <div className={styles.input_picture}>
                      <InputPictureCreat
                        setImageSrc={setImgProduct}
                        image={imgProduct}
                        ratio={1}
                      />
                    </div>
                    {imgProduct ? (
                      <Image
                        src={imgProduct}
                        layout="responsive"
                        height={100}
                        width={100}
                      />
                    ) : (
                      <Image
                        src="/image/sample/2_1.jpg"
                        layout="responsive"
                        height={100}
                        width={100}
                      />
                    )}
                  </div>
                  {/* imgProductChild, setImgProductChild */}
                  <div className={styles.another_picture_product}>
                    <PictureChildProduct
                      setImageSrc={setImgProductOne}
                      image={imgProductOne}
                    />
                    <PictureChildProduct
                      setImageSrc={setImgProductTwo}
                      image={imgProductTwo}
                    />
                    <PictureChildProduct
                      setImageSrc={setImgProductThree}
                      image={imgProductThree}
                    />
                    <PictureChildProduct
                      setImageSrc={setImgProductFour}
                      image={imgProductFour}
                    />
                    <PictureChildProduct
                      setImageSrc={setImgProductFive}
                      image={imgProductFive}
                    />
                    <PictureChildProduct
                      setImageSrc={setImgProductSix}
                      image={imgProductSix}
                    />
                  </div>
                </div>
                {/* product detail */}
                <TitleLiner title=" جزئیات محصول" />
                {/* weight */}
                <InputUseForm
                  title="وزن خالص محصول"
                  error={errors.Net_Weight}
                  text="گرم"
                >
                  <input
                    type="number"
                    {...register("Net_Weight", {
                      required: "لطفا این گزینه را پرنمایید",
                      min: {
                        value: 0,
                        message: "لطفا اعداد بزرگتر از صفر وارد نمایید",
                      },
                    })}
                  />
                </InputUseForm>
                {/* weight with packing */}
                <InputUseForm
                  title="وزن با بسته بندی"
                  error={errors.Weight_With_Packing}
                  text="گرم"
                >
                  <input
                    type="number"
                    {...register("Weight_With_Packing", {
                      required: "لطفا این گزینه را پرنمایید",
                      min: {
                        value: 0,
                        message: "لطفا اعداد بزرگتر از صفر وارد نمایید",
                      },
                      validate: (value) =>
                        parseInt(value) > parseInt(getValues("Net_Weight")) ||
                        "وزن با بسته بندی باید بیشتر از وزن  خالص باشد",
                    })}
                  />
                </InputUseForm>
                {/* price */}
                <InputUseForm
                  title="قیمت محصول"
                  error={errors.Price}
                  text="تومان"
                >
                  <input
                    type="number"
                    {...register("Price", {
                      required: "لطفا این گزینه را پرنمایید",
                      min: {
                        value: 500,
                        message: "لطفا اعداد بزرگتر از 500 وارد نمایید",
                      },
                    })}
                  />
                </InputUseForm>
                {/* price with discount */}
                <InputUseForm
                  title="قیمت محصول با تخفیف (اختیاری)"
                  error={errors.OldPrice}
                  text="تومان"
                >
                  <input
                    type="number"
                    defaultValue={0}
                    {...register("OldPrice", {
                      min: {
                        value: 0,
                        message: "لطفا اعداد بزرگتر از صفر وارد نمایید",
                      },
                      validate: (value) =>
                        parseInt(value) < parseInt(getValues("Price")) ||
                        "قیمت با تخفیف باید کمتر از قیمت اصلی باشد",
                    })}
                  />
                </InputUseForm>
                {/* discription */}
                <TextAreaUseForm title="توضیحات محصول (اختیاری)">
                  <textarea
                    rows="10"
                    type="text"
                    placeholder="محصول بدون توضیح مثل آدم بدون شناسنامه میمونه..."
                    {...register("Description")}
                  />
                </TextAreaUseForm>
                {/* inventory */}
                <InputUseForm
                  title="موجودی"
                  error={errors.Inventory}
                  text="عدد"
                >
                  <input
                    type="number"
                    {...register("Inventory", {
                      required: "لطفا این گزینه را پرنمایید",
                      min: {
                        value: 0,
                        message: "لطفا اعداد بزرگتر از 0 وارد نمایید",
                      },
                    })}
                  />
                </InputUseForm>
                {/* information  */}
                <TitleLiner title=" اطلاعات ارسال" />
                {/* Preparation Days */}
                <InputUseForm
                  title="زمان آماده سازی"
                  error={errors.PreparationDays}
                  text="روز"
                >
                  <input
                    type="number"
                    {...register("PreparationDays", {
                      required: "لطفا این گزینه را پرنمایید",
                      min: {
                        value: 0,
                        message: "لطفا اعداد بزرگتر از 0 وارد نمایید",
                      },
                    })}
                  />
                </InputUseForm>
                زمان آماده سازی : آماده برای ارسال بعد از سفارش مشتری
                {/* product status */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "15px",
                  }}
                ></div>
                {/* with Componetn */}
                <CheckboxTreeCities
                  checkedCity={checkedCities}
                  setCheckedCity={setCheckedCities}
                />
                {/* button submit */}
                <div>
                  <button
                    type="submit"
                    id="sumbitButton"
                    className={styles.form_buttonSubmit}
                  >
                    ثبت محصول
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/* category page */}
          <Category
            clearErrors={clearErrors}
            setPlaceholderSubmarckets={setPlaceholderSubmarckets}
            data={data}
            setSubmarketId={setSubmarketId}
            setData={setData}
            categories={categories}
          />
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
};
// exports
const connector = connect(mapState);
export default connector(CreateProduct);
CreateProduct.Layout = MyLayout;

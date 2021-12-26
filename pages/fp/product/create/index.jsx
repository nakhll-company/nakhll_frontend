// node libraries
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Image from "next/image";
// components
import MyLayout from "../../../../components/layout/Layout";
import Loading from "../../../../components/loading/index";
import Category from "../../../../containers/product/create/category";
// methods
import { mapState } from "../../../../containers/product/methods/mapState";
// styles
import styles from "../../../../styles/pages/product/create.module.scss";
import CheckboxTreeCities from "../../../../components/CheckboxTree/CheckboxTree";
import InputPictureCreat from "../../../../containers/creat/component/InputPicture";
import TitleLiner from "../../../../containers/settings/components/titleLiner";
import PictureChildProduct from "../../../../containers/creat/component/pictureChildProduct";
import InputUseForm from "../../../../containers/creat/component/inputUseForm";
import TextAreaUseForm from "../../../../containers/creat/component/textAreaUseForm";
import {
  _ApiCreateProduct,
  _ApiGetCategories,
} from "../../../../api/creatProduct";

const CreateProduct = ({ activeHojreh }) => {
  const router = useRouter();

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

  // states
  const [placeholderSubmarckets, setPlaceholderSubmarckets] = useState("");
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [submarketId, setSubmarketId] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  // stat for test image
  const [imgProduct, setImgProduct] = useState(null);
  const [imgProductOne, setImgProductOne] = useState(null);
  const [imgProductTwo, setImgProductTwo] = useState(null);
  const [imgProductThree, setImgProductThree] = useState(null);
  const [imgProductFour, setImgProductFour] = useState(null);
  const [imgProductFive, setImgProductFive] = useState(null);
  const [imgProductSix, setImgProductSix] = useState(null);

  // loading for create product
  const [isloadingForCreate, setIsloadingForCreate] = useState(false);

  // for Save cities
  const [checkedCities, setCheckedCities] = useState([]);

  // use effect
  useEffect(async () => {
    const response_categories = await _ApiGetCategories();

    if (response_categories.status === 200) {
      setIsLoad(true);
      setData(response_categories.data); //==> output: {}
      setCategories(response_categories.data);
    }
  }, [activeHojreh]);

  // select Submarket
  const _selectSubmarket = () => {
    let element = document.getElementById("wrapperMarkets");
    element.style.display = "block";
    let elementProduct = document.getElementById("wrapper_product");
    elementProduct.style.display = "none";
  };

  const onSubmit = async (data) => {
    setIsloadingForCreate(true);
    let Product_Banner = [];
    if (imgProductOne) {
      Product_Banner.push({ Image: imgProductOne });
    }
    if (imgProductTwo) {
      Product_Banner.push({ Image: imgProductTwo });
    }
    if (imgProductThree) {
      Product_Banner.push({ Image: imgProductThree });
    }
    if (imgProductFour) {
      Product_Banner.push({ Image: imgProductFour });
    }
    if (imgProductFive) {
      Product_Banner.push({ Image: imgProductFive });
    }
    if (imgProductSix) {
      Product_Banner.push({ Image: imgProductSix });
    }

    const externalData = {
      Status: 1,
      PostRangeType: 1,
      post_range: checkedCities,
      new_category: submarketId,
      Image: imgProduct,
      Product_Banner: Product_Banner,
    };

    const dataForSend = Object.assign(data, externalData);
    const response = await _ApiCreateProduct(dataForSend, activeHojreh);

    if (response.status === 201) {
      router.replace("/fp/product/create/successPageProduct");
    }
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
                    value={placeholderSubmarckets.name}
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
                        alt="عکس اصلی"
                        src={imgProduct}
                        layout="responsive"
                        height={100}
                        width={100}
                      />
                    ) : (
                      <Image
                        alt="عکس اصلی"
                        src="/image/sample/pic.jpg"
                        layout="responsive"
                        height={100}
                        width={100}
                      />
                    )}
                  </div>
                  {/* imgProductChild, setImgProductChild */}
                  {imgProduct && (
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
                  )}
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
                    onWheel={(event) => {
                      event.currentTarget.blur();
                    }}
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
                    onWheel={(event) => {
                      event.currentTarget.blur();
                    }}
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
                    onWheel={(event) => {
                      event.currentTarget.blur();
                    }}
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
                    onWheel={(event) => {
                      event.currentTarget.blur();
                    }}
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
                    onWheel={(event) => {
                      event.currentTarget.blur();
                    }}
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
                    onWheel={(event) => {
                      event.currentTarget.blur();
                    }}
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

        {isloadingForCreate && (
          <>
            <div className={styles.create_product}>
              <div className={styles.create_messege}>در حال ساخت محصول ...</div>
            </div>
          </>
        )}
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

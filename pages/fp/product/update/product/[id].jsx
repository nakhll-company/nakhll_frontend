// node libraries
import Image from "next/image";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Assistent from "zaravand-assistent-number";
// components
import Loading from "../../../../../components/loading/index";
import MyLayout from "../../../../../components/layout/Layout";
import Category from "../../../../../containers/product/create/category";
import InputUseForm from "../../../../../containers/creat/component/inputUseForm";
import TitleLiner from "../../../../../containers/settings/components/titleLiner";

import InputPictureCreat from "../../../../../containers/creat/component/InputPicture";
import TextAreaUseForm from "../../../../../containers/creat/component/textAreaUseForm";
import PictureChildProduct from "../../../../../containers/creat/component/pictureChildProduct";
// methods
import { ApiRegister } from "../../../../../services/apiRegister/ApiRegister";
import { mapState } from "../../../../../containers/product/methods/mapState";
import {
  _ApiGetCategories,
  _ApiUpdateProduct,
} from "../../../../../api/creatProduct";
// styles
import styles from "../../../../../styles/pages/product/create.module.scss";
import InputTag from "../../../../../components/InputTag";
/**
 * page update product
 * @param {string} activeHojreh => it has slug name
 */
const _asist = new Assistent();
const UpdateProduct = ({ activeHojreh }) => {
  const [tags, setTags] = useState([]);
  const [tagsShop, setTagsShop] = useState([]);

  // useform
  const {
    setValue,
    getValues,
    clearErrors,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  const router = useRouter();
  const { id } = router.query;
  // get edit date

  useEffect(() => {
    async function fetchData() {
      if (id) {
        let params = null;
        let loadData = null;
        let dataUrl = `/api/v1/shop/${activeHojreh}/products/${id}/`;
        let response = await ApiRegister().apiRequest(
          loadData,
          "get",
          dataUrl,
          true,
          params
        );

        if (response.status === 200) {
          let Data = response.data;

          setValue("Title", Data.Title);
          setImgProduct(Data.Image);
          console.log("Data :>> ", Data);
          if (Data.OldPrice === 0) {
            setValue("Price", Data.Price / 10);
            setValue("OldPrice", Data.OldPrice / 10);
            setWordOldPrice(_asist.word(Data.OldPrice / 10));
            setprecentOldPrice(Data.OldPrice / 10);
            setWordPrice(_asist.word(Data.Price / 10));
            setPrecentPrice(Data.Price / 10);
          } else {
            setValue("OldPrice", Data.Price / 10);
            setValue("Price", Data.OldPrice / 10);
            setWordOldPrice(_asist.word(Data.Price / 10));
            setprecentOldPrice(Data.Price / 10);
            setWordPrice(_asist.word(Data.OldPrice / 10));
            setPrecentPrice(Data.OldPrice / 10);
          }

          setValue("Inventory", Data.Inventory);
          setValue("Net_Weight", Data.Net_Weight);
          setValue("Weight_With_Packing", Data.Weight_With_Packing);
          setValue("Description", Data.Description);
          setValue("PreparationDays", Data.PreparationDays);

          setPlaceholderSubmarckets(Data.category);
          setSubmarketId(Data.category.id);
          // images
          setImgProductOne(Data.Product_Banner[0]?.Image);
          setImgProductTwo(Data.Product_Banner[1]?.Image);
          setImgProductThree(Data.Product_Banner[2]?.Image);
          setImgProductFour(Data.Product_Banner[3]?.Image);
          setImgProductFive(Data.Product_Banner[4]?.Image);
          setImgProductSix(Data.Product_Banner[5]?.Image);
          setProduct_Banner(Data.Product_Banner);
          let newArrTags = [];
          Data.product_tags.map((item) => {
            newArrTags.push({ id: item.text, text: item.text });
          });
          setTags(newArrTags);
          let allTages = [];

          {
            Data?.all_tags &&
              Data.all_tags.map((item) => {
                allTages.push({ id: item.text, text: item.text });
              });
          }
          setTagsShop(allTages);
        }
      }
    }
    fetchData();
  }, [id, activeHojreh, setValue]);

  const onSubmit = async (data) => {
    setisLoadingUpdate(true);
    let Product_Banner = [];

    if (imgProductOne && !imgProductOne.includes("http")) {
      Product_Banner.push({ Image: imgProductOne });
    }
    if (imgProductTwo && !imgProductTwo.includes("http")) {
      Product_Banner.push({ Image: imgProductTwo });
    }
    if (imgProductThree && !imgProductThree.includes("http")) {
      Product_Banner.push({ Image: imgProductThree });
    }
    if (imgProductFour && !imgProductFour.includes("http")) {
      Product_Banner.push({ Image: imgProductFour });
    }
    if (imgProductFive && !imgProductFive.includes("http")) {
      Product_Banner.push({ Image: imgProductFive });
    }
    if (imgProductSix && !imgProductSix.includes("http")) {
      Product_Banner.push({ Image: imgProductSix });
    }

    const externalData = {
      Status: 1,
      PostRangeType: 1,
      post_range: [],
      category: submarketId,
      Product_Banner: Product_Banner,
      product_tags: tags,
    };

    if (imgProduct && !imgProduct.includes("http")) {
      externalData.Image = imgProduct;
    }

    const dataForSend = Object.assign(data, externalData);

    const response = await _ApiUpdateProduct(dataForSend, activeHojreh, id);

    if (response.status === 200) {
      router.replace("/fp/product/update/product/successPageEditProduct");
    }
  };

  // states
  const [placeholderSubmarckets, setPlaceholderSubmarckets] = useState({});
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
  const [isLoadingUpdate, setisLoadingUpdate] = useState(false);

  const [Product_Banner, setProduct_Banner] = useState([]);

  // state for show word price
  const [wordPrice, setWordPrice] = useState("");
  const [wordOldPrice, setWordOldPrice] = useState("");

  // state for precent
  const [precentPrice, setPrecentPrice] = useState(0);
  const [precentOldPrice, setprecentOldPrice] = useState(0);
  // use effect
  useEffect(() => {
    async function fetchData() {
      const response_categories = await _ApiGetCategories();

      if (response_categories.status === 200) {
        setIsLoad(true);
        setData(response_categories.data); //==> output: {}
        setCategories(response_categories.data);
      }
    }
    fetchData();
  }, [activeHojreh]);

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
                  <div className={styles.submarcketTitle}>
                    <span> دسته فعلی :</span>
                    {"   "}
                    <span className={styles.badge_submarket}>
                      {placeholderSubmarckets.name}
                    </span>
                  </div>

                  <>
                    <input
                      className={styles.input_product}
                      value={placeholderSubmarckets.name}
                      id="submark"
                      name="submark"
                      type="text"
                      onClick={_selectSubmarket}
                      {...register("submark")}
                    />

                    <div style={{ display: "none" }}>
                      <input
                        className={styles.input_product}
                        value={placeholderSubmarckets.id}
                        id="submark"
                        name="submark"
                        type="text"
                        onClick={_selectSubmarket}
                        {...register("submarkId")}
                      />
                    </div>
                    {errors.submark && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        لطفا این گزینه را پر کنید
                      </span>
                    )}
                  </>
                </div>
                {/* image */}
                <div id="imageProduct">
                  <div>
                    <p style={{ fontSize: "14px", marginTop: "15px" }}>
                      تصاویر
                    </p>
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
                        alt=""
                      />
                    ) : (
                      <Image
                        src="/image/sample/pic.jpg"
                        layout="responsive"
                        height={100}
                        width={100}
                        alt=""
                      />
                    )}
                  </div>

                  {imgProduct && (
                    <div className={styles.another_picture_product}>
                      <PictureChildProduct
                        setImageSrc={setImgProductOne}
                        image={imgProductOne}
                        id={Product_Banner[0]?.id}
                      />
                      <PictureChildProduct
                        setImageSrc={setImgProductTwo}
                        image={imgProductTwo}
                        id={Product_Banner[1]?.id}
                      />
                      <PictureChildProduct
                        setImageSrc={setImgProductThree}
                        image={imgProductThree}
                        id={Product_Banner[2]?.id}
                      />
                      <PictureChildProduct
                        setImageSrc={setImgProductFour}
                        image={imgProductFour}
                        id={Product_Banner[3]?.id}
                      />
                      <PictureChildProduct
                        setImageSrc={setImgProductFive}
                        image={imgProductFive}
                        id={Product_Banner[4]?.id}
                      />
                      <PictureChildProduct
                        setImageSrc={setImgProductSix}
                        image={imgProductSix}
                        id={Product_Banner[5]?.id}
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
                    onChange={(e) => {
                      setPrecentPrice(e.target.value);
                      setWordPrice(_asist.word(e.target.value));
                    }}
                  />
                </InputUseForm>
                {wordPrice !== "صفر" && wordPrice !== "" && (
                  <div className={styles.previewPrice}>
                    قیمت محصول : {wordPrice}
                    {"  "}
                    تومان
                  </div>
                )}
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
                    onChange={(e) => {
                      if (e.target.value == "" || e.target.value == 0) {
                        setprecentOldPrice(0);
                        setWordOldPrice("");
                      } else {
                        setprecentOldPrice(e.target.value);

                        setWordOldPrice(_asist.word(e.target.value));
                      }
                    }}
                  />
                </InputUseForm>
                {wordOldPrice !== "صفر" && wordOldPrice !== "" && (
                  <div className={styles.previewPrice}>
                    قیمت محصول با تخفیف : {wordOldPrice} تومان
                  </div>
                )}
                {precentPrice > precentOldPrice && precentOldPrice > 0 && (
                  <>
                    <span style={{ margin: "8px 0", fontSize: "14px" }}>
                      تخفیف کالا شما:
                      <span style={{ fontSize: "13px" }}>درصد رند شده</span>
                    </span>
                    <div className={styles.precent_wrper}>
                      {Math.ceil(
                        ((precentPrice - precentOldPrice) / precentPrice) * 100
                      )}
                      %
                    </div>
                  </>
                )}
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
                <InputTag
                  tags={tags}
                  setTags={setTags}
                  suggestions={tagsShop}
                />
                <span style={{ padding: "5px" }}>
                  برای ثبت هر تگ کلید اینتر را بزنید.
                </span>
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
                {/* button submit */}
                {isLoadingUpdate && (
                  <div className={styles.loading}>
                    <Image
                      src="/loading.svg"
                      width="45"
                      height="45"
                      alt="loading"
                    />
                    <span>در حال ویرایش محصول ...</span>
                  </div>
                )}
                <div>
                  <button
                    type="submit"
                    id="sumbitButton"
                    className={styles.form_buttonSubmit}
                  >
                    ویرایش محصول
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
// export
const connector = connect(mapState);
export default connector(UpdateProduct);
UpdateProduct.Layout = MyLayout;

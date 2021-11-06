// node libraries
import { connect } from "react-redux";
import { useRouter } from 'next/router';
import Cropper from "react-easy-crop";
import { useForm } from "react-hook-form";
import Assistent from "zaravand-assistent-number";
import { useCallback, useEffect, useState } from "react";
// components
import MyLayout from "../../../../components/layout/Layout";
import Loading from "../../../../components/loading/index";
import Category from '../../../../containers/product/create/category';
// methods
import { getCroppedImg } from "../../../../containers/product/create/canvasUtils";
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
import { mapState } from "../../../../containers/product/methods/mapState";
// styles
import styles from "../../../../styles/pages/product/create.module.scss";
import { errorMessage } from "../../../../containers/utils/message";
import CheckboxTreeCities from "../../../../components/CheckboxTree/CheckboxTree";
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
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  // submit
  const onSubmit = async (data) => {
    let err = false;
    if (!placeholderSubmarckets) {
      setError("submark", { type: "focus" }, { shouldFocus: true });
    } else {
      err = true;
    }
    let product_status = document.querySelector(
      "input[type=radio]:checked"
    ).value;
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
        new_category: submarketId
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
        // let idProduct = {
        //   product: resultId,
        //   submarkets: [submarketId],
        // };

        // let paramssubmarkets = {};
        // let loadDatasubmarkets = idProduct;
        // let dataUrlsubmarkets = "/api/v1/product/categories/";
        // let responsesubmarkets = await ApiRegister().apiRequest(
        //   loadDatasubmarkets,
        //   "post",
        //   dataUrlsubmarkets,
        //   true,
        //   paramssubmarkets
        // );

        // if (responsesubmarkets.status !== 200) {
        //   errorMessage("خطایی در ایجاد محصول پیش آمده است");
        // }

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
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [Add, setAdd] = useState(1);
  const [AddPreparationDays, setAddPreparationDays] = useState(1);
  const [submarketId, setSubmarketId] = useState(null);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  let [stringPrice, setStringPrice] = useState("");
  let [sepratorePrice, setSepratorePrice] = useState("");
  let [stringOldPrice, setStringOldPrice] = useState("");
  let [sepratoreOldPrice, setSepratoreOldPrice] = useState("");

  // for Save cities
  const [checkedCities, setCheckedCities] = useState([]);

  useEffect(() => {

  }, [checkedCities]);

  // show success page
  if (showSuccessPage) {
    router.replace("/fp/product/create/successPageProduct");
  }
  // use effect
  useEffect(() => {
    window.localStorage.setItem("image", JSON.stringify([]));

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
  // cropper
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  // on File Change
  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
      let elementImageProduct = document.getElementById("crop_container");
      elementImageProduct.style.display = "block";
    }
  };
  // read File
  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }
  // on Close Cropper
  const _onCloseCropper = () => {
    let elementImageProduct = document.getElementById("crop_container");
    elementImageProduct.style.display = "none";
    setImageSrc(null);
    setValue("product_image_upload", null);
  };
  // show Cropped Image
  const showCroppedImage = async () => {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    if (croppedImage) {
      let listImage = window.localStorage.getItem("image");
      var prev = JSON.parse(listImage);
      setPreviewImage(prev);
    }
    let elementImageProduct = document.getElementById("crop_container");
    elementImageProduct.style.display = "none";
    if (prev.length === 5) {
      document.getElementById("product-image-upload").disabled = true;
    }
  };
  // remove Image
  const _removeImage = (item) => {
    let listRemoveImage = window.localStorage.getItem("image");
    let removeImage = JSON.parse(listRemoveImage);
    let testt = removeImage.filter((itemRemove) => {
      return itemRemove.includes(item) ? "" : itemRemove;
    });
    window.localStorage.setItem("image", JSON.stringify(testt));
    setPreviewImage(testt);
    if (testt.length == 0) {
      setValue("product_image_upload", null);
    }
  };
  // sepratore in numbers
  const numberSeparateUtils = (number) => {
    return number !== undefined
      ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : null;
  };

  if (isLoad) {
    return (
      <>
        <div className={styles.wrapper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div id="wrapper_product" className={styles.wrapper_product}>
              <div className={styles.createProduct_lineRighte}>
                <div className="mt-4">
                  <div>
                    <h5
                      style={{ color: "#007aff", fontSize: "14px" }}
                      className="mb-0 d-inline mr-20"
                    >
                      اطلاعات محصول
                    </h5>
                  </div>
                </div>
                <hr style={{ background: "#007aff", width: "100%" }} />
                {/* product name */}
                <div className={styles.wrapper_input}>
                  <label className={styles.lable_product} htmlFor="Title">
                    نام محصول
                  </label>
                  <input
                    className={styles.input_product}
                    id="Title"
                    type="text"
                    {...register("Title", { required: true })}
                  />
                  {errors.Title && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                      لطفا این گزینه را پر کنید
                    </span>
                  )}
                </div>
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
                    حداکثر تا 5 تصویر ، تصویر ابتدایی به عنوان تصویر اصلی نمایش
                    داده خواهد شد.
                  </div>
                  <div className="mt-4" name="mainPhoto">
                    <div className={styles.product_image_container}>
                      <label
                        style={{ marginTop: 10, marginRight: 10 }}
                        htmlFor="product-image-upload"
                      >
                        <div className={styles.add_image_container}>
                          <i style={{ fontSize: "25px" }}>+</i>
                          <p style={{ fontSize: "15px" }} className="mt-2">
                            افزودن تصویر
                          </p>
                        </div>
                      </label>
                      {/* input file */}
                      <input
                        style={{ width: "0px", height: "0px", opacity: "0px" }}
                        type="file"
                        id="product-image-upload"
                        {...register("product_image_upload", {
                          required: true,
                        })}
                        onChange={onFileChange}
                      ></input>
                      {/* preview image */}
                      {previewImage &&
                        previewImage.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={styles.product_image}
                              style={{
                                backgroundImage: `url(${item})`,
                              }}
                            >
                              <div
                                onClick={() => _removeImage(item)}
                                className={styles.close_icon_container}
                              >
                                <i
                                  style={{ fontSize: 14 }}
                                  className="fas fa-times"
                                ></i>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  {errors.product_image_upload && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                      لطفا این گزینه را پر کنید
                    </span>
                  )}
                </div>
                {/* product detail */}
                <div className="mt-4">
                  <div>
                    <h5
                      style={{ color: "#007aff", fontSize: "14px" }}
                      className="mb-0 d-inline mr-20"
                    >
                      جزئیات محصول
                    </h5>
                  </div>
                </div>
                <hr style={{ background: "#007aff", width: "100%" }} />
                {/* weight */}
                <div className={styles.wrapper_input}>
                  <label className={styles.lable_product} htmlFor="Net_Weight">
                    وزن خالص محصول
                  </label>
                  <div className={styles.wrapper_input_suffixText}>
                    <input
                      style={{ outline: "unset", border: "unset" }}
                      id="Net_Weight"
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
                    <div>
                      <p>گرم</p>
                    </div>
                  </div>
                  {errors.Net_Weight && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors.Net_Weight.message}
                    </span>
                  )}
                </div>
                {/* weight with packing */}
                <div className={styles.wrapper_input}>
                  <label
                    className={styles.lable_product}
                    htmlFor="Weight_With_Packing"
                  >
                    وزن با بسته بندی
                  </label>
                  <div className={styles.wrapper_input_suffixText}>
                    <input
                      style={{ outline: "unset", border: "unset" }}
                      id="Weight_With_Packing"
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
                    <div>
                      <p>گرم</p>
                    </div>
                  </div>
                  {errors.Weight_With_Packing && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors.Weight_With_Packing.message}
                    </span>
                  )}
                </div>
                {/* price */}
                <div className={styles.wrapper_input}>
                  <label className={styles.lable_product} htmlFor="Price">
                    قیمت محصول
                  </label>
                  <div className={styles.wrapper_input_suffixText}>
                    <input
                      style={{ outline: "unset", border: "unset" }}
                      id="Price"
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
                        setStringPrice(_asist.word(e.target.value));
                        setSepratorePrice(numberSeparateUtils(e.target.value));
                      }}
                    />
                    <div>
                      <p>تومان</p>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "rgb(0, 122, 255)",
                      paddingRight: "20px",
                    }}
                  >
                    {stringPrice.length !== 0 && `${stringPrice} تومان`}
                  </span>
                  {errors.Price && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors.Price.message}
                    </span>
                  )}
                </div>
                {/* price with discount */}
                <div className={styles.wrapper_input}>
                  <label className={styles.lable_product} htmlFor="OldPrice">
                    قیمت محصول با تخفیف (اختیاری){" "}
                  </label>
                  <div className={styles.wrapper_input_suffixText}>
                    <input
                      style={{ outline: "unset", border: "unset" }}
                      id="OldPrice"
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
                        setStringOldPrice(_asist.word(e.target.value));
                        setSepratoreOldPrice(
                          numberSeparateUtils(e.target.value)
                        );
                      }}
                    />
                    <div>
                      <p>تومان</p>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "rgb(0, 122, 255)",
                      paddingRight: "20px",
                    }}
                  >
                    {stringOldPrice.length !== 0 && `${stringOldPrice} تومان`}
                  </span>
                  {errors.OldPrice && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors.OldPrice.message}
                    </span>
                  )}
                  {sepratoreOldPrice.length > 0 && (
                    <div className={styles.previewPrice}>
                      <span>پیش نمایش :</span>
                      <span dir="rtl">
                        <del dir="rtl" style={{ color: "#a3a3a3" }}>
                          {sepratorePrice}
                        </del>
                        <br />
                        <b dir="rtl">{sepratoreOldPrice}تومان</b>
                      </span>
                    </div>
                  )}
                </div>
                {/* discription */}
                <div className={styles.wrapper_input}>
                  <label className={styles.lable_product} htmlFor="Description">
                    توضیحات محصول (اختیاری)
                  </label>
                  <textarea
                    className={styles.input_product}
                    id="Description"
                    name="Description"
                    type="text"
                    placeholder="توضیحات خود را در صورت تمایل اینجا وارد کنید"
                    {...register("Description")}
                  />
                </div>
                {/* inventory */}
                <div className={styles.twoCol}>
                  <div>
                    <p
                      htmlFor="Inventory"
                      style={{
                        marginBottom: "10px",
                        color: "#364254",
                        fontSize: 14,
                      }}
                    >
                      موجودی
                    </p>
                    <div className={styles.inputWidRtl}>
                      <button type="button" onClick={add}>
                        <span className="fas fa-plus"></span>
                      </button>
                      <div className={styles.center}>
                        <input
                          type="number"
                          min="0"
                          max="500"
                          value={Add}
                          id="Inventory"
                          name="Inventory"
                          onWheel={(event) => {
                            event.currentTarget.blur();
                          }}
                          onChange={(e) => {
                            setAdd(e.target.value);
                          }}
                        />
                        <h4>عدد</h4>
                      </div>
                      <button type="button" onClick={mini}>
                        <span className="fas fa-minus"></span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* information  */}
                <div className="mt-4">
                  <div>
                    <h5
                      style={{ color: "#007aff", fontSize: "14px" }}
                      className="mb-0 d-inline mr-20"
                    >
                      اطلاعات ارسال
                    </h5>
                  </div>
                </div>
                <hr style={{ background: "#007aff", width: "100%" }} />
                {/* Preparation Days */}
                <div className={styles.twoCol}>
                  <div>
                    <p
                      htmlFor="PreparationDays"
                      style={{
                        marginBottom: "10px",
                        color: "#364254",
                        fontSize: 14,
                      }}
                    >
                      زمان آماده سازی
                    </p>
                    <div className={styles.inputWidRtl}>
                      <button type="button" onClick={AddPreparationDayss}>
                        <span className="fas fa-plus"></span>
                      </button>
                      <div className={styles.center}>
                        <input
                          type="number"
                          min="0"
                          max="500"
                          onWheel={(event) => {
                            event.currentTarget.blur();
                          }}
                          value={AddPreparationDays}
                          id="PreparationDays"
                          name="PreparationDays"
                          onChange={(e) => {
                            setAddPreparationDays(e.target.value);
                          }}
                        />
                        <h4>روز</h4>
                      </div>
                      <button type="button" onClick={miniPreparationDays}>
                        <span className="fas fa-minus"></span>
                      </button>
                    </div>
                    <p style={{ fontSize: "13px", color: "#5E7488" }}>
                      زمان آماده سازی : آماده برای ارسال بعد از سفارش مشتری
                    </p>
                  </div>
                </div>
                {/* product status */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "15px",
                  }}
                >
                  {/* Ready in stock */}
                  <label
                    htmlFor="availbe"
                    className="labels activeLabel"
                    onClick={(e) => {
                      let actives =
                        document.getElementsByClassName("activeLabel");
                      for (let i = 0; i < actives.length; i++) {
                        actives[i].classList.remove("activeLabel");
                      }
                      e.currentTarget.classList.add("activeLabel");
                    }}
                  >
                    اماده در انبار
                  </label>
                  <input
                    defaultChecked={true}
                    value={1}
                    type="radio"
                    name="status_product"
                    id="availbe"
                    className="radios"
                  />
                  {/* Post ready production */}
                  <label
                    htmlFor="stop"
                    className="labels"
                    onClick={(e) => {
                      let actives =
                        document.getElementsByClassName("activeLabel");
                      for (let i = 0; i < actives.length; i++) {
                        actives[i].classList.remove("activeLabel");
                      }
                      e.currentTarget.classList.add("activeLabel");
                    }}
                  >
                    تولید بعد از سفارش
                  </label>
                  <input
                    value={2}
                    type="radio"
                    name="status_product"
                    id="stop"
                    className="radios"
                  />
                  {/* Ordering */}
                  <label
                    htmlFor="soon"
                    className="labels"
                    onClick={(e) => {
                      let actives =
                        document.getElementsByClassName("activeLabel");
                      for (let i = 0; i < actives.length; i++) {
                        actives[i].classList.remove("activeLabel");
                      }
                      e.currentTarget.classList.add("activeLabel");
                    }}
                  >
                    سفارشی سازی فروش
                  </label>
                  <input
                    value={3}
                    type="radio"
                    name="status_product"
                    id="soon"
                    className="radios"
                  />
                  {/* styles label */}
                  <style jsx>
                    {`
                      .labels {
                        background: #ffffff;
                        border: 1px solid #e0e6e9;
                        box-sizing: border-box;
                        border-radius: 5px;
                        width: 250px;
                        height: 41px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: row;
                        font-size: 15px;
                        color: #a4aebb;
                        text-align: center;
                      }
                      .radios {
                        visibility: hidden;
                      }
                      .activeLabel {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: row;
                        background: #ffffff;
                        border: 1px solid #007aff;
                        box-sizing: border-box;
                        border-radius: 5px;
                        width: 250px;
                        height: 41px;
                        font-size: 15px;
                        color: #007aff;
                      }
                    `}
                  </style>
                </div>

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
              {/* left side */}
              <div className={styles.createProduct_lineLeft}>
                <div className="mt-4">
                  <div>
                    <h5
                      style={{ color: "#007aff", fontSize: "14px" }}
                      className="mb-0 d-inline mr-20"
                    ></h5>
                  </div>
                </div>
                <hr style={{ background: "#007aff" }} />
                <div>
                  <p
                    style={{
                      color: "#5E7488",
                      fontSize: "14px",
                      marginTop: "90px",
                    }}
                  >
                    به عنوان مثال : برنج لاشه 10 کیلویی، کشت اول
                  </p>
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
          {/* croperProduct modal*/}
          <div id="crop_container" className={styles.wrapperIMageProduct}>
            <Cropper
              image={imageSrc}
              crop={crop}
              restrictPosition={true}
              zoom={zoom}
              aspect={1}
              classes={{
                containerClassName: "container_cropper_product",
                cropAreaClassName: "product_cropArea",
              }}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
            <div className={styles.controls}>
              <input
                value={zoom}
                type="range"
                step="0.1"
                max="3"
                min="1"
                onChange={(e) => setZoom(e.target.value)}
              />
              <div className={styles.wrapperButton}>
                <div style={{ marginLeft: "10px" }}>
                  <button
                    onClick={showCroppedImage}
                    className="btn btn-success btn-lg"
                  >
                    تایید
                  </button>
                </div>
                <div>
                  <button
                    onClick={_onCloseCropper}
                    className="btn btn-secondary btn-lg"
                  >
                    لغو
                  </button>
                </div>
              </div>
            </div>
          </div>
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

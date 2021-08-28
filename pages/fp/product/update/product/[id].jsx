// node libraries
import { useRouter } from "next/router";
import { connect } from "react-redux";
import Cropper from "react-easy-crop";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
// components
import MyLayout from "../../../../../components/layout/Layout";
import Loading from "../../../../../components/loading/index";
// methods
import { ApiRegister } from "../../../../../services/apiRegister/ApiRegister";
import { mapState } from "../../../../../containers/product/methods/mapState";
import { getCroppedImg } from "../../../../../containers/product/create/canvasUtils";
// styles
import styles from "../../../../../styles/pages/product/create.module.scss";
import { errorMessage } from "../../../../../containers/utils/message";
/**
 * page update product
 * @param {string} activeHojreh => it has slug name
 */
const UpdateProduct = ({ activeHojreh }) => {
  const router = useRouter();
  const { id } = router.query;
  // react form hook
  const {
    setValue,
    clearErrors,
    getValues,
    register,
    setError,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  // on submit
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
    // if error is true
    if (err) {
      setIsLoad(false);
      let confirm = {
        Title: data.Title,
        Inventory: Add,
        Price: data.Price,
        OldPrice: data.OldPrice,
        Net_Weight: data.Net_Weight,
        Weight_With_Packing: data.Weight_With_Packing,
        Description: data.Description,
        Status: product_status,
        PostRangeType: 1,
        PreparationDays: AddPreparationDays,
        // FK_Shop: activeHojreh,
        FK_SubMarket: submarketId,
        Product_Banner: idImage,

        // Product_Banner: previewImage
      };

      let paramsProduct = {};
      let loadDataProduct = confirm;
      let dataUrlProduct = `/api/v1/landing/products/${id}/`;
      let response = await ApiRegister().apiRequest(
        loadDataProduct,
        "PATCH",
        dataUrlProduct,
        true,
        paramsProduct
      );
      // check status code
      if (response.status === 200) {
        setShowSuccessPage(true);
      } else {
        errorMessage("در ویرایش اطلاعات مشکلی پیش آمده است");
      }
    }
  };
  // state
  const [placeholderSubmarckets, setPlaceholderSubmarckets] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [title, settitle] = useState("");
  const [subMarkets, setSubMarkets] = useState([]);
  const [dataChoice, setDataChoice] = useState({ title: "", submarket: "" });
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [Add, setAdd] = useState(1);
  const [AddPreparationDays, setAddPreparationDays] = useState(1);
  const [submarketId, setSubmarketId] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const [idImage, setIdImage] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);

  if (showSuccessPage) {
    router.replace("/fp/product/update/product/successPageEditProduct");
  }

  // get edit date
  const _editProduct = async () => {
    let params = null;
    let loadData = null;
    let dataUrl = `/api/v1/landing/products/${id}/`;
    let response = await ApiRegister().apiRequest(
      loadData,
      "get",
      dataUrl,
      true,
      params
    );
    if (response.status === 200) {
      setValue("Title", response.data.title);
      setValue("submark", response.data.sub_market.title);
      setPlaceholderSubmarckets(response.data.sub_market.title);
      setValue("Net_Weight", response.data.net_weight);
      setValue("Weight_With_Packing", response.data.weight_with_packing);
      if (response.data.price > response.data.old_price) {
        setValue("Price", response.data.price / 10);
        setValue("OldPrice", response.data.old_price / 10);
      } else {
        setValue("Price", response.data.old_price / 10);
        setValue("OldPrice", response.data.price / 10);
      }
      setValue("Description", response.data.description);

      let peree = response.data.banners.map((item) => {
        return item.image;
      });
      setPreviewImage(response.data.banners);

      window.localStorage.setItem("image", JSON.stringify(peree));

      setAdd(response.data.inventory);
      setAddPreparationDays(response.data.preparation_days);
      setIsLoad(true);
      setSubmarketId(response.data.sub_market.id);

      let idImage = response.data.banners.map((item) => {
        return item.id;
      });
      setIdImage(idImage);
    }
  }; //close edit data
  // use effect
  useEffect(() => {
    window.localStorage.setItem("image", JSON.stringify([]));

    if (id) {
      _editProduct();
    }
    const _handleRequestApi = async () => {
      let params = null;
      let loadData = null;
      let dataUrl = "/api/v1/markets/";
      let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        false,
        params
      );
      if (response.status === 200) {
        setIsLoad(true);
        setData(response.data);
      }
    };
    _handleRequestApi();
  }, [activeHojreh]); //close use effect

  const mini = () => {
    if (Add == 0) {
      return;
    }
    setAdd(Add - 1);
  };
  const add = () => {
    setAdd(Add + 1);
  };

  const miniPreparationDays = () => {
    if (AddPreparationDays == 0) {
      return;
    }
    setAddPreparationDays(AddPreparationDays - 1);
  };
  const AddPreparationDayss = () => {
    setAddPreparationDays(AddPreparationDays + 1);
  };
  // submarket
  function clickButton(e) {
    // setSelectList(e.id);
    setSubMarkets(e.submarkets);
    setDataChoice({ ...dataChoice, title: e.title });
    setPage(2);
    settitle(e.title);
  }
  // finalClick
  function finalClick(e) {
    let element = document.getElementById("wrapperMarkets");
    element.style.display = "none";
    let elementProduct = document.getElementById("wrapper_product");
    elementProduct.style.display = "flex";
    setDataChoice({ ...dataChoice, submarket: e.title });
    setPlaceholderSubmarckets(e.title);
    setSubmarketId(e.id);
    setPage((page) => page - 1);
    clearErrors("submark");
  }
  // GoBack
  function GoBack() {
    if (page === 1) {
      let element = document.getElementById("wrapperMarkets");
      element.style.display = "none";
      let elementProduct = document.getElementById("wrapper_product");
      elementProduct.style.display = "flex";
    } else {
      setPage((page) => page - 1);
    }
  }
  // categories
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
  // onFileChange
  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
      let elementImageProduct = document.getElementById("crop_container");
      elementImageProduct.style.display = "block";
    }
  };
  // readFile
  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }
  // close crop image
  const _onCloseCropper = () => {
    let elementImageProduct = document.getElementById("crop_container");
    elementImageProduct.style.display = "none";
    setImageSrc(null);
    setValue("product_image_upload", null);
  };
  // show croped image
  const showCroppedImage = async () => {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);

    if (croppedImage) {
      let listImage = window.localStorage.getItem("image");
      var prev = JSON.parse(listImage);

      let temp = prev.map((value) => {
        return {
          image: value,
        };
      });

      let sendImage = {
        FK_Product: id,
        Image: croppedImage,
      };

      let params = null;
      let loadData = sendImage;
      let dataUrl = "/api/v1/landing/product_banner/";
      let response = await ApiRegister().apiRequest(
        loadData,
        "post",
        dataUrl,
        true,
        params
      );

      let prevImg = {
        image: response.data.Image,
        id: response.data.id,
      };

      setIdImage([...idImage, response.data.id]);

      setPreviewImage([...previewImage, prevImg]);
    }
    let elementImageProduct = document.getElementById("crop_container");
    elementImageProduct.style.display = "none";
    if (prev.length === 5) {
      document.getElementById("product-image-upload").disabled = true;
    } else {
      document.getElementById("product-image-upload").disabled = false;
    }
  };
  // function for remove image
  const _removeImage = (item, id) => {
    let listRemoveImage = window.localStorage.getItem("image");
    let removeImage = JSON.parse(listRemoveImage);
    let testt = removeImage.filter((itemRemove) => {
      return itemRemove.includes(item) ? "" : itemRemove;
    });
    window.localStorage.setItem("image", JSON.stringify(testt));
    // let idd = idImage
    // let removeId = idd.filter((itemRemoveId) => { return itemRemoveId !== id ? "" : itemRemoveId });
    let removeId = idImage.filter((value) => {
      return value !== id ? value : null;
    });
    setIdImage([...removeId]);
    let filter = previewImage.filter((value) => {
      return value.id !== id ? value : null;
    });

    setPreviewImage([...filter]);

    if (testt.length == 0) {
      setValue("product_image_upload", null);
    }
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
                {/* categories */}
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
                        id="product-image-upload"
                        type="file"
                        accept="image/*"
                        style={{ width: "0px", height: "0px", opacity: "0px" }}
                        {...register("product_image_upload")}
                        onChange={onFileChange}
                      />
                      {/* map image */}
                      {previewImage &&
                        previewImage.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={styles.product_image}
                              style={{
                                backgroundImage: `${
                                  item.image
                                    ? `url(${item.image})`
                                    : `url(${item})`
                                } `,
                              }}
                            >
                              <div
                                onClick={() => _removeImage(item, item.id)}
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
                {/* wight */}
                <div className={styles.wrapper_input}>
                  <label className={styles.lable_product} htmlFor="Net_Weight">
                    وزن خالص محصول
                  </label>
                  <div className={styles.wrapper_input_suffixText}>
                    <input
                      style={{ outline: "unset", border: "unset" }}
                      id="Net_Weight"
                      type="number"
                      {...register("Net_Weight", {
                        required: "لطفا این گزینه را پرنمایید",
                        min: {
                          value: 1,
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
                {/* wight with packing */}
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
                      {...register("Price", {
                        required: "لطفا این گزینه را پرنمایید",
                        min: {
                          value: 500,
                          message: "لطفا اعداد بزرگتر از 500 وارد نمایید",
                        },
                      })}
                    />
                    <div>
                      <p>تومان</p>
                    </div>
                  </div>
                  {errors.Price && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors.Price.message}
                    </span>
                  )}
                </div>
                {/* price with Discount */}
                <div className={styles.wrapper_input}>
                  <label className={styles.lable_product} htmlFor="OldPrice">
                    قیمت محصول با تخفیف (اختیاری){" "}
                  </label>
                  <div className={styles.wrapper_input_suffixText}>
                    <input
                      style={{ outline: "unset", border: "unset" }}
                      id="OldPrice"
                      type="number"
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
                    <div>
                      <p>تومان</p>
                    </div>
                  </div>
                  {errors.OldPrice && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors.OldPrice.message}
                    </span>
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
                {/* send */}
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
                {/* time inventory */}
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
                  {/* availble */}
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
                  {/* Post after order production  */}
                  <input
                    defaultChecked={true}
                    value={1}
                    type="radio"
                    name="status_product"
                    id="availbe"
                    className="radios"
                  />
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
                {/* button update */}
                <div>
                  <button
                    type="submit"
                    id="submitButton"
                    className={styles.form_buttonSubmit}
                  >
                    ویرایش محصول
                  </button>
                </div>
              </div>
              {/* laft side show in desktop */}
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
          {/* categories */}
          <div
            style={{
              position: "relative",
              gridColumn: "1/-1",
              gridRow: "1/-1",
              background: "#ffffff",
            }}
          >
            <div id="wrapperMarkets" className={styles.markets}>
              <div className={styles.wrapper}>
                {/* // progress bar */}
                <div className={styles.Header}>
                  <button
                    style={{ outline: "unset" }}
                    onClick={GoBack}
                    className={styles.btn_icon}
                  >
                    <span
                      className="fas fa-arrow-right"
                      style={{
                        fontSize: "15px",
                        color: "#5E7488",
                        marginLeft: "20px",
                        marginRight: "20px",
                      }}
                    ></span>
                  </button>
                  {page === 1 && <h2>انتخاب دسته بندی</h2>}
                  {page !== 1 && <h2> انتخاب زیر دسته از {title} </h2>}
                </div>
                <div className={styles.content}>
                  {page === 1 ? (
                    data?.map((e, index) => {
                      return (
                        <button
                          key={index}
                          style={{ outline: "unset" }}
                          className={styles.btn}
                          onClick={() => clickButton(e)}
                        >
                          <div className={styles.in_btn}>
                            <h2 style={{ marginRight: "14px" }}>{e.title}</h2>
                            <span
                              style={{ marginLeft: "14px" }}
                              className="fas fa-chevron-left fa-2x"
                            ></span>
                          </div>
                        </button>
                      );
                    })
                  ) : page === 2 ? (
                    <>
                      {subMarkets?.map((e, index) => {
                        return (
                          <button
                            key={index}
                            style={{ outline: "unset" }}
                            className={styles.btn}
                            onClick={() => finalClick(e)}
                          >
                            <div className={styles.in_btn}>
                              <h2 style={{ marginRight: "14px" }}>{e.title}</h2>
                              <span
                                style={{ marginLeft: "14px" }}
                                className="fas fa-chevron-left fa-2x"
                              ></span>
                            </div>
                          </button>
                        );
                      })}
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/* croperProduct */}
          <div id="crop_container" className={styles.wrapperIMageProduct}>
            <Cropper
              image={imageSrc}
              crop={crop}
              restrictPosition={true}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              classes={{
                containerClassName: "container_cropper_product",
                cropAreaClassName: "product_cropArea",
              }}
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
// export
const connector = connect(mapState);
export default connector(UpdateProduct);
UpdateProduct.Layout = MyLayout;

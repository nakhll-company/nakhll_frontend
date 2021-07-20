import { useCallback, useEffect, useState } from "react";
import { number } from "yup";
import MyLayout from "../../../../components/layout/Layout";
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
import styles from "../../../../styles/pages/product/create.module.scss";
import Cropper from "react-easy-crop";
import Image from "next/image";
import useViewport from "../../../../components/viewPort";
import { value } from "dom7";
import { connect } from "react-redux";
import { mapState } from "../../../../containers/order/methods/mapState";

// component

async function getCroppedImg(imageSrc, pixelCrop) {
  // const image = await createImage(imageSrc)
  // const xx = await new Image()
  let img = document.createElement("img");
  img.src = imageSrc;
  debugger;

  // console.log(`xx`, xx)  // xx.addEventListener('load', () => resolve(imageSrc))

  // image.addEventListener('load', () => resolve(xx))
  // setTimeout(() => {

  //   xx.src = imageSrc
  // }, 3000);

  // const image = imageSrc
  const canvas = document.createElement("canvas");
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx = canvas.getContext("2d");
  debugger;

  ctx.drawImage(
    img,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  // As Base64 string
  // return canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob((file) => {
      resolve(URL.createObjectURL(file));
    }, "image/jpeg");
  });
}

const CreateProduct = ({ activeHojreh }) => {
  const [placeholderSubmarckets, setPlaceholderSubmarckets] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [selectList, setSelectList] = useState("");
  const [title, settitle] = useState("");
  const [subMarkets, setSubMarkets] = useState([]);
  const [valueSubMarkets, setValueSubMarkets] = useState("");
  const [dataChoice, setDataChoice] = useState({
    title: "",
    submarket: "",
  });
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  // const [image, setImage] = useState("");
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [Add, setAdd] = useState(0);
  const [AddPreparationDays, setAddPreparationDays] = useState(1);
  const [valueWeight, setValueWeight] = useState(null);
  const [isErrorWeight, setIsErrorWeight] = useState(false);
  const [isErrorPrice, setIsErrorPrice] = useState(false);
  const [dataUser, setDataUser] = useState(false);
  let [formInputs, setFormInputs] = useState({
    Title: "",
    Inventory: 0,
    Slug: "",
    Price: 0,
    OldPrice: 0,
    Net_Weight: 0,
    Weight_With_Packing: 0,
    Description: "",
    Status: 0,
    PostRangeType: 0,
    PreparationDays: 0,
    FK_Shop: "",
    errors: {
      Title: "نام حجره باید حداقل 5 حرف باشد",
      Inventory: 0,
      Slug: "",
      Price: 0,
      OldPrice: 0,
      Net_Weight: 0,
      Weight_With_Packing: 0,
      Description: "",
      Status: 0,
      PostRangeType: 0,
      PreparationDays: 0,
      FK_Shop: "",
    },
  });

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = formInputs.errors;

    switch (name) {
      case "Title":
        errors.Title = value.length < 5 ? "نام حجره باید حداقل 5 حرف باشد" : "";
        break;
      default:
        break;
    }

    setFormInputs({ errors, [name]: value });
  };

  useEffect(() => {
    console.log(`activeHojreh`, activeHojreh);
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
      // console.log("res uncomsdfsf :", response);
      // const dataUser = response;
      setData(response); //==> output: {}
    };
    _handleRequestApi();

    const _handleRequestApiUserInfo = async () => {
      let params = null;
      let loadData = null;
      let dataUrl = "app/api/v1/get-user-info/";
      let responseUser = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        true,
        params
      );
      const data = responseUser;
      setDataUser(responseUser); //==> output: {}
    };
    _handleRequestApiUserInfo();
  }, [activeHojreh]);

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

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    // console.log("croppedArea, croppedAreaPixels", croppedArea, croppedAreaPixels)
  }, []);

  // submarket
  function clickButton(e) {
    setSelectList(e.id);
    setSubMarkets(e.submarkets);
    setDataChoice({ ...dataChoice, title: e.title });

    setPage(2);
    // console.log("el :>> ", e);
    settitle(e.title);
    // console.log("e.title :>> ", e.title);
  }
  function finalClick(e) {
    let element = document.getElementById("wrapperMarkets");
    element.style.display = "none";
    let elementProduct = document.getElementById("wrapper_product");
    elementProduct.style.display = "flex";
    // let elementProgressbar = document.getElementById("progressbar")
    // elementProgressbar.style.display = "flex"

    // console.log("ee :>> ", e);
    setDataChoice({ ...dataChoice, submarket: e.title });
    setPlaceholderSubmarckets(e.title);
    // setValueSubMarkets(e.id)
    setPage((page) => page - 1);
  }

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

  const _selectSubmarket = () => {
    let element = document.getElementById("wrapperMarkets");
    element.style.display = "block";
    let elementProduct = document.getElementById("wrapper_product");
    // let elementProgressbar = document.getElementById("progressbar")
    elementProduct.style.display = "none";
    // elementProgressbar.style.display = "none"
    // console.log(`element`, element)
  };

  // cropper

  const onFileChange = async (e) => {
    // const res = await readFile(e.target.files[0]);
    // console.log("sdfsdf", res)
    // setImageSrc(res)
    // let elementImageProduct = document.getElementById("crop_container")
    // elementImageProduct.style.display = "block"

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await URL.createObjectURL(file);
      setImageSrc(imageDataUrl);
      // console.log(`imageDataUrl`, imageDataUrl)
      let elementImageProduct = document.getElementById("crop_container");
      elementImageProduct.style.display = "block";
      // debugger
    }
  };

  const _onCloseCropper = () => {
    let elementImageProduct = document.getElementById("crop_container");
    elementImageProduct.style.display = "none";
    setImageSrc(null);
  };

  const showCroppedImage = async () => {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    debugger;
    // console.log(croppedImage)
    setPreviewImage(croppedImage);
    let elementImageProduct = document.getElementById("crop_container");
    elementImageProduct.style.display = "none";
    debugger;
  };

  const createProducts = async (body) => {
    if (validateForm(formInputs.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }

    let product_status = document.querySelector(
      "input[type=radio]:checked"
    ).value;

    let confirm = {
      Title: body.Title,
      Inventory: body.Inventory,
      Slug: "kgkgkgk",
      Price: body.Price,
      OldPrice: body.OldPrice,
      Net_Weight: body.Net_Weight,
      Weight_With_Packing: body.Weight_With_Packing,
      Description: body.Description,
      Status: 1,
      PostRangeType: 1,
      PreparationDays: body.PreparationDays,
      FK_Shop: activeHojreh,
    };
    debugger;
    let params = {};
    let loadData = confirm;
    let dataUrl = "/api/v1/landing/products/";
    let response = await ApiRegister().apiRequest(
      loadData,
      "post",
      dataUrl,
      true,
      params
    );
    return response;
    debugger;
  };

  const _checkWeight = () => {
    let Net_Weight = parseInt(document.getElementById("Net_Weight").value);
    let Weight_With_Packing = parseInt(
      document.getElementById("Weight_With_Packing").value
    );
    debugger;
    if (
      Net_Weight > Weight_With_Packing &&
      Weight_With_Packing !== NaN &&
      Weight_With_Packing !== undefined
    ) {
      setIsErrorWeight(true);
      debugger;
    } else {
      setIsErrorWeight(false);
      debugger;
    }
  };

  const _checkPrice = () => {
    let Price = parseInt(document.getElementById("Price").value);
    let OldPrice = parseInt(document.getElementById("OldPrice").value);

    if (OldPrice > Price) {
      setIsErrorPrice(true);
      debugger;
    } else {
      setIsErrorPrice(false);
      debugger;
    }
  };

  let sub = null;
  if (previewImage) {
    sub = previewImage.substring(26, previewImage.length);
  }
  return (
    <>
      <div className={styles.wrapper}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const data = new FormData(e.target);
            let body = Object.fromEntries(data.entries());
            let response = await createProducts(body);
            // if (response.status === 201) {
            //   setShowSuccessPage(showSuccessPage => !showSuccessPage);
            // }
          }}
        >
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

              <div className={styles.wrapper_input}>
                <label className={styles.lable_product} htmlFor="Title">
                  نام محصول
                </label>
                <input
                  className={styles.input_product}
                  id="Title"
                  name="Title"
                  type="text"
                  placeholder="برنج لاشه 10 کیلویی، کشت اول"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {formInputs.Title.length > 0 && (
                  <span className={styles.error}>
                    {formInputs.errors.Title}
                  </span>
                )}
              </div>

              <div className={styles.wrapper_input}>
                <label className={styles.lable_product} htmlFor="Title">
                  دسته بندی
                </label>
                <input
                  className={styles.input_product}
                  value={placeholderSubmarckets}
                  id="Title"
                  name="Title"
                  type="text"
                  onClick={_selectSubmarket}
                />
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
                  {" "}
                  حداکثر تا 5 تصویر ، تصویر ابتدایی به عنوان تصویر اصلی نمایش
                  داده خواهد شد.
                </div>
                <div className="mt-4" name="mainPhoto">
                  <div className={styles.product_image_container}>
                    <label htmlFor="product-image-upload">
                      <div
                        className={styles.add_image_container}
                        // onClick={onFileChange}
                      >
                        <i style={{ fontSize: "25px" }}>+</i>
                        <p style={{ fontSize: "15px" }} className="mt-2">
                          افزودن تصویر
                        </p>
                      </div>
                    </label>
                    <input
                      onChange={onFileChange}
                      name="productImage"
                      id="product-image-upload"
                      type="file"
                      style={{ width: "0px", height: "0px", opacity: "0px" }}
                    ></input>

                    {sub ? (
                      <label style={{ marginRight: 10 }}>
                        <div
                          className={styles.add_image_container}
                          // onClick={onFileChange}
                        >
                          <Image
                            src={sub}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                          />
                          {/* {
                                          imageSrc ?
                                          // <Image src={imageSrc} alt="Picture of the author"        width={500}
                                          height={500}      
                                          /> : null
                                        } */}
                        </div>
                      </label>
                    ) : (
                      <label style={{ marginRight: 10 }}>
                        <div
                          className={styles.add_image_container}
                          // onClick={onFileChange}
                        >
                          {/* {
                                              imageSrc ?
                                              <Image src={imageSrc} alt="Picture of the author"        width={500}
                                              height={500}      
                                              /> : null
                                            } */}
                        </div>
                      </label>
                    )}
                  </div>
                </div>
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

              <div className={styles.wrapper_input}>
                <label className={styles.lable_product} htmlFor="Net_Weight">
                  وزن خالص محصول
                </label>
                <div className={styles.wrapper_input_suffixText}>
                  <input
                    style={{ outline: "unset", border: "unset" }}
                    id="Net_Weight"
                    name="Net_Weight"
                    type="number"
                    onChange={(e) => _checkWeight(e.target.value)}
                  />
                  <div>
                    <p>گرم</p>
                  </div>
                </div>
              </div>

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
                    name="Weight_With_Packing"
                    type="number"
                    onChange={(e) => _checkWeight(e.target.value)}
                  />
                  <div>
                    <p>گرم</p>
                  </div>
                </div>
                {isErrorWeight && (
                  <p
                    style={{ color: "red", fontSize: "14px" }}
                    className="text-danger"
                  >
                    وزن مشخص شده، می‌بایست بیشتر از وزن خالص محصول باشد
                  </p>
                )}
              </div>

              <div className={styles.wrapper_input}>
                <label className={styles.lable_product} htmlFor="Price">
                  قیمت محصول
                </label>
                <div className={styles.wrapper_input_suffixText}>
                  <input
                    style={{ outline: "unset", border: "unset" }}
                    id="Price"
                    name="Price"
                    type="number"
                    onChange={(e) => _checkPrice(e.target.value)}
                  />
                  <div>
                    <p>تومان</p>
                  </div>
                </div>
              </div>

              <div className={styles.wrapper_input}>
                <label className={styles.lable_product} htmlFor="OldPrice">
                  قیمت محصول با تخفیف (اختیاری){" "}
                </label>
                <div className={styles.wrapper_input_suffixText}>
                  <input
                    style={{ outline: "unset", border: "unset" }}
                    id="OldPrice"
                    name="OldPrice"
                    type="number"
                    onChange={(e) => _checkPrice(e.target.value)}
                  />
                  <div>
                    <p>تومان</p>
                  </div>
                </div>
                {isErrorPrice && (
                  <p
                    style={{ color: "red", fontSize: "14px" }}
                    className="text-danger"
                  >
                    قیمت مشخص شده برای تخفیف، می‌بایست کمتر از قیمت اصلی باشد
                  </p>
                )}
              </div>

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
                        onChange={(e) => {
                          setAdd(e.target.value);
                        }}
                        id="Inventory"
                        name="Inventory"
                      />
                      <h4>عدد</h4>
                    </div>

                    <button type="button" onClick={mini}>
                      <span className="fas fa-minus"></span>
                    </button>
                  </div>
                </div>
                {/* <div>
                  <h4 className={styles.explain}>sdfsdf</h4>
                </div> */}
              </div>

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
                        onChange={(e) => {
                          setAddPreparationDays(e.target.value);
                        }}
                        id="PreparationDays"
                        name="PreparationDays"
                      />
                      <h4>عدد</h4>
                    </div>

                    <button type="button" onClick={miniPreparationDays}>
                      <span className="fas fa-minus"></span>
                    </button>
                  </div>
                  <p style={{ fontSize: "13px", color: "#5E7488" }}>
                    زمان آماده سازی : آماده برای ارسال بعد از سفارش مستری
                  </p>
                </div>
                {/* <div>
                  <h4 className={styles.explain}>sdfsdf</h4>
                </div> */}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
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
                  اماده در انبار{" "}
                </label>
                <input
                  checked={true}
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
                <style jsx>{`
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
                `}</style>
              </div>

              <div>
                <button type="submit" className={styles.form_buttonSubmit}>
                  ثبت محصول
                </button>
              </div>
            </div>

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
                <p
                  style={{
                    color: "#5E7488",
                    fontSize: "14px",
                    marginTop: "90px",
                  }}
                >
                  حداکثر تا 5 تصویر ، تصویر ابتدایی به عنوان تصویر اصلی نمایش
                  داده خواهد شد.
                </p>
                <p
                  style={{
                    color: "#5E7488",
                    fontSize: "14px",
                    marginTop: "100px",
                  }}
                >
                  حداکثر تا 5 تصویر ، تصویر ابتدایی به عنوان تصویر اصلی نمایش
                  داده خواهد شد.
                </p>
                <p
                  style={{
                    color: "#5E7488",
                    fontSize: "14px",
                    marginTop: "100px",
                  }}
                >
                  حداکثر تا 5 تصویر ، تصویر ابتدایی به عنوان تصویر اصلی نمایش
                  داده خواهد شد.
                </p>
                <p
                  style={{
                    color: "#5E7488",
                    fontSize: "14px",
                    marginTop: "100px",
                  }}
                >
                  حداکثر تا 5 تصویر ، تصویر ابتدایی به عنوان تصویر اصلی نمایش
                  داده خواهد شد.
                </p>
                <p
                  style={{
                    color: "#5E7488",
                    fontSize: "14px",
                    marginTop: "100px",
                  }}
                >
                  حداکثر تا 5 تصویر ، تصویر ابتدایی به عنوان تصویر اصلی نمایش
                  داده خواهد شد.
                </p>
                <p
                  style={{
                    color: "#5E7488",
                    fontSize: "14px",
                    marginTop: "100px",
                  }}
                >
                  حداکثر تا 5 تصویر ، تصویر ابتدایی به عنوان تصویر اصلی نمایش
                  داده خواهد شد.
                </p>
                <p
                  style={{
                    color: "#5E7488",
                    fontSize: "14px",
                    marginTop: "100px",
                  }}
                >
                  حداکثر تا 5 تصویر ، تصویر ابتدایی به عنوان تصویر اصلی نمایش
                  داده خواهد شد.
                </p>
                <p
                  style={{
                    color: "#5E7488",
                    fontSize: "14px",
                    marginTop: "100px",
                  }}
                >
                  حداکثر تا 5 تصویر ، تصویر ابتدایی به عنوان تصویر اصلی نمایش
                  داده خواهد شد.
                </p>
              </div>
            </div>
          </div>
        </form>

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
                    className="fas fa-arrow-right "
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
                  data?.map((e) => {
                    return (
                      <button
                        style={{ outline: "unset" }}
                        onClick={() => clickButton(e)}
                        className={styles.btn}
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
                    {subMarkets?.map((e) => {
                      return (
                        <button
                          style={{ outline: "unset" }}
                          onClick={() => finalClick(e)}
                          className={styles.btn}
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
                {/* {page === 1 &&
                                      data?.map((e) => {
                                        return (
                                          <button onClick={() => clickButton(e)} className={stylesPage1.btn}>
                                            <div className={stylesPage1.in_btn}>
                                              <h2 style={{ marginRight: "14px" }}>{e.title}</h2>
                                              <span
                                                style={{ marginLeft: "14px" }}
                                                className="fas fa-chevron-left fa-2x"
                                              ></span>
                                            </div>
                                          </button>
                                        );
                                      })
                                      } */}
                {/* 
                                    {page != 1 && (
                                      // <>
                                      //   {subMarkets?.map((e) => {
                                      //     return (
                                      //       <button onClick={() => finalClick(e)} className={stylesPage1.btn}>
                                      //         <div className={stylesPage1.in_btn}>
                                      //           <h2 style={{ marginRight: "14px" }}>{e.title}</h2>
                                      //           <span
                                      //             style={{ marginLeft: "14px" }}
                                      //             className="fas fa-chevron-left fa-2x"
                                      //           ></span>
                                      //         </div>
                                      //       </button>
                                      //     );
                                      //   })}

                                      // </>
                                    )} */}
                {/* {page} */}
              </div>
            </div>
          </div>
        </div>

        {/* croperProduct */}

        <div id="crop_container" className={styles.wrapperIMageProduct}>
          {/* <div className={stylesPage1.button_container} >sdftgrdfhtryhur</div> */}
          <Cropper
            image={imageSrc}
            crop={crop}
            classes={{
              containerClassName: "container_cropper_product",
              cropAreaClassName: "product_cropArea",
            }}
            // rotation={rotation}
            // cropSize={{width: 300, height: 300}}
            restrictPosition={true}
            zoom={zoom}
            aspect={2 / 2}
            onCropChange={setCrop}
            // onRotationChange={setRotation}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
          <div className={styles.controls}>
            <input
              onChange={(e) => setZoom(e.target.value)}
              value={zoom}
              type="range"
              step="0.1"
              max="3"
              min="1"
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
};
const connector = connect(mapState);
export default connector(CreateProduct);

CreateProduct.Layout = MyLayout;

import { useCallback, useEffect, useState } from "react";
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
import MyLayout from "../../../../components/layout/Layout";
import Loading from "../../../../components/loading/index";
import styles from "../../../../styles/pages/product/create.module.scss";
import Cropper from "react-easy-crop";
import Image from "next/image";
import { connect } from "react-redux";
import { mapState } from "../../../../containers/order/methods/mapState";
import { getCroppedImg } from "../../../../containers/product/create/canvasUtils";
import { useForm } from "react-hook-form";
import SuccessPageProduct from "../../../../containers/product/create/sucsses";
import { useRouter } from "next/router";


const CreateProduct = ({ activeHojreh }) => {

  const { setValue, clearErrors, register, setError, handleSubmit, watch, formState: { errors } } = useForm({
    criteriaMode: 'all',
  });


  const onSubmit = async (data) => {
    let err = false
    if (!placeholderSubmarckets) {
      setError("submark", { type: "focus" }, { shouldFocus: true })
    } else {
      err = true
    }
    let product_status = document.querySelector(
      "input[type=radio]:checked"
    ).value;
    console.log("product_status", product_status)


    if (err) {
      setshowMessage(0);
      setIsLoading(true);
      let confirm = {
        Title: data.Title,
        Inventory: Add,
        Slug: "kgkgkgk",
        Price: data.Price,
        OldPrice: data.OldPrice,
        Net_Weight: data.Net_Weight,
        Weight_With_Packing: data.Weight_With_Packing,
        Description: data.Description,
        Status: product_status,
        PostRangeType: 1,
        PreparationDays: AddPreparationDays,
        FK_Shop: activeHojreh,
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
      var resultId = response.data.ID
      console.log("rsadjnsa,", resultId);

      if (resultId) {
        let idProduct = {
          "product": resultId,
          "submarkets": [
            submarketId
          ]
        }

        let paramssubmarkets = {};
        let loadDatasubmarkets = idProduct;
        let dataUrlsubmarkets = "/api/v1/product/categories/";
        let responsesubmarkets = await ApiRegister().apiRequest(
          loadDatasubmarkets,
          "post",
          dataUrlsubmarkets,
          true,
          paramssubmarkets
        );



        let imagesProduct = {
          "product": resultId,
          "images":
            previewImage

        }

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
          setIsLoading(false);
          setshowMessage(1);

          // setIsLoad(false)

          // let element = document.getElementById("wrapper_product");
          // element.style.display = "none";
          setShowSuccessPage(true);
        }




      }

    }



  };

  const [placeholderSubmarckets, setPlaceholderSubmarckets] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [selectList, setSelectList] = useState("");
  const [title, settitle] = useState("");
  const [subMarkets, setSubMarkets] = useState([]);
  const [dataChoice, setDataChoice] = useState({
    title: "",
    submarket: "",
  });
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [Add, setAdd] = useState(1);
  const [AddPreparationDays, setAddPreparationDays] = useState(1);
  const [isErrorWeight, setIsErrorWeight] = useState(false);
  const [isErrorPrice, setIsErrorPrice] = useState(false);
  const [dataUser, setDataUser] = useState(false);
  const [submarketId, setSubmarketId] = useState(null);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [showMessage, setshowMessage] = useState(0);
  const router = useRouter()
  const { id } = router.query

  console.log(`router`, id)

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
      setValue('Title', response.data.title)
      setValue('submark', response.data.sub_market.title)
      setPlaceholderSubmarckets(response.data.sub_market.title)
      setValue('Net_Weight', response.data.net_weight)
      setValue('Weight_With_Packing', response.data.weight_with_packing)
      setValue('Price', response.data.price)
      setValue('OldPrice', response.data.old_price)
      setValue('Description', response.data.description)
      setPreviewImage(response.data.banners)
      setAdd(response.data.inventory)
      setAddPreparationDays(response.data.preparation_days)

      // setDa taUser(response.data); //==> output: {}
      // console.log(`responsedsfds`, response.data)
      setIsLoad(true)
    }

  }



  useEffect(() => {
    // setShowSuccessPage(false);


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
        setIsLoad(true)
        setData(response.data); //==> output: {}


      }

      console.log("res uncomsdfsf :", activeHojreh);
      // const dataUser = response;

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
    setSubmarketId(e.id)
    setPage((page) => page - 1);
    clearErrors("submark")

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

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // let imageDataUrl = await URL.createObjectURL(file);
      let imageDataUrl = await readFile(file)
      setImageSrc(imageDataUrl);

      let elementImageProduct = document.getElementById("crop_container");
      elementImageProduct.style.display = "block";
      // 
    }
  };

  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.addEventListener('load', () => resolve(reader.result), false)
      reader.readAsDataURL(file)
    })
  }

  const _onCloseCropper = () => {
    let elementImageProduct = document.getElementById("crop_container");
    elementImageProduct.style.display = "none";
    setImageSrc(null);
    setValue("product_image_upload", null)
  };





  const showCroppedImage = async () => {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    if (croppedImage) {
      let listImage = window.localStorage.getItem("image");
      var prev = JSON.parse(listImage)
      setPreviewImage(prev);

    }

    // await prevImage()
    let elementImageProduct = document.getElementById("crop_container");
    elementImageProduct.style.display = "none";
    // let elementImageProductDisabeld = document.getElementById("product-image-upload");
    if (prev.length === 5) {
      document.getElementById("product-image-upload").disabled = true;
    }
    // elementImageProduct.style.display = "none";

    // const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    // if (croppedImage) {
    //   let listImage2 = window.localStorage.getItem("image");
    //   var xx = JSON.parse(listImage2)
    //   setPreviewImage(xx[0]);


    //
    // }
    // setTimeout(() => {

    //   prev = [...prev , getCroppedImg(imageSrc, croppedAreaPixels)]
    // }, 2000);
    // setTimeout(() => {

    //   console.log("dddd" ,prev)
    // }, 2500);


    // let previmg = prev.map((item) => {
    //   return (<label style={{ marginRight: 10 }}>
    //     <div
    //       className={styles.add_image_container}
    //     // onClick={onFileChange}
    //     >
    //       <Image
    //         src={item}
    //         alt="Picture of the author"
    //         width={500}
    //         height={500}
    //       />
    //     </div>
    //   </label>)

    // });


  };



  // confirm

  const createProducts = async (body) => {

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
    return response.data;
  };


  // validate

  const _checkWeight = () => {
    let Net_Weight = parseInt(document.getElementById("Net_Weight").value);
    let Weight_With_Packing = parseInt(
      document.getElementById("Weight_With_Packing").value
    );
    ;
    if (
      Net_Weight > Weight_With_Packing &&
      Weight_With_Packing !== NaN &&
      Weight_With_Packing !== undefined
    ) {
      setIsErrorWeight(true);
    } else {
      setIsErrorWeight(false);
    }
  };

  const _checkPrice = () => {
    let Price = parseInt(document.getElementById("Price").value);
    let OldPrice = parseInt(document.getElementById("OldPrice").value);

    if (OldPrice > Price) {
      setIsErrorPrice(true);
    } else {
      setIsErrorPrice(false);
    }
  };


  const _removeImage = (item) => {
    let itemImage = [item]
    let listRemoveImage = window.localStorage.getItem("image");
    var removeImage = JSON.parse(listRemoveImage)
    let list = [...itemImage, ...removeImage]
    let testt = removeImage.filter((itemRemove) => { return itemRemove.includes(item) ? "" : itemRemove });
    window.localStorage.setItem("image", JSON.stringify(testt));

    setPreviewImage(testt);
    if (testt.length == 0) {
      setValue("product_image_upload", null)

    }

  }
  console.log(`dataUser.Title`, dataUser)

  if (isLoad) {
    return (

      <>
        <div key={dataUser.id} className={styles.wrapper}>
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
                {/* <input {...register("firstName", { required: true })} /> */}
                {/* {errors.firstName && <span style={{ color: "red", fontSize: "14px" }}>لطفا این گزینه را پر کنید</span>} */}


                <div className={styles.wrapper_input}>
                  <label className={styles.lable_product} htmlFor="Title">
                    نام محصول
                  </label>
                  <input
                    className={styles.input_product}
                    id="Title"
                    type="text"
                    // placeholder="برنج لاشه 10 کیلویی، کشت اول"
                    defaultValue={dataUser.Title}
                    {...register("Title", { required: true })}
                  />
                  {errors.Title && <span style={{ color: "red", fontSize: "14px" }}>لطفا این گزینه را پر کنید</span>}
                </div>

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
                  {errors.submark && <span style={{ color: "red", fontSize: "14px" }}>لطفا این گزینه را پر کنید</span>}

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
                      <label style={{ marginTop: 10, marginRight: 10 }} htmlFor="product-image-upload">
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
                        {...register("product_image_upload", { required: true })}
                        onChange={onFileChange}
                        // name="product_image_upload"
                        id="product-image-upload"
                        type="file"
                        style={{ width: "0px", height: "0px", opacity: "0px" }}

                      ></input>
                      {/* {
                    showCroppedImage
                  } */}

                      {previewImage ? (

                        previewImage.map((item) => {
                          return (

                            <div className={styles.product_image} style={{
                              backgroundImage: `url(${item})`
                            }}>
                              <div onClick={() => _removeImage(item)} className={styles.close_icon_container}>
                                <i style={{ fontSize: 14 }} class="fas fa-times"></i>


                              </div>
                            </div>

                          )
                        })
                      ) : (
                        null

                      )}


                    </div>
                  </div>
                  {errors.product_image_upload && <span style={{ color: "red", fontSize: "14px" }}>لطفا این گزینه را پر کنید</span>}

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
                      {...register("Net_Weight", { required: true })}

                    />
                    <div>
                      <p>گرم</p>
                    </div>
                  </div>
                  {errors.Net_Weight && <span style={{ color: "red", fontSize: "14px" }}>لطفا این گزینه را پر کنید</span>}

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
                      {...register("Weight_With_Packing", { required: true })}

                    />
                    <div>
                      <p>گرم</p>
                    </div>
                  </div>
                  {errors.Weight_With_Packing && <span style={{ color: "red", fontSize: "14px" }}>لطفا این گزینه را پر کنید</span>}

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
                      {...register("Price", { required: true })}

                    />
                    <div>
                      <p>تومان</p>
                    </div>
                  </div>
                  {errors.Price && <span style={{ color: "red", fontSize: "14px" }}>لطفا این گزینه را پر کنید</span>}

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
                        <h4>روز</h4>
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
                    اماده در انبار
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
                {IsLoading && (
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className={styles.loader}>
                      <Image
                        src="/image/LOGO_500.png"
                        alt="Picture of the author"
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3
                      className={styles.nameLoding}
                      style={{
                        fontSize: "15px",
                        color: "hsl(211deg 100% 50%)",
                      }}
                    >
                      در حال بروزرسانی ...
                    </h3>
                  </div>
                )}
                {showMessage == 1 && (
                  <div>
                    <h3 style={{ color: "green" }}>
                      به روز رسانی با موفقیت انجام شد.
                    </h3>
                  </div>
                )}
                {showMessage == 2 && (
                  <div>
                    <h3 style={{ color: "red" }}>
                      عملیات به روز رسانی موفقیت آمیز نبود.لطفا باری
                      دیگر اقدام کنید.
                    </h3>
                  </div>
                )}

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
                  {/* <p
                style={{
                  color: "#5E7488",
                  fontSize: "14px",
                  marginTop: "90px",
                }}
              >
                حداکثر تا 5 تصویر ، تصویر ابتدایی به عنوان تصویر اصلی نمایش
                داده خواهد شد.
              </p> */}
                  {/* <p
                style={{
                  color: "#5E7488",
                  fontSize: "14px",
                  marginTop: "100px",
                }}
              >
                حداکثر تا 5 تصویر ، تصویر ابتدایی به عنوان تصویر اصلی نمایش
                داده خواهد شد.
              </p> */}
                  {/* <p
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
             */}
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
              aspect={1}
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


        {showSuccessPage && <SuccessPageProduct />}

      </>


    );

  } else {
    return (
      <Loading />)
  }

};
const connector = connect(mapState);
export default connector(CreateProduct);

CreateProduct.Layout = MyLayout;

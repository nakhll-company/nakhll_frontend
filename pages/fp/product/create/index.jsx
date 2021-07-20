import { useCallback, useEffect, useState } from "react";
import { number } from "yup";
import MyLayout from "../../../../components/layout/Layout";
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
import styles from "../../../../styles/pages/product/create.module.scss";
import Cropper from 'react-easy-crop'
import Image from "next/image";


// component

async function getCroppedImg(imageSrc, pixelCrop) {
  // const image = await createImage(imageSrc)
  // const xx = await new Image()
  let img = document.createElement('img');
  img.src = imageSrc
  debugger


  // console.log(`xx`, xx)  // xx.addEventListener('load', () => resolve(imageSrc))

  // image.addEventListener('load', () => resolve(xx))
  // setTimeout(() => {

  //   xx.src = imageSrc
  // }, 3000);

  // const image = imageSrc
  const canvas = document.createElement('canvas')
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height
  const ctx = canvas.getContext('2d')
  debugger

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
  )

  // As Base64 string 
  // return canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(file => {
      resolve(URL.createObjectURL(file))
    }, 'image/jpeg')
  })
}

const CreateProduct = () => {

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
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  // const [image, setImage] = useState("");
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [Add, setAdd] = useState(20);




  useEffect(() => {
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
      // console.log("res uncom :", response);
      const data = response;
      setData(response); //==> output: {}
    };
    _handleRequestApi();
  }, []);

  const mini = () => {
    setAdd(Add - 1);
  };
  const add = () => {
    setAdd(Add + 1);
  };


  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
    // console.log("croppedArea, croppedAreaPixels", croppedArea, croppedAreaPixels)
  }, [])





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
    let element = document.getElementById("wrapperMarkets")
    element.style.display = "none"
    let elementProduct = document.getElementById("wrapper_product")
    elementProduct.style.display = "flex"
    // let elementProgressbar = document.getElementById("progressbar")
    // elementProgressbar.style.display = "flex"

    // console.log("ee :>> ", e);
    setDataChoice({ ...dataChoice, submarket: e.title });
    setPlaceholderSubmarckets(e.title)
    // setValueSubMarkets(e.id)
    setPage((page) => page - 1);

  }

  function GoBack() {
    if (page === 1) {
      let element = document.getElementById("wrapperMarkets")
      element.style.display = "none"
      let elementProduct = document.getElementById("wrapper_product")
      elementProduct.style.display = "flex"

    } else {
      setPage((page) => page - 1);
    }
  }


  const _selectSubmarket = () => {
    let element = document.getElementById("wrapperMarkets")
    element.style.display = "block"
    let elementProduct = document.getElementById("wrapper_product")
    // let elementProgressbar = document.getElementById("progressbar")
    elementProduct.style.display = "none"
    // elementProgressbar.style.display = "none"
    // console.log(`element`, element)

  }


  // cropper


  const onFileChange = async (e) => {

    // const res = await readFile(e.target.files[0]);
    // console.log("sdfsdf", res)
    // setImageSrc(res)
    // let elementImageProduct = document.getElementById("crop_container")
    // elementImageProduct.style.display = "block"


    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      let imageDataUrl = await URL.createObjectURL(file)
      setImageSrc(imageDataUrl)
      // console.log(`imageDataUrl`, imageDataUrl)
      let elementImageProduct = document.getElementById("crop_container")
      elementImageProduct.style.display = "block"
      // debugger
    }
  }

  const _onCloseCropper = () => {
    let elementImageProduct = document.getElementById("crop_container")
    elementImageProduct.style.display = "none"
    setImageSrc(null)
  }

  const showCroppedImage = async () => {
    const croppedImage = await getCroppedImg(
      imageSrc,
      croppedAreaPixels
    )
    debugger
    // console.log(croppedImage)
    setPreviewImage(croppedImage)
    let elementImageProduct = document.getElementById("crop_container")
    elementImageProduct.style.display = "none"
    debugger
  }








  let sub = null;
  if (previewImage) {

    sub = previewImage.substring(26, previewImage.length);
  }
  return (
    <>
      <div className={styles.wrapper}>
        <form onSubmit={async (e) => {
          e.preventDefault();
          // const data = new FormData(e.target);
          // let body = Object.fromEntries(data.entries());
          // let response = await createStore(body);
          // if (response.status === 201) {
          //   setShowSuccessPage(showSuccessPage => !showSuccessPage);
          // }
        }}>
          <div id="wrapper_product" className={styles.wrapper_product}>
            <div className={styles.createProduct_lineRighte} >
              <div className="mt-4">
                <div>
                  <h5 style={{ color: "#007aff", fontSize: "14px" }} className="mb-0 d-inline mr-20">اطلاعات محصول</h5>
                </div>
              </div>
              <hr style={{ background: "#007aff", width: "100%" }} />


              <div className={styles.wrapper_input}>
                <label className={styles.lable_product} htmlFor="Title" >
                  نام محصول
                </label>
                <input
                  className={styles.input_product}
                  id="Title"
                  name="Title"
                  type="text"
                  placeholder="پسته برادران اکبری"

                />
              </div>


              <div className={styles.wrapper_input}>
                <label className={styles.lable_product} htmlFor="Title" >
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

              <div id="imageProduct" >
                <div><p style={{ fontSize: "14px", }}>تصاویر</p></div>
                <div style={{ color: "#5E7488", fontSize: "14px", marginBottom: "15px" }} className="mt-3"> حداکثر تا 5 تصویر ، تصویر ابتدایی به عنوان تصویر اصلی نمایش داده خواهد شد.</div>
                <div className="mt-4" name="mainPhoto">
                  <div className={styles.product_image_container}>
                    <label htmlFor="product-image-upload">
                      <div className={styles.add_image_container}
                      // onClick={onFileChange}
                      >
                        <i style={{ fontSize: "25px" }}  >+</i>
                        <p style={{ fontSize: "15px" }} className="mt-2">افزودن تصویر</p>
                      </div>
                    </label>
                    <input
                      onChange={onFileChange}
                      name="productImage" id="product-image-upload" type="file" style={{ width: "0px", height: "0px", opacity: "0px" }}></input>

                    {
                      sub ?
                        <label style={{ marginRight: 10 }} >
                          <div className={styles.add_image_container}
                          // onClick={onFileChange}
                          >
                            <Image src={sub} alt="Picture of the author" width={500}
                              height={500}
                            />
                            {/* {
                                          imageSrc ?
                                          // <Image src={imageSrc} alt="Picture of the author"        width={500}
                                          height={500}      
                                          /> : null
                                        } */}


                          </div>
                        </label> :
                        <label style={{ marginRight: 10 }} >
                          <div className={styles.add_image_container}
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
                    }
                  </div>

                </div>
              </div>


              {/* croperProduct */}

              <div id="crop_container" className={styles.wrapperIMageProduct}>
                {/* <div className={stylesPage1.button_container} >sdftgrdfhtryhur</div> */}
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  classes={{ containerClassName: "container_cropper_product", cropAreaClassName: "product_cropArea" }}
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
                  <input onChange={(e) => setZoom(e.target.value)}
                    value={zoom} type="range" step="0.1" max="3" min="1"
                  />
                  <div className={styles.wrapperButton}>
                    <div style={{ marginLeft: "10px" }}>
                      <button
                        onClick={showCroppedImage}
                        className="btn btn-success btn-lg">تایید</button>
                    </div>
                    <div>
                      <button onClick={_onCloseCropper} className="btn btn-secondary btn-lg">
                        لغو
                      </button>
                    </div>
                  </div>
                </div>
              </div>










              <div className="mt-4">
                <div>
                  <h5 style={{ color: "#007aff", fontSize: "14px" }} className="mb-0 d-inline mr-20">جزئیات محصول</h5>
                </div>
              </div>
              <hr style={{ background: "#007aff", width: "100%" }} />

              <div className={styles.wrapper_input}>
                <label className={styles.lable_product} htmlFor="Title" >
                  وزن خالص محصول
                </label>
                <div className={styles.wrapper_input_suffixText}
                >
                  <input
                    style={{ outline: "unset", border: "unset" }}
                    id="Title"
                    name="Title"
                    type="text"
                    placeholder="پسته برادران اکبری"

                  />
                  <div>
                    <p>گرم</p>
                  </div>

                </div>

              </div>

              <div className={styles.wrapper_input}>
                <label className={styles.lable_product} htmlFor="Title" >
                  وزن با بسته بندی
                </label>
                <div className={styles.wrapper_input_suffixText}
                >
                  <input
                    style={{ outline: "unset", border: "unset" }}
                    id="Title"
                    name="Title"
                    type="text"
                    placeholder="پسته برادران اکبری"

                  />
                  <div>
                    <p>گرم</p>
                  </div>

                </div>

              </div>

              <div className={styles.wrapper_input}>
                <label className={styles.lable_product} htmlFor="Title" >
                  قیمت محصول
                </label>
                <div className={styles.wrapper_input_suffixText}
                >
                  <input
                    style={{ outline: "unset", border: "unset" }}
                    id="Title"
                    name="Title"
                    type="text"
                    placeholder="پسته برادران اکبری"

                  />
                  <div>
                    <p>تومان</p>
                  </div>

                </div>

              </div>

              <div className={styles.wrapper_input}>
                <label className={styles.lable_product} htmlFor="Title" >
                  قیمت محصول با تخفیف (اختیاری)                </label>
                <div className={styles.wrapper_input_suffixText}
                >
                  <input
                    style={{ outline: "unset", border: "unset" }}
                    id="Title"
                    name="Title"
                    type="text"
                    placeholder="پسته برادران اکبری"

                  />
                  <div>
                    <p>تومان</p>
                  </div>

                </div>

              </div>

              <div className={styles.wrapper_input}>
                <label className={styles.lable_product} htmlFor="Title" >
                  موجودی
                </label>
                <input
                  className={styles.input_product}
                  id="Title"
                  name="Title"
                  type="text"
                  placeholder="پسته برادران اکبری"

                />
              </div>

              <div className={styles.wrapper_input}>
                <label className={styles.lable_product} htmlFor="Title" >
                  توضیحات محصول (اختیاری)
                </label>
                <textarea
                  className={styles.input_product}
                  id="Title"
                  name="Title"
                  type="text"
                  placeholder="پسته برادران اکبری"

                />
              </div>

              <div className={styles.twoCol}>
                <div>
                  <h2 style={{ marginBottom: "10px", color: "#364254" }}>hassan</h2>
                  <div className={styles.inputWidRtl}>
                    <button onClick={add}>
                      <span className="fas fa-plus"></span>
                    </button>
                    <div className={styles.center}>
                      <input
                        type="number"
                        type="number"
                        min="0"
                        max="500"
                        value={Add}
                        onChange={(e) => {
                          setAdd(e.target.value);
                        }}
                      />
                      <h4>عدد</h4>
                    </div>

                    <button onClick={mini}>
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
                  <h5 style={{ color: "#007aff", fontSize: "14px" }} className="mb-0 d-inline mr-20">اطلاعات ارسال</h5>
                </div>
              </div>
              <hr style={{ background: "#007aff", width: "100%" }} />






            </div>







            <div className={styles.createProduct_lineLeft} >
              <div className="mt-4">
                <div>
                  <h5 style={{ color: "#007aff", fontSize: "14px" }} className="mb-0 d-inline mr-20">اطلاعات محصول</h5>
                </div>
              </div>
              <hr style={{ background: "#007aff" }} />
              <div className={styles.wrapper_input}>
                <label className={styles.lable_product} htmlFor="Title" >
                  نام محصول
                </label>
                <input
                  className={styles.input_product}
                  name="Title"
                // id={name}
                // value={value}
                // type={type}
                // className={`${defaultStyle} ${className}`}
                // maxLength={length}
                // onChange={handleChange(name)}
                // onBlur={() => {
                //   setFieldTouched(name);
                //   setIsErrorMessageVisible(true);
                // }}
                />
              </div>

            </div>
          </div>



          <div style={{ position: "relative", gridColumn: "1/-1", gridRow: "1/-1", background: "#ffffff" }}>
            <div id="wrapperMarkets" className={styles.markets}>
              <div className={styles.wrapper}>
                {/* // progress bar */}
                <div className={styles.Header}>
                  <button style={{ outline: "unset" }} onClick={GoBack} className={styles.btn_icon}>
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
                  {page === 1 ? data?.map((e) => {
                    return (
                      <button style={{ outline: "unset" }} onClick={() => clickButton(e)} className={styles.btn}>
                        <div className={styles.in_btn}>
                          <h2 style={{ marginRight: "14px" }}>{e.title}</h2>
                          <span
                            style={{ marginLeft: "14px" }}
                            className="fas fa-chevron-left fa-2x"
                          ></span>
                        </div>
                      </button>
                    );
                  }) : page === 2 ? <>
                    {subMarkets?.map((e) => {
                      return (
                        <button style={{ outline: "unset" }} onClick={() => finalClick(e)} className={styles.btn}>
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

                  </> : null}
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





        </form>

      </div>
    </>
  );
};

export default CreateProduct;

CreateProduct.Layout = MyLayout;

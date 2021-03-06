// node libraries
import React from "react";
import Image from "next/image";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Assistent from "zaravand-assistent-number";
// components
import InputTag from "../../../../components/InputTag";
import Loading from "../../../../components/loading/index";
import MyLayout from "../../../../components/layout/Layout";
import Category from "../../../../containers/product/create/category";
import TitleLiner from "../../../../containers/settings/components/titleLiner";
import InputUseForm from "../../../../containers/creat/component/inputUseForm";
import InputPictureCreat from "../../../../containers/creat/component/InputPicture";
import TextAreaUseForm from "../../../../containers/creat/component/textAreaUseForm";
import PictureChildProduct from "../../../../containers/creat/component/pictureChildProduct";
// methods
import { mapState } from "../../../../containers/product/methods/mapState";
import {
  _ApiCreateProduct,
  _ApiGetCategories,
  _ApiGetTags,
} from "../../../../api/creatProduct";
// styles
import styles from "./create.module.scss";

const CreateProduct = ({ activeHojreh }) => {
  const router = useRouter();
  const _asist = new Assistent();
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [tagsShop, setTagsShop] = useState([]);
  const [wordPrice, setWordPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const [imgProduct, setImgProduct] = useState(null);
  const [precentPrice, setPrecentPrice] = useState(0);
  const [submarketId, setSubmarketId] = useState(null);
  const [wordOldPrice, setWordOldPrice] = useState("");
  const [imgProductOne, setImgProductOne] = useState(null);
  const [imgProductTwo, setImgProductTwo] = useState(null);
  const [imgProductSix, setImgProductSix] = useState(null);
  const [precentOldPrice, setprecentOldPrice] = useState(0);
  const [imgProductFour, setImgProductFour] = useState(null);
  const [imgProductFive, setImgProductFive] = useState(null);
  const [imgProductThree, setImgProductThree] = useState(null);
  const [isloadingForCreate, setIsloadingForCreate] = useState(false);
  const [placeholderSubmarckets, setPlaceholderSubmarckets] = useState("");
  const {
    getValues,
    clearErrors,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  useEffect(() => {
    async function fetchData() {
      if (activeHojreh) {
        const responseCategories = await _ApiGetCategories();
        if (responseCategories.status === 200) {
          setIsLoad(true);
          setData(responseCategories.data); // ==> output: {}
          setCategories(responseCategories.data);
        }
        const tags = await _ApiGetTags(activeHojreh);
        if (tags.status < 300) {
          const newArrTags = [];
          tags?.data.map((item) => {
            newArrTags.push({ id: item.text, text: item.text });
          });
          setTagsShop(newArrTags);
        }
      }
    }
    fetchData();
    window?.HubSpotConversations?.widget?.remove();
  }, [activeHojreh]);

  // select Submarket
  const _selectSubmarket = () => {
    const element = document.getElementById("wrapperMarkets");
    element.style.display = "block";
    const elementProduct = document.getElementById("wrapper_product");
    elementProduct.style.display = "none";
  };

  const onSubmit = async (data) => {
    setIsloadingForCreate(true);
    const ProductBanner = [];
    if (imgProductOne) {
      ProductBanner.push({ Image: imgProductOne });
    }
    if (imgProductTwo) {
      ProductBanner.push({ Image: imgProductTwo });
    }
    if (imgProductThree) {
      ProductBanner.push({ Image: imgProductThree });
    }
    if (imgProductFour) {
      ProductBanner.push({ Image: imgProductFour });
    }
    if (imgProductFive) {
      ProductBanner.push({ Image: imgProductFive });
    }
    if (imgProductSix) {
      ProductBanner.push({ Image: imgProductSix });
    }

    const externalData = {
      Status: 1,
      PostRangeType: 1,
      post_range: [],
      category: submarketId,
      Image: imgProduct,
      Product_Banner: ProductBanner,
      product_tags: tags,
    };

    const dataForSend = Object.assign(data, externalData);
    const response = await _ApiCreateProduct(dataForSend, activeHojreh);

    if (response.status === 201) {
      router.replace("/fp/product/create/successPageProduct");
    } else {
      setIsloadingForCreate(false);
    }
  };

  if (isLoad) {
    return (
      <>
        <div className={styles.wrapper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div id="wrapper_product" className={styles.wrapper_product}>
              <div className={styles.createProduct_lineRighte}>
                <TitleLiner title="?????????????? ??????????" />
                {/* product name */}
                <InputUseForm title="?????? ??????????" error={errors.Title}>
                  <input
                    {...register("Title", {
                      required: "???????? ?????? ?????????? ???? ?????????? ????????.",
                    })}
                  />
                </InputUseForm>
                {/* category */}
                <div className={styles.wrapper_input}>
                  <label className={styles.lable_product} htmlFor="Title">
                    ???????? ????????
                  </label>

                  <input
                    style={{ paddingRight: "10px" }}
                    className={styles.input_product}
                    value={placeholderSubmarckets.name}
                    id="submark"
                    name="submark"
                    type="text"
                    onClick={_selectSubmarket}
                    {...register("submark")}
                  />
                  <i
                    style={{
                      color: "#1b3e68",
                      left: "10px",
                      top: "64%",
                      position: "absolute",
                    }}
                    className="fas fa-chevron-down"
                  ></i>

                  {errors.submark && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                      ???????? ?????? ?????????? ???? ???? ????????
                    </span>
                  )}
                </div>
                {/* image */}
                <div id="imageProduct">
                  <div>
                    <p style={{ fontSize: "14px" }}>????????????</p>
                  </div>
                  <div
                    style={{
                      color: "#5E7488",
                      fontSize: "14px",
                      marginBottom: "15px",
                    }}
                    className="mt-3"
                  >
                    ???????????? ???? ?? ?????????? ?? ?????????? ?????????????? ???? ?????????? ?????????? ???????? ??????????
                    ???????? ?????????? ????.
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
                        alt="?????? ????????"
                        src={imgProduct}
                        layout="responsive"
                        height={100}
                        width={100}
                      />
                    ) : (
                      <Image
                        alt="?????? ????????"
                        src="/image/sample/pic.jpg"
                        layout="responsive"
                        height={100}
                        width={100}
                      />
                    )}
                    <div className={styles.deleteBtn}>
                      <div
                        className={styles.wrapBtn}
                        onClick={() => setImgProduct(null)}
                      >
                        <i className="fas fa-trash"></i>
                      </div>
                    </div>
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
                {/* <TextAreaUseForm title="?????????? ????????????">
                  <textarea
                    rows="4"
                    type="text"
                    placeholder="???? ?????????????? ???????? ?????? ???? ???? ???????????? ???????? ????????."
                    {...register("??VideoScript")}
                  />
                </TextAreaUseForm> */}
                {/* product detail */}
                <TitleLiner title=" ???????????? ??????????" />
                {/* weight */}
                <InputUseForm
                  title="?????? ???????? ??????????"
                  error={errors.Net_Weight}
                  text="??????"
                >
                  <input
                    type="number"
                    onWheel={(event) => {
                      event.currentTarget.blur();
                    }}
                    {...register("Net_Weight", {
                      required: "???????? ?????? ?????????? ???? ????????????????",
                      min: {
                        value: 0,
                        message: "???????? ?????????? ???????????? ???? ?????? ???????? ????????????",
                      },
                    })}
                  />
                </InputUseForm>
                {/* weight with packing */}
                <InputUseForm
                  title="?????? ???? ???????? ????????"
                  error={errors.Weight_With_Packing}
                  text="??????"
                >
                  <input
                    type="number"
                    onWheel={(event) => {
                      event.currentTarget.blur();
                    }}
                    {...register("Weight_With_Packing", {
                      required: "???????? ?????? ?????????? ???? ????????????????",
                      min: {
                        value: 0,
                        message: "???????? ?????????? ???????????? ???? ?????? ???????? ????????????",
                      },
                      validate: (value) =>
                        parseInt(value) > parseInt(getValues("Net_Weight")) ||
                        "?????? ???? ???????? ???????? ???????? ?????????? ???? ??????  ???????? ????????",
                    })}
                  />
                </InputUseForm>
                {/* price */}
                <InputUseForm
                  title="???????? ??????????"
                  error={errors.Price}
                  text="??????????"
                >
                  <input
                    type="number"
                    onWheel={(event) => {
                      event.currentTarget.blur();
                    }}
                    {...register("Price", {
                      required: "???????? ?????? ?????????? ???? ????????????????",
                      min: {
                        value: 500,
                        message: "???????? ?????????? ???????????? ???? ?????? ???????? ????????????",
                      },
                    })}
                    onChange={(e) => {
                      setPrecentPrice(e.target.value);
                      setWordPrice(_asist.word(e.target.value));
                    }}
                  />
                </InputUseForm>
                {wordPrice !== "??????" && wordPrice !== "" && (
                  <div className={styles.previewPrice}>
                    ???????? ?????????? : {wordPrice}
                    {"  "}
                    ??????????
                  </div>
                )}
                {/* price with discount */}
                <InputUseForm
                  title="???????? ?????????? ???? ?????????? (??????????????)"
                  error={errors.OldPrice}
                  text="??????????"
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
                        message: "???????? ?????????? ???????????? ???? ?????? ???????? ????????????",
                      },
                      validate: (value) =>
                        parseInt(value) < parseInt(getValues("Price")) ||
                        "???????? ???? ?????????? ???????? ???????? ???? ???????? ???????? ????????",
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
                {wordOldPrice !== "??????" && wordOldPrice !== "" && (
                  <div className={styles.previewPrice}>
                    ???????? ?????????? ???? ?????????? : {wordOldPrice} ??????????
                  </div>
                )}
                {precentPrice > precentOldPrice && precentOldPrice > 0 && (
                  <>
                    <span style={{ margin: "8px 0", fontSize: "14px" }}>
                      ?????????? ???????? ??????:
                      <span style={{ fontSize: "13px" }}>???????? ?????? ??????</span>
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
                <TextAreaUseForm title="?????????????? ?????????? (??????????????)">
                  <textarea
                    rows="10"
                    type="text"
                    placeholder="?????????? ???????? ?????????? ?????? ?????? ???????? ???????????????? ????????????..."
                    {...register("Description")}
                  />
                </TextAreaUseForm>
                {/* inventory */}
                <InputUseForm
                  title="????????????"
                  error={errors.Inventory}
                  text="??????"
                >
                  <input
                    type="number"
                    onWheel={(event) => {
                      event.currentTarget.blur();
                    }}
                    {...register("Inventory", {
                      required: "???????? ?????? ?????????? ???? ????????????????",
                      min: {
                        value: 0,
                        message: "???????? ?????????? ???????????? ???? 0 ???????? ????????????",
                      },
                    })}
                  />
                </InputUseForm>
                {/* input Tags */}
                <InputTag
                  tags={tags}
                  setTags={setTags}
                  suggestions={tagsShop}
                />
                <span style={{ padding: "5px" }}>
                  ???????? ?????? ???? ???? ???????? ?????????? ???? ??????????.
                </span>
                {/* information  */}
                <TitleLiner title=" ?????????????? ??????????" />
                {/* Preparation Days */}
                <InputUseForm
                  title="???????? ?????????? ????????"
                  error={errors.PreparationDays}
                  text="??????"
                >
                  <input
                    type="number"
                    onWheel={(event) => {
                      event.currentTarget.blur();
                    }}
                    {...register("PreparationDays", {
                      required: "???????? ?????? ?????????? ???? ????????????????",
                      min: {
                        value: 0,
                        message: "???????? ?????????? ???????????? ???? 0 ???????? ????????????",
                      },
                    })}
                  />
                </InputUseForm>
                ???????? ?????????? ???????? : ?????????? ???????? ?????????? ?????? ???? ?????????? ??????????
                {/* product status */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "15px",
                  }}
                ></div>
                {/* button submit */}
                <div>
                  <button
                    type="submit"
                    id="sumbitButton"
                    className={styles.form_buttonSubmit}
                  >
                    ?????? ??????????
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
              <div className={styles.create_messege}>???? ?????? ???????? ?????????? ...</div>
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

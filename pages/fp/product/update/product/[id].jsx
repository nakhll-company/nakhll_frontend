import React from "react";
// node libraries
import Image from "next/image";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Assistent from "zaravand-assistent-number";
// components
import InputTag from "../../../../../components/InputTag";
import Loading from "../../../../../components/loading/index";
import MyLayout from "../../../../../components/layout/Layout";
import Category from "../../../../../containers/product/create/category";
import InputUseForm from "../../../../../containers/creat/component/inputUseForm";
import TitleLiner from "../../../../../containers/settings/components/titleLiner";
import InputPictureCreat from "../../../../../containers/creat/component/InputPicture";
import TextAreaUseForm from "../../../../../containers/creat/component/textAreaUseForm";
import PictureChildProduct from "../../../../../containers/creat/component/pictureChildProduct";
// methods
import { authhttp } from "../../../../../services/callApi/api";
import { mapState } from "../../../../../containers/product/methods/mapState";
import {
  _ApiGetCategories,
  _ApiUpdateProduct,
} from "../../../../../api/creatProduct";
import { getBase64Image } from "../../../../../containers/product/methods/getBase64Image";
// styles
import styles from "./create.module.scss";
/**
 * page update product
 * @param {string} activeHojreh => it has slug name
 */
const _asist = new Assistent();

const UpdateProduct = ({ activeHojreh }) => {
  const router = useRouter();
  const { id } = router.query;
  const [tags, setTags] = useState([]);
  const [data, setData] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [tagsShop, setTagsShop] = useState([]);
  const [wordPrice, setWordPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const [imgProduct, setImgProduct] = useState(null);
  const [precentPrice, setPrecentPrice] = useState(0);
  const [wordOldPrice, setWordOldPrice] = useState("");
  const [submarketId, setSubmarketId] = useState(null);
  const [imgProductOne, setImgProductOne] = useState(null);
  const [imgProductTwo, setImgProductTwo] = useState(null);
  const [imgProductSix, setImgProductSix] = useState(null);
  const [productBanner, setProductBanner] = useState([]);
  const [precentOldPrice, setprecentOldPrice] = useState(0);
  const [imgProductFour, setImgProductFour] = useState(null);
  const [imgProductFive, setImgProductFive] = useState(null);
  const [imgProductThree, setImgProductThree] = useState(null);
  const [isLoadingUpdate, setisLoadingUpdate] = useState(false);
  const [placeholderSubmarckets, setPlaceholderSubmarckets] = useState({});
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

  useEffect(() => {
    // get edit date
    async function fetchData() {
      if (id) {
        const dataUrl = `/api/v1/shop/${activeHojreh}/products/${id}/`;
        const response = await authhttp.get(dataUrl);

        if (response.status === 200) {
          const Data = response.data;

          setValue("Title", Data.Title);
          setImgProduct(Data.Image);
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
          setSubmarketId(Data.category?.id);
          // images
          getBase64Image(Data.Product_Banner[0]?.Image, setImgProductOne);
          getBase64Image(Data.Product_Banner[1]?.Image, setImgProductTwo);
          getBase64Image(Data.Product_Banner[2]?.Image, setImgProductThree);
          getBase64Image(Data.Product_Banner[3]?.Image, setImgProductFour);
          getBase64Image(Data.Product_Banner[4]?.Image, setImgProductFive);
          getBase64Image(Data.Product_Banner[5]?.Image, setImgProductSix);
          setProductBanner(Data.Product_Banner);
          const newArrTags = [];
          Data.product_tags.map((item) => {
            newArrTags.push({ id: item.text, text: item.text });
          });
          setTags(newArrTags);
          const allTages = [];

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
    const imageBanners = [];

    if (imgProductOne) {
      imageBanners.push({ Image: imgProductOne });
    }
    if (imgProductTwo) {
      imageBanners.push({ Image: imgProductTwo });
    }
    if (imgProductThree) {
      imageBanners.push({ Image: imgProductThree });
    }
    if (imgProductFour) {
      imageBanners.push({ Image: imgProductFour });
    }
    if (imgProductFive) {
      imageBanners.push({ Image: imgProductFive });
    }
    if (imgProductSix) {
      imageBanners.push({ Image: imgProductSix });
    }

    const externalData = {
      Status: 1,
      PostRangeType: 1,
      post_range: [],
      category: submarketId,
      Product_Banner: imageBanners,
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

  // use effect
  useEffect(() => {
    async function fetchData() {
      const responseCategories = await _ApiGetCategories();

      if (responseCategories.status === 200) {
        setIsLoad(true);
        setData(responseCategories.data); // ==> output: {}
        setCategories(responseCategories.data);
      }
    }
    fetchData();
    window.HubSpotConversations.widget.remove();
  }, [activeHojreh]);

  // select Submarket
  const _selectSubmarket = () => {
    const element = document.getElementById("wrapperMarkets");
    element.style.display = "block";
    const elementProduct = document.getElementById("wrapper_product");
    elementProduct.style.display = "none";
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
                  <div className={styles.submarcketTitle}>
                    <span> ???????? ???????? :</span>
                    {"   "}
                    <span className={styles.badge_submarket}>
                      {placeholderSubmarckets && placeholderSubmarckets.name}
                    </span>
                  </div>

                  <>
                    <input
                      className={styles.input_product}
                      value={
                        placeholderSubmarckets
                          ? placeholderSubmarckets.name
                          : ""
                      }
                      id="submark"
                      name="submark"
                      type="text"
                      onClick={_selectSubmarket}
                      {...register("submark")}
                    />

                    <div style={{ display: "none" }}>
                      <input
                        className={styles.input_product}
                        value={
                          placeholderSubmarckets
                            ? placeholderSubmarckets.id
                            : ""
                        }
                        id="submark"
                        name="submark"
                        type="text"
                        onClick={_selectSubmarket}
                        {...register("submarkId")}
                      />
                    </div>
                    {errors.submark && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        ???????? ?????? ?????????? ???? ???? ????????
                      </span>
                    )}
                  </>
                </div>
                {/* image */}
                <div id="imageProduct">
                  <div>
                    <p style={{ fontSize: "14px", marginTop: "15px" }}>
                      ????????????
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
                        id={productBanner[0]?.id}
                      />
                      <PictureChildProduct
                        setImageSrc={setImgProductTwo}
                        image={imgProductTwo}
                        id={productBanner[1]?.id}
                      />
                      <PictureChildProduct
                        setImageSrc={setImgProductThree}
                        image={imgProductThree}
                        id={productBanner[2]?.id}
                      />
                      <PictureChildProduct
                        setImageSrc={setImgProductFour}
                        image={imgProductFour}
                        id={productBanner[3]?.id}
                      />
                      <PictureChildProduct
                        setImageSrc={setImgProductFive}
                        image={imgProductFive}
                        id={productBanner[4]?.id}
                      />
                      <PictureChildProduct
                        setImageSrc={setImgProductSix}
                        image={imgProductSix}
                        id={productBanner[5]?.id}
                      />
                    </div>
                  )}
                </div>
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
                        message: "???????? ?????????? ???????????? ???? 500 ???????? ????????????",
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
                {isLoadingUpdate && (
                  <div className={styles.loading}>
                    <Image
                      src="/loading.svg"
                      width="45"
                      height="45"
                      alt="loading"
                    />
                    <span>???? ?????? ???????????? ?????????? ...</span>
                  </div>
                )}
                <div>
                  <button
                    type="submit"
                    id="sumbitButton"
                    className={styles.form_buttonSubmit}
                  >
                    ???????????? ??????????
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

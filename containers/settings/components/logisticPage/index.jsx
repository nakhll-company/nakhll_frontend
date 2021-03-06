// node libraries
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Assistent from "zaravand-assistent-number";
// components
import SoRent from "./ui/soRent";
import AllEdit from "./ui/allEdit";
import Panel from "./components/panel";
import SelectIcon from "./ui/selectIcon";
import Explain from "./components/explain";
import FreeQuestion from "./ui/freeQuestion";
import Products from "./components/products";
import HeaderTitle from "./components/headerTitle";
import ResultOperation from "./ui/resultOperation";
import CheckBoxSend from "./components/checkBoxSend";
import AppButton from "../../../../components/AppButton";
import InputUseForm from "../../../creat/component/inputUseForm";
import LoadingAllPage from "../../../../components/loadingAllPage";
import CheckboxTreeCities from "../../../../components/CheckboxTree/CheckboxTree";
// methods
import { authhttp } from "../../../../services/callApi/api";
import { successMessage } from "../../../../utils/toastifyMessage";
// style
import st from "./logisticPage.module.scss";

function LogisticPage() {
  const _asist = new Assistent();
  const [loader, setLoader] = useState(false);
  const [wichPage, setWichPage] = useState(1);
  const [witchUnit, setWitchUnit] = useState("kg");
  const [wichIdScope, setWichIdScope] = useState("");
  const [ProductsShop, setProductsShop] = useState([]);
  const [constraintId, setConstraintId] = useState("");
  const [wordPricePer, setWordPricePer] = useState("");
  const [checkedCities, setCheckedCities] = useState([]);
  const [informationForm, setInformationForm] = useState({});
  const [wordExtraPricePer, setWordExtraPricePer] = useState("");
  const activeHojreh = useSelector((state) => state.User.activeHojreh);
  const [checkedSelectAllProducts, setCheckedSelectAllProducts] =
    useState(true);
  const [loaderBtn, setLoaderBtn] = useState(false);
  const unitConverter = (num) => {
    if (witchUnit == "gr") {
      return num * 1000;
    }
    if (witchUnit == "kg") {
      return num;
    }
    if (witchUnit == "ton") {
      return num / 1000;
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  // function for Create Shop Logistic Unit Constraint
  const handleAddNewScope = async () => {
    try {
      setLoaderBtn(true);
      const response = await authhttp.post(
        `/api/v1/logistic/shop-logistic-unit/`,
        {
          shop: activeHojreh,
          name: "???????? ??????",
        }
      );

      if (response.status == 201) {
        setWichIdScope(response.data.id);
        setInformationForm(response.data);
        setConstraintId(response.data.constraint.id);
        upPage();
        setLoaderBtn(false);
      } else {
        setWichPage(13);
        setLoaderBtn(false);
      }
    } catch (error) {
      setWichPage(13);
      setLoaderBtn(false);
    }
  };

  const handleUpdateDataScope = async (data, move = true) => {
    setLoaderBtn(true);
    setLoader(true);
    const response = await authhttp.patch(
      `/api/v1/logistic/shop-logistic-unit-constraint/${constraintId}/`,
      data
    );
    if (response.status == 200) {
      if (move) {
        upPage();
      }
      setLoaderBtn(false);
      setLoader(false);
      successMessage("?????????????? ???????????????? ????.");
    } else {
      setLoader(false);
      setLoaderBtn(false);
    }
  };

  // functoin for send data for price per kg
  const handleSendInfoScope = async (data, page = 0) => {
    const response = await authhttp.patch(
      `/api/v1/logistic/shop-logistic-unit/${wichIdScope}/`,
      data
    );
    if (response.status == 200) {
      upPage(1, page);
    }
  };

  const upPage = (num = 1, page = 0) => {
    page !== 0 ? setWichPage(page) : setWichPage(wichPage + num);
  };
  const downPage = () => {
    setWichPage(wichPage - 1);
  };

  const handleSendAllCities = async () => {
    setLoaderBtn(true);
    const response = await authhttp.patch(
      `/api/v1/logistic/shop-logistic-unit-constraint/${constraintId}/`,
      {
        products: [],
      }
    );
    upPage();
    setLoaderBtn(false);
    return response;
  };

  const resetStates = () => {
    setWitchUnit("kg");
  };

  useEffect(() => {
    if (constraintId !== "") {
      const handelGetAllDataScope = async () => {
        const response = await authhttp.get(
          `/api/v1/logistic/shop-logistic-unit-constraint/${constraintId}/`
        );

        if (response.status == 200) {
          setProductsShop(response.data.products);
        }
      };
      handelGetAllDataScope();
    }
  }, [constraintId]);
  return (
    <>
      {loader && <LoadingAllPage title="???? ?????? ???? ?????? ?????????? ..." />}

      <div className={st.main}>
        {wichPage == 1 && (
          <>
            <HeaderTitle
              enabel={false}
              onClick={() => downPage()}
              title="?????????????? ????????????"
            />

            <Explain text="???? ?????????????? ???? ?????? ???????? ?????????? ???????? ???????????? ???????????????? ?????? ?? ?????????? ?????????? ???????????? ???? ???????????? ????????." />

            <AppButton
              onClick={handleAddNewScope}
              loader={loaderBtn}
              title="?????? ???????? ?????????? ????????"
            />
            <div className="mb-4"></div>

            <Panel
              setConstraintId={setConstraintId}
              setWichIdScope={setWichIdScope}
              changePage={upPage}
              setInformationForm={setInformationForm}
              setWichPage={setWichPage}
            />
          </>
        )}
        {wichPage == 2 && (
          <>
            <HeaderTitle
              onClick={() => downPage()}
              title="???? ???????? ?????????? ?????????? ???? ??????????"
            />

            {/* <Explain text="?????????????? ???? ???????? ??????" /> */}
            <CheckboxTreeCities
              checkedCity={checkedCities}
              setCheckedCity={setCheckedCities}
            />
            <div className="mt-4 mb-4">
              <AppButton
                loader={loaderBtn}
                onClick={() =>
                  handleUpdateDataScope({
                    cities: checkedCities.length > 0 ? checkedCities : [],
                  })
                }
                title="?????????? ??????"
              />
            </div>
          </>
        )}
        {wichPage == 3 && (
          <>
            <HeaderTitle
              onClick={() => downPage()}
              title="???? ???????????????? ???? ?????????? ???? ??????????"
            />

            <Explain text="" />

            <CheckBoxSend
              checked={checkedSelectAllProducts}
              onChange={() =>
                setCheckedSelectAllProducts(!checkedSelectAllProducts)
              }
              id="selectAllProducts"
              title="???????? ??????????????"
            />
            {checkedSelectAllProducts && (
              <AppButton
                loader={loaderBtn}
                onClick={handleSendAllCities}
                title="?????????? ??????"
              />
            )}

            {!checkedSelectAllProducts && (
              <Products
                handleUpdateDataScope={handleUpdateDataScope}
                ProductsShop={ProductsShop}
              />
            )}
          </>
        )}
        {wichPage == 4 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="?????????????? ??????????" />

            <SoRent
              handleSendInfoScope={handleSendInfoScope}
              pageController={upPage}
            />
          </>
        )}

        {wichPage == 5 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="?????????????? ??????????" />
            <FreeQuestion
              pageController={upPage}
              handleSendInfoScope={handleSendInfoScope}
            />
          </>
        )}

        {wichPage == 6 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="??????????????  ??????????" />

            <Explain text="" />

            <form
              onSubmit={handleSubmit(async (data) => {
                setLoaderBtn(true);
                await handleSendInfoScope({
                  calculation_metric: {
                    price_per_kilogram: data.price_per_kg
                      ? unitConverter(data.price_per_kg) * 10
                      : 0,
                    price_per_extra_kilogram: data.price_per_extra_kg
                      ? unitConverter(data.price_per_extra_kg) * 10
                      : 0,
                  },
                });
                setLoaderBtn(false);
              })}
            >
              {/* iiiiiii */}
              <div style={{ position: "relative" }}>
                <div className={st.wrap_select}>
                  <select
                    id="select-unit"
                    onChange={(a) => {
                      setWitchUnit(a.target.value);
                      // setselectShop(a.target.value);
                      // setSlugHojreh(a.target.value);
                      // getActiveHojreh(a.target.value);
                      // ForHeader(a);
                    }}
                  >
                    <option value="kg">??????????????</option>
                    <option value="gr">??????</option>
                    <option value="ton">????</option>
                  </select>
                </div>
                <InputUseForm
                  title="?????????? ?????? ???? ???????? ???? ????????"
                  error={errors.price_per_kg}
                  text="??????????"
                >
                  <input
                    onWheel={(event) => {
                      event.currentTarget.blur();
                    }}
                    type="number"
                    {...register("price_per_kg")}
                    onChange={(e) => {
                      if (e.target.value == "" || e.target.value == 0) {
                        setWordPricePer("");
                      } else {
                        setWordPricePer(_asist.word(e.target.value));
                      }
                    }}
                  />
                </InputUseForm>
              </div>
              {wordPricePer !== "??????" && wordPricePer !== "" && (
                <div className={st.previewPrice}>
                  ?????????? ?????? ???? ???????? ???? ???????? : {wordPricePer} ??????????
                </div>
              )}

              <InputUseForm
                title="?????????? ?????? ???? ???????? ???? ???????? ?????????? ????"
                error={errors.price_per_extra_kg}
                text="??????????"
              >
                <input
                  onWheel={(event) => {
                    event.currentTarget.blur();
                  }}
                  type="number"
                  {...register("price_per_extra_kg")}
                  onChange={(e) => {
                    if (e.target.value == "" || e.target.value == 0) {
                      setWordExtraPricePer("");
                    } else {
                      setWordExtraPricePer(_asist.word(e.target.value));
                    }
                  }}
                />
              </InputUseForm>
              {wordExtraPricePer !== "??????" && wordExtraPricePer !== "" && (
                <div className={st.previewPrice}>
                  ?????????? ?????? ???? ???????? ???? ???????? ?????????? ???? : {wordExtraPricePer} ??????????
                </div>
              )}
              <AppButton loader={loaderBtn} title="?????????? ??????" submit />
            </form>
          </>
        )}
        {wichPage == 7 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="??????????????  ??????????" />
            <SelectIcon
              pageController={upPage}
              handleSendInfoScope={handleSendInfoScope}
            />
          </>
        )}

        {wichPage == 8 && (
          <ResultOperation resetStates={resetStates} pageController={upPage} />
        )}

        {wichPage == 9 && (
          <>
            <AllEdit
              constraintId={constraintId}
              handleUpdateDataScope={handleUpdateDataScope}
              checkedSelectAllProducts={checkedSelectAllProducts}
              upPage={upPage}
              downPage={downPage}
              informationForm={informationForm}
              handleSendInfoScope={handleSendInfoScope}
              wichIdScope={wichIdScope}
            />
          </>
        )}
        {wichPage == 13 && (
          <ResultOperation type="error" pageController={upPage} />
        )}
      </div>
    </>
  );
}

export default LogisticPage;

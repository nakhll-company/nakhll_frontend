// node
import { useEffect, useState } from "react";
import Head from "next/head";

// component
import ListCardBuy from "../../containers/card/ListCardBuy";
import MiniCardBuy from "../../containers/card/MiniCardBuy";
import SumBuy from "../../containers/card/SumBuy";
import ShopLayout from "../../components/shopLayout";
import CheckOutSteps from "../../components/CheckOutSteps/CheckOutSteps";
// metods
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import ContextProduct from "../../containers/card/Context/context";
import { CustomToast } from "../../components/custom/customToast/CustomToast";

// LIBRARY
import { ToastContainer, toast } from "react-toastify";
import { LoadingDelet } from "../../components/custom/Loading/LoadingDelet/LoadingDelet";
import { MenuMobile } from "../../containers/card/MenuMobile";
import { Loading } from "../../components/custom/Loading/Loading";
import { Empty } from "../../components/custom/Empty/Empty";

export default function Cart() {
  // STATE FOR SAVE PRODUCTS
  const [All_product_list_buy, setAll_product_list_buy] = useState({});

  // FUNCTION FOR GET ALL DATA FOR CARTS
  const _handleRequestApiAll = async () => {
    try {
      let params = {};
      let loadData = null;
      let dataUrl = `/cart2/api/carts/my/`;
      let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        true,
        params
      );
      setAll_product_list_buy(await response.data);
    } catch (e) {
      // console.log("e :>> ", e);
    }
  };

  // CALL API  &  GET PRODUCT LIST  & SET DATA IN "All_product_list_buy"

  useEffect(() => {
    _handleRequestApiAll();
  }, []);

  //  FUNCTION FOR ADD PRODUCT TO LIST  WHEN CLICKED ON PLUS BUTTON
  const handel_AddProductTOList = async (id) => {
    try {
      let params = {};
      let loadData = null;
      let dataUrl = `/cart2/api/cart_items/${id}/add/`;
      let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        true,
        params
      );
      setAll_product_list_buy(await response.data);
      console.log("Pluse :>> ", response);
      // if (response.status === 200) {
      toast.success("داده ها با موفقیت ثبت شده اند", {
        position: "top-right",
        closeOnClick: true,
      });
      // }
    } catch (e) {
      console.log("error :>> ", e.response.data[0]);
      const error = e.response.data[0];
      toast.error(error, {
        position: "top-center",
        closeOnClick: true,
      });
    }
  };

  // FUNCTION FOR REDUCE PRODUCT FROM LIST WHEN CLICKED ON MINIMUS BUTTON
  const handel_ReduceProductFromList = async (id) => {
    let params = {};
    let loadData = null;

    let dataUrl = `/cart2/api/cart_items/${id}/remove/`;
    let response = await ApiRegister().apiRequest(
      loadData,
      "get",
      dataUrl,
      true,
      params
    );
    setAll_product_list_buy(await response.data);
    console.log("MInis :>> ", response.data);

    // console.log("Reduc :>> ", response);
    // if (response.status === 200) {
    toast.success("داده ها با موفقیت ثبت شده اند", {
      position: "top-right",
      closeOnClick: true,
    });
    // }
  };

  // FUNCTION FOR DELETE PRODUCT FROM LIST WHEN CLICKED ON DELETE BUTTON

  const handel_DeleteProductFromList = async (id) => {
    let params = {};
    let loadData = null;

    let dataUrl = `/cart2/api/cart_items/${id}/delete/`;
    let response = await ApiRegister().apiRequest(
      loadData,
      "get",
      dataUrl,
      true,
      params
    );
    setAll_product_list_buy(await response.data);
    console.log("delete :>> ", response.data);
    toast.success("داده ها با موفقیت ثبت شده اند", {
      position: "top-right",
      closeOnClick: true,
    });
  };

  return (
    <ContextProduct.Provider
      value={{
        All_product_list_buy: All_product_list_buy,
        handel_AddProductTOList: handel_AddProductTOList,
        handel_ReduceProductFromList: handel_ReduceProductFromList,
        handel_DeleteProductFromList: handel_DeleteProductFromList,
      }}
    >
      {/* <Loading /> */}
      {/* <Empty /> */}

      <div className="all">
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
            integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <section className="container container--mob pb-5 ">
          <CheckOutSteps step="1" />

          <div className="row mx-auto mt-4" style={{ maxWidth: "72rem" }}>
            <ListCardBuy />
            <SumBuy />
          </div>
        </section>

        <MenuMobile />
        <ToastContainer />
      </div>
    </ContextProduct.Provider>
  );
}

Cart.Layout = ShopLayout;

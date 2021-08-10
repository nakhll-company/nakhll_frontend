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
import ContextProduct from "./Context/context";

export default function Cart() {
  // STATE FOR SAVE PRODUCTS
  const [All_product_list_buy, setAll_product_list_buy] = useState([]);

  // CALL API  &  GET PRODUCT LIST  & SET DATA IN "All_product_list_buy"

  useEffect(() => {
    const _handleRequestApi = async () => {
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

      if (response.status === 200) {
        setAll_product_list_buy(await response.data);
        console.log("response.data :>> ", response.data);
      }

      // setSelectState(await getStates());
    };

    _handleRequestApi();
  }, []);
  console.log("All_product_list_buy :>> ", All_product_list_buy);

  //  FUNCTION FOR ADD PRODUCT TO LIST  WHEN CLICKED ON PLUS BUTTON
  const handel_AddProductTOList = (id) => {
    const _handleRequestApi = async () => {
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

      if (response.status === 200) {
        console.log("Hamehchiokkkk :>> ", " Hamehchiokkkk");
      }
    };

    _handleRequestApi();
  };

  // FUNCTION FOR REDUCE PRODUCT FROM LIST WHEN CLICKED ON MINIMUS BUTTON
  const handel_ReduceProductFromList = (id) => {};

  // FUNCTION FOR DELETE PRODUCT FROM LIST WHEN CLICKED ON DELETE BUTTON

  const handel_DeleteProductFromList = (id) => {
    const _handleRequestApi = async () => {
      let params = {
        product: id,
        count: 1,
      };
      let loadData = null;
      let dataUrl = `/cart2/api/cart_items/2/`;
      let response = await ApiRegister().apiRequest(
        loadData,
        "DELETE",
        dataUrl,
        true,
        params
      );

      if (response.status === 200) {
      }
    };

    _handleRequestApi();
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
      <div className="all">
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
            integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
            crossorigin="anonymous"
          ></link>
        </Head>
        <section className="container container--mob pb-5 ">
          <CheckOutSteps step="1" />
          <MiniCardBuy />

          <div className="row mx-auto mt-4" style={{ maxWidth: "72rem" }}>
            <ListCardBuy />
            <SumBuy />
          </div>
        </section>
      </div>
    </ContextProduct.Provider>
  );
}

Cart.Layout = ShopLayout;

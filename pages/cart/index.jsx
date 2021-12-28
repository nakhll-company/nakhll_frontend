// node
import Head from "next/head";
import { useEffect, useState } from "react";
// component
import SumBuy from "../../containers/card/SumBuy";
import ShopLayout from "../../components/shopLayout";
import ListCardBuy from "../../containers/card/ListCardBuy";
// metods
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import ContextProduct from "../../containers/card/Context/context";
// LIBRARY
import { ToastContainer } from "react-toastify";
import { Empty } from "../../components/custom/Empty/Empty";
import { MenuMobile } from "../../containers/card/MenuMobile";
import { Loading } from "../../components/custom/Loading/Loading";
// Redux
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/cart/getProducts";

export default function Cart() {
  const dispatch = useDispatch();
  // STATE FOR SAVE PRODUCTS
  const [All_product_list_buy, setAll_product_list_buy] = useState({});
  // STATE FOR SHOW LOADING
  const [showLoading, setShowLoading] = useState(true);
  // FUNCTION FOR GET ALL DATA FOR CARTS
  const _handleRequestApiAll = async () => {
    try {
      let token = localStorage.getItem("accessToken");
      let response = await ApiRegister().apiRequest(
        null, "get",
        `/cart2/api/carts/my/`,
        token ? true : false, {}
      );
      setAll_product_list_buy(await response.data);
      setShowLoading(false);
    } catch (e) { }
  };

  // CALL API  &  GET PRODUCT LIST  & SET DATA IN "All_product_list_buy"
  useEffect(() => {
    _handleRequestApiAll();
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <ContextProduct.Provider value={{}}>
      <div className="all">
        <Head>
          <title>سبد خرید</title>
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

        {showLoading ? (
          <div style={{ backgroundColor: "#fff" }}>
            <Loading />
          </div>
        ) : All_product_list_buy &&
          All_product_list_buy.ordered_items.length > 0 ? (
          <section className="container container_mob pb-5 ">
            <div className="row mx-auto mt-4" style={{ maxWidth: "72rem" }}>
              <ListCardBuy />
              <SumBuy />
            </div>
          </section>
        ) : (
          <Empty />
        )}

        <MenuMobile />
        <ToastContainer />
      </div>
    </ContextProduct.Provider>
  );
}

Cart.Layout = ShopLayout;

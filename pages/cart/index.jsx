// node
import { useEffect, useState } from "react";
import Head from "next/head";

// component
import ListCardBuy from "../../containers/card/ListCardBuy";
import MiniCardBuy from "../../containers/card/MiniCardBuy";
import SumBuy from "../../containers/card/SumBuy";
import ShopLayout from "../../components/shopLayout";
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

// Styles
import styles from "../../styles/pages/cart/cart.module.scss";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/cart/getProducts";

export default function Cart() {
  const dispatch = useDispatch();
  const AllProduct = useSelector((state) => state.Cart.allProduct);
  // STATE FOR SAVE PRODUCTS
  const [All_product_list_buy, setAll_product_list_buy] = useState({});

  // STATE FOR SHOW LOADING
  const [showLoading, setShowLoading] = useState(true);

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
      setShowLoading(false);
    } catch (e) {
      
    }
  };

  // CALL API  &  GET PRODUCT LIST  & SET DATA IN "All_product_list_buy"

  useEffect(() => {
    _handleRequestApiAll();
    dispatch(getProducts());
  }, []);

  return (
    <ContextProduct.Provider value={{}}>
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

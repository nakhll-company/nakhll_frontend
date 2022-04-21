// node
import Head from "next/head";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// component
import SumBuy from "../../containers/card/SumBuy";
import ShopLayout from "../../components/shopLayout";
import ListCardBuy from "../../containers/card/ListCardBuy";
// metods
import { Empty } from "../../components/custom/Empty/Empty";
import { MenuMobile } from "../../containers/card/MenuMobile";
import { Loading } from "../../components/custom/Loading/Loading";
import { getProducts } from "../../redux/actions/cart/getProducts";
import ContextProduct from "../../containers/card/Context/context";
import { authhttp } from "../../services/callApi/api";

export default function Cart() {

  const dispatch = useDispatch();
  const [showLoading, setShowLoading] = useState(true);
  const [All_product_list_buy, setAll_product_list_buy] = useState({});

  const _handleRequestApiAll = async () => {
    try {
      let token = localStorage.getItem("accessToken");
      let response = await authhttp.get(`/api/v1/cart/me/`) 
      setAll_product_list_buy(await response.data);
      setShowLoading(false);
    } catch (e) {
      return false;
    }
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
          All_product_list_buy.ordered_items && All_product_list_buy.ordered_items.length > 0 ? (
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

      </div>
    </ContextProduct.Provider>
  );
}

Cart.Layout = ShopLayout;

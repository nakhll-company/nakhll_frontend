// node
import Head from "next/head";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// component
import SumBuy from "../../containers/card/SumBuy";
import ShopLayout from "../../components/shopLayout";
import Empty from "../../components/custom/Empty/Empty";
import MenuMobile from "../../containers/card/MenuMobile";
import ListCardBuy from "../../containers/card/ListCardBuy";
import Loading from "../../components/custom/Loading/Loading";
// methods
import { authhttp } from "../../services/callApi/api";
import { getProducts } from "../../redux/actions/cart/getProducts";
import ContextProduct from "../../containers/card/Context/context";

export default function Cart() {
  const dispatch = useDispatch();
  const [showLoading, setShowLoading] = useState(true);
  const [allProductListBuy, setAllProductListBuy] = useState({});

  const _handleRequestApiAll = async () => {
    try {
      const response = await authhttp.get(`/api/v1/cart/me/`);
      setAllProductListBuy(await response.data);
      setShowLoading(false);
    } catch (e) {
      return false;
    }
  };

  // CALL API  &  GET PRODUCT LIST  & SET DATA IN "allProductListBuy"
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
        ) : allProductListBuy &&
          allProductListBuy.ordered_items &&
          allProductListBuy.ordered_items.length > 0 ? (
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

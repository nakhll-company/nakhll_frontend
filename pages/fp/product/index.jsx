// next libraries
import Head from "next/head";
import { connect } from "react-redux";
import { useEffect } from "react";
// components
import MyLayout from "../../../components/layout/Layout";
import useViewport from "../../../components/viewPort";
import Mobile from "../../../containers/product/list/mobile";
import Desktop from "../../../containers/product/list/desktop";
// methods
import { getProduct } from "../../../redux/actions/product/getProduct";
import { mapState } from "../../../containers/product/methods/mapState";

const Product = ({ getProduct, productList }) => {
  const { width } = useViewport();
  const breakpoint = 620;

  useEffect(() => {
    productList.length === 0 && getProduct();
  }, [getProduct]);

  return (
    <div>
      <Head>
        <title>محصولات</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {width > breakpoint ? (
        <Mobile productList={productList} />
      ) : (
        <Desktop productList={productList} />
      )}
    </div>
  );
};
// export
const connector = connect(mapState, { getProduct });
export default connector(Product);
Product.Layout = MyLayout;

// next libraries
import { connect } from "react-redux";
import { useEffect } from "react";
// node libraries
import { useState } from 'react';
// components
import MyLayout from "../../../components/layout/Layout";
import useViewport from "../../../components/viewPort";
import Mobile from "../../../containers/product/list/mobile";
import Desktop from "../../../containers/product/list/desktop";
// methods
import { getProduct } from "../../../redux/actions/product/getProduct";
import { mapState } from "../../../containers/product/methods/mapState";


const Product = ({ getProduct, productList, activeHojreh, userInfo }) => {
  let [loading, setLoading] = useState(false);

  const { width } = useViewport();
  const breakpoint = 620;

  useEffect(() => {
    async function getData() {
      await setLoading(true);
      activeHojreh && await getProduct(activeHojreh);
      await setLoading(false);
    }
    getData();
  }, [getProduct, activeHojreh]);

  return (
    <>
      {width < breakpoint ?
        <Mobile loading={loading} productList={productList} activeHojreh={activeHojreh} getProduct={getProduct} userInfo={userInfo} /> :
        <Desktop loading={loading} productList={productList} activeHojreh={activeHojreh} getProduct={getProduct} userInfo={userInfo} />}
    </>
  );
};
// export
const connector = connect(mapState, { getProduct });
export default connector(Product);
Product.Layout = MyLayout;

// next libraries
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// components
import useViewport from "../../../components/viewPort";
import MyLayout from "../../../components/layout/Layout";
import Mobile from "../../../containers/product/list/mobile";
import Desktop from "../../../containers/product/list/desktop";
// methods
import { getProduct } from "../../../redux/actions/product/getProduct";
import { mapState } from "../../../containers/product/methods/mapState";


const Product = ({ getProduct, productList, activeHojreh, userInfo }) => {

  const breakpoint = 620;
  const router = useRouter();
  const { width } = useViewport();
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      await setLoading(true);
      activeHojreh && !router.query.filter && await getProduct(activeHojreh);
      await setLoading(false);
    }
    getData();
  }, [getProduct, activeHojreh, router.query.filter]);

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

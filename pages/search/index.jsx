// node libraries
import React from "react";
import Head from "next/head";
// components
import ShopLayout from "../../components/shopLayout";
import ListProductCus from "../../containers/listProduct/listProductCus";
import ListWitOutFilters from "../../containers/listProduct/ListWithOutFilters";
import { useRouter } from "next/router";

function Product({ ap, data }) {
  const {query} = useRouter()
  console.log('query :>> ', query);
  return (
    <>
      <Head>
        <title>{`جستجو برای ${'milad'} | نخل`}</title>
        <meta name="robots" content="noindex, nofollow" />

        <link rel="canonical" href="https://nakhll.com/search/?q=" />
      </Head>
      {query.ap ? <ListWitOutFilters api={query.ap} />   :<ListProductCus data={query} />}

      {/* {ap !== "" && (
        <>
          <ListWitOutFilters api={ap} />
        </>
      )}

      {ap === "" && <ListProductCus data={data} />} */}
    </>
  );
}

export default Product;

// function server side
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       data: context.query,
//       ap: context.query.ap || "",
//     },
//   };
// }

Product.Layout = ShopLayout;

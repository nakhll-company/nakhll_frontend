// node libraries
import React from "react";
import Head from "next/head";
// components
import ShopLayout from "../../components/shopLayout";
import ListProductCus from "../../containers/listProduct/listProductCus";
import ListWitOutFilters from "../../containers/listProduct/ListWithOutFilters";

function Product({ ap, data }) {
  return (
    <>
      <Head>
        <title>{`جستجو برای ${data.q} | نخل`}</title>
        <meta name="robots" content="noindex, nofollow" />

        <link rel="canonical" href="https://nakhll.com/search/?q=" />
      </Head>

      {ap !== "" && (
        <>
          <ListWitOutFilters api={ap} />
        </>
      )}

      {ap === "" && <ListProductCus data={data} />}
    </>
  );
}

export default Product;

// function server side
export async function getServerSideProps(context) {
  return {
    props: {
      data: context.query,
      ap: context.query.ap || "",
    },
  };
}

Product.Layout = ShopLayout;

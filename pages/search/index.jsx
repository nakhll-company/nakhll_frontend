// node libraries
import React from "react";
import Head from "next/head";
// components
import ShopLayout from "../../components/shopLayout";
import ListProductCus from "../../containers/listProduct/listProductCus";
import { useRouter } from "next/router";

function Product({}) {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>{`جستجو برای ${query.q ? query.q : "محصولات"} | نخل`}</title>
        <meta name="robots" content="noindex, nofollow" />

        <link rel="canonical" href="https://nakhll.com/search/?q=" />
      </Head>
      {query && Object.keys(query).length != 0 && (
        <ListProductCus data={query} />
      )}
    </>
  );
}

export default Product;

Product.Layout = ShopLayout;

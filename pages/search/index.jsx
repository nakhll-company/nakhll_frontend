import React from "react";
import Head from "next/head";
import ListWitOutFilters from "../../containers/listProduct/ListWithOutFilters";
import ListProductCus from "../../containers/listProduct/listProductCus";

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

import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import ListWitOutFilters from "../../containers/listProduct/ListWithOutFilters";
import ListProductCus from "../../containers/listProduct/listProductCus";

function product({ ap, data }) {
  const router = useRouter();

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

export default product;

// function server side
export async function getServerSideProps(context) {
  return {
    props: {
      data: context.query,

      ap: context.query.ap || "",
    },
  };
}
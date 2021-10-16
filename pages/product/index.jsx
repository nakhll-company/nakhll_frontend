import React, { useState } from "react";
import { useRouter } from "next/router";
import ListProduct from "../../containers/listProduct";
import ListWitOutFilters from "../../containers/listProduct/ListWithOutFilters";

function product({ word, category, ap }) {
  const router = useRouter();

  const [cat, setCat] = useState(category);
  return (
    <>
      {ap !== "" && (
        <>
          <ListWitOutFilters api={ap} />
        </>
      )}

      {ap === "" && (
        <ListProduct searchWord={word} categoryIn={router.query.cat} />
      )}
    </>
  );
}

export default product;

// function server side
export async function getServerSideProps(context) {
  return {
    props: {
      id: context.query.id || "",
      category: context.query.cat || "",
      word: context.query.word || "",
      ap: context.query.ap || "",
    },
  };
}

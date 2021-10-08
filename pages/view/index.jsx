import React from "react";
import ListProduct from "../../containers/listProduct";

function product({ word, category }) {
  return (
    <>
      <ListProduct searchWord={word} categoryIn={category} />
    </>
  );
}

export default product;

// function server side
export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id,
      category: context.query.cat,
      word: context.query.word,
    },
  };
}

// node libraries
import React from "react";
import Head from "next/head";
// components
import useViewport from "../../../../components/viewPort";
import ShopLayout from "../../../../components/shopLayout";
import ProductDetailMobile from "../../../../containers/productDetail/mobile";
import ProductDetailDesktop from "../../../../containers/productDetail/desktop";
// methods
import { http } from "../../../../services/callApi/api";

// fetch data
const fetchData = async (id) => {
  const urlComments = encodeURI(`/api/v1/product-page/comments/${id}/`);
  const urlResponse = encodeURI(`/api/v1/product-page/details/${id}/`);
  const urlRelatedProduct = encodeURI(
    `/api/v1/product-page/related_products/${id}/?page_size=10`
  );

  const comments = await http.get(urlComments);
  const response = await http.get(urlResponse);
  const relatedProduct = await http.get(urlRelatedProduct);

  if (response.status === 200) {
    return {
      detail: response.data,
      comments: comments.data,
      relatedProduct: relatedProduct.status === 200 ? relatedProduct.data : [],
    };
  } else {
    return false;
  }
};

const ProductDetail = ({ data }) => {
  const breakpoint = 620;
  const { width } = useViewport();

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {width < breakpoint ? (
        <ProductDetailMobile data={data} />
      ) : (
        <ProductDetailDesktop data={data} />
      )}
    </>
  );
};

export default ProductDetail;

// function server side
export async function getServerSideProps(context) {
  const data = await fetchData(context.query.productSlug);

  if (!data) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props: {},
    };
  }
  return {
    props: { data },
  };
}

ProductDetail.Layout = ShopLayout;

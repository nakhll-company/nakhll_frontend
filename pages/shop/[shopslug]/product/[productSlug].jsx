// node libraries
import { useState } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
// components

// methods

import useViewport from "../../../../components/viewPort";
import ProductDetailMobile from "../../../../containers/productDetail/mobile";
import ProductDetailDesktop from "../../../../containers/productDetail/desktop";
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";

// fetch data
const fetchData = async (id) => {
  let urlComments = encodeURI(`/api/v1/product-page/comments/${id}/`);
  let urlResponse = encodeURI(`/api/v1/product-page/details/${id}/`);
  let urlRelatedProduct = encodeURI(
    `/api/v1/product-page/related_products/${id}/?page_size=10`
  );
  let comments = await ApiRegister().apiRequest(
    null,
    "GET",
    urlComments,
    false,
    ""
  );
  let response = await ApiRegister().apiRequest(
    null,
    "get",
    urlResponse,
    false,
    ""
  );
  let relatedProduct = await ApiRegister().apiRequest(
    null,
    "GET",
    urlRelatedProduct,
    false,
    ""
  );

  if (response.status === 200) {
    return {
      detail: response.data,
      comments: comments.data,
      relatedProduct: relatedProduct.data,
    };
  } else {
    return false;
  }
};
/**
 * component detail
 */
const ProductDetail = ({ data }) => {
  const { width } = useViewport();
  const breakpoint = 620;
  const [posts, setPosts] = useState(Array.from({ length: 20 }));

  const getMorePost = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_start=${posts.length}&_limit=10`
    );
    const newPosts = await res.json();
    setPosts((post) => [...post, ...newPosts]);
  };

  const SEO = {
    title: `خرید و قیمت ${data.detail.title} | نخل`,
    description: data.detail.description
      ? data.detail.description
      : "نخل سرزمینی است برای یادآوری سنت‌های اصیل ایرانی‌مان، برای شکوفایی استعدادها و بهتر دیده‌شدن‌تان، کالاها و خدمات خود را در سرزمین نخل به اشتراک بگذارید. اینجا راهی برای پیشبرد هدف‌هایتان وجود دارد.",
  };
  return (
    <>
      <NextSeo {...SEO} />
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

  return {
    props: { data },
  };
}

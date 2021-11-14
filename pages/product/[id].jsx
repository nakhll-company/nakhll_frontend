// node libraries
import { useState } from "react";
import Head from "next/head";
// components
import useViewport from "../../components/viewPort";
import ProductDetailMobile from "../../containers/productDetail/mobile";
import ProductDetailDesktop from "../../containers/productDetail/desktop";
// methods
import { ApiRegister } from "../../services/apiRegister/ApiRegister";

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
    true,
    ""
  );
  let response = await ApiRegister().apiRequest(
    null,
    "get",
    urlResponse,
    true,
    ""
  );
  let relatedProduct = await ApiRegister().apiRequest(
    null,
    "GET",
    urlRelatedProduct,
    true,
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
  return (
    <>
      <Head>
        <title>{`خرید و قیمت ${data.detail.title} | نخل`}</title>
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
  const data = await fetchData(context.params.id);
  return {
    props: { data },
  };
}

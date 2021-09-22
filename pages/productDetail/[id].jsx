// node libraries
import { useState } from 'react';
// components
import useViewport from "../../components/viewPort";
import ProductDetailMobile from "../../containers/productDetail/mobile";
import ProductDetailDesktop from "../../containers/productDetail/desktop";
// methods
import { ApiRegister } from '../../services/apiRegister/ApiRegister';

// fetch data
const fetchData = async (id) => {
    let comments = await ApiRegister().apiRequest(
        null, "GET", `/api/v1/product-page/comments/${id}/`, true, ""
    );
    let response = await ApiRegister().apiRequest(
        null, "get", `/api/v1/product-page/details/${id}/`, true, ""
    );
    let relatedProduct = await ApiRegister().apiRequest(
        null, "GET", `/api/v1/product-page/related_products/${id}/?page_size=10`, true, ""
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
            {width < breakpoint ?
                <ProductDetailMobile data={data} />
                : <ProductDetailDesktop data={data} />
            }

        </>
    );
}

export default ProductDetail;


// function server side
export async function getServerSideProps(context) {
    const data = await fetchData(context.params.id);

    return {
        props: { data },
    };
}







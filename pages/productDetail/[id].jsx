// node libraries
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import Rating from 'react-rating';
import InfiniteScroll from 'react-infinite-scroll-component';
// components
import CustomSlider from '../../components/custom/customSlider';
import ProductCard from '../../components/ProductCart/ProductCard';
import CustomLabel from '../../components/custom/customLabel';
import ProductImages from '../../containers/productDetail/productImages';
// methods
import { ApiRegister } from '../../services/apiRegister/ApiRegister';
// styles
import styles from '../../styles/pages/productDetail/productDetail.module.scss';
import useViewport from "../../components/viewPort";
import ProductDetailMobile from "../../containers/productDetail/mobile";
import ProductDetailDesktop from "../../containers/productDetail/desktop";

// fetch data
const fetchData = async (id) => {
    let response = await ApiRegister().apiRequest(
        null, "get",
        `/api/v1/product-page/details/${id}/`,
        true, "");
    if (response.status === 200) {
        return response.data;
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

    let product = {
        imageUrl: "/image/faile.webp",
        url: "/hamzeh",
        title: "نبات گیاهی متبرک مشهد با نی چوبی 1 کیلویی برکت هشتم",
        chamberTitle: "گالری سنگ و نقره شاپرک",
        chamberUrl: "/azizzadeh",
        rate: 10,
        commentCount: 102,
        discount: 25,
        price: 107000,
        discountNumber: 190000,
        // sales: 52,
        city: "کرمان",
    };
    const [posts, setPosts] = useState(Array.from({ length: 20 }));
    const [hasMore, setHasMore] = useState(true);

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

                <ProductDetailMobile data={data}  />

                : <ProductDetailDesktop data={data} />


            }

        </>



    );
}

export default ProductDetail;


// function server side
export async function getServerSideProps(context) {
    console.log(`context`, context)
    const data = await fetchData(context.params.id);
    return {
        props: { data },
    };
}







import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export async function fetchProductShop(detail, setProductShop) {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/api/v1/landing/shop_products/${detail.shop.slug}/`,
        false,
        ""
    );
    if (response.status === 200) {
        setProductShop(response.data);
    } else {
        return false;
    }
}

export const getMoreProduct = async (productSlug, pageApi, setHasMore, setPageApi, setPosts) => {
    let moreProduct = await ApiRegister().apiRequest(
        null,
        "GET",
        `/api/v1/product-page/related_products/${productSlug}/`,
        false,
        {
            page: pageApi,
            page_size: 10,
        }
    );
    if (moreProduct.data.next === null) {
        setHasMore(false);
    } else {
        setHasMore(true);
        setPageApi(pageApi + 1);
    }
    setPosts((post) => [...post, ...moreProduct.data.results]);
};
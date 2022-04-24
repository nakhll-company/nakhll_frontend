import { http } from "../../services/callApi/api";

export async function fetchProductShop(detail, setProductShop) {
    let response = await http.get(
        `/api/v1/landing/shop_products/${detail.shop.slug}/`
    );
    if (response.status === 200) {
        setProductShop(response.data);
    } else {
        return false;
    }
}

export const getMoreProduct = async(
    productSlug,
    pageApi,
    setHasMore,
    setPageApi,
    setPosts
) => {
    let moreProduct = await http.get(
        `/api/v1/product-page/related_products/${productSlug}/`, {
            params: {
                page: pageApi,
                page_size: 10,
            },
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
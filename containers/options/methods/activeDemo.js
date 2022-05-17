import {
    authhttp
} from "../../../services/callApi/api";

export async function activeDemo(id, activeShop, router) {
    const response = await authhttp.post(
        `/api/v1/shop/feature-invoices/activate_demo/`, {
            feature: id,
            shop: activeShop,
        }
    );

    if (response.status === 200) {
        const response = await authhttp.post(
            `/api/v1/shop/landings/${activeShop}/`, {
                name: "صفحه بدون نام",
                page_data: "",
                shop: activeShop,
            }
        );
        if (response.status === 201) {
            router.push(`/liveEdit/${activeShop}/${response.data.id}`);
        }
    }
}
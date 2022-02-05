import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export async function activeDemo(id, activeShop, router) {
    let response = await ApiRegister().apiRequest({
        feature: id,
        shop: activeShop,
    },
        "POST",
        `/api/v1/shop_feature_invoice/activate_demo/`,
        true, {}
    );

    if (response.status === 200) {
        let response = await ApiRegister().apiRequest({
            name: "صفحه بدون نام",
            page_data: "",
            shop: activeShop,
        },
            "post",
            `/api/v1/shop_landing/${activeShop}/`,
            true,
            ""
        );
        if (response.status === 201) {
            router.push(`/liveEdit/${activeShop}/${response.data.id}`);
        }
    }
}
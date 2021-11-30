import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export const _ApiGetCategories = async() => {
    let params = null;
    let loadData = null;
    let dataUrl = "/api/v1/categories/";
    let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        false,
        params
    );
    return response;
};

export const _ApiCreateProduct = async(dataForSend, activeHojreh) => {
    let response = await ApiRegister().apiRequest(
        dataForSend,
        "post",
        `/api/v1/shop/${activeHojreh}/products/`,
        true, {}
    );
    return response;
};
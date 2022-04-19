import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { http } from "../../services/callApi/api";

export const _ApiGetCategories = async() => {
    let params = null;
    let loadData = null;
    let dataUrl = "/api/v1/categories/";
    // http.get(dataUrl)
    let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        false,
        params
    );
    return response;
};
export const _ApiGetTags = async(activeHojreh) => {
    let params = null;
    let loadData = null;

    let dataUrl = `/api/v1/shop/${activeHojreh}/tags/`;
    let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        true,
        params
    );
    return response;
};

export const _ApiCreateProduct = async(dataForSend, activeHojreh) => {
    try {
        let response = await ApiRegister().apiRequest(
            dataForSend,
            "post",
            `/api/v1/shop/${activeHojreh}/products/`,
            true, {}
        );
        return response;
    } catch (error) {}
};

export const _ApiUpdateProduct = async(dataForSend, activeHojreh, id) => {
    let response = await ApiRegister().apiRequest(
        dataForSend,
        "patch",
        `/api/v1/shop/${activeHojreh}/products/${id}/`,
        true, {}
    );
    return response;
};
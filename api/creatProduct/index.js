import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export const _ApiGetCategories = async () => {
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

export const _ApiCreateProduct = async (dataForSend, activeHojreh) => {
    try {
        let response = await ApiRegister().apiRequest(
            dataForSend,
            "post",
            `/api/v1/shop/${activeHojreh}/products/`,
            localStorage.getItem("accessToken"), {}
        );
        return response;
    } catch (error) { }
};

export const _ApiUpdateProduct = async (dataForSend, activeHojreh, id) => {
    let response = await ApiRegister().apiRequest(
        dataForSend,
        "patch",
        `/api/v1/shop/${activeHojreh}/products/${id}/`,
        localStorage.getItem("accessToken"), {}
    );
    return response;
};
import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export const callApiAllData = async (activeHojreh) => {
    let params = {};
    let loadData = null;
    let dataUrl = `/api/v1/shop/${activeHojreh}/settings/`;
    let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        localStorage.getItem("accessToken"),
        params
    );
    return response;
};

export const linkSetting = (body, activeHojreh) => {
    const dataForSendLink = {
        social_media: {
            telegram: body.telegram,
            instagram: body.instagram,
        },
    };

    let params = {};
    let loadData = dataForSendLink;
    let dataUrl = `/api/v1/shop/${activeHojreh}/settings/social_media/`;

    let response = ApiRegister().apiRequest(
        loadData,
        "put",
        dataUrl,
        localStorage.getItem("accessToken"),
        params
    );
};

export const callApiUpDataShop = async (dataForSend, activeHojreh) => {
    let params = {};
    let loadData = dataForSend;
    let dataUrl = `/api/v1/shop/${activeHojreh}/settings/`;

    const response = await ApiRegister().apiRequest(
        loadData,
        "patch",
        dataUrl,
        localStorage.getItem("accessToken"),
        params
    );

    return response;
};

export const callBankAccount = async (dataForSend, activeHojreh) => {
    let params = {};
    let loadData = dataForSend;
    let dataUrl = `/api/v1/shop/${activeHojreh}/settings/bank_account/`;

    let response = await ApiRegister().apiRequest(
        loadData,
        "put",
        dataUrl,
        localStorage.getItem("accessToken"),
        params
    );
    return response;
};

export const callApiUpDataPicture = async (dataForSend, activeHojreh) => {
    let params = {};
    let loadData = dataForSend;
    let dataUrl = `/api/v1/shop/${activeHojreh}/settings/avatar/`;

    const response = await ApiRegister().apiRequest(
        loadData,
        "put",
        dataUrl,
        localStorage.getItem("accessToken"),
        params
    );

    return response;
};
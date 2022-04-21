import { authhttp } from "../../services/callApi/api";

export const callApiAllData = async(activeHojreh) => {
    let dataUrl = `/api/v1/shop/${activeHojreh}/settings/`;
    let response = await authhttp.get(dataUrl);
    return response;
};

export const linkSetting = (body, activeHojreh) => {
    const dataForSendLink = {
        social_media: {
            telegram: body.telegram,
            instagram: body.instagram,
        },
    };

    let loadData = dataForSendLink;
    let dataUrl = `/api/v1/shop/${activeHojreh}/settings/social_media/`;

    let response = authhttp.put(dataUrl, loadData);
};

export const callApiUpDataShop = async(dataForSend, activeHojreh) => {
    let loadData = dataForSend;
    let dataUrl = `/api/v1/shop/${activeHojreh}/settings/`;

    const response = await authhttp.patch(dataUrl, loadData);

    return response;
};

export const callBankAccount = async(dataForSend, activeHojreh) => {
    let loadData = dataForSend;
    let dataUrl = `/api/v1/shop/${activeHojreh}/settings/bank_account/`;

    let response = await authhttp.put(dataUrl, loadData);
    return response;
};

export const callApiUpDataPicture = async(dataForSend, activeHojreh) => {
    let loadData = dataForSend;
    let dataUrl = `/api/v1/shop/${activeHojreh}/settings/avatar/`;

    const response = await authhttp.put(dataUrl, loadData);

    return response;
};
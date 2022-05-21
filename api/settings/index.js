import {
    authhttp
} from "../../services/callApi/api";

export const callApiAllData = async(activeHojreh) => {
    const dataUrl = `/api/v1/shop/${activeHojreh}/settings/`;
    const response = await authhttp.get(dataUrl);
    return response;
};

export const linkSetting = (body, activeHojreh) => {
    const dataForSendLink = {
        social_media: {
            telegram: body.telegram,
            instagram: body.instagram,
        },
    };

    const loadData = dataForSendLink;
    const dataUrl = `/api/v1/shop/${activeHojreh}/settings/social_media/`;

    authhttp.put(dataUrl, loadData);
};

export const callApiUpDataShop = async(dataForSend, activeHojreh) => {
    const loadData = dataForSend;
    const dataUrl = `/api/v1/shop/${activeHojreh}/settings/`;

    const response = await authhttp.patch(dataUrl, loadData);

    return response;
};

export const callBankAccount = async(dataForSend, activeHojreh) => {
    const loadData = dataForSend;
    const dataUrl = `/api/v1/shop/${activeHojreh}/settings/bank_account/`;

    const response = await authhttp.put(dataUrl, loadData);
    return response;
};

export const callApiUpDataPicture = async(dataForSend, activeHojreh) => {
    const loadData = dataForSend;
    const dataUrl = `/api/v1/shop/${activeHojreh}/settings/avatar/`;

    const response = await authhttp.put(dataUrl, loadData);

    return response;
};
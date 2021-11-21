import { useSelector } from "react-redux";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";

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
        true,
        params
    );
};
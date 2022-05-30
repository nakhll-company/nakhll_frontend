import {
    instanceAxiosWithToken,
    instanceAxiosWithOutToken,
} from "../axios/AxiosRegister";

export const apiRegister = () => {
    return {
        apiRequest: (data, method, url, token, params) =>
            token ?
            instanceAxiosWithToken({
                method,
                url,
                data,
                params,
            }) :
            instanceAxiosWithOutToken({
                method,
                url,
                data,
                params,
            }),
    };
};
import Axios from "axios";
import { errorMessage } from "../../containers/utils/message";

//=================================================================\\
// function for handel message

function showMessage(error) {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (expectedError) {
        let message = "";
        for (let value of Object.values(error.response.data)) {
            message += value.toString().replace(",", "\n");
        }
        error.response.status !== 401 &&
            errorMessage(
                message,
                error.response.status,
                location.pathname,
                error.response.config.url
            );
    } else {
        errorMessage(
            "مشکلی از سمت سرور رخ داده است.",
            error.response.status,
            location.pathname,
            error.response.config.url
        );
    }
}

//=================================================================\\
export const instanceAxiosWithOutToken = Axios.create({
    withCredentials: true,
    baseURL: process.env.BASE_URL,
    headers: {
        "Content-Type": " application/json",
    },
    timeout: 300000,
});

// instanceAxiosWithOutToken.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// instanceAxiosWithOutToken.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

//=================================================================\\
export const instanceAxiosWithToken = Axios.create({
    withCredentials: true,
    baseURL: process.env.BASE_URL,
    timeout: 300000,
    headers: {
        Authorization: "Bearer " + (process.browser && localStorage.getItem("accessToken")),
        "Content-Type": " application/json",
    },
});

//=================================================================\\
//=================instanceAxiosWithOutToken=======================\\
//=================================================================\\
instanceAxiosWithOutToken.interceptors.request.use(
    function(config) {
        return config;
    },
    function(error) {
        return error;
    }
);

instanceAxiosWithOutToken.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        showMessage(error);
        return error;
    }
);

//=================================================================\\
//=================instanceAxiosWithToken==========================\\
//=================================================================\\
instanceAxiosWithToken.interceptors.request.use(
    function(config) {
        return config;
    },
    function(error) {
        return error;
    }
);

instanceAxiosWithToken.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        showMessage(error);
        return error;
    }
);
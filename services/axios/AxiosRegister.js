import Axios from "axios";

//=================================================================\\
export const instanceAxiosWithOutToken = Axios.create({
    // withCredentials: true,
    baseURL: "https://nakhll.com/",
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
    baseURL: "https://nakhll.com/",
    timeout: 300000,
    headers: {
        "Content-Type": " application/json",
    },
});

//=================================================================\\
//=================instanceAxiosWithOutToken=======================\\
//=================================================================\\
instanceAxiosWithOutToken.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

instanceAxiosWithOutToken.interceptors.response.use(
    function (response) {
        return response;
    }
    // ,
    // function(error) {
    //     return Promise.reject(error);
    // }
);

//=================================================================\\
//=================instanceAxiosWithToken==========================\\
//=================================================================\\
instanceAxiosWithToken.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

instanceAxiosWithToken.interceptors.response.use(
    function (response) {
        return response;
    }
    // ,
    // function(error) {
    //     return Promise.reject(error);
    // }
);
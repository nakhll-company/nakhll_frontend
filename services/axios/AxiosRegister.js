import Axios from 'axios';

//=================================================================\\
export const instanceAxiosWithOutToken = Axios.create({
    // withCredentials: true,
    baseURL: "http://localhost:8000/",
    headers: {
        'Content-Type': ' application/json',
    },
    timeout: 300000,

});


// instanceAxiosWithOutToken.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// instanceAxiosWithOutToken.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

//=================================================================\\
export const instanceAxiosWithToken = Axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8000/",
    timeout: 300000,
    headers: {
        'Content-Type': ' application/json',
    },
});

//=================================================================\\
//=================instanceAxiosWithOutToken=======================\\
//=================================================================\\
instanceAxiosWithOutToken.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

instanceAxiosWithOutToken.interceptors.response.use(function (response) {

    if (response.status === 200) {
        return response.data;
    } else {
        return response;
    }

}, function (error) {
    return Promise.reject(error);
});


//=================================================================\\
//=================instanceAxiosWithToken==========================\\
//=================================================================\\
instanceAxiosWithToken.interceptors.request.use(function (config) {

    return config;
}, function (error) {
    return Promise.reject(error);
});

instanceAxiosWithToken.interceptors.response.use(function (response) {
    if (response.status === 200) {
        return response.data;
    } else {
        return response;
    }
}, function (error) {
    return Promise.reject(error);
});
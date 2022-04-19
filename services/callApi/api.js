import axios from "axios";

axios.interceptors.request.use(
    (config) => {
        config.headers.authorization = `Bearer ${accessToken}`;
        return config;
    },
    (error) => {
        return Promis.reject(error);
    }
);

export const http = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        "Content-Type": " application/json",
    },
});


// const authAxios = axios.create({
//     baseURL: process.env.BASE_URL,
//     headers: {
//         Authorization: `Bearer ${accessToken}`,
//     },
// });
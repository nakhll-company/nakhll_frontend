import axios from "axios";
import {
    checkToken
} from "../../utils/checkToken";
import {
    errorMessage
} from "../../utils/toastifyMessage";

function handelShowMessage(error) {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (typeof window !== "undefined") {
        if (expectedError) {
            let message = "";
            for (const value of Object.values(error.response.data)) {
                message += value.toString().replace(",", "\n");
            }

            if (error.response.status !== 401) {
                errorMessage(
                    message,
                    error.response.status,
                    window.location.pathname,
                    error.response.config.url
                );
            } else {
                errorMessage("لطفا ابتدا وارد شوید .");
            }
        } else {
            errorMessage(
                "مشکلی از سمت سرور رخ داده است.",
                error.response.status,
                window.location.pathname,
                error.response.config.url
            );
        }
    }
}

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.headers["Content-Type"] = " application/json";

export const http = axios.create({});

http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        handelShowMessage(error);
        return error;
    }
);

export const authhttp = axios.create({});

authhttp.interceptors.request.use(
    async(config) => {
        const token = await checkToken();

        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promis.reject(error);
    }
);

authhttp.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        handelShowMessage(error);
        return error;
    }
);
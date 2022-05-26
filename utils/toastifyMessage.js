import {
    toast
} from "react-toastify";

export const successMessage = (message) => {
    toast.success(message, {
        position: "top-center",
        closeOnClick: true,
    });
};

export const errorMessage = (message, error = "", page = "", api = "") => {
    const excepMessage = `${error} | ${message} | ${page} | ${api} `;

    window.gtag("event", "exception", {
        description: excepMessage,
        fatal: true, // set to true if the error is fatal
    });

    toast.error(message, {
        position: "top-center",
        closeOnClick: true,
    });
};
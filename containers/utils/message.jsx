import { toast } from "react-toastify";
import * as gtag from "../../lib/gtag";

export const successMessage = (message) => {
  toast.success(message, {
    position: "top-center",
    closeOnClick: true,
  });
};

export const errorMessage = (message, error = "", page = "", api = "") => {
  let excepMessage = `${error} | ${message} | ${page} | ${api} `;

  gtag("event", "exception", {
    description: excepMessage,
    fatal: true, // set to true if the error is fatal
  });

  toast.error(message, {
    position: "top-center",
    closeOnClick: true,
  });
};

import { toast } from "react-toastify";

export const successMessage = (message) => {
  toast.success(message, {
    position: "top-center",
    closeOnClick: true,
  });
};

export const errorMessage = (message) => {
  gtag("event", "exception", {
    description: message,
    fatal: true, // set to true if the error is fatal
  });

  toast.error(message, {
    position: "top-center",
    closeOnClick: true,
  });
};

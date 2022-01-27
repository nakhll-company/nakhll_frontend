import { toast } from "react-toastify";

export const successMessage = (message) => {
  toast.success(message, {
    position: "top-center",
    closeOnClick: true,
  });
};

export const errorMessage = (message) => {
  gtag("testM", "testM", {
    description: message,
    fatal: true,
  });
  toast.error(message, {
    position: "top-center",
    closeOnClick: true,
  });
};

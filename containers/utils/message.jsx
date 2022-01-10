import { toast } from "react-toastify";

export const successMessage = (message) => {
  toast.success(message, {
    position: "top-center",
    closeOnClick: true,
  });
};

export const errorMessage = (message) => {
  toast.error(message, {
    position: "top-center",
    closeOnClick: true,
  });
};

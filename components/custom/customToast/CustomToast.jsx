import React from "react";

import { ToastContainer, toast } from "react-toastify";

export const CustomToast = () => {
  return (
    <div>
      <ToastContainer />
      {toast.success("داده ها با موفقیت ثبت شده اند", {
        position: "top-center",
        closeOnClick: true,
      })}
    </div>
  );
};

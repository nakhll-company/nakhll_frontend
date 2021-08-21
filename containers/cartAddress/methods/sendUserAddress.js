import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { toast } from "react-toastify";
// get address of user
export async function sendUserAddress(data) {
    let response = await ApiRegister().apiRequest(
        data,
        "PATCH",
        "/accounting_new/api/invoice/set_address/",
        true,
        ""
    );
    if (response.status === 200) {
        window.location.replace("/cart/payment");
    } else {
        toast.error("خطایی در دریافت داده ها پیش آمده است", {
            position: "top-right",
            closeOnClick: true,
        });
    }
}
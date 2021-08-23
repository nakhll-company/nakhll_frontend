import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { toast } from "react-toastify";
// get address of user
export async function postAddress(data) {
    let response = await ApiRegister().apiRequest(
        data,
        "POST",
        "/logistic/api/address/",
        true,
        ""
    );
    if (response.status === 201) {
        return true;
    } else {
        toast.error("خطایی در دریافت داده ها پیش آمده است", {
            position: "top-right",
            closeOnClick: true,
        });
    }
}
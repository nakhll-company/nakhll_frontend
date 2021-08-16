import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { toast } from "react-toastify";
// get address of user
export async function getAddress(setAddress) {
    let response = await ApiRegister().apiRequest(
        null,
        "POST",
        "/logistic/api/address/",
        true,
        ""
    );
    if (response.status === 200) {
        setAddress(response.data);
    } else {
        toast.error("خطایی در دریافت داده ها پیش آمده است", {
            position: "top-right",
            closeOnClick: true,
        });
    }
}
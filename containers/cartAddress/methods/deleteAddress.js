import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { toast } from "react-toastify";
// get address of user
export async function deleteAddress(id) {
    let response = await ApiRegister().apiRequest(
        null,
        "DELETE",
        `/logistic/api/address/${id}/`,
        true,
        ""
    );
    if (response.status === 200) {
        toast.success("آدرس مورد نظر حذف شد", {
            position: "top-right",
            closeOnClick: true,
        });
    } else {
        toast.error("خطایی در دریافت داده ها پیش آمده است", {
            position: "top-right",
            closeOnClick: true,
        });
    }
}
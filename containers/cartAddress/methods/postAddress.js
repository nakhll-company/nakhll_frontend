import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { toast } from "react-toastify";
// get address of user
export async function getAddress() {
    let response = await ApiRegister().apiRequest(
        null,
        "get",
        "/logistic/api/address/",
        true,
        ""
    );
    if (response.status === 200) {
        toast.success("آدرس مورد نظر با موفقیت اضافه شد", {
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
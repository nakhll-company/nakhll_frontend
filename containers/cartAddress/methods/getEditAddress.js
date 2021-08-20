import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { toast } from "react-toastify";
// get address of user
export async function getEditAddress(id, setEditAddressData) {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/logistic/api/address/${id}/`,
        true,
        ""
    );
    if (response.status === 200) {
        setEditAddressData(response.data);
    } else {
        toast.error("خطایی در دریافت داده ها پیش آمده است", {
            position: "top-right",
            closeOnClick: true,
        });
    }
}
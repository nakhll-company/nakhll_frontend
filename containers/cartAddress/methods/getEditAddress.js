import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { toast } from "react-toastify";
// get address of user
export async function getEditAddress(id, setValue, setEditAddressData) {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/logistic/api/address/${id}/`,
        true,
        ""
    );
    if (response.status === 200) {
        setEditAddressData(response.data);
        setValue("receiver_full_name", response.data.receiver_full_name);
        setValue("state", response.data.state);
        setValue("big_city", response.data.big_city);
        setValue("city", response.data.city);
        setValue("address", response.data.address);
        setValue("zip_code", response.data.zip_code);
        setValue("receiver_mobile_number", response.data.receiver_mobile_number);
    } else {
        toast.error("خطایی در دریافت داده ها پیش آمده است", {
            position: "top-right",
            closeOnClick: true,
        });
    }
}
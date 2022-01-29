import { errorMessage } from "../../containers/utils/message";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// get address of user
export async function getEditAddress(id, setValue, setEditAddressData) {
    try {
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
            errorMessage("خطایی در دریافت داده ها پیش آمده است");
        }
    } catch (error) {
        errorMessage("خطایی در دریافت داده ها پیش آمده است");
    }
}
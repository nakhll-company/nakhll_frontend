import { authhttp } from "../../services/callApi/api";
// get address of user
export async function getEditAddress(id, setValue, setEditAddressData) {
    try {
        let response = await authhttp.get(`/api/v1/logistic/addresses/${id}/`);
        if (response.status === 200) {
            setEditAddressData(response.data);
            setValue("receiver_full_name", response.data.receiver_full_name);
            setValue("state", response.data.state);
            setValue("big_city", response.data.big_city);
            setValue("city", response.data.city);
            setValue("address", response.data.address);
            setValue("zip_code", response.data.zip_code);
            setValue("receiver_mobile_number", response.data.receiver_mobile_number);
        }
    } catch (error) {
        return false;
    }
}
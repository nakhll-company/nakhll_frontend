import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

import { errorMessage } from "../../utils/message";
// get address of user
export async function getAddress(setAddress) {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        "/logistic/api/address/",
        true,
        ""
    );
    if (response.status === 200) {
        setAddress(response.data);
    } else {
        errorMessage("خطایی در دریافت داده ها پیش آمده است");
    }
}
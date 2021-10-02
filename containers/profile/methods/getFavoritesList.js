import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { errorMessage } from "../../utils/message";

export async function getFavoritesList(setList) {

    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        "/api/v1/lists/favotites/",
        true,
        ""
    );

    if (response.status === 200) {
        setList(response.data);
    } else {
        errorMessage("خطایی در دریافت داده ها پیش آمده است");
    }
}
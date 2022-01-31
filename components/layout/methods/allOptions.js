import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export async function allOptions() {
    let response = await ApiRegister().apiRequest(
        null,
        "get",
        "/api/v1/shop_feature/",
        localStorage.getItem("accessToken"), {}
    );
    if (response.status === 200) {
        return response.data;
    }
}
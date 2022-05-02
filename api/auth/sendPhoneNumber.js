import { http } from "../../services/callApi/api";

export async function sendPhoneNumber(data) {
    try {
        let response = await http.post("/api/v1/auth/begin/login_register/", data);
        if (response.status === 201) {
            sessionStorage.setItem("mobile", data.mobile);
            return response.data;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}
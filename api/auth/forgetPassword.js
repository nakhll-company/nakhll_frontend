import { http } from "../../services/callApi/api";

export async function forgetPassword() {
  try {
    const mobile = sessionStorage.getItem("mobile");
    const response = await http.post("/api/v1/auth/begin/forgot_password/", {
      mobile: mobile,
    });
    if (response.status === 201) {
      sessionStorage.setItem("login", JSON.stringify(response.data));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

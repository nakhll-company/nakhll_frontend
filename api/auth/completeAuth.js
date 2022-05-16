import { http } from "../../services/callApi/api";

export async function completeAuth(data) {
  try {
    let response = await http.post("/api/v1/auth/complete/", data);

    if (response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

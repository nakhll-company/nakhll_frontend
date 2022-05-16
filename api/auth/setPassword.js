import { http } from "../../services/callApi/api";
import { setToken } from "../../utils/setToken";

export async function setPassword(data) {
  try {
    let response = await http.post("/api/v1/profile/set_password/", data);
    if (response.status === 200) {
      setToken(response.data);

      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

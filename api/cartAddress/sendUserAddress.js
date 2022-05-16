import { authhttp } from "../../services/callApi/api";
// get address of user
export async function sendUserAddress(data) {
  try {
    let response = await authhttp.patch("/api/v1/cart/set_address/", data);
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
}

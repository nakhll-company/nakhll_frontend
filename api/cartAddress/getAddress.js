import { authhttp } from "../../services/callApi/api";
// get address of user
export async function getAddress(setAddress) {
  try {
    let response = await authhttp.get("/api/v1/logistic/addresses/");
    if (response.status === 200) {
      setAddress(response.data);
    }
  } catch (error) {
    return false;
  }
}

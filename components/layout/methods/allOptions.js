import { authhttp } from "../../../services/callApi/api";

export async function allOptions() {
  let response = await authhttp.get("/api/v1/shop/features/");
  if (response.status === 200) {
    return response.data;
  }
}

import { authhttp } from "../../../services/callApi/api";

export async function landingDetal(id) {
  const response = await authhttp.get(`/api/v1/shop/features/${id}/`);

  if (response.status === 200) {
    return response.data;
  }
}

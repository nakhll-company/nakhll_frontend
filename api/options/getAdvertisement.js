import { authhttp } from "../../services/callApi/api";
// get advertisment
export const getAdvertisement = async (shopSlug) => {
  try {
    const response = await authhttp.get(
      `/api/v1/shop/advertisements/${shopSlug}/`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return false;
  }
};

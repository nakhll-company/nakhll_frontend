import { http } from "../../services/callApi/api";
// city
export const getCities = async (id) => {
  try {
    const response = await http.get(`/api/v1/get-cities/?bigcity_id=${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return false;
  }
};

import { authhttp, http } from "../../services/callApi/api";

export const _ApiGetCategories = async () => {
  const dataUrl = "/api/v1/categories/";
  const response = await http.get(dataUrl);
  return response;
};

export const _ApiGetTags = async (activeHojreh) => {
  const dataUrl = `/api/v1/shop/${activeHojreh}/tags/`;
  const response = await authhttp.get(dataUrl);
  return response;
};

export const _ApiCreateProduct = async (dataForSend, activeHojreh) => {
  try {
    const response = await authhttp.post(
      `/api/v1/shop/${activeHojreh}/products/`,
      dataForSend
    );
    return response;
  } catch (error) {}
};

export const _ApiUpdateProduct = async (dataForSend, activeHojreh, id) => {
  const response = await authhttp.patch(
    `/api/v1/shop/${activeHojreh}/products/${id}/`,
    dataForSend
  );
  return response;
};

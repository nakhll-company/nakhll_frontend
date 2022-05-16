import { authhttp, http } from "../../services/callApi/api";

export const _ApiGetCategories = async () => {
  let dataUrl = "/api/v1/categories/";
  let response = await http.get(dataUrl);
  return response;
};

export const _ApiGetTags = async (activeHojreh) => {
  let dataUrl = `/api/v1/shop/${activeHojreh}/tags/`;
  let response = await authhttp.get(dataUrl);
  return response;
};

export const _ApiCreateProduct = async (dataForSend, activeHojreh) => {
  try {
    let response = await authhttp.post(
      `/api/v1/shop/${activeHojreh}/products/`,
      dataForSend
    );
    return response;
  } catch (error) {}
};

export const _ApiUpdateProduct = async (dataForSend, activeHojreh, id) => {
  let response = await authhttp.patch(
    `/api/v1/shop/${activeHojreh}/products/${id}/`,
    dataForSend
  );
  return response;
};

import { ApiReference } from "../../api/Api";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export const _call_Category = async () => {
  try {
    let response = await ApiRegister().apiRequest(
      null,
      "get",
      `/api/v1/categories/?max_depth=2`,
      false,
      {}
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (e) {}
};

// Get all shops
export const _get_all_shops = async () => {
  let shops = await ApiRegister().apiRequest(
    null,
    "GET",
    ApiReference.allShops,
    false,
    ""
  );

  if (shops.status === 200) {
    return shops.data;
  } else {
    return [];
  }
};

// Function for search
export const _handel_search = (word, shopsName) => {
  let copy_Array = shopsName ? [...shopsName] : [];
  let filterArray = [];
  if (word != "") {
    filterArray = copy_Array.filter((el) => el.title.includes(word));
  }

  return filterArray;
};

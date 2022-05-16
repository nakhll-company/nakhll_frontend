import { authhttp } from "../../services/callApi/api";

export const _getListInvoice = async (
  setDataCart,
  setListInvoice,
  setIsLoadInvoice
) => {
  let response = await authhttp.get("/api/v1/cart/me/");
  let data = await response.data;
  if (response.status === 200) {
    setDataCart(data);
    setListInvoice(data.ordered_items);
    setIsLoadInvoice(false);
  }
};

export const getSendWayList = async (setListItems, setInvoice) => {
  let response = await authhttp.get("/api/v1/cart/me/");
  if (response.status === 200) {
    setListItems(response.data.logistic_details.logistic_units);
    setInvoice(response.data);
  }
};

import { authhttp } from "../../../services/callApi/api";
// city
export const getUserOrders = async (setOrdersList, setLoading) => {
  const response = await authhttp.get(`/api/v1/invoices/`);
  if (response.status === 200) {
    setOrdersList(response.data);
    setLoading(false);
  } else {
    setLoading(false);
  }
};

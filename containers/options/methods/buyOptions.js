import { authhttp } from "../../../services/callApi/api";

export async function buyOptions(id, activeShop) {
  const response = await authhttp.post(`/api/v1/shop/feature-invoices/`, {
    feature: id,
    shop: activeShop,
  });

  if (response.status === 201) {
    const result = await authhttp.get(
      `/api/v1/shop/feature-invoices/${response.data.id}/pay/`
    );

    if (result.status === 200) {
      location.replace(`${result.data.url}`);
    }
  }
}

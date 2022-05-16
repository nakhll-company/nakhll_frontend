import { successMessage } from "../../../utils/toastifyMessage";
import { authhttp } from "../../../services/callApi/api";

export async function deleteItemListLanding(id, activeHojreh, setLandingList) {
  let response = await authhttp.delete(
    `/api/v1/shop/landings/${activeHojreh}/${id}/`
  );

  if (response.status === 204) {
    successMessage("این مورد حذف شد");
    let result = await authhttp.get(`/api/v1/shop/landings/${activeHojreh}/`);

    if (result.status === 200) {
      setLandingList(await result.data);
    }
  }
}

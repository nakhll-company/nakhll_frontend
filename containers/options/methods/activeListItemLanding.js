import { authhttp } from "../../../services/callApi/api";

export async function activeListItemLanding(
  id,
  activeHojreh,
  router,
  setLandingList
) {
  let response = await authhttp.get(
    `/api/v1/shop/landings/${activeHojreh}/${id}/activate_landing/`
  );

  if (response.status === 200) {
    let result = await authhttp.get(`/api/v1/shop/landings/${activeHojreh}/`);

    if (result.status === 200) {
      await setLandingList(result.data);
    }
  }
}

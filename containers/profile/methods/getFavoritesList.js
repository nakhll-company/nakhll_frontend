import { authhttp } from "../../../services/callApi/api";

export async function getFavoritesList(setList, setLoading) {
  const response = await authhttp.get("/api/v1/lists/favorites/all/");

  if (response.status === 200) {
    setList(response.data);
    setLoading(false);
  } else {
    setLoading(false);
  }
}

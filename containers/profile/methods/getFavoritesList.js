import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export async function getFavoritesList(setList, setLoading) {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        "/api/v1/lists/favorites/all/",
        true,
        ""
    );

    if (response.status === 200) {
        setList(response.data);
        setLoading(false);
    } else {
        setLoading(false);
    }
}
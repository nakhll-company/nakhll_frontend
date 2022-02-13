import { successMessage } from "../../../utils/toastifyMessage";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export async function deleteItemListLanding(id, activeHojreh, setLandingList) {
    let response = await ApiRegister().apiRequest(
        null,
        "DELETE",
        `/api/v1/shop_landing/${activeHojreh}/${id}/`,
        true, {}
    );

    if (response.status === 204) {
        successMessage("این مورد حذف شد");
        let result = await ApiRegister().apiRequest(
            null,
            "get",
            `/api/v1/shop_landing/${activeHojreh}/`,
            true, {}
        );

        if (result.status === 200) {
            setLandingList(await result.data);
        }
    }
}
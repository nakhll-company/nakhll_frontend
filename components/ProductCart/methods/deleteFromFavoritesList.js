import { successMessage } from "../../../utils/toastifyMessage";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// api favorites list
export const deleteFromFavoritesList = async (idProduct) => {
    let response = await ApiRegister().apiRequest(
        null,
        "DELETE",
        `/api/v1/lists/favorites/${idProduct}/remove/`,
        true, {}
    );
    if (response.status === 200) {
        successMessage("محصول مورد نظر از لیست علاقه مندی ها حذف شد");
    }
};
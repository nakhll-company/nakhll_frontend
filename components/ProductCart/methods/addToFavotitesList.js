import { successMessage } from "../../../utils/toastifyMessage";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// api favorites list
export const addToFavoritesList = async (idProduct) => {
    let response = await ApiRegister().apiRequest(
        {
            product: idProduct
        },
        "POST",
        `/api/v1/lists/favorites/add/`,
        true, {}
    );
    if (response.status === 201) {
        successMessage("محصول با موفقیت به لیست علاقه مندی های شما اضافه شد");
    }
};
import { successMessage } from "../../../utils/toastifyMessage";
import { authhttp } from "../../../services/callApi/api";
// api favorites list
export const addToFavoritesList = async(idProduct) => {
    let response = await authhttp.post(`/api/v1/lists/favorites/add/`, {
        product: idProduct,
    });
    if (response.status === 201) {
        successMessage("محصول با موفقیت به لیست علاقه مندی های شما اضافه شد");
    }
};
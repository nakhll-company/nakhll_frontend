import { successMessage } from "../../../utils/toastifyMessage";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// api favorites list
export const addToFavoritesList = async (idProduct) => {
    let response = await ApiRegister().apiRequest(
        {
            product: idProduct
        },
        "POST",
        `/api/v1/lists/favotites/add/`,
        true, {}
    );
    if (response.status === 200) {
        successMessage("محصول با موفقیت به لیست علاقه مندی های شما اضافه شد");
    }
};
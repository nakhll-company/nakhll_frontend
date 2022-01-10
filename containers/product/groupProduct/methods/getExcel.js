import { errorMessage } from "../../../../containers/utils/message";
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";

import { hasActiveHojrehGroupProductAddEditPermission } from "./hasActiveHojrehGroupProductAddEditPermission";
const getExcel = async(userInfo, activeHojreh, router) => {
    let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/products/`,
        false, { search: "لباس" }
    );
    // console.log(`response`, response.data.results);
    return response.data.results;

    // let hasPermission = hasActiveHojrehGroupProductAddEditPermission(
    //     userInfo,
    //     activeHojreh
    // );
    // if (hasPermission) {
    //     return router.push(`/fp/product/groupProductEdit/`);
    // } else {
    //     return errorMessage(`.این ویژگی مخصوص کاربران حرفه ای می باشد`);
    // }
};
export default getExcel;
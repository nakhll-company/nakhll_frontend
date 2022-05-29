import {
    authhttp
} from "../../../../services/callApi/api";
import {
    successMessage
} from "../../../../utils/toastifyMessage";

export const callApiDelete = async({
    activeHojreh
}) => {
    let response = await authhttp.delete(
        `/api/v1/shop/${activeHojreh}/settings/image/`
    );
    if (response.status === 204) {
        successMessage("عکس با موفقیت حذف شد");
        return true;
    }
};
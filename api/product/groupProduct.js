import {
    successMessage
} from "../../utils/toastifyMessage";
import {
    authhttp
} from "../../services/callApi/api";

// create groups product
export async function createGroupProducts(event, setShowResult, activeHojreh) {
    event.preventDefault();
    const data = new FormData();
    const zipFile = document.getElementById("productZipFile").files[0];
    const excel = document.getElementById("productExcelUpload").files[0];
    data.append("product-zip-file", zipFile);
    data.append("product-excel-upload", excel);

    successMessage("درحال بارگزاری محصولات...");
    const response = await authhttp.post(
        `/api/v1/product/group-create/${activeHojreh}/`,
        data
    );
    if (response.status === 200) {
        successMessage("محصول با موفقیت بارگزاری شد");
        setShowResult(response.data);
    }
}
// undo create groups product
export async function undoGroupProducts(activeHojreh) {
    const response = await authhttp.get(
        `/api/v1/product/group-undo/${activeHojreh}/`
    );
    if (response.status === 200) {
        successMessage("درخواست لغو بارگزاری با موفقیت ارسال شد");
    }
}
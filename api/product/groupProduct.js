import { successMessage } from "../../utils/toastifyMessage";
import { authhttp } from "../../services/callApi/api";

// create groups product
export async function createGroupProducts(event, setShowResult, activeHojreh) {
    event.preventDefault();
    let data = new FormData();
    let zipFile = document.getElementById("productZipFile").files[0];
    let excel = document.getElementById("productExcelUpload").files[0];
    data.append("product-zip-file", zipFile);
    data.append("product-excel-upload", excel);

    successMessage("درحال بارگزاری محصولات...");
    let response = await authhttp.post(
        `/api/v1/product/group-create/${activeHojreh}/`,
        dataz
    );
    if (response.status === 200) {
        successMessage("محصول با موفقیت بارگزاری شد");
        setShowResult(response.data);
    }
}
// undo create groups product
export async function undoGroupProducts(activeHojreh) {
    let response = await authhttp.get(
        `/api/v1/product/group-undo/${activeHojreh}/`
    );
    if (response.status === 200) {
        successMessage("درخواست لغو بارگزاری با موفقیت ارسال شد");
    }
}
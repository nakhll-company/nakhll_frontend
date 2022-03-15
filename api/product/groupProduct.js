import { successMessage } from "../../utils/toastifyMessage";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";

// create groups product
export async function createGroupProducts(event, setShowResult, activeHojreh) {

    event.preventDefault();
    let data = new FormData();
    let zipFile = document.getElementById("productZipFile").files[0];
    let excel = document.getElementById("productExcelUpload").files[0];
    data.append("product-zip-file", zipFile);
    data.append("product-excel-upload", excel);

    successMessage("درحال بارگزاری محصولات...");
    let response = await ApiRegister().apiRequest(
        data,
        "post",
        `/api/v1/product/group-create/${activeHojreh}/`,
        true, {}
    );
    if (response.status === 200) {
        successMessage("محصول با موفقیت بارگزاری شد");
        setShowResult(response.data);
    }
}
// undo create groups product
export async function undoGroupProducts(activeHojreh) {
    let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/product/group-undo/${activeHojreh}/`,
        true, {}
    );
    if (response.status === 200) {
        successMessage("درخواست لغو بارگزاری با موفقیت ارسال شد");
    }
}
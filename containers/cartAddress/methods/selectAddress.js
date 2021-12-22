import { errorMessage } from "../../../containers/utils/message";
import { sendUserAddress } from "../../../api/cartAddress/sendUserAddress";

export async function selectAddress(invoice_id, router, setLoading) {
    if (document.querySelector("input[type=radio]:checked") !== null) {
        let selectedAddressId = document.querySelector(
            "input[type=radio]:checked"
        ).value;
        let data = { address: selectedAddressId };
        await setLoading(true);
        let response = await sendUserAddress(data, invoice_id);
        await (response === true &&
            router.push(`/cart/send?invoice_id=${invoice_id}`));
        await setLoading(false);
    } else {
        errorMessage("لطفا ادرس خود را وارد نمایید");
    }
}
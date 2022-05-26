import {
    sendUserAddress
} from "../../../api/cartAddress/sendUserAddress";

export async function selectAddress(router, setLoading) {
    if (document.querySelector("input[type=radio]:checked") !== null) {
        const selectedAddressId = document.querySelector(
            "input[type=radio]:checked"
        ).value;
        const data = {
            address: selectedAddressId
        };
        await setLoading(true);
        const response = await sendUserAddress(data);
        await (response === true && router.push(`/cart/send`));
        await setLoading(false);
    }
}
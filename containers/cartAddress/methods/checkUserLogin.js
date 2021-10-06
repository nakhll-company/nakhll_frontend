import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
// get address of user
export async function checkUserLogin(setInvoiceId) {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        "/app/api/v1/get-user-info/",
        true,
        ""
    );
    if (response.status === 200) {
        let result = await ApiRegister().apiRequest(
            null,
            "POST",
            "/accounting_new/api/invoice/",
            true,
            ""
        );
        setInvoiceId(result.data.id);
    } else {
        window.location.replace('https://nakhll.com/accounts/get-phone/');
    }
}
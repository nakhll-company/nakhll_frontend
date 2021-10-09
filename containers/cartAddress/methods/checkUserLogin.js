import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
// get address of user
export async function checkUserLogin() {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        "/app/api/v1/get-user-info/",
        true,
        ""
    );
    if (response.status !== 200) {
        window.location.replace('https://nakhll.com/accounts/get-phone/');
    }
}
import { ApiRegister } from '../../../services/apiRegister/ApiRegister';

export async function landingDetal(id) {

    let response = await ApiRegister().apiRequest(
        null, "get",
        `/api/v1/shop_feature/${id}/`,
        localStorage.getItem("accessToken"), {}
    );

    if (response.status === 200) {
        return response.data;
    }
}
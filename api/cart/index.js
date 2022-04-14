import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export const _getListInvoice = async(
    setDataCart,
    setListInvoice,



    setIsLoadInvoice
) => {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/api/v1/cart/me/`,
        true, {}
    );
    let data = await response.data;
    if (response.status === 200) {
        setDataCart(data);
        setListInvoice(data.ordered_items);



        setIsLoadInvoice(false);
    }
};

export const getSendWayList = async(setListItems, setInvoice) => {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/api/v1/cart/me/`,
        true, {}
    );
    if (response.status === 200) {
        setListItems(response.data.logistic_details.logistic_units);
        setInvoice(response.data);
    }
};
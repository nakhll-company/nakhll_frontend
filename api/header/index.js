import {
    ApiReference
} from "../../api/Api";
import {
    http
} from "../../services/callApi/api";

export const callCategory = async() => {
    try {
        const response = await http.get(`/api/v1/categories/?max_depth=2`);
        if (response.status === 200) {
            return response.data;
        } else {
            return [];
        }
    } catch (e) {}
};

// Get all shops
export const _get_all_shops = async() => {
    const shops = await http.get(ApiReference.allShops);

    if (shops.status === 200) {
        return shops.data;
    } else {
        return [];
    }
};

// Function for search
export const handelSearch = (word, shopsName) => {
    const copy_Array = shopsName ? [...shopsName] : [];
    let filterArray = [];
    if (word != "") {
        filterArray = copy_Array.filter((el) => el.title.includes(word));
    }
    return filterArray;
};
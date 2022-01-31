import { ApiReference } from "../../api/Api";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";


export const _call_Category = async (setCategory) => {
    try {
        let response = await ApiRegister().apiRequest(
            null,
            "get",
            `/api/v1/categories/?max_depth=2`,
            false,
            {}
        );
        if (response.status === 200) {
            setCategory(response.data);
        }
    } catch (e) { }
};

// Get all shops
export const _get_all_shops = async (shopsName, setShopsName) => {
    if (shopsName.length == 0) {
        let shops = await ApiRegister().apiRequest(
            null,
            "GET",
            ApiReference.allShops,
            false,
            ""
        );

        if (shops.status === 200) {
            setShopsName(shops.data);
        }
    }
};


// Function for search
export const _handel_search = (word, setInputSearch, setSearchShops, shopsName) => {
    setInputSearch(word);
    let copy_Array = [...shopsName];
    let filterArray = [];
    if (word != "") {
        filterArray = copy_Array.filter((el) => el.title.includes(word));
    }
    setSearchShops(filterArray);
};
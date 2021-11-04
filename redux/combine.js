// node libraries
import { combineReducers } from "redux";
import Product from "./reducers/product";
import Orders from "./reducers/orders";
import User from "./reducers/user";
import Cart from "./reducers/cart";
import { showCropper } from "./reducers/liveEdit/showCropper";
import { allDataLanding } from "./reducers/liveEdit/allDataLanding";
import { selectIdFormLanding } from "./reducers/liveEdit/selectIdFormLanding";
import { WishList } from "./reducers/WishList/WishList";

// object of All reducers
export const reducerObject = {
    Product,
    Orders,
    User,
    Cart,
    showCropper,
    allDataLanding,
    selectIdFormLanding,
    WishList,
};

/**
 *      DO NOT TOUCH THIS PART IF YOU DON'T KHNOW WHAT TO DO
 */

// combine all reducers with combineReducers function
export const Reducers = combineReducers(reducerObject);
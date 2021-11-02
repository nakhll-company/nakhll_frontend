// node libraries
import { combineReducers } from "redux";
import Product from "./reducers/product";
import Orders from "./reducers/orders";
import User from "./reducers/user";
import Cart from "./reducers/cart";
import liveEdit from "./reducers/liveEdit";

// object of All reducers
export const reducerObject = {
    Product,
    Orders,
    User,
    Cart,
    liveEdit,
};

/**
 *      DO NOT TOUCH THIS PART IF YOU DON'T KHNOW WHAT TO DO
 */

// combine all reducers with combineReducers function
export const Reducers = combineReducers(reducerObject);
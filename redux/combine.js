// node libraries
import { combineReducers } from 'redux';
import Product from './reducers/product';
import Orders from './reducers/orders';

// object of All reducers
export const reducerObject = {
    Product,
    Orders
};

/**
 *      DO NOT TOUCH THIS PART IF YOU DON'T KHNOW WHAT TO DO
 */

// combine all reducers with combineReducers function
export const Reducers = combineReducers(reducerObject);

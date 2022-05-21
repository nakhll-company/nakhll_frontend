// node libraries
import {
    createStore,
    applyMiddleware
} from "redux";
import Logger from "redux-logger";
import Thunk from "redux-thunk";
// combine reducers
import {
    Reducers
} from "./combine";
import {
    composeWithDevTools
} from "redux-devtools-extension";

// this function return sutible middlewares based on app mode
export function createMiddleWare(env = process.env.NODE_ENV) {
    if (env === "production") {
        return [Thunk];
    } else {
        return [Thunk, Logger];
    }
}

const middlewares = createMiddleWare();

// create Store
export const Store = createStore(
    Reducers,
    composeWithDevTools(applyMiddleware(...middlewares))
);
import { REMOVE_SELECT_PRODUCT, SELECT_PRODUCT, SET_PRODUCTS } from "../ActionTypes/ActionTypes";

export const intialState = {
    products: [],
    product: [],
}

export const ProductReducer = (store = intialState, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return { ...store, products: payload }
        case SELECT_PRODUCT:
            return { ...store, product: [payload] }
        case REMOVE_SELECT_PRODUCT:
            return {}
        default:
            return store;
    }
}
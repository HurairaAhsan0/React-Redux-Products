import { SELECT_PRODUCT, SET_PRODUCTS } from "../ActionTypes/ActionTypes"

export const SetProducts = (Products) => {
    return {
        type: SET_PRODUCTS,
        payload: Products,
    }
}
export const SelectProduct = (Product) => {
    return {
        type: SELECT_PRODUCT,
        payload: Product,
    }
}
export const RemoveSelectProduct = () => {
    return {
        type: SELECT_PRODUCT,

    }
}
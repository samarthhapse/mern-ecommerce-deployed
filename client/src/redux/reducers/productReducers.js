import * as actionTypes from '../constants/productConstants.js'
// THESE REDUCERS ARE CALLED FROM 'store.js'
// state => the current state(empty array is inserted because if we does not get anything in return then UI must not give any erpr )
// action => updated value after dispatch
export const getPeoductsReducer=(state={products:[]},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {products:action.payload}
        case actionTypes.GET_PRODUCTS_FAIL:
            return {error:action.payload}
        default :
        return state
    }
}
export const getPeoductsReducertwo=(state={productstwo:[]},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTSTWO_SUCCESS:
            return {productstwo:action.payload}
        case actionTypes.GET_PRODUCTSTWO_FAIL:
            return {error:action.payload}
        default :
        return state
    }
}
export const getPeoductsReducerfour=(state={productsfour:[]},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTSFOUR_SUCCESS:
            return {productsfour:action.payload}
        case actionTypes.GET_PRODUCTSFOUR_FAIL:
            return {error:action.payload}
        default :
        return state
    }
}
export const getPeoductsReducerfive=(state={productsfive:[]},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTSFIVE_SUCCESS:
            return {productsfive:action.payload}
        case actionTypes.GET_PRODUCTSFIVE_FAIL:
            return {error:action.payload}
        default :
        return state
    }
}
// here we have the single product, take it as object
export const getProductDetailsReducer=(state={product:{}},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {loading:true}
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {loading:false, product:action.payload}
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {loading:false, error:action.payload}
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return { product:{} }
        default :
        return state
    }
}
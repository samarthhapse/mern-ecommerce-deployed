import * as actionType from '../constants/cartConstants'
// cartReducer will get called when we dipatch it from actions

// state = it contans the data which i present already in database
// action = it contains the thing which are coming from actions/cartActions.js
export const cartReducer = ( state = { cartItems:[] },action)=>{
    switch(action.type){
        case actionType.ADD_TO_CART:
        // check if item is already existing in cart
        const item = action.payload;
        const exist = state.cartItems.find(product=>product.id===item.id)
        if(exist){
            // if item exists then map the data of item
            return {...state,cartItems: state.cartItems.map(data => data.product === exist.product ? item:data)}
        }
        // and if does not exist , then add it in cartItems
        else{
            return {...state,cartItems:[...state.cartItems,item]}
        }
        case actionType.REMOVE_FROM_CART:
            return {...state,cartItems:state.cartItems.filter(product => product.id !==action.payload)}
            default:
                return state;
    }
}
// this is the file for connection with redux database

import {createStore,combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'; 
import { getPeoductsReducer,getPeoductsReducertwo,getPeoductsReducerfour,getPeoductsReducerfive,getProductDetailsReducer } from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducer'
// creating a reducer
// here getProducts is a key
// getProductsReducer is a reducer
const reducer = combineReducers({
    getProducts:getPeoductsReducer,
    getProductstwo:getPeoductsReducertwo,
    getProductsfour:getPeoductsReducerfour,
    getProductsfive:getPeoductsReducerfive,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer,
})
const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;
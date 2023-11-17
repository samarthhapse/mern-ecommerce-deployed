// THIS  IS THE MAIN PROGRAM IN REDUX FOLDER
// we wil call this getProducts function from client/components/home/home.jsx
// here we will call API and then fetch the data from backend and through dispatch(middleware) function we will call reducer and then we will be able to fetch the data from backend to frontend

// axios is used for API call
// here we are importing the data from database(backend)
// the data which we have stored in database
import axios from 'axios'
// importing all the constant at a time
import * as actionTypes from '../constants/productConstants.js'

const URL='';
// getProducts is the main function
// we are calling it through middleware, middleware => async(dispatch)
// using thunck

export const getProducts = () => async(dispatch) => {
    try{
        // call database with through API
        // we will get a complete object as a response
        // from complete object we will just extract data
        let {data} = await axios.get(`${URL}/products`)
        console.log('response')
        // FROM DISPATCH VALUES WILL GO TO THE REDUCERS
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message})
    }
}
export const getProductstwo = () => async(dispatch) => {
    try{
        // call database with through API
        // we will get a complete object as a response
        // from complete object we will just extract data
        let {data} = await axios.get(`${URL}/productstwo`)
        console.log('response')
        // FROM DISPATCH VALUES WILL GO TO THE REDUCERS
        dispatch({type:actionTypes.GET_PRODUCTSTWO_SUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:actionTypes.GET_PRODUCTSTWO_FAIL,payload:error.message})
    }
}
export const getProductsfour = () => async(dispatch) => {
    try{
        // call database with through API
        // we will get a complete object as a response
        // from complete object we will just extract data
        let {data} = await axios.get(`${URL}/productsfour`)
        console.log('response')
        // FROM DISPATCH VALUES WILL GO TO THE REDUCERS
        dispatch({type:actionTypes.GET_PRODUCTSFOUR_SUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:actionTypes.GET_PRODUCTSFOUR_FAIL,payload:error.message})
    }
}
export const getProductsfive = () => async(dispatch) => {
    try{
        // call database with through API
        // we will get a complete object as a response
        // from complete object we will just extract data
        let {data} = await axios.get(`${URL}/productsfive`)
        console.log('response')
        // FROM DISPATCH VALUES WILL GO TO THE REDUCERS
        dispatch({type:actionTypes.GET_PRODUCTSFIVE_SUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:actionTypes.GET_PRODUCTSFIVE_FAIL,payload:error.message})
    }
}
// using thunk
export const getProductDetails = (id) => async(dispatch) => {
    try{
        // we have the id of the selected product
        // call REDUX database using id of that product
        // FROM DISPATCH VALUES WILL GO TO THE REDUCERS
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST})
        // API call to the product of specific id
        // calling BACKEND from here
        let {data} = await axios.get(`${URL}/product/${id}`)
        // console.log(data);
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_FAIL, payload:error.message})
    }
}
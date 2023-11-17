import axios from 'axios'

const URL='';
export const authenticateSignup = async(data)=>{
    try{
        // we have to POST the data entered by user in the body
        return await axios.post(`${URL}/signup`,data)
    }
    catch(error){
        console.log("Error while calling signup api",error.response.data);
    }
}
export const authenticateLogin = async(data)=>{
    try{
        // we have to POST the data entered by user in the body
        return await axios.post(`${URL}/login`,data)
    }
    catch(error){
        console.log("Error while calling login api",error.response.data);
        // below return statement will send response to frontend in return if error occurs
        return error.response;
    }
}
export const payUsingPaytm = async(data) => {
    try{
        // as we have to post some information from frontend so we will call post api
        let response = await axios.post(`${URL}/payment`,data)
        // we wii get some response from backend , so retu it again to frontend
        return response.data;
    }
    catch(error){
        console.log('Error while calling payment api',error)
    }
}
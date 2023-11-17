// calling it from CustomButtons
import { useState,useContext } from 'react';
import { authenticateSignup,authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import {Dialog,Box,TextField,Typography,Button,styled} from '@mui/material'

// *************************************STYLING********************************************
const Component=styled(Box)`
height:70vh;
width:90vh;
`;

const Image = styled(Box)`
height:78.35%;
width:30%;
background:blue url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
padding:45px 35px;
& > p ,& > h5{
    color:#FFFFFF;
}
`
const Error = styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`
const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:5px 35px;
& > div , & > button , & p{
    margin-top:14px;
}
`
const LoginButton=styled(Button)`
text-transform:none;
background:#FB641B;
color:#FFF;
height:48px;
`

const RequestOTP=styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
box-shadow:0 2px 4px 0px rgb(0 0 0/20%)
`
const Text= styled(Typography)`
font-size: 12px;
color:#878787;
`
const CreateAccount=styled(Typography)`
font-size:14px;
color:#878787;
text-align:center;
font-weight:600;
cursor:pointer
`
// ******************************* useState OBJECTS ***************************************


// function for 'account' useState 
const accountInitialValues = {
    login:{
        view:'login',
        heading:'Login',
        Subheading:'Get access to your Orders , Wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading:'Looks like you are new here',
        Subheading:'Signup with your mobile to get started'
       }
}

// function for 'signup useState'
const signupInitialValues={
    name:'',
    username:'',
    email:'',
    password:'',
    phone:'',
}
const loginInitialValues={
    email:'',
    password:'',
}


// ***************************************************************************************
const LoginDialog=({open,setOpen})=>{
    // below it is a useState which have "account" to store the values and "toggleAccount" is to store the changed values regarding login and signup
    // creating a useState ( "store data in "account", "toggleAccount" is used to store the changing values of "account" )
    // data in "account" will be changing for different states
    // this data is changed using toggleAccount and then stored in account

    // initially open login
    const[account,toggleAccount]=  useState(accountInitialValues.login)
    // now our use state "account" is storing the values of login
    // now the coomplete object 'accountInitialValues' is inside account

    
    // creating useState to store the values entered by user 
    const [signup,setsignup] = useState(signupInitialValues)
    // now the complete object 'accountSignupValues' is inside signup

    const [login,setLogin] = useState(loginInitialValues)
    const [error,setError] = useState(false)
    // NOW TO GET THE VALUES FROM DataProvider which we have imported above
    // now we have setAccount to store the changed value
    const{setAccount}=useContext(DataContext);





    const handleClose=()=>{
        setOpen(false);
        // when you close signup and again click on button you should get login page
        toggleAccount(accountInitialValues.login);
        // when user will login with incorrect credentials we will get to see a red text=>
        // "Please enter valid email OR password"
        // so wen we again click on login we will see i as it is 
        // hence onclose we will set theat useState as false
        setError(false) 
    }

    const toggleSignup=()=>{
        toggleAccount(accountInitialValues.signup)
        // now our use state "account" is storing the values of signup
    }

    //inserting the values entered by user inside the signup useState 
    const onInputChange=(e)=>{
    // if you see in inspect>console this value is getting stored inside event>terget>value  
    // console.log(e.target.value);
    // inserted value should get inserted in actual place 
    // using variable as a key
        setsignup({...signup,[e.target.name]:e.target.value});
        // saved the input changes in 'signup'
        console.log(signup)
    }

    // calling an API onClick of signup button
    // created the service folder for API
    const signupUser = async() => {
        // call backend and save data
        let response = await authenticateSignup(signup);
        // if backend does not respond return function here itself
        if(!response) return;
        // but if we get response then run handleclose
        handleClose();
        // now signup has become body
        // data entered in signup will be stored in response variable
        // inserting the firstname in signup
        // imported the useContext from DataProvider
        // thi setAccount is different from our useState of this file this setAccount is imported from DataProvider
        setAccount(signup.name);
    }
    const onValueChange=(e)=>{
        // first we pass initial value ...login
        // secondly we pass values entered by user
        setLogin({...login,[e.target.name]:e.target.value})
    }
    // below is the function which will login use on clicking the button
    // firstly we will make api call for login
    // here we will cal the api i.e: authenticateLogin and while calling we will pass login details entered by user which are stored in login useState
    const loginUser=async()=>{
         let response = await authenticateLogin(login);
         console.log(response);
         if(response.status===200){
            handleClose();
            // setAccount(response.data.data.username)
            setAccount(response.data.data.name)
         }
         else{
            setError(true)
         } 
    }
    return(
        // accepting open and setOpen as a prop
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxHeight:'unset'}}}>
            <Component>
                <Box style={{display:'flex' , height:'100%'}}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{marginTop:20}}>{account.Subheading}</Typography>
                    </Image>
                    {
                        // when useState is login
                        account.view === 'login' ?
                        <Wrapper>
                            <TextField variant='standard' onChange={(e) => onValueChange(e)} name='email' label='Enter e-mail / mobile no.'/>
                            { error && <Error>Please enter valid email OR password</Error>}
                            <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label='Enter password'/>
                            <Text>By continuing you agree to flipkart's terms of use and privacy policy</Text>
                            <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                            <Typography style={{textAlign:'center'}}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={()=>toggleSignup()}>New to flipkart ? Create an account</CreateAccount>
                        </Wrapper>
                    :    <Wrapper>
                            {/* to fetch the entered values by user using onChange */}
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='name' label='Enter name'/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label='Enter username'/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label='Enter email'/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label='Enter password'/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label='Enter phone'/>
                            <LoginButton onClick={()=>signupUser()}>SignUp</LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    );
}
export default LoginDialog;
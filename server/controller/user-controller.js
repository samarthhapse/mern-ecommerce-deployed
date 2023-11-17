import User from '../model/user-schema.js'
// we get request FORM frontend
// we send response TO frontend
export const userSignUp = async(request,response) => {
    try{
        //to check and send message in frontend if user already exist  
        const exist = await User.findOne({username:request.body.username})
        if (exist){
            return response.status(401).json({message:'username already exist'})
        }
        // to fet the datat from frontend
        const user = request.body;
        // to save the data in DB
        const newUser=new User(user);
        await newUser.save();
        response.status(200).json({message:user});
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}
export const userLogin = async(request,response) => {
    try{
        //to check and send message in frontend if user already exist  
        const email = request.body.email;
        const password = request.body.password;
        let user = await User.findOne({email:email, password:password})
        if (user){
            // return response.status(200).json(`${email} logged in successfully`)
            return response.status(200).json({data:user})
        }
        else{
            return response.status(401).json("Invalid user");
        }
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}
import mongoose, { mongo } from "mongoose";
// if entered value does not match schema,these all resctrictions will give errors in backend 
// user will not get to know where the problem is 

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20,
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})
const user = mongoose.model('user',userSchema);
export default user;
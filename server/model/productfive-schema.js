
// THIS FILE INSERT THE DATA IN MONGO DB

import mongoose, { Schema, mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    // the product of same id should not be inserted again and again
    id:{
        type:String,
        required:true,
        unique:true
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String
});

// product is collection inside mongoDB , 

const Productfive = mongoose.model('productfive',productSchema);

// export default Product;
export default Productfive;
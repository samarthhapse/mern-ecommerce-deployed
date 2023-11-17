// importing all products from database
import { response } from 'express';
import Product from '../model/product-schema.js'
import Producttwo from '../model/producttwo-schema.js'
import Productthree from '../model/productthree-schema.js'
import Productfour from '../model/productfour-schema.js'
import Productfive from '../model/productfive-schema.js';
import Allproduct from '../model/allproduct-schema.js';

export const getProducts=async(request,response)=>{
    try{
        const products=await Product.find({});
        response.status(200).json(products);
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}
export const getProductstwo=async(request,response)=>{
    try{
        const productstwo=await Producttwo.find({});
        response.status(200).json(productstwo);
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}
export const getProductsthree=async(request,response)=>{
    try{
        const productsthree=await Productthree.find({});
        response.status(200).json(productsthree);
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}
export const getProductsfour=async(request,response)=>{
    try{
        const productsfour=await Productfour.find({});
        response.status(200).json(productsfour);
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}
export const getProductsfive=async(request,response)=>{
    try{
        const productsfive=await Productfive.find({});
        response.status(200).json(productsfive);
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}
export const getAllProduct=async(request,response)=>{
    try{
        const productsfour=await Allproduct.find({});
        response.status(200).json(productsfour);
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}
export const getProductById = async(request,response)=>{
    try{
        // we are getting id in the url of request
        // we have to take that id out from url
        const id = request.params.id;
        // storing the product of that id inside product
        // const product = await Product.findOne({'id':id})
        const product = await Allproduct.findOne({'id':id})
        // sending back the response to frontend
        response.status(200).json(product);
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}
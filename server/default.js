// this data will be displayed as default on home page
// before inserting data in DB we need to validate it hence created a file product-schema in folder model 
// import {products} from "./constants/data.js";
import {products} from './constants/data.js';
import { productsfour } from './constants/data.js';
import { productstwo } from './constants/data.js';
import { productsfive } from './constants/data.js';
// import Product from "./model/product-schema.js";
import Product from './model/product-schema.js'
import Producttwo from './model/producttwo-schema.js'
import Productfour from './model/productfour-schema.js';
import Productfive from './model/productfive-schema.js';
import Allproduct from './model/allproduct-schema.js';

const DefaultData = async() => {
    try{
        // inserting all products in AllProduct
        // EXECUTE BELOW THREE COMMANDS ONE BY ONE TO INSERT ALL PRODUCTS OF DIFFERENT SECTIONS IN 'ALLPRODUCTS'
        // await Allproduct.insertMany(products)
        // await Allproduct.insertMany(productstwo)
        await Allproduct.deleteMany({})
        await Allproduct.insertMany(productsfour)
        await Allproduct.insertMany(productsfive)
        await Allproduct.insertMany(products)

        await Product.deleteMany({})
        await Product.insertMany(products);
        // because of below line products two data was going in Product of mongoDB
        // await Product.insertMany(productstwo);
        await Producttwo.deleteMany({})
        await Producttwo.insertMany(productstwo);
        await Productfour.deleteMany({})
        await Productfour.insertMany(productsfour);
        await Productfive.deleteMany({})
        await Productfive.insertMany(productsfive);
        console.log('Data imported successfully')
    }
    catch(error){
        console.log('error while inserting data',error.message);
    }
}

export default DefaultData
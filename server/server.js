// BACKEND FILE

import express from 'express'
// in production we ever push username and password hence we need to hide them
// dotenv is installed to hide username and password in the link of URL in 
import dotenv from 'dotenv'
import { v4 as uuid } from 'uuid';

import Connection from './database/db.js'
// import DefaultData from '../client/src/default.js';
import DefaultData from './default.js';

import Router from './routes/routes.js';
import cors from 'cors'
import bodyParser from 'body-parser'

const app=express();
const PORT= process.env.PORT || 7000;
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD
// const URL = process.env.MONGODB_URI || 'mongodb://samarthhapse97:samarthhapse97@ac-jlq6j7z-shard-00-00.rqwoy0o.mongodb.net:27017,ac-jlq6j7z-shard-00-01.rqwoy0o.mongodb.net:27017,ac-jlq6j7z-shard-00-02.rqwoy0o.mongodb.net:27017/?ssl=true&replicaSet=atlas-iym0wj-shard-0&authSource=admin&retryWrites=true&w=majority'
const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-jlq6j7z-shard-00-00.rqwoy0o.mongodb.net:27017,ac-jlq6j7z-shard-00-01.rqwoy0o.mongodb.net:27017,ac-jlq6j7z-shard-00-02.rqwoy0o.mongodb.net:27017/?ssl=true&replicaSet=atlas-iym0wj-shard-0&authSource=admin&retryWrites=true&w=majority`
// passing data of .env to index.js
Connection(URL);

// for deployent
// if backend is running then run frontend also
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

// to parse data from backend to frontend
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors());
app.use('/',Router);
dotenv.config();
// accessing the data from .env

// passing data of .env to index.js
// Connection(USERNAME,PASSWORD);
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
// inserting data
DefaultData();

export let paymentMerchantKey = process.env.PAYTM_MERCHANT_KEY
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'callback'
paytmParams['EMAIL'] = 'samarthhapse96@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'
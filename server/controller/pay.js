export const Pay =async(request,response)=>{
    try{
        const Express=require('express');
        const app=Express();
        const path = require('path');
        // const param={};
        // response.send('../pay/pay.html');
        app.set('view engine','html') //set the templete engine
        app.set('pay',path.join(__dirname,'pay')); //set the views directory  
        response.sendFile('pay/pay.html', { root: __dirname });
        // response.sendFile('../pay/pay.html');
    }
    catch(error){
        response.status(500).json({error:error.message})
    }
}



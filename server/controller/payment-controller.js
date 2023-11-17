
import PaytmChecksum from "../paytm-20231105T105348Z-001/paytm/PaytmChecksum"
import { paymentMerchantKey,paytmParams } from "../server.js"

export const addPaymentGateway =async(request,response)=>{
    try{
        let paytmCheckSum= await PaytmChecksum.generateSignature(paytmParams,paymentMerchantKey)

        let params = {
            ...paytmParams,'CHECKSUMHASH':paytmCheckSum
        }
        response.status(200).json(params)
    }
    catch(error){
        response.status(500).json({error:error.message})
    }
}

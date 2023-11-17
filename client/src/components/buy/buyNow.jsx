
// const BuyNow = () => {
  
    
//     return (
//         <div>my name</div>
//     )
// }

// export default BuyNow;
// SECOND ONE
const BuyNow = () => {
  
    
    return (
        <>
            {/* added */}
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Payment</title>
            <style
                dangerouslySetInnerHTML={{
                __html:
                    "\n  body{\n    margin: 0px;\n    margin-top: 0px;\n    padding: 0px;\n  }\n  .cont{\n    display: flex;\n    flex-direction:column;\n    align-items:center ;\n    justify-content: center;\n    height: 90.6vh;\n    width: 100vw;\n    background-color:#FFF;\n    /* background-image: url('../static/img/new.png'); */\n    /* filter: invert(1); */\n  }\n  .cont>img{\n    height: 40vh;\n    width: 20vw;\n  }\n  #rzp-button1{\n    margin: 4px auto;\n    display: block;\n    padding: 5px 12px;\n    background: #302d2d;\n    color: white;\n    font-weight: bold;\n    font-size: 0px;\n    border: 2px solid black;\n    border-radius: 9px;\n    cursor: pointer;\n    outline: none;\n  }\n"
                }}
            />
            <div className="cont">
                <img src='https://chart.googleapis.com/chart?chs=141x141&cht=qr&chl=upi%3A%2F%2Fpay%3Fver%3D01%26mode%3D22%26pa%3Drandom%40razorpay%26pn%3DSAMARTHMANOJHAPSE%26tr%3DRZPMxUjDvDcrhg1O9qrv2%26cu%3DINR%26mc%3D0%26qrMedium%3D04%26tn%3DPaymenttoSAMARTHMANOJHAPSE%26am%3D5&choe=UTF-8&chld=L|0' alt="" />
                {/* <button class="btn">Pay</button>  */}
                <div className="container">
                <div className="option">
                    <h3 style={{fontSize:'28px',marginTop:'50px'}}>
                    <em>pay using Razorpay</em>
                    </h3>
                </div>
                </div>
            </div>
            {/* <button id="rzp-button1">Pay</button> */}
</>

    )
}

export default BuyNow;

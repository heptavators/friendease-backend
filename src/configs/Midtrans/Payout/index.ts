import midtransClient from 'midtrans-client';


let Payout = new midtransClient.Iris({
    isProduction : false,
    serverKey : process.env.IRIS_KEY,
});

export default Payout;
import midtransClient from 'midtrans-client';

const Payment = new midtransClient.snap({
    isProduction : false,
    serverKey : process.env.SERVER_KEY,
    clientKey : process.env.CLIENT_KEY
})

export default Payment;
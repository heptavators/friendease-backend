import * as midtransClient from 'midtrans-client';
import dotenv from 'dotenv';

dotenv.config();

const Payment = new midtransClient.Snap({
    isProduction : false,
    serverKey : process.env.SERVER_KEY,
    clientKey : process.env.CLIENT_KEY
})

export default Payment;
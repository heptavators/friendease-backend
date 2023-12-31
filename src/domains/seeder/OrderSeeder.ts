import { v4 as uuidv4 } from 'uuid';
import { OrderModel } from '../model/Order';




export class OrderSeeder {
  async run(){
    const orders = [
    { 
        orderId: "71e08a28-2ce1-4406-99b5-70925b4763d2",
        talentId: "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
        customerId: "a04e5c41-3bce-4d6a-bd04-c51a2d09fbc7",
        name: "Pergi ke event jejepanganz",
        type: "offline",
        price: 150000,
        date: "2023-12-14T16:00:00.000Z",
        start_hour: "01:00 PM",
        end_hour: "03:00 PM",
        total_hour: 2,
        total_amount: 305000,
        order_status: "waiting payment",
        transaction_status: "pending",
        updatedAt: "2023-12-14T12:51:17.535Z",
        createdAt: "2023-12-14T12:51:17.099Z",
        payment_type: null,
        token: "8af45f90-2999-4f17-9016-f636c354834c",
        redirect_url: "https://app.sandbox.midtrans.com/snap/v3/redirection/8af45f90-2999-4f17-9016-f636c354834c",
        transaction_time: null
    },
    { 
      orderId: "dc92ec0c-3e02-4825-bdc4-3bdad0f166f0",
      talentId: "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
      customerId: "a04e5c41-3bce-4d6a-bd04-c51a2d09fbc7",
      name: "ngajarin main gitar",
      type: "offline",
      price: 225000,
      date: "2023-12-14T16:00:00.000Z",
      start_hour: "01:00 PM",
      end_hour: "03:00 PM",
      total_hour: 3,
      total_amount: 230000,
      order_status: "waiting payment",
      transaction_status: "pending",
      updatedAt: "2023-12-14T12:51:17.535Z",
      createdAt: "2023-12-14T12:51:17.099Z",
      payment_type: null,
      token: "8af45f90-2999-4f17-9016-f636c354834c",
      redirect_url: "https://app.sandbox.midtrans.com/snap/v3/redirection/8af45f90-2999-4f17-9016-f636c354834c",
      transaction_time: null
  },
  { 
    orderId: "cc317068-1297-4588-a58a-2ed09d8ccfe6",
    talentId: "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
    customerId: "a04e5c41-3bce-4d6a-bd04-c51a2d09fbc7",
    name: "konsultasi karir jadi musisi",
    type: "offline",
    price: 75000,
    date: "2023-12-14T16:00:00.000Z",
    start_hour: "01:00 PM",
    end_hour: "03:00 PM",
    total_hour: 1,
    total_amount: 80000,
    order_status: "waiting payment",
    transaction_status: "pending",
    updatedAt: "2023-12-14T12:51:17.535Z",
    createdAt: "2023-12-14T12:51:17.099Z",
    payment_type: null,
    token: "8af45f90-2999-4f17-9016-f636c354834c",
    redirect_url: "https://app.sandbox.midtrans.com/snap/v3/redirection/8af45f90-2999-4f17-9016-f636c354834c",
    transaction_time: null
  },
  ];

  await OrderModel.destroy({ where: {} })
  await OrderModel.bulkCreate(orders.map(order => ({...order })));
  }
} 
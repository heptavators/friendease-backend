import { v4 as uuidv4 } from 'uuid';
import bcryptjs from "bcryptjs"
import { NotificationModel } from '../model/Notification';




export class NotificationSeeder {
  async run(){
    const notifications = [
    { 
        id: uuidv4(),
        auth_id: "a04e5c41-3bce-4d6a-bd04-c51a2d09fbc7",
        icon: "https://i.pinimg.com/736x/21/ac/0c/21ac0c84569003bc58102fb6a9a0883a.jpg",
        title: "Yeay! Status Pembayaran Kamu Diterima!",
        body: "Pembayaran Anda sebesar RP. 400.000 sudah diterima, Talent akan segera melakukan follow up",
        status: "READ"
    },
    { 
        id: uuidv4(),
        auth_id: "a04e5c41-3bce-4d6a-bd04-c51a2d09fbc7",
        icon: "https://i.pinimg.com/736x/21/ac/0c/21ac0c84569003bc58102fb6a9a0883a.jpg",
        title: "Waduh, Order Kamu Ditolak Talent!",
        body: "Talent Kopiyama Menolak Order Kamu Nih. Tenang Duit Kamu Aman Sama Kami",
        status: "READ"
    },

    { 
        id: uuidv4(),        
        auth_id: "a04e5c41-3bce-4d6a-bd04-c51a2d09fbc7",
        icon: "https://i.pinimg.com/736x/21/ac/0c/21ac0c84569003bc58102fb6a9a0883a.jpg",
        title: "Jangan Lupa Kasih Rating & Review Ke Talent Yah!",
        body: "Gimana Jalan-jalannya? Ceritakan dong di kolom review",
        status: "UNREAD"

    },
  ];

  await NotificationModel.destroy({ where: {} })
  await NotificationModel.bulkCreate(notifications.map(notification => ({...notification })));



  }
} 

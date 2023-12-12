import { ServiceModel } from '../model/Service';
import { v4 as uuidv4 } from 'uuid';

export class HighlightSeeder {
  async run(){
    const services = [
      { 
        serviceId: "4851ecb9-f8f2-4000-8c89-90d293da95df",
        talentId: "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
        name: "Ngajarin Kamu main gitar",
        type: "ONLINE",
        description: "belum bisa main gitar? sini aku ajarin....",
        price: 75_000
      },
      { 
        serviceId: "ac2c1ac9-8b07-4dfc-b73c-0e49aaf95666",
        talentId: "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
        name: "Pengen Berkarir sebagai Musisi? Boleh....",
        type: "ONLINE",
        description: "Diskusi karir buat kamu yang pengen jadi musisi",
        price: 150_000
      },
      { 
        serviceId: "f8b6620a-a76a-4670-b389-a9236db70426 ",
        talentId: "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
        name: "Nyanyi buat di acara mu? bisa",
        type: "ONLINE",
        description: "biar acara mu jadi meriah, tentunya harus ada musisi",
        price: 1_000_000
      },
  ];

  await ServiceModel.destroy({ where: {} })
  await ServiceModel.bulkCreate(services.map(service => ({...service })));



  }
} 

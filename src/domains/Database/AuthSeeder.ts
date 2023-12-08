import { v4 as uuidv4 } from 'uuid';
import bcryptjs from "bcryptjs"
import { AuthModel } from '../model/Auth';




export class AuthSeeder {
  async run(){
    const auths = [
      { 
      id: uuidv4(),
      fullname: "Farhan Rivaldy", 
      username: "farhanrivaldy",
      email: 'fariv.fariv12@gmail.com',
      password: bcryptjs.hashSync("password123!", 8) ,
      avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
      bio: "Tech Enthusiast | A newbie at everything",
      status: "active",
      role: "CUSTOMER",
      device_token: ""
    },
    { 
      id: uuidv4(),
      fullname: "Admin FriendEase", 
      username: "adminfriendease",
      email: 'admin@friendease.id',
      password: bcryptjs.hashSync("password123!", 8) ,
      avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
      bio: "Tech Enthusiast | A newbie at everything",
      status: "active",
      role: "ADMIN",
      device_token: ""
  },

  { 
    id: uuidv4(),
    fullname: "Kopiyama", 
    username: "kopiyama",
    email: 'kopiyama@gmail.com',
    password: bcryptjs.hashSync("password123!", 8) ,
    avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
    bio: "Tech Enthusiast | A newbie at everything",
    status: "active",
    role: "TALENT",
    device_token: ""
  },
  ];

  await AuthModel.destroy({ where: {} })
  await AuthModel.bulkCreate(auths.map(auth => ({...auth })));



  }
} 

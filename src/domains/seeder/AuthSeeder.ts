import bcryptjs from "bcryptjs"
import { AuthModel } from '../model/Auth';




export class AuthSeeder {
  async run(){
    const auths = [
      { 
      id: "a04e5c41-3bce-4d6a-bd04-c51a2d09fbc7",
      fullname: "Farhan Rivaldy", 
      username: "farhanrivaldy",
      email: 'fariv.fariv12@gmail.com',
      password: bcryptjs.hashSync("password123!", 8) ,
      avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
      bio: "Tech Enthusiast | A newbie at everything",
      status: "active",
      roles: "CUSTOMER",
      device_token: ""
    },
    { 
      id: "80dd592b-fb31-4ffa-81cb-89c1004a6b62",
      fullname: "Admin FriendEase", 
      username: "adminfriendease",
      email: 'admin@friendease.id',
      password: bcryptjs.hashSync("password123!", 8) ,
      avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
      bio: "Tech Enthusiast | A newbie at everything",
      status: "active",
      roles: "ADMIN",
      device_token: ""
  },

  { 
    id: "d1f83072-c6d6-4626-9981-5df048799758",
    fullname: "Kopiyama", 
    username: "kopiyama",
    email: 'kopiyama@gmail.com',
    password: bcryptjs.hashSync("password123!", 8) ,
    avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
    bio: "Tech Enthusiast | A newbie at everything",
    status: "active",
    roles: "TALENT",
    device_token: ""
  },
  ];

  await AuthModel.destroy({ where: {} })
  await AuthModel.bulkCreate(auths.map(auth => ({...auth })));



  }
} 

import { PrismaClient, } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';
import bcryptjs from "bcryptjs"

const prisma = new PrismaClient()



export class UserSeeder {
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
      role: "CUSTOMER"
   },
  ];

    
  for (const authData of auths) {
      await prisma.auth.deleteMany({})
      await prisma.auth.create({ data: authData });
    }

    await prisma.$disconnect()


  }
} 

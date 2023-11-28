import { PrismaClient, Auth } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient()

async function main() {

    const auths: Auth[] = [
        { 
        id: uuidv4(),
        fullname: 'user1', 
        email: 'user1@example.com',
        avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
        bio: "",
        status: "active",
        role: "CUSTOMER"
     },
    ];

      
    for (const authData of auths) {
        await prisma.auth.create({ data: authData });
      }

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
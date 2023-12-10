import bcryptjs from "bcryptjs"
import { AuthModel } from '../model/Auth';




export class AuthSeeder {
  async run(){
    const auths = [
      { 
      authId: "a04e5c41-3bce-4d6a-bd04-c51a2d09fbc7",
      locationId: "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
      fullname: "Farhan Rivaldy", 
      username: "farhanrivaldy",
      email: 'fariv.fariv12@gmail.com',
      password: bcryptjs.hashSync("password123!", 8) ,
      avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
      bio: "Tech Enthusiast | A newbie at everything",
      status: "active",
      roles: "CUSTOMER",
      device_token: "eXSkKORYvcTeeLjwQU_QrF:APA91bE_gjfNHVeSeoyj_t2ybY16fYRXB35lausR-NXiRMKovaj--ijah2hfoTBq4cv5BVMAlwasWENL8Egym8A0I_HkoBN0ksvcLaVXG__biHheAZmLSyVQdakhN1IduUiJyU7U21Qq"
    },
    { 
      authId: "80dd592b-fb31-4ffa-81cb-89c1004a6b62",
      locationId: "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
      fullname: "Admin FriendEase", 
      username: "adminfriendease",
      email: 'admin@friendease.id',
      password: bcryptjs.hashSync("password123!", 8) ,
      avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
      bio: "Tech Enthusiast | A newbie at everything",
      status: "active",
      roles: "ADMIN",
      device_token: "eXSkKORYvcTeeLjwQU_QrF:APA91bE_gjfNHVeSeoyj_t2ybY16fYRXB35lausR-NXiRMKovaj--ijah2hfoTBq4cv5BVMAlwasWENL8Egym8A0I_HkoBN0ksvcLaVXG__biHheAZmLSyVQdakhN1IduUiJyU7U21Qq"
  },

  { 
    authId: "d1f83072-c6d6-4626-9981-5df048799758",
    locationId: "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
    fullname: "Kopiyama", 
    username: "kopiyama",
    email: 'kopiyama@gmail.com',
    password: bcryptjs.hashSync("password123!", 8) ,
    avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
    bio: "Tech Enthusiast | A newbie at everything",
    status: "active",
    roles: "TALENT",
    device_token: "eXSkKORYvcTeeLjwQU_QrF:APA91bE_gjfNHVeSeoyj_t2ybY16fYRXB35lausR-NXiRMKovaj--ijah2hfoTBq4cv5BVMAlwasWENL8Egym8A0I_HkoBN0ksvcLaVXG__biHheAZmLSyVQdakhN1IduUiJyU7U21Qq"
  },
  ];

  await AuthModel.destroy({ where: {} })
  await AuthModel.bulkCreate(auths.map(auth => ({...auth })));



  }
} 

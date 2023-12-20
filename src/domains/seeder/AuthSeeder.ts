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
      phone_number: "089600000000",
      bio: "Tech Enthusiast | A newbie at everything",
      bod: new Date('2002-12-10'),
      gender: "male",
      status: "active",
      roles: "customer",
      device_token: "eXSkKORYvcTeeLjwQU_QrF:APA91bE_gjfNHVeSeoyj_t2ybY16fYRXB35lausR-NXiRMKovaj--ijah2hfoTBq4cv5BVMAlwasWENL8Egym8A0I_HkoBN0ksvcLaVXG__biHheAZmLSyVQdakhN1IduUiJyU7U21Qq",
      user_preferences: "Teman yang bisa diajak bertukar pikiran (open-minded), nyambung dengan saya jika berkomunikasi, bisa saling pengertian dan memahami satu sama lain."
    },
    { 
      authId: "80dd592b-fb31-4ffa-81cb-89c1004a6b62",
      locationId: "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
      fullname: "Admin FriendEase", 
      username: "adminfriendease",
      email: 'admin@friendease.id',
      password: bcryptjs.hashSync("password123!", 8) ,
      avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
      phone_number: "089600000000",
      bio: "Tech Enthusiast | A newbie at everything",
      bod: new Date('2023-09-05'),
      gender: "male",
      status: "active",
      roles: "admin",
      device_token: "eXSkKORYvcTeeLjwQU_QrF:APA91bE_gjfNHVeSeoyj_t2ybY16fYRXB35lausR-NXiRMKovaj--ijah2hfoTBq4cv5BVMAlwasWENL8Egym8A0I_HkoBN0ksvcLaVXG__biHheAZmLSyVQdakhN1IduUiJyU7U21Qq",
      user_preferences: "Teman yang bisa diajak bertukar pikiran (open-minded), nyambung dengan saya jika berkomunikasi, bisa saling pengertian dan memahami satu sama lain."
    },
  { 
    authId: "d1f83072-c6d6-4626-9981-5df048799758",
    locationId: "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
    fullname: "Fujikawa Chiai", 
    username: "fujikawachiai",
    email: 'fujikawachiai@gmail.com',
    password: bcryptjs.hashSync("password123!", 8) ,
    avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
    phone_number: "089600000000",
    bio: "Tech Enthusiast | A newbie at everything",
    bod: new Date('1995-06-06'),
    gender: "female",
    status: "active",
    roles: "talent",
    device_token: "eXSkKORYvcTeeLjwQU_QrF:APA91bE_gjfNHVeSeoyj_t2ybY16fYRXB35lausR-NXiRMKovaj--ijah2hfoTBq4cv5BVMAlwasWENL8Egym8A0I_HkoBN0ksvcLaVXG__biHheAZmLSyVQdakhN1IduUiJyU7U21Qq"
  },
  { 
    authId: "821b35f9-5ee0-425a-ba7a-59ecbc5ffe6e",
    locationId: "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
    fullname: "Raon Lee", 
    username: "raon_lee",
    email: 'raonlee@gmail.com',
    password: bcryptjs.hashSync("password123!", 8) ,
    avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
    phone_number: "089600000000",
    bio: "Tech Enthusiast | A newbie at everything",
    bod: new Date('1991-06-10'),
    status: "active",
    gender: "female",
    roles: "talent",
    device_token: "eXSkKORYvcTeeLjwQU_QrF:APA91bE_gjfNHVeSeoyj_t2ybY16fYRXB35lausR-NXiRMKovaj--ijah2hfoTBq4cv5BVMAlwasWENL8Egym8A0I_HkoBN0ksvcLaVXG__biHheAZmLSyVQdakhN1IduUiJyU7U21Qq",
    user_preferences: "Teman yang bisa diajak bertukar pikiran (open-minded), nyambung dengan saya jika berkomunikasi, bisa saling pengertian dan memahami satu sama lain."
  },
  { 
    authId: "636ba364-904b-4133-9cb6-dbb1185b8611",
    locationId: "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
    fullname: "Aria Ghora Prabono", 
    username: "aria_ghora",
    email: 'ariaghora@gmail.com',
    password: bcryptjs.hashSync("password123!", 8) ,
    avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
    phone_number: "089600000000",
    bio: "Tech Enthusiast | A newbie at everything",
    bod: new Date('1991-09-05'),
    gender: "male",
    status: "active",
    roles: "talent",
    device_token: "eXSkKORYvcTeeLjwQU_QrF:APA91bE_gjfNHVeSeoyj_t2ybY16fYRXB35lausR-NXiRMKovaj--ijah2hfoTBq4cv5BVMAlwasWENL8Egym8A0I_HkoBN0ksvcLaVXG__biHheAZmLSyVQdakhN1IduUiJyU7U21Qq",
    user_preferences: "Teman yang bisa diajak bertukar pikiran (open-minded), nyambung dengan saya jika berkomunikasi, bisa saling pengertian dan memahami satu sama lain."
  },
  { 
    authId: "d720cbef-4f9a-4376-905f-b0dc1a6b3d3d",
    locationId: "d62abf30-cb6f-4690-aee9-a7dd9be70aeb",
    fullname: "Nurvirta Monarizqa", 
    username: "nmonarizqa",
    email: 'nmonarizqa@gmail.com',
    password: bcryptjs.hashSync("password123!", 8) ,
    avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
    phone_number: "089600000000",
    bio: "Tech Enthusiast | A newbie at everything",
    bod: new Date('1991-09-05'),
    gender: "female",
    status: "active",
    roles: "talent",
    device_token: "eXSkKORYvcTeeLjwQU_QrF:APA91bE_gjfNHVeSeoyj_t2ybY16fYRXB35lausR-NXiRMKovaj--ijah2hfoTBq4cv5BVMAlwasWENL8Egym8A0I_HkoBN0ksvcLaVXG__biHheAZmLSyVQdakhN1IduUiJyU7U21Qq",
    user_preferences: "Teman yang bisa diajak bertukar pikiran (open-minded), nyambung dengan saya jika berkomunikasi, bisa saling pengertian dan memahami satu sama lain."
  },

 
  ];

  await AuthModel.destroy({ where: {} })
  await AuthModel.bulkCreate(auths.map(auth => ({...auth })));



  }
} 

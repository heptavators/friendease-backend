"use strict";
var import_client = require("@prisma/client");
var import_uuid = require("uuid");
const prisma = new import_client.PrismaClient();
async function main() {
  const auths = [
    {
      id: (0, import_uuid.v4)(),
      fullname: "Farhan Rivaldy",
      username: "farhanrivaldy",
      email: "fariv.fariv12@gmail.com",
      password: "password123!",
      avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
      bio: "Tech Enthusiast | A newbie at everything",
      status: "active",
      role: "CUSTOMER"
    }
  ];
  for (const authData of auths) {
    await prisma.auth.create({ data: authData });
  }
}
main().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
//# sourceMappingURL=UserSeeder.js.map

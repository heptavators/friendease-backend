"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_client = require("@prisma/client");
var import_uuid = require("uuid");
var import_bcryptjs = __toESM(require("bcryptjs"), 1);
const prisma = new import_client.PrismaClient();
async function main() {
  const auths = [
    {
      id: (0, import_uuid.v4)(),
      fullname: "Farhan Rivaldy",
      username: "farhanrivaldy",
      email: "fariv.fariv12@gmail.com",
      password: import_bcryptjs.default.hashSync("password123!", 8),
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

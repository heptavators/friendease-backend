// import { logger } from "../../helpers/Log/index.ts";
import { UserSeeder } from "./UserSeeder.mjs";
import { ProductSeeder } from "./ProductSeeder.mjs";

const runSeeder = async () => {
    const userSeeder = new UserSeeder();
    const productSeeder = new ProductSeeder()

    await userSeeder.run();
    await productSeeder.run();
    
    console.info("Done Seed Database");
    process.exit(0);
}

runSeeder().catch((error) => {
    console.error("Error Seed Database: " + error.message);
    process.exit(0);
});
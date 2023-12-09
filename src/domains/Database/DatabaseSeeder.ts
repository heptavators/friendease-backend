import { Request, Response } from 'express';
import  Database  from '../../configs/Database';
import { ProductSeeder } from './ProductSeeder';
import { AuthSeeder } from './AuthSeeder';



export async function DatabaseSeeder(req: Request, res: Response) {
  try {
    await Database.sync();
    
    const authSeeder = new AuthSeeder();
    const productSeeder = new ProductSeeder();

    await authSeeder.run();
    await productSeeder.run();

    console.info("success seed database")
    return res.status(200).send({message: "Berhasil seed data"})

  } catch (error: any) {
    console.log("error: " + error.message)
  } 
}
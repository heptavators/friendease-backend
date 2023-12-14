import { Request, Response } from 'express';
import  Database  from '../../configs/Database';
import { ProductSeeder } from './ProductSeeder';
import { LocationSeeder } from './LocationSeeder';
import { AuthSeeder } from './AuthSeeder';
import { NotificationSeeder } from './NotificationSeeder';
import { TalentSeeder } from './TalentSeeder';
import { HighlightSeeder } from './HighlightSeeder';
import { TagSeeder } from './TagSeeder';
import { OrderSeeder } from './OrderSeeder';



export async function DatabaseSeeder(req: Request, res: Response) {
  try {
    await Database.sync();
    
    const productSeeder = new ProductSeeder();
    const locationSeeder = new LocationSeeder();
    const authSeeder = new AuthSeeder();
    const talentSeeder = new TalentSeeder();
    const notificationSeeder = new NotificationSeeder();
    const highlightSeeder = new HighlightSeeder()
    const tagSeeder = new TagSeeder();
    const orderSeeder = new OrderSeeder();

    await productSeeder.run();
    await locationSeeder.run();
    await authSeeder.run();
    await talentSeeder.run();
    await notificationSeeder.run();
    await highlightSeeder.run();
    await tagSeeder.run();
    await orderSeeder.run();

    console.info("success seed database")
    return res.status(200).send({message: "Berhasil seed data"})

  } catch (error: any) {
    console.log("error: " + error.message)
  } 
}
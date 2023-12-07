import express from 'express';
import  Router  from './routes';
import { logger } from './helpers/Log';
import  Database  from './configs/Database';
import { Product } from './domains/model/Product';

import { v4 as uuidv4 } from 'uuid';

try {
  const app = express();
  Database.sync()
  const port = "3000";

  

  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.use("/api", Router)


  app.listen(port, () => {
    logger.info(process.env.SECRET_KEYS)
    logger.info("apps running on port " + port)
  });


} catch (error) {
  logger.error("failed to running apps, error : " + error);
  process.exit(1);
}


async function createProduct(data: any) {
  // ... (Your validation logic here)

  // Sync the model with the database
  await Database.sync();

  // Create product in the database
  const createdProduct = await Product.create(data);
  return createdProduct;
}

// Example usage
createProduct({
  id: uuidv4(),
  name: 'Example Product',
  price: 19.99,
})
  .then((createdProduct) => {
    console.log('Product created:', createdProduct.toJSON());
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

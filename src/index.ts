import express from 'express';
// import  router  from './routes/Auth';
import  product  from './routes/Product';
import { logger } from './helpers/Log';

try {
  const app = express();
  const port = "3000";

  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  // app.use("/api", router)

  app.use("/api", product)


  app.listen(port, () => {
    logger.info(process.env.SECRET_KEYS)
    logger.info("apps running on port " + port)
  });


} catch (error) {
  logger.error("failed to running apps, error : " + error);
  process.exit(1);
}


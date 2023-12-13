import express from 'express';
import  Router  from './routes';
import { logger } from './helpers/Log';
import  Database  from './configs/Database';
import { DatabaseSeeder } from './domains/seeder/DatabaseSeeder';
import timeout from 'connect-timeout';
import {SendNotification} from './utils/Notification';

try {
  const app = express();
  Database.sync({ force: true })
  const port = "3000";

const checkAuthorization = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== 'YourValidToken') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

const payload = { 
  message: {
    token: "token"
  },
  notification : {
     title : "FCM IS COOL !",
     body : "Notification has been received",
     content_available : "true",
     image:"https://i.ytimg.com/vi/iosNuIdQoy8/maxresdefault.jpg"
  }
}


  app.use(timeout('10s'))
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/seed', checkAuthorization, DatabaseSeeder)

  app.use("/api", Router)


  app.listen(port, () => {
    logger.info("apps running on port " + port)
  });

} catch (error: any) {
  logger.error("failed to running apps, error : " + error.message);
  process.exit(1);
}

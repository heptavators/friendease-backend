import admin from 'firebase-admin';
import * as serviceAccount from './key.json'

   
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: "https://hexavator-default-rtdb.asia-southeast1.firebasedatabase.app"
});


const deviceToken = "dmdRjaCiQLenliwPO5mJyD:APA91bHmyrbu35VqUKgzR0FselQzqD5_cO8f3kdxXQBHUrpilJjFHF5ogMNTFl_vNJ9DiXOoTY0QfCCdhLeeKcc8p2ha4uEq7VplzEJfINqbMK3jEQRW_87QCIHheh9PUdjQxS8JVkbJ";

const options: admin.messaging.MessagingOptions = {
  priority: "high"
};


const SendNotification = async (notification: any) => {
  try {
    

  const payload: admin.messaging.MessagingPayload = {
    notification: {
      title: notification.title,
      body: notification.body,
      content_available: "true",
      image: "https://i.pinimg.com/564x/e8/a6/29/e8a6295025285f37aeb1a9ecbd9c642f.jpg"
    }
  };

    await admin.messaging().sendToDevice(deviceToken, payload, options);
    console.log('Notification sent successfully.');
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};

export { SendNotification };

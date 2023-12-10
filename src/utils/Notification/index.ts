import admin from "firebase-admin";

// var serviceAccount = require('./emangboleh-75d45-firebase-adminsdk-7fva3-6ffb27d967.json');

// const firebaseConfig = admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: 'https://emangboleh-75d45-default-rtdb.asia-southeast1.firebasedatabase.app',
//   });
  
  const SendNotification = async (payload: object) => {
    try {
      // await firebaseConfig.messaging().send(payload);
      console.log('Notification sent successfully.');
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };
  
  export { SendNotification };
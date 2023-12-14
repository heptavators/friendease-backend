import * as admin from 'firebase-admin';
import * as serviceAccount from './key.json'

const params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url
}
   
admin.initializeApp({
  credential: admin.credential.cert(params),
})


const deviceToken = "fy_lO84MQ06bbWwVpZ5CeS:APA91bHjrzlPCEe2UtYrAb6juUj4_7NaQY_5RCTcgjmhglYcWNJ6iDUz7WWZXPcq4rxZ_BKtHUHIs40o2eY1K-z96yZzcMFFg-1RsQ7xNGDG1Ivu4LzGVIrXkCRHXh2wXMwKgcEb_6IK";

const payload: admin.messaging.MessagingPayload = {
  notification: {
    title: "FCM IS COOL !",
    body: "Notification has been received",
    content_available: "true",
    image: "https://i.pinimg.com/564x/73/28/ce/7328ce6807d0620039de3fb1a8f855b7.jpg"
  }
};

const options: admin.messaging.MessagingOptions = {
  priority: "high"
};


const SendNotification = async () => {
  try {

    await admin.messaging().sendToDevice(deviceToken, payload, options);
    console.log('Notification sent successfully.');
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};

export { SendNotification };

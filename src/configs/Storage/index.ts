import { Storage } from '@google-cloud/storage';
import path from 'path';

const keyPath = path.resolve(__dirname, 'key.json');

const cloudStorage = new Storage({
    projectId: 'hexavator',
    keyFilename: keyPath
});

export default cloudStorage;
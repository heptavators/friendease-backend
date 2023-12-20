import util from 'util';
import cloudStorage from '../../configs/Storage';
import { BadRequestError } from '../../helpers/Error/BadRequestError';

const { format } = util;

export const UploadFileToGCS = async (file: Express.Multer.File, bucketName: string, fileName: string): Promise<string> => {
    const bucket = cloudStorage.bucket(bucketName);
    const { buffer } = file;
    const blob = bucket.file(fileName);
    const blobStream = blob.createWriteStream({
        resumable: false,
    });


    return new Promise((resolve, reject) => {
        blobStream
            .on('finish', () => {
                const publicUrl = format(
                    `https://storage.cloud.google.com/${bucket.name}/${blob.name}`
                );
                resolve(publicUrl);
            })
            .on('error', (error: any) => {

                reject(
                    new BadRequestError([{ error: 'Media', message: 'Unable to upload image, something went wrong' + error.message }], 400)
                );
            })
            .end(buffer);
    });
};

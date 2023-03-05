import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';



@Injectable({
  providedIn: 'root'
})
export class S3Service {

  constructor() { }

  s3() {
    AWS.config.update({
      credentials: {
        accessKeyId: 'AKIAQLDZX6ITGXD6Q4XW',
        secretAccessKey: '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'
        //  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        //  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
      region: 'us-east-1'
    });
    const s3 = new AWS.S3();
    return s3;

  }
}

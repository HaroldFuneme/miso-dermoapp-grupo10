import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';



@Injectable({
  providedIn: 'root'
})
export class S3Service {

  constructor() { }

  s3(){
    const s3 = new AWS.S3({
      accessKeyId: 'AKIAQLDZX6ITGXD6Q4XW',
      secretAccessKey: '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'
    });
    return s3;
  }
}

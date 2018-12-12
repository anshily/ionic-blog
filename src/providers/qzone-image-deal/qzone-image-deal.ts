import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the QzoneImageDealProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QzoneImageDealProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QzoneImageDealProvider Provider');
  }

  deal(url){
    return ROOT_URL + '/sys/picture?url='+ encodeURIComponent(url);
  }

}

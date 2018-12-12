import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {catchError, concatMap, mergeMap} from "rxjs/operators";
import {of} from "../../../node_modules/rxjs/observable/of";

/*
  Generated class for the SweetNetProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SweetNetProvider implements HttpInterceptor{

  constructor(public http: HttpClient) {
    console.log('Hello SweetNetProvider Provider');
  }

  private handleData(ev: HttpResponse<any> | HttpErrorResponse): Observable<any>{

    return of(ev);

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(req)

    let header = req.headers


    // if (req.url.startsWith('http://b19.photo.store.qq.com') || req.url.startsWith('https://github.com')){
    //
    //   header = header.append('Access-Control-Allow-Origin','*');
    //   header = header.append('Connection','keep-alive');
    //   header = header.append('Cache-Control','no-cache');
    //   header = header.append('DNT','1');
    //   header = header.append('Pragma','no-cache');
    //
    //
    //   console.log(header)
    //
    // }

    const newReq = req.clone({
      url: req.url,
      headers: header
    });

    // req.headers.append('','')



    console.log(newReq)

    return next.handle(newReq).pipe(
      // mergeMap
      concatMap((event: any) => {
        // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
        // if (event instanceof HttpResponse && event.status === 200){
        //   console.log(event)
        //   return this.handleData(event);
        // }
        // 若一切都正常，则后续操作
        console.log(event)
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err)),
    );
    // return undefined;
  }

}

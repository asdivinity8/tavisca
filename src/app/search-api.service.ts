// import { Injectable } from '@angular/core';
// import { Http, Headers, Response } from "@angular/http";
// import 'rxjs/Rx';
// import { Observable } from "rxjs";
// import { Hotel } from './hotel';

// @Injectable({
//   providedIn: 'root'
// })
// export class SearchApiService {
//   search_init_api_url = `https://public-be.oski.io/hotel/v1.0/search/search`;
//   search_status_api_url = `https://public-be.oski.io/hotel/v1.0/search/status`;
//   search_result_api_url = `https://public-be.oski.io/hotel/v1.0/search/results`;
//   constructor(private _http: Http) { }

//   search(): Observable<String>{
//     let headers = new Headers;
//     headers.append("oski-tenantId","Demo");
//     return this._http
//       .post(this.search_init_api_url,headers)
//       .map((r: Response) => r.json().data)
//       .catch((error: any) => {
//           console.error('An friendly error occurred', error);
//           return Observable.throw(error.message || error);
//       });
//   }
  
//   search_status(): Observable<String>{
//     let headers = new Headers;
//     headers.append("oski-tenantId","Demo");
//     return this._http
//       .post(this.search_status_api_url,headers)
//       .map((r: Response) => r.json().data)
//       .catch((error: any) => {
//           console.error('An friendly error occurred', error);
//           return Observable.throw(error.message || error);
//       });
//   }
//   search_results(): Observable<Hotel[]>{
//     let headers = new Headers;
//     headers.append("oski-tenantId","Demo");
//     return this._http
//       .post(this.search_result_api_url,headers)
//       .map((r: Response) => r.json().data)
//       .catch((error: any) => {
//           console.error('An friendly error occurred', error);
//           return Observable.throw(error.message || error);
//       });
//     }    
// }


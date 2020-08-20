import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { worker } from '../component/classes';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
private headers;
  constructor(private httpService :HttpClient) {
    this. headers = new HttpHeaders(); 
    // headers.set('Content-Type', 'application/json');
    this. headers.set('Access-Control-Allow-Origin', "*"    );
     this.headers.set('Access-Control-Allow-Methods','HEAD, GET, POST, PUT, PATCH, DELETE' );
   }

  Login(userName: string, password: string){
   
    return this.httpService.get("http://localhost:38864/api/Login?userID="+userName+"&password="+password) ;
  }
}

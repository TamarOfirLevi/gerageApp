import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../component/classes';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public  options = new HttpHeaders(); 

  baseUrl='http://localhost:38864/api/user';
  constructor(public httpService: HttpClient /*,public httphed :HttpHeaders*/) { }
  getUser(){
    return this.httpService.get("http://localhost:38864/user/all");
}
getUserById(id){
  return this.httpService.get("http://localhost:38864/user/"+id);
}

deleteUserById(id){
  this.httpService.delete("http://localhost:38864/user/"+id).subscribe();
}
}
 



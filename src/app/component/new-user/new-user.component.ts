import { Component, OnInit } from '@angular/core';
import { user } from '../classes';
import { UserServiceService } from 'src/app/services/user-service.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
// import { mishap } from '../classes';
// import { MishapServiceService } from 'src/app/services/mishap-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
  providers : [
    user
 ]
})
export class NewUserComponent implements OnInit {
  public user:user;
  public users:user[];
  constructor(private userserv:UserServiceService) { }
  getUser(){
  this.userserv.getUser().subscribe(result => {
    console.log(result);
    this.users = result as user[];
  })
}
getUserById(id){
  this.userserv.getUserById(id).subscribe(result => {
    console.log(result);
    this.user= result as user;
  })
}
deleteUserById(id){
  this.userserv.deleteUserById(id);
}
  ngOnInit() {
    this.getUser();
    //this.getUserById("265897412");
    //this.deleteUserById("265897412");
    console.log(this.user);
  }

}

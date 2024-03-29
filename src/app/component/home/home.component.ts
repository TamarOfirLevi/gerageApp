import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';
 import { worker } from '../classes';
 //import{Users_Status}from '../classes';
 //import { Customers } from '../classes';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
private userName:string;
private password: string;
private user: worker;
private userType : string; 
private http : HttpClient;
//private users: Customers;/////////////////
public id_worker;
//public mail_adress=this.userName;
  constructor(private loginServise:UserLoginService, private router: Router) { }
// private user:worker;
  ngOnInit() {
    
  }
  Login(){
    
    //var reg=new RegExp('[^@]+@[^\.]+\..+');
    this.loginServise.Login(this.userName, this.password).subscribe(result => {
      
    

      this.id_worker=this.userName;
      //this.mail_adress=this.userName;
   //this.users=result as Customers;
   this.user=result as worker;

/*if(reg.test(this.userName.valueOf.toString()))
{
  this.router.navigate(["/customers"]);
}
else*/

//this.router.navigate(["/employee"]);


/**/
//הוא הולך לעובד ושם נעשה את החלוקה בין מנהל לעובד ע"יSWITCH
//switch ((this.user.Employee_Status.employee_status_code)){
  switch ((this.user.Employee_kind.employee_kind_code)){
case 1:
this.router.navigate(["/manager"]);
break;
case 2:
this.router.navigate(["/employee"]);
break;
/*case 3:
this.router.navigate(["/costemer"]);
break;*/
default:
  this.router.navigate(["/users"]);
}
});


  }

  // submit(){
    // loginService.login().subscribe(result => 
    //   {

    //    this.user = result as worker;
    //    switch (this.user.employee_code){

    //     case 1 : 
    //     case 2 : 
    //    }
    //   }).error( massege=>{

    //   });

    // )
  // }

}

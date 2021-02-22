//import { applyMixins } from "rxjs/internal-compatibility";

export class mishap{

 public     mishap_code : number;
 public car_number : string;
 public  mishap_description : string;
 public  num_of_credits :number;
 public  mishap_urgency :number;
 public   mishap_status_code :Mishap_status;
 public Mishap_status:Mishap_status;
   mishap_img :any;
 //public  Mishap_status :Mishap_status;
public mishap_price : number;

 public insertImg(img: String){
    this.mishap_img=String.toString()
}


}
export class Mishap_status
{
    public mishap_status_code: number;
    public description_of_the_status: string;
}
export class worker{
    public id_worker :number;
    public num_of_credits:number;
    public Employee_kind: Employee_kind;
    public id_user : Users;
    public Users : Users;
  //Employee_kind: any;
   // Employee_Status: Employee_Status;
}

export class Employee_kind
{
    public employee_kind_code: number;
    public description_of_the_kind: string;
}

export class Users 
{
public id_user:string;
public first_name:string;
public last_name :string;
public tel_number :string;
public address :string;
public registertion_date :Date;
public mail_address :string;
public password :string;
}

/*export class Users_Status
{
    user_status_code: number
    description_of_the_status: string
}*/


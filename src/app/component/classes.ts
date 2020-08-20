export class mishap{

 public     mishap_code : number;
 public  mishap_description : string;
 public  num_of_credits :number;
 public  mishap_urgency :number;
 public   mishap_status_code :number;
   mishap_img :any;
 public  Mishap_Status :Mishap_Status;


 public insertImg(img: String){
    this.mishap_img=String.toString()
}


}
export class Mishap_Status
{
    mishap_status_code: number
    description_of_the_status: string
}
export class worker{
    id_worker :string;
    first_name: string;
    last_name: string ;
    tel_number: string;
    adress: string;
    num_of_credits:number;
    password : string;
    Employee_Status: Employee_Status;
}

export class Employee_Status
{
    employee_status_code: number
    description_of_the_status: string
}

export class Customers 
{
id_customers:string;
first_name:string;
last_name :string;
tel_number :string;
adress :string;
car_number :number;
mail_adress :string;
}

/*export class Users_Status
{
    user_status_code: number
    description_of_the_status: string
}*/


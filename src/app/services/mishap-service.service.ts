import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { mishap } from '../component/classes';
// const usermishap = "http://localhost:38864/api/Worker/";
// import { Http, Headers, RequestOptions } from '@angular/http';
///////////// import {HttpClientModule} from '@angular/common/http';
//////////// import {HttpModule} from '@angular/http';

///////////////// imports:[HttpClientModule, HttpModule];

@Injectable({
  providedIn: 'root'
})

export class MishapServiceService {
  public  options = new HttpHeaders(); 


  baseUrl='http://localhost:38864/api/Mishap'
  constructor(private httpService: HttpClient/*,private http: Http*/) { }

  getMishaps(){
   return this.httpService.get("http://localhost:38864/mishap/all")
  }
  getMishapsByCode(code){
return this.httpService.get("http://localhost:38864/mishap/"+code);
  }
  deleteMishapByCode(code){
this.httpService.delete("http://localhost:38864/mishap/"+code).subscribe();
  }

//   getMishaps(){
//     let mishaps:mishap[];

// return this.httpService.get('http://localhost:38864/api/Mishap/GetAllMishaps').subscribe(
//       data => {
//         mishaps = data as mishap[];
//       }
//     );
//   }
  
  insertMishap(mishap :mishap ){
    let data = JSON.stringify(mishap);
    let mishapObj:any = JSON.parse(data);
    mishapObj.Mishap_Status = {mishap_status_code:mishapObj.mishap_status_code, description_of_the_status:""};
    data = JSON.stringify(mishapObj);
    console.log(data);
    let headers = new HttpHeaders(); 
    headers.set('Content-Type', 'application/json');
    headers.set('Access-Control-Allow-Origin', "*"    );
    this.httpService.post('http://localhost:38864/api/Mishap/InsertMishap', mishapObj).subscribe(result => {console.log(result)});

  // let fullUrl = this.baseUrl + 'InsertMishap';
  // let headers = new Headers({ 'Content-Type': 'application/json' });
  // let options = new RequestOptions({ headers: headers });
  // this.http.post(fullUrl, JSON.stringify(mishap), options)
  //     .subscribe(result => {
  //         console.log(result);
  // }, error => console.error(error));
  // }
}

}
///////////////////זה בשביל הchek box
// export class HelloWorld {

//   filter = false;

//   onFilterChange(eve: any) {
//     this.filter = !this.filter;
//   }
// }
// export class MishapServiceService {

//   constructor(private http: HttpClient) { }

//   getMishaps(){
//     let mishaps:mishap[];

// this.http.get(this'http://localhost:24564/api/Mishap/GetAllMishaps').subscribe(
//       res => {
//       this.data=res;
//         mishaps = data as mishap[];
        
//       }
//     );
//   }
//   insertMishap(mishap :mishap ){
//     this.http.post('http://localhost:24564/api/Mishap/GetAllMishaps', mishap).subscribe();
//   }
// }



// export class MishapServiceService {

//   constructor(private httpService: HttpClient) { }

//   getMishaps(){
//     let mishaps:mishap[];

    
//       return this.httpService.get(this.getMishaps + 'api/Employee/Index')  
//           .map((response: Response) => response.json())  
//           .catch(this.errorHandler);  
//   }  
//   }
//   insertMishap(mishap :mishap ){
//     this.httpService.post('http://localhost:24564/api/Mishap/GetAllMishaps', mishap);
//   }
// }


//  et('http://localhost:24564/api/Mishap/GetAllMishaps?userName='+this.username+'&password='+this.password).subscribe(
//    data
//  )
//
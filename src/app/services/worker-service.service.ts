import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { worker } from '../component/classes';
//const userWorker = "http://localhost:38864/api/Worker/";
@Injectable({
  providedIn: 'root'
})
export class WorkerServiceService {
  public  options = new HttpHeaders(); 

  baseUrl='http://localhost:38864/api/Worker';
  constructor(public httpService: HttpClient /*,public httphed :HttpHeaders*/) { }
  getWorkers(){
    return this.httpService.get("http://localhost:38864/worker/all");
}
 getWorkerById(id){
  return this.httpService.get("http://localhost:38864/worker/"+id);
}

deleteWorkerById(id){
  this.httpService.delete("http://localhost:38864/worker/"+id).subscribe();
}
// public getAllmyBasketBooks(idU) {
//   return this.httpService.get(userUrl + `getAllmyBasketBooks?idu=` + idU);
// }
// get(url){
//   return this.httpService.get(`http://localhost:56996/api/${url}`);
// }
// public getWorkers() {
//   return this.httpService.get("http://localhost:38864/api/Worker/GatAllWorker");
// }
//   getWorkers(){
//     let workers:worker[];

//    this. options.set('Content-Type', 'application/json');
//     this.options.set('Access-Control-Allow-Origin', "*"    );
//     const headers = new HttpHeaders({'Access-Control-Allow-Origin': "*" , 'Access-Control-Allow-Methods':'HEAD, GET, POST, PUT, PATCH, DELETE'  })
// this.httpService.get('http://localhost:38864/api/Worker/GatAllWorker').subscribe(
//       data => {
//         workers = data as worker[];
//         // return workers;
//       }
//     );
//     return workers;
//   }
 }



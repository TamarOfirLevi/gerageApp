import { Component, OnInit, Inject } from '@angular/core';
import { worker } from '../classes';
import { WorkerServiceService } from 'src/app/services/worker-service.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-view-employee-points',
  templateUrl: './view-employee-points.component.html',
  styleUrls: ['./view-employee-points.component.scss'],
  providers : [
    worker
 ]
})
export class ViewEmployeePointsComponent implements OnInit {
  //public worker: worker=[];
  public worker: worker;
  public workers: worker[];
  constructor(private workerserv: WorkerServiceService) {  
    // constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private workerserv: WorkerServiceService/**/) {    
    }
//     saveInLocal(key: string, val: string): void {
//         console.log('recieved= key:' + key + 'value:' + val);
//         this.storage.set(key, val);
//         this.workers[key]= this.storage.get(key);
//        }
getWorkers(){
    this.workerserv.getWorkers().subscribe(result => {
      console.log(result);
      this.workers = result as worker[];
    })
  }
    getWorkerById(id){
      this.workerserv.getWorkerById(id).subscribe(result => {
        console.log(result);
        this.worker = result as worker;
      })
    }
    deleteWorkerById(id){
      this.workerserv.deleteWorkerById(id);
    }
    /*.subscribe(
      data => {
        workers = data as worker[];
      }
    )*/
// getWorkers(){
//      this.workerserv.getWorkers();
//   }
// getFromLocal(key: string): void {
//     console.log('recieved= key:' + key);
//     this.workers[key]= this.storage.get(key);
//     console.log(this.workers);
//    }
      // ngOnInit() {
      //  console.log(this);
      // }
      
//      this.worker=new worker();
     

  ngOnInit() {
   //this.workers= this.workerserv.getWorkers();
    this.getWorkers();
    //this.getWorkerById("206756743");
    //this.deleteWorkerById("237641478");
    console.log(this.worker);
  }
  // ngOnInit() {
  //   this.workers= this.workerserv.getWorkers();
  //    // console.log(this.worker);
  //  }

}

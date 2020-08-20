import { Component, OnInit } from '@angular/core';
import { worker } from '../classes';
import { WorkerServiceService } from 'src/app/services/worker-service.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-to-manage',
  templateUrl: './to-manage.component.html',
  styleUrls: ['./to-manage.component.scss'],
  providers : [
    worker
 ]
})
export class ToManageComponent implements OnInit {
  public worker: worker;
  public workers: worker[];
  constructor(private workerserv: WorkerServiceService) { }
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
  ngOnInit() {
    this.getWorkers();
    //this.getWorkerById("206756743");
    //this.deleteWorkerById("237641478");
    console.log(this.worker);
  }

}

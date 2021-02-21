import { Component, OnInit } from '@angular/core';
import { mishap } from '../classes';
import {MishapServiceService } from 'src/app/services/mishap-service.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-viewing-mishaps-status',
  templateUrl: './viewing-mishaps-status.component.html',
  styleUrls: ['./viewing-mishaps-status.component.scss'],
  providers : [
    mishap
 ]
})
export class ViewingMishapsStatusComponent implements OnInit {
public mishap:mishap;
public mishaps:mishap[];
  constructor(private mishapserv: MishapServiceService) { 
      // constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private workerserv: WorkerServiceService/**/) {    
  }
  //     saveInLocal(key: string, val: string): void {
//         console.log('recieved= key:' + key + 'value:' + val);
//         this.storage.set(key, val);
//         this.workers[key]= this.storage.get(key);
//        }
getMishaps(){
  this.mishapserv.getMishaps().subscribe(result => {
    console.log(result);
    this.mishaps = result as mishap[];
  })
}
getMishapsByCode(code){
  this.mishapserv.getMishapsByCode(code).subscribe(result => {
    console.log(result);
    this.mishap = result as mishap;
  })
}
deleteMishapByCode(code){
  this.mishapserv.deleteMishapByCode(code);
}
/*.subscribe(
  data => {
    workers = data as worker[];
  }
)*/
  ngOnInit() {
    //this.workers= this.workerserv.getWorkers();
    this.getMishaps();
    //this.getMishapsByCode("22");
    // this.deleteMishapByCode("10");טוב 
    console.log(this.mishap);
  }
  

}

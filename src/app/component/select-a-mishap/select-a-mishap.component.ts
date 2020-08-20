import { Component, OnInit } from '@angular/core';
import {MishapServiceService } from 'src/app/services/mishap-service.service';
import { mishap } from '../classes';
// import {
// }
@Component({
  selector: 'app-select-a-mishap',
  templateUrl: './select-a-mishap.component.html',
  styleUrls: ['./select-a-mishap.component.scss'],
  providers : [
    mishap
 ]
})
export class SelectAMishapComponent implements OnInit {
  public mishap:mishap;
  public mishaps:mishap[];
    constructor(private mishapserv: MishapServiceService) { 
        // constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private workerserv: WorkerServiceService/**/) {    
    }
    
  getMishaps(){
    this.mishapserv.getMishaps().subscribe(result => {
      // console.log(result);
      this.mishaps = result as mishap[];
    })
  }


  ngOnInit() {
    this.getMishaps();
  }

}

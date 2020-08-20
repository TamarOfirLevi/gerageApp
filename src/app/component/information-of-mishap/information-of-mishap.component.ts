import { Component, OnInit, Input  } from '@angular/core';
import { mishap } from '../classes';
import { MishapServiceService } from 'src/app/services/mishap-service.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-information-of-mishap',
  templateUrl: './information-of-mishap.component.html',
  styleUrls: ['./information-of-mishap.component.scss'],
  providers : [
    mishap
 ]
})
export class InformationOfMishapComponent implements OnInit {
  // public mishap:mishap; 
    public mishaps:mishap[];
  @Input() 
  mishap: mishap;
 
  constructor(private mishapserv: MishapServiceService) { }
  // getMishapsByCode(code){
  //   this.mishapserv.getMishapsByCode(code).subscribe(result => {
  //     console.log(result);
  //     this.mishap = result as mishap;
  //   })
  // }
  ngOnInit() {
    //  this.getMishapsByCode("22");
        console.log(this.mishap);
  }

}

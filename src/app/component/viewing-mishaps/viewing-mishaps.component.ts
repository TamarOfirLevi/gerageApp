import { Component, OnInit } from '@angular/core';
import { mishap } from '../classes';
import {MishapServiceService } from 'src/app/services/mishap-service.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-viewing-mishaps',
  templateUrl: './viewing-mishaps.component.html',
  styleUrls: ['./viewing-mishaps.component.scss'],
  providers : [
    mishap
 ]
})
export class ViewingMishapsComponent implements OnInit {
  public mishap:mishap;
  public mishaps:mishap[];


  constructor( private mishapserv: MishapServiceService) { }
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

  
  ngOnInit() {
    this.getMishaps();
    console.log(this.mishap);
  }

}

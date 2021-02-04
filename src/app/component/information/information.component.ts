import { Component, OnInit,Input } from '@angular/core';
import { mishap } from '../classes';
import { MishapServiceService } from 'src/app/services/mishap-service.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  providers : [
    mishap
 ]
})
export class InformationComponent implements OnInit {
  public mishaps:mishap[];
 @Input() 
  mishap: mishap;
  constructor(private mishapserv: MishapServiceService) { }
 
  ngOnInit() {
    
    console.log(this.mishap);
    
  }

}

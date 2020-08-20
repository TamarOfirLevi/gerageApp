import { Component, OnInit,Input } from '@angular/core';
import { mishap } from '../classes';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
 @Input() 
  mishap: mishap;
  constructor() { }
 
  ngOnInit() {
    console.log(mishap);
    
  }

}

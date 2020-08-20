import { Component, OnInit, Input } from '@angular/core';
import { mishap } from '../classes';

@Component({
  selector: 'app-mishap',
  templateUrl: './mishap.component.html',
  styleUrls: ['./mishap.component.scss']
})
export class MishapComponent implements OnInit {
  @Input() 
  mishap: mishap;
  constructor() { }

  ngOnInit() {
    console.log(mishap);
  }

}

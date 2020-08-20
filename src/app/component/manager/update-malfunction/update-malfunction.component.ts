import { Component, OnInit } from '@angular/core';
import { mishap } from '../../classes';
import { MishapServiceService } from 'src/app/services/mishap-service.service';

@Component({
  selector: 'app-update-malfunction',
  templateUrl: './update-malfunction.component.html',
  styleUrls: ['./update-malfunction.component.scss']
})
export class UpdateMalfunctionComponent implements OnInit {
public mishap: mishap;
  constructor( private mishapserv: MishapServiceService) { }


  saveMishap(){
this.mishapserv.insertMishap(this.mishap);
  }
  ngOnInit() {
  }

}

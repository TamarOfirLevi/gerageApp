import { Component, OnInit } from '@angular/core';
import { worker } from '../classes';
import { PointsService } from '../../services/points.service';
import { ActivatedRoute, Router } from '@angular/router';
import{HomeComponent}from'../home/home.component';
import { WorkerServiceService } from 'src/app/services/worker-service.service';
@Component({
  selector: 'app-view-my-points',
  templateUrl: './view-my-points.component.html',
  styleUrls: ['./view-my-points.component.scss'],
  providers : [
    worker
 ]
})
export class ViewMyPointsComponent implements OnInit {
//points:any = [];
public worker: worker;
public workers: worker[]; 
id_worker=HomeComponent.prototype.id_worker;
  constructor(private workerserv: WorkerServiceService/*public serv:PointsService, private route: ActivatedRoute, private router: Router*/) { }

  getWorkerById(id){
    this.workerserv.getWorkerById(id).subscribe(result => {
      console.log(result);
      this.worker = result as worker;
    })
  }
  ngOnInit() {
     this.getWorkerById(this.id_worker);
  }
  // getPoints(){
  //   this.points=[];
  //   this.serv.getPoints().subscribe((data:{}=>
  //     console.log(data);
  //     this.points=data;
  //     ))
  // }
}

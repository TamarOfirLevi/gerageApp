import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
// var module = .module('myApp', []);

export class StartComponent implements OnInit {

  constructor() { }
  
  // module.controller('TimeCtrl', function($scope, $interval) {
  //   var tick = function() {
  //     $scope.clock = Date.now();
  //   }
  //   tick();
  //   $interval(tick, 1000);
  // });
  ngOnInit() {
  }

}

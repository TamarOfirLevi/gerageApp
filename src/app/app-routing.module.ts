import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
// import { ManagerComponent } from './manager/manager.component';
// import { UpdateMalfunctionComponent } from './manager/update-malfunction/update-malfunction.component';
// import { ViewEmployeePointsComponent } from './manager/view-employee-points/view-employee-points.component';
// import { ViewingFaultModeComponent } from './manager/viewing-fault-mode/viewing-fault-mode.component';
// import { EmployeeComponent } from './employee/employee.component';
// import { WatchingFailuresComponent } from './employee/watching-failures/watching-failures.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { mishap } from './component/classes';
const routes: Routes = [
  // {path:'',component: AppComponent },
  {
    // path: '', component: ManagerComponent, children: [
    //   { path: ':id/update-malfunction', component: UpdateMalfunctionComponent },
    //   { path: ':id/view-employee-points', component: ViewEmployeePointsComponent },
    //   { path: ':id/viewing-fault-mode', component: ViewingFaultModeComponent },
    // ]
  },

  // {
  //   path: 'employee', component: EmployeeComponent, children: [
  //     { path: ':id/watching-failures', component: WatchingFailuresComponent },
  //   ]
  // },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

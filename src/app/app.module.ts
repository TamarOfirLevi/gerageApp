import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { FormsModule } from '@angular/forms';
import {HomeComponent} from './component/home/home.component';
import {EmployeeComponent} from './component/employee/employee.component';
import {ManagerComponent} from './component/manager/manager.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
// import { ServeComponent } from './serve/serve.component';
import { UpdateMalfunctionComponent } from './component/manager/update-malfunction/update-malfunction.component';
import { mishap } from './component/classes';
import { worker } from './component/classes';
// import { ViewEmployeePointsComponent } from './component/manager/view-employee-points/view-employee-points.component';
import { NetanelComponent } from './component/netanel/netanel.component';
import { ViewEmployeePointsComponent } from './component/view-employee-points/view-employee-points.component';
import { UpdateMishapComponent } from './component/update-mishap/update-mishap.component';
import { ViewingMishapsStatusComponent } from './component/viewing-mishaps-status/viewing-mishaps-status.component';
import { InformationOfMishapComponent } from './component/information-of-mishap/information-of-mishap.component';
import { ViewingMishapsComponent } from './component/viewing-mishaps/viewing-mishaps.component';
import { SelectAMishapComponent } from './component/select-a-mishap/select-a-mishap.component';
import { ViewMyPointsComponent } from './component/view-my-points/view-my-points.component';
import { ConvertPointsComponent } from './component/convert-points/convert-points.component';


import { StorageServiceModule} from 'angular-webstorage-service';
import { MishapComponent } from './component/mishap/mishap.component';
import { InformationComponent } from './component/information/information.component';
import { ToManageComponent } from './component/to-manage/to-manage.component';
import { StartComponent } from './component/start/start.component';
import { NewUserComponent } from './component/new-user/new-user.component';
import { CustomersComponent } from './customers/customers.component';


///////////////////// import { Http, Headers, RequestOptions } from '@angular/http';
// import { FirstNameComponent } from './first-name/first-name.component';
// import { PasswordComponent } from './password/password.component';
// import { EnterComponent } from './enter/enter.component';
// import { UpdateMalfunctionComponent } from './update-malfunction/update-malfunction.component';
// import { ViewEmployeePointsComponent } from './view-employee-points/view-employee-points.component';
// import { ManagerComponent } from './manager/manager.component';
// import { ViewingFaultModeComponent } from './manager/viewing-fault-mode/viewing-fault-mode.component';
// import { EmployeeComponent } from './employee/employee.component';
// import { WatchingFailuresComponent } from './employee/watching-failures/watching-failures.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HomeComponent } from './component/home/home.component';
// import { GhComponent } from './component/gh/gh.component';

const AppRoutes: Routes =[
  {path:'',component:HomeComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'customers',component:CustomersComponent},
  {path:'viewing-mishaps',component:ViewingMishapsComponent},
  {path:'select-a-mishap',component:SelectAMishapComponent},
  {path:'view-my-points',component:ViewMyPointsComponent,
  data: { title: 'Points List' }},
  {path:'convert-points',component:ConvertPointsComponent},
  {path:'netanel',component:NetanelComponent},
  {path:'update-mishap',component:UpdateMishapComponent},
  {path:'new-user',component:NewUserComponent},
  {path:'to-manage',component:ToManageComponent},
  {path:'viewing-mishaps-status',component:ViewingMishapsStatusComponent},
  {path:'information',component:InformationComponent},
  {path:'view-employee-points',component: ViewEmployeePointsComponent },
  {path:'start',component:StartComponent},
  // {path:'view-employee-points',component:ViewEmployeePointsComponent},
  {path:'information-of-mishap',component:InformationOfMishapComponent},
  {path:'manager',component:ManagerComponent ,children:[
    {path:'update-malfunction',component:UpdateMalfunctionComponent},
    
  ]}
]
// {
//   path: 'product-details/:id',
//   component: ProductDetailComponent,
//   data: { title: 'Product Details' }
// },
// {
//   path: 'product-add',
//   component: ProductAddComponent,
//   data: { title: 'Product Add' }
// },
// {
//   path: 'product-edit/:id',
//   component: ProductEditComponent,
//   data: { title: 'Product Edit' }
// },
// { path: '',
//   redirectTo: '/products',
//   pathMatch: 'full'
// }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    ManagerComponent,
    NavbarComponent,
    // ServeComponent,
    UpdateMalfunctionComponent,
    ViewEmployeePointsComponent ,
    NetanelComponent,
    UpdateMishapComponent,
    ViewingMishapsStatusComponent,
    InformationOfMishapComponent,
    ViewingMishapsComponent,
    SelectAMishapComponent,
    ViewMyPointsComponent,
    ConvertPointsComponent,
    MishapComponent,
    InformationComponent,
    ToManageComponent,
    StartComponent,
    NewUserComponent,
    CustomersComponent,
 
  

    
    // FirstNameComponent,
    // PasswordComponent,
    // EnterComponent,
    // UpdateMalfunctionComponent,
    // ViewEmployeePointsComponent,
    // ManagerComponent,
    // ViewingFaultModeComponent,
    // EmployeeComponent,
    // WatchingFailuresComponent,
    // PageNotFoundComponent,
    // HomeComponent,
    // GhComponent
  ],

  imports: [
    BrowserModule, 
     HttpClientModule,
     StorageServiceModule,
    RouterModule.forRoot(AppRoutes),
        FormsModule
    // AppRoutingModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

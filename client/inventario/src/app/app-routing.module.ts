import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LintenRefrescoComponent} from './component/linten-refresco/linten-refresco.component'
import {FormRefrescoComponent} from './component/form-refresco/form-refresco.component'
import { LoginComponent } from './component/login/login.component';
import { ReportComponent} from './component/report/report.component'

const routes: Routes = [

{
  path:'',
  redirectTo: '/login',
  pathMatch:'full'
},
{
  path:'inv',
  component:LintenRefrescoComponent
},
{
  path:'form',
  component: FormRefrescoComponent
},
{
  path:'login',
  component: LoginComponent
},
{
path:'report',
component:ReportComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

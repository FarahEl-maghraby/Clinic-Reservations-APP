import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './start/start.component';
import {ReserveComponent} from './reserve/reserve.component'
import {AdminComponent} from './admin/admin.component'
import{ClinicComponent} from './clinic/clinic.component'
import{ClinicRequestsComponent} from './clinic-requests/clinic-requests.component'
import {DetalisComponent} from './detalis/detalis.component'



const routes: Routes = [
  {path:'patient',component:StartComponent},
  {path:'reserve' , component:ReserveComponent},
  {path:'admin' , component:AdminComponent},
  {path:'' , component:ClinicComponent},
  {path:'clinicadmin', component:ClinicRequestsComponent},
  {path:'edit/:id',component:DetalisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

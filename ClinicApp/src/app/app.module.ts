import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { ReserveComponent } from './reserve/reserve.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ClinicComponent } from './clinic/clinic.component';
import { ClinicRequestsComponent } from './clinic-requests/clinic-requests.component';
import { DetalisComponent } from './detalis/detalis.component'
import { RegisterService } from './register.service';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ReserveComponent,
    AdminComponent,
    ClinicComponent,
    ClinicRequestsComponent,
    DetalisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

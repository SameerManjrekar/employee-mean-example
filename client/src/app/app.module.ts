import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule, DatePipe } from '@angular/common';


import { AppComponent } from './app.component';
import { EmployeeService } from './services/employee.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { AppRoutingModule } from './app.routing.module';
import { EmployeeComponent } from './components/employee/employee.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { GetEmployeesComponent } from './components/get-employees/get-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeComponent,
    GetEmployeesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    FlashMessagesModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

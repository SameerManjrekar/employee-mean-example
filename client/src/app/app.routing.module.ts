import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'viewemployee/:id', component: ViewEmployeeComponent },
  { path: 'updateemployee/:id', component: UpdateEmployeeComponent },
  { path: '**', component: AppComponent }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    bootstrap: [],
    providers: [],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
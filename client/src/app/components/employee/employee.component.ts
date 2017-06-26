import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

//import { FlashMessagesService } from 'angular2-flash-messages';
import { Employee } from '../../Models/IEmployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  employee: Employee;

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    return this.employeeService.getAllEmployees().subscribe(data => {
      if(!data.success) {
        // this.flashMessagesService.show('Something went wrong', { cssClass:'alert-danger', timeout: 3000}); 
      } else {
        this.employees = data.message;
        console.log(this.employees);
        // this.flashMessagesService.show('Employees returned successful', { cssClass:'alert-success', timeout: 3000}); 
      }
    });
  }

}
